function ProfileController($http, $state, uiGmapGoogleMapApi, $window, UserService) {
  var vm = this;
  vm.confirmedUser = {};
  vm.updatedUser = {};
  vm.markers = [];
  vm.allUsers = [];
  vm.checkProfile = function() {
    var matches = 0;
    vm.allUsers.forEach(function(user) {
      if (vm.user.name === user.name) {
        matches += 1;
        vm.confirmedUser = user;
        window.localStorage.currentUser = JSON.stringify(user);
      }
    });
    if (matches <= 0) {
      vm.newProfile(vm.currentUser);
      vm.checkProfile();
    }
  };
  vm.newProfile = function(user) {
    $http.post('/api/users', user)
      .then(function(res) {
        vm.confirmedUser = res.data;
      });
  };
  vm.updateAboutMe = function() {
    vm.confirmedUser.aboutMe = vm.updatedUser.aboutMe;
    $http.patch('/api/users/' + vm.confirmedUser.id, vm.updatedUser)
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
        center: { latitude: 37.773972, longitude: -122.431297 },
        zoom: 2
       };
    });
  };
  vm.getMarkers = function() {
    var id = 0;
    var marker = {};
    if(vm.confirmedUser.entries.length > 0) {
      vm.confirmedUser.entries.forEach(function(entry) {
        if(entry.coords) {
          marker.id = id;
          marker.coords = entry.coords;
          console.log(marker.coords);
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
      vm.currentUser = {};
      vm.currentUser.name = vm.user.name;
      vm.currentUser.email = vm.user.email;
      vm.currentUser.identities = vm.user.identities;
      vm.currentUser.picture = vm.user.picture;
    }
    vm.allUsers = users;
    vm.checkProfile();
    vm.loadMap();
    vm.getMarkers();
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
