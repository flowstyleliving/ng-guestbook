'use strict';
namespace app {
  angular.module('app', ['ngResource', 'ui.router'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    // =============================
    // == Entries ===================
    // =============================

    .state('guestAdd', {
      url: '/guest/add',
      templateUrl: '/templates/guestAdd.html',
      controller: 'GuestAddController',
      controllerAs: 'vm'
    })
    .state('guestDetails', {
      url:'/details/:id',
      templateUrl: 'templates/guestDetails.html',
      controller: "GuestDetailsController",
      controllerAs: 'vm'
    })
    .state('guestEdit', {
      url:'/edit/:id',
      templateUrl: 'templates/guestEdit.html',
      controller: "GuestEditController",
      controllerAs: 'vm'
    })
    
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
