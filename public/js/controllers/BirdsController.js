function BirdsController(BirdService) {
  var vm = this;
  vm.allBirds = [];
  BirdService.getBirds(function(birds) {
    birds.forEach(function(bird) {
      var currentUser = JSON.parse(window.localStorage.currentUser);
      currentUser.entries.forEach(function(entry) {
        if(bird.id === entry.birdId) {
          bird.ticked = true;
        }
      });
    });
    vm.allBirds = birds;
  });
}

function BirdService($http) {
  this.getBirds = function(cb) {
    $http.get('/api/birds')
      .success(function(res) {
        return cb(res);
      });
  };
}
