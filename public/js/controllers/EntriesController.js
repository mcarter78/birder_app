function EntriesController($scope, $http, $q, uiGmapGoogleMapApi){
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
            // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
            if(images.data.length === 0) {
              $scope.bird.picture = '/img/no-image.svg';
            } else {
              var roll = Math.floor(Math.random() * (images.data.length - 0));
              var rollImage = images.data[roll];
              $scope.bird.picture = "https://farm" + rollImage.farm + ".staticflickr.com/" + rollImage.server +
              "/" + rollImage.id + "_" + rollImage.secret + "_m.jpg";
            }
          });
      };
  };
  $scope.addEntry = function() {
    $http.post('/api/users/' + $scope.bird.userId + "/entries", $scope.bird)
      .then(function(entry) {
        console.log(entry);
        $scope.bird = {};
        window.location.href = '/profile';
      });
  };
  $scope.loadMap = function() {
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = {
        center: { latitude: 45, longitude: -73 },
        zoom: 10
       };
    });
  };
  $scope.marker = {
    id: 0,
    options:{ draggable:true },
    coords: { latitude: 45, longitude: -73 },
   };
  $scope.searchbox = {
    events: {
      places_changed : function (searchbox) {
                var place = searchbox.getPlaces();
                console.log(place[0]);
                $scope.bird.city = place[0].formatted_address;
                $scope.map = {
                    center:{
                        latitude:place[0].geometry.location.lat(),
                        longitude:place[0].geometry.location.lng()
                    },
                    zoom: 10
                };
                $scope.marker = {
                    id:0,
                    options:{ draggable:true },
                    coords:{
                        latitude:place[0].geometry.location.lat(),
                        longitude:place[0].geometry.location.lng()
                    }
                };
          }
    },
    position: 'top-right'
  };
  $scope.getAll();
}
