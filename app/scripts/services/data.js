'use strict';

/**
 * @ngdoc service
 * @name vcPlannerApp.solvice
 * @description
 * # solvice
 * Factory in the vcPlannerApp.
 */
angular.module('vcPlannerApp')
  .factory('dataService', function (apiService) {

    var service = {

      desiderate: apiService.desiderates


    };

    return service;
  });
