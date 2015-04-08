'use strict';

/**
 * @ngdoc function
 * @name vcPlannerApp.controller:DesiderateCtrl
 * @description
 * # DesiderateCtrl
 * Controller of the vcPlannerApp
 */
angular.module('vcPlannerApp')
  .controller('DesiderateCtrl', function ($scope, apiService) {

    $scope.vcs = apiService.vc;
    $scope.startups = apiService.startup;

    $scope.desiderate = apiService.desiderate;

    $scope.desiderate.$loaded(function() {

      if (angular.isUndefined($scope.desiderate)) {
        angular.forEach($scope.vcs, function(vc) {
          if(angular.isUndefined($scope.desiderate[vc.name]) ) $scope.desiderate[vc.name] = {};
          angular.forEach($scope.startups, function(startup) {
            if(angular.isUndefined($scope.desiderate[vc.name][startup.name]) ) $scope.desiderate[vc.name][startup.name] = 1;
          });
        });
        $scope.desiderate.$save();
      }
    });


    $scope.saveDesiderate = function() {
      console.log('saving');
      $scope.desiderate.$save();
    }

  });
