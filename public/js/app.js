angular.module('birdy', ['ui.router'])
       .controller('BirdsController', BirdsController)
       .controller('EntriesController', EntriesController)
       .config(birdyConfig);

function birdyConfig($stateProvider, $locationProvider) {
         $stateProvider
          .state('home', {
            url: '/',
            templateUrl: '/templates/home.html'
          })
          .state('birds-index', {
            url: '/birds',
            controller: 'BirdsController',
            controllerAs: 'birds',
            templateUrl: '/templates/birds-index.html'
          });

          $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
          });
}

function BirdsController($http){
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

function EntriesController(){

}
