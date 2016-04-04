function ProfileController($http) {
  var vm = this;
  vm.user = JSON.parse(window.localStorage.profile);
  vm.currentUser = {};
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
          }
        });
        if (matches <= 0) {
          vm.newProfile(vm.currentUser);
        }
      });
  };
  vm.newProfile = function(user) {
    $http.post('/api/users', user)
      .then(function(res) {
        console.log('user created');
      });
  };
}
