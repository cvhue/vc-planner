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

    $scope.possibleChoices = ["First", "Second", "Third", "Fourth",
                  "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"];

    $scope.nb = 3;
    $scope.choices = $scope.possibleChoices.slice(0,$scope.nb);

    $scope.choiceValues = {};

    $scope.addColumn = function() {
      if($scope.nb < 8)$scope.nb ++;
      $scope.choices = $scope.possibleChoices.slice(0,$scope.nb);
      resetDesiderate();

    };

    $scope.removeColumn = function() {
      if($scope.nb >1)$scope.nb --;
      $scope.choices = $scope.possibleChoices.slice(0,$scope.nb);
      resetDesiderate();


    };

    $scope.desiderate = apiService.desiderate;

    function resetDesiderate() {

      angular.forEach($scope.vcs, function(vc) {
        if(angular.isUndefined($scope.desiderate[vc.name]) ) $scope.desiderate[vc.name] = {};
        angular.forEach($scope.choices, function(choice) {
          if(angular.isUndefined($scope.desiderate[vc.name][choice]) ) $scope.desiderate[vc.name][choice] = "";
        });
      });
      if (angular.isUndefined($scope.desiderate)) {
        $scope.desiderate.$save();
      }
    }

    $scope.desiderate.$loaded(function() {
      resetDesiderate();
    });


    $scope.saveDesiderate = function() {
      console.log('saving');
      $scope.desiderate.$save();
    };

    $scope.removeDesiderate = function() {
      $scope.desiderate.$remove();
      resetDesiderate();
    }

  });
