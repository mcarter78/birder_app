function BirdsController($http) {
  var vm = this;
  vm.allBirds = [];
  vm.getAll = function() {
    $http.get('/api/birds')
      .then(function(res) {
        vm.allBirds = res.data;
      });
  };
  vm.getAll();
  console.log(vm.allBirds);
}
