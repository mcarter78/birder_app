function EntriesController($scope, $http, $q){
  $scope.data = [];
  $scope.bird = {};
  $scope.currentUser = JSON.parse(window.localStorage.currentUser);
  $scope.bird.userId = $scope.currentUser.id;
  console.log($scope.bird.userId);
  $scope.getAll = function() {
    $http.get('/api/birds')
      .then(function(res) {
        res.data.forEach(function(bird) {
          $scope.data.push(bird.commonName);
        });
      });
  };
  $scope.getBird = function() {
    console.log('getBird called');
    $scope.bird.name = $scope.selection;
    $http.get('/api/birds')
      .then(function(res) {
        res.data.forEach(function(bird) {
          if (bird.commonName === $scope.selection) {
            $scope.bird.id = bird.id;
            $scope.matchBird(bird);
          }
        });
      });
      $scope.matchBird = function (bird) {
        $http.post('/getBirdImage', bird)
        .then(function(images) {
          console.log(images.data);
          // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
          var roll = Math.floor(Math.random() * (images.data.length - 0));
          var rollImage = images.data[roll];
          $scope.bird.picture = "https://farm" + rollImage.farm + ".staticflickr.com/" + rollImage.server +
                                "/" + rollImage.id + "_" + rollImage.secret + "_m.jpg";
        });
      };
  };
  $scope.addEntry = function() {
    $http.post('/api/users/' + $scope.bird.userId + "/entries", $scope.bird)
      .then(function(entry) {
        console.log(entry);
      });
  };
  $scope.getAll();
}
