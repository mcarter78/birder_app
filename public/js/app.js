angular.module('birdy', ['ui.router', 'auth0', 'angular-storage', 'angular-jwt', 'autocomplete', 'uiGmapgoogle-maps'])
       .controller('HomeController', HomeController)
       .controller('LoginController', LoginController)
       .controller('LogoutController', LogoutController)
       .controller('BirdsController', BirdsController)
       .controller('EntriesController', EntriesController)
       .controller('ProfileController', ProfileController)
       .controller('PageslideController', PageslideController)
       .service('UserService', UserService)
       .service('BirdService', BirdService)
       .config(birdyConfig)
       .run(function($rootScope, auth, store, jwtHelper, $location) {
         // This hooks al auth events to check everything as soon as the app starts
         auth.hookEvents();
         // This events gets triggered on refresh or URL change
          $rootScope.$on('$locationChangeStart', function() {
            var token = store.get('token');
            if (token) {
              if (!jwtHelper.isTokenExpired(token)) {
                if (!auth.isAuthenticated) {
                  auth.authenticate(store.get('profile'), token);
                }
              } else {
                // Either show the login page or use the refresh token to get a new idToken
                $location.path('/');
              }
            }
          });
       });

function birdyConfig(authProvider, jwtInterceptorProvider, $httpProvider, $stateProvider, $locationProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {

  authProvider.init({
    domain: 'mcarter78.auth0.com',
    clientID: 'rGW8tImiKagMlQzSgsjF1tK2WDVejwGF',
    loginState: 'login'
  });

  authProvider.on('loginSuccess', function($location, profilePromise, idToken, store) {
    profilePromise.then(function(profile) {
      store.set('profile', profile);
      store.set('token', idToken);
    });
    $location.path('/profile');
  });

  // We're annotating this function so that the `store` is injected correctly when this file is minified
  jwtInterceptorProvider.tokenGetter = ['store', function(store) {
    // Return the saved token
    return store.get('token');
  }];

  $httpProvider.interceptors.push('jwtInterceptor');

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeController',
      controllerAs: 'home',
      templateUrl: '/templates/home.html'
    })
    .state('login', {
      url: '/login',
      controller: 'LoginController',
      controllerAs: 'auth',
      templateUrl: '/templates/login.html'
    })
    .state('birds-index', {
      url: '/birds',
      controller: 'BirdsController',
      controllerAs: 'birds',
      templateUrl: '/templates/birds-index.html'
    })
    .state('profile', {
      url: '/profile',
      controller: 'ProfileController',
      controllerAs: 'profile',
      templateUrl: '/templates/profile.html',
      data: { requiresLogin: true }
    })
    .state('new-entry', {
      url: '/entries/new',
      controller: 'EntriesController',
      controllerAs: 'entries',
      templateUrl: '/templates/add-entry.html',
      data: { requiresLogin: true }
    })
    .state('show-entry', {
      url: '/users/:userId/entries/:id',
      controller: 'EntriesController',
      controllerAs: 'entries',
      templateUrl: '/templates/show-entry.html',
      data: { requiresLogin: true }
    })
    .state('users', {
      url: '/users',
      controller: 'HomeController',
      controllerAs: 'home',
      templateUrl: '/templates/users-index.html'
    });

  $urlRouterProvider.otherwise('/login');

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDbo8awNKXZdYZBM4rC6RS5oP8OmQLT9zY',
        v: '3.22', //defaults to latest 3.X anyhow
        libraries: 'places,weather,geometry,visualization'
  });
}

function HomeController($scope, $http, $window, UserService, $rootScope) {
  UserService.getUsers(function(users) {
    $scope.allUsers = users;
  });
  if(window.localStorage.profile){
    $scope.currentUser = JSON.parse(window.localStorage.profile);
  }
  $scope.login = function() {
    $window.location.href = '/login';
  };
  $scope.birdsLink = function() {
    $window.location.href = '/birds';
  };
  $scope.usersLink = function() {
    $window.location.href = '/users';
  };
  $scope.profileLink = function() {
    $window.location.href = '/profile';
  };
  $scope.addEntryLink = function() {
    $window.location.href = '/entries/new';
  };
}

function LoginController(auth, $state, $window, $rootScope) {
  this.auth = auth;
  if(window.localStorage.profile){
    $window.location.href = '/profile';
  }
}

function LogoutController($scope, auth, store, $window) {
  if(window.localStorage.profile){
    $scope.currentUser = JSON.parse(window.localStorage.profile);
  }
  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
    window.localStorage.removeItem('currentUser');
    $window.location.href = 'https://mcarter78.auth0.com/v2/logout?returnTo=http://www.birdspots.net/login';
  };
}

function PageslideController($scope) {
  $scope.checked = false; // This will be binded using the ps-open attribute
  $scope.toggle = function(){
    $scope.checked = !$scope.checked;
  };
}
