'use strict';

/**
 * @ngdoc service
 * @name vcPlannerApp.solvice
 * @description
 * # solvice
 * Factory in the vcPlannerApp.
 */
angular.module('vcPlannerApp')
  .factory('solviceApi', function ($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    var URL = 'http://app.solvice.io/vc/';

    return {
      solve: function (plan) {
        return $http.post( URL+ 'solve', plan);
      }
    };
  });
