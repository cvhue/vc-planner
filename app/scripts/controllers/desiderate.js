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
        $scope.desiderate = {
          "vc1" : {
            "PieSync" : 1
          }
        };
        $scope.desiderate.$save();
      }
      //$scope.desiderate = {};
      //$scope.desiderate.$save();

    });

  });
