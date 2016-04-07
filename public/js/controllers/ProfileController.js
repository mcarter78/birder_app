function ProfileController($http, $state, uiGmapGoogleMapApi) {
  var vm = this;
  vm.confirmedUser = {};
  vm.updatedUser = {};
  vm.markers = [];
  if(window.localStorage.profile){
    vm.user = JSON.parse(window.localStorage.profile);
    vm.currentUser = {};
    vm.currentUser.name = vm.user.name;
    vm.currentUser.email = vm.user.email;
    vm.currentUser.identities = vm.user.identities;
    vm.currentUser.picture = vm.user.picture;
  }
  vm.checkProfile = function() {
    $http.get('/api/users')
      .then(function(res) {
        console.log(res);
        var matches = 0;
        res.data.forEach(function(user) {
          if (vm.user.name === user.name) {
            console.log('user already exists');
            matches += 1;
            vm.confirmedUser = user;
            window.localStorage.currentUser = JSON.stringify(user);
          }
        });
        if (matches <= 0) {
          vm.newProfile(vm.currentUser);
          vm.checkProfile();
        }
      });
  };
  vm.newProfile = function(user) {
    $http.post('/api/users', user)
      .then(function(res) {
        console.log('user created');
        vm.confirmedUser = res.data;
      });
  };
  vm.updateAboutMe = function() {
    vm.confirmedUser.aboutMe = vm.updatedUser.aboutMe;
    $http.patch('/api/users/' + vm.confirmedUser.id, vm.updatedUser)
      .then(function(res) {
        console.log('user AboutMe updated');
        vm.updatedUser = {};
      });
  };
  vm.entryRedirect = function() {
    console.log('entryRedirect called');
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
    console.log(vm.confirmedUser);
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
  setTimeout(function() {
    vm.loadMap();
    vm.getMarkers();
    console.log(vm.markers);
  }, 700);
}
