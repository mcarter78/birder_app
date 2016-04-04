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
}

function BirdsController(){

}

function EntriesController(){
  
}
