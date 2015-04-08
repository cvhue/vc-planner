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
    'ngTouch',
    'firebase'
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
      .when('/desiderate', {
        templateUrl: 'views/desiderate.html',
        controller: 'DesiderateCtrl'
      })
      .when('/solve', {
        templateUrl: 'views/solve.html',
        controller: 'SolveCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
