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
      .state('documentation', {
        url: '/documentation',
        templateUrl: 'partials/documentation.html'
      })
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
      enabled: true
    });
  });
})();