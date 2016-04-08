function BirdsController($http) {
  var vm = this;
  vm.allBirds = [];
  vm.ticked = false;
  vm.checkBox = function(bird) {
    var currentUser = JSON.parse(window.localStorage.currentUser);
    currentUser.entries.forEach(function(entry) {
      if(bird.id === entry.birdId) {
               console.log('true!', entry);
               vm.ticked = true;
             } else {
               vm.ticked = false;
             }
    });
  };
  // vm.checkBoxes = function(birds) {
  //   birds.forEach(function(bird) {
  //     var currentUser = JSON.parse(window.localStorage.currentUser);
  //     currentUser.entries.forEach(function(entry) {
  //       if(bird.id === entry.birdId) {
  //         console.log('true!', entry);
  //         bird.ticked = true;
  //       } else {
  //         bird.ticked = false;
  //       }
  //     });
  //   });
  // };
  vm.getAll = function() {
    $http.get('/api/birds')
      .then(function(res) {
        vm.allBirds = res.data;
        // vm.checkBoxes(vm.allBirds);
      });
  };
  vm.getAll();

}
