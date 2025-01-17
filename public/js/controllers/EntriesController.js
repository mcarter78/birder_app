function EntriesController($scope, $http, $q, uiGmapGoogleMapApi, $state, $stateParams){
  $scope.data = [];
  $scope.bird = {};
  $scope.entry = {};
  $scope.updatedEntry = {};
  $scope.currentUser = JSON.parse(window.localStorage.currentUser);
  $scope.bird.userId = $scope.currentUser.id;
  $scope.getAll = function() {
    $http.get('/api/birds')
      .then(function(res) {
        res.data.forEach(function(bird) {
          $scope.data.push(bird.commonName);
        });
      });
  };
  $scope.getBird = function() {
    $scope.bird.name = $scope.selection;
    $http.get('/api/birds')
      .then(function(res) {
        res.data.forEach(function(bird) {
          if (bird.commonName === $scope.selection) {
            $scope.bird.birdId = bird.id;
            $scope.updatedEntry.id = bird.id;
            $scope.matchBird(bird);

          }
        });
        $scope.loadMap();
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
  $scope.getEntry = function() {
    $http.get('/api/users/' + $stateParams.userId + '/entries/' + $stateParams.id)
      .then(function(entry) {
        $scope.entry = entry.data;
      });
  };
  $scope.addEntry = function() {
    $http.post('/api/users/' + $scope.bird.userId + "/entries", $scope.bird)
      .then(function(entry) {
        $scope.bird = {};
        window.location.href = '/profile';
      });
  };
  $scope.updateEntry = function() {
    $http.patch('/api/users/' + $scope.currentUser.id + '/entries/' + $scope.entry.id, $scope.updatedEntry)
      .then(function(entry) {
        $scope.entry = entry.data;
        $scope.updatedEntry = {};
      });
  };
  $scope.deleteEntry = function() {
    var delConfirm = confirm('Are you sure you want to delete this entry?');
      if (delConfirm) {
        $http.delete('/api/users/' + $scope.currentUser.id + '/entries/' + $scope.entry.id)
          .then(function(entry) {
            $state.go('profile');
          });
      }
  };
  $scope.loadShowMap = function() {
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.showMap = {
        center: $scope.entry.coords,
        zoom: 12
       };
       $scope.showMarker =  {
         id: 0,
         coords: $scope.entry.coords,
         options: {draggable:false}
       };
    });
  };
  $scope.loadMap = function() {
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = {
        center: { latitude: 37.773972, longitude: -122.431297 },
        zoom: 2
       };
    });
  };
  $scope.marker = {
    id: 0,
    options:{ draggable:true },
    coords: { latitude: 90, longitude: 108 },
   };
  $scope.searchbox = {
    events: {
      places_changed : function (searchbox) {
                var place = searchbox.getPlaces();
                $scope.bird.city = place[0].formatted_address;
                $scope.bird.coords = {
                      latitude:place[0].geometry.location.lat(),
                      longitude:place[0].geometry.location.lng()
                };
                $scope.map = {
                    center:{
                        latitude:place[0].geometry.location.lat(),
                        longitude:place[0].geometry.location.lng()
                    },
                    zoom: 12
                };
                $scope.marker = {
                    id: 0,
                    options: { draggable:true },
                    coords: {
                        latitude:place[0].geometry.location.lat(),
                        longitude:place[0].geometry.location.lng()
                    },
                    events: {
                      dragend: function(event){
                        $scope.bird.coords = {latitude:event.position.lat(),
                                              longitude:event.position.lng()
                                            };
                      }
                    }
                };
          }
    },
    position: 'top-right'
  };
  $scope.getAll();
}
