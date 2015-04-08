'use strict';

/**
 * @ngdoc overview
 * @name vcPlannerApp
 * @description
 * # vcPlannerApp
 *
 * Main module of the application.
 */
angular
  .module('vcPlannerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/input', {
        templateUrl: 'views/input.html',
        controller: 'InputCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
