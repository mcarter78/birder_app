function ProfileController($http, $state, uiGmapGoogleMapApi, $window, UserService) {
  var vm = this;
  vm.currentUser = {};
  vm.confirmedUser = {};
  vm.updatedUser = {};
  vm.markers = [];
  vm.allUsers = [];
  vm.checkProfile = function() {
    var matches = 0;
    if(vm.allUsers.length > 0) {
      vm.allUsers.forEach(function(user) {
        if (vm.currentUser.name === user.name) {
          matches += 1;
          vm.confirmedUser = user;
          vm.currentUser._id = user._id;
          vm.currentUser.entries = user.entries;
          window.localStorage.currentUser = JSON.stringify(vm.currentUser);
          vm.getMarkers();
        }
      });
    }
    if (matches <= 0) {
      vm.newProfile(vm.currentUser);
    }
  };
  vm.newProfile = function(user) {
    $http.post('/api/users', user)
      .then(function(res) {
        vm.confirmedUser = res.data;
        vm.checkProfile();
      });
  };
  vm.updateAboutMe = function() {
    vm.confirmedUser.aboutMe = vm.updatedUser.aboutMe;
    $http.patch('/api/users/' + vm.confirmedUser._id, vm.updatedUser)
      .then(function(res) {
        vm.updatedUser = {};
      });
  };
  vm.entryRedirect = function() {
    $state.go('new-entry');
  };
  vm.loadMap = function() {
    uiGmapGoogleMapApi.then(function(maps) {
      vm.map = {
        scrollwheel: false,
        center: { latitude: 37.773972, longitude: -122.431297 },
        zoom: 2
       };

    });
  };
  vm.getMarkers = function() {
    var id = 0;
    var marker = {};
    if(vm.currentUser.entries.length > 0) {
      vm.currentUser.entries.forEach(function(entry) {
        if(entry.coords) {
          marker.id = id;
          marker.coords = entry.coords[0];
          vm.markers.push(marker);
          marker = {};
          id++;
        }
      });
    }
  };
  UserService.getUsers(function(users){
    if(window.localStorage.profile){
      vm.user = JSON.parse(window.localStorage.profile);

      vm.currentUser.name = vm.user.name;
      vm.currentUser.email = vm.user.email;
      vm.currentUser.identities = vm.user.identities;
      if(vm.user.picture_large){
        vm.currentUser.picture = vm.user.picture_large;
      }
      else {
        vm.currentUser.picture = vm.user.picture;
      }
    }
    vm.allUsers = users;
    vm.checkProfile();
    vm.loadMap();

  });
}

function UserService($http) {
  this.getUsers = function(cb) {
    $http.get('/api/users')
      .success(function(res) {
        return cb(res);
      });
  };
}
