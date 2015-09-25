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
      .state('create', {
        url: '/create',
        templateUrl: 'partials/crud/create.html'
      })
      .state('retrieve', {
        url: '/retrieve',
        templateUrl: 'partials/crud/retrieve.html'
      })
      .state('update', {
        url: '/update',
        templateUrl: 'partials/crud/update.html'
      })
      .state('delete', {
        url: '/delete',
        templateUrl: 'partials/crud/delete.html'
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