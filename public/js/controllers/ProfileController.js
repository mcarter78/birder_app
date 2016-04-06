function ProfileController($http, $state) {
  var vm = this;
  vm.user = JSON.parse(window.localStorage.profile);
  vm.currentUser = {};
  vm.confirmedUser = {};
  vm.updatedUser = {};
  vm.currentUser.name = vm.user.name;
  vm.currentUser.email = vm.user.email;
  vm.currentUser.identities = vm.user.identities;
  vm.currentUser.picture = vm.user.picture;
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
}
