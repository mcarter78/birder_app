function EntriesController($scope, $http){
  $scope.data = [];
  $scope.getAll = function() {
    $http.get('/api/birds')
      .then(function(res) {
        res.data.forEach(function(bird) {
          $scope.data.push(bird.commonName);
        });
        console.log($scope.data);
      });
  };
  $scope.getAll();
}
