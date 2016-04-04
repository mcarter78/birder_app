angular.module('birdy', ['ui.router', 'auth0', 'angular-storage', 'angular-jwt'])
       .controller('LoginController', LoginController)
       .controller('LogoutController', LogoutController)
       .controller('BirdsController', BirdsController)
       .controller('EntriesController', EntriesController)
       .controller('ProfileController', ProfileController)
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

function birdyConfig(authProvider, jwtInterceptorProvider, $httpProvider, $stateProvider, $locationProvider) {

  authProvider.init({
    domain: 'mcarter78.auth0.com',
    clientID: 'rGW8tImiKagMlQzSgsjF1tK2WDVejwGF',
    loginState: 'login'
  });

  authProvider.on('loginSuccess', function($location, profilePromise, idToken, store) {
    console.log("Login Success");
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
    .state('login', {
      url: '/login',
      controller: 'LoginController',
      controllerAs: 'auth',
      templateUrl: '/templates/login.html'
    })
    .state('home', {
      url: '/',
      templateUrl: '/templates/home.html'
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
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}

function LoginController(auth) {
  this.auth = auth;
}

function LogoutController($scope, auth, store, $window) {
  $scope.logout = function() {
    console.log('logout called');
    auth.signout();
    store.remove('profile');
    store.remove('token');
    $window.location.href = 'https://mcarter78.auth0.com/v2/logout?returnTo=http://localhost:3000/';
  };
}
