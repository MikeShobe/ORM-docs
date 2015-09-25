(function() {
  angular.module('main', [
    'ui.router'
  ])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html'
      })
      .state('getstart', {
        url: '/getstarted',
        templateUrl: 'partials/getstart.html'
      })
      .state('crud', {
        url: '/crud',
        templateUrl: 'partials/crud.html'
      })
      .state('addrelations', {
        url: '/addrelations',
        templateUrl: 'partials/addrelations.html'
      })
      .state('remrelations', {
        url: '/removerelations',
        templateUrl: 'partials/remrelations.html'
      })
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
      enabled: true
    });
  });
})();