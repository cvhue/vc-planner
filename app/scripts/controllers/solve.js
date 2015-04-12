'use strict';

/**
 * @ngdoc function
 * @name vcPlannerApp.controller:SolveCtrl
 * @description
 * # SolveCtrl
 * Controller of the vcPlannerApp
 */
angular.module('vcPlannerApp')
  .controller('SolveCtrl', function ($scope, $timeout) {
    $scope.counter = 30;
    $scope.startSolving = function() {
      $scope.solve = !$scope.solve;
      $scope.onTimeout();
    };

    $scope.onTimeout = function () {
      $scope.counter--;
      if ($scope.counter > 0)
        $timeout($scope.onTimeout, 1000);
      if ($scope.counter < 0) $scope.solve = false;
    };
  });
