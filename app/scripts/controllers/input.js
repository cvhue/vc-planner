'use strict';

/**
 * @ngdoc function
 * @name vcPlannerApp.controller:InputCtrl
 * @description
 * # InputCtrl
 * Controller of the vcPlannerApp
 */
angular.module('vcPlannerApp')
  .controller('InputCtrl', ['$scope', 'apiService',
    function ($scope, apiService) {

    $scope.locations = apiService.location;

    $scope.addLocation = function() {
      $scope.locations.$add({
        id: 1,
        name: $scope.location
      });
      $scope.location = "";
    };

    $scope.locations.$loaded(function() {
      if ($scope.locations.length === 0) {
        $scope.locations.$add({
          id: 1,
          name: "Atari"
        });
      }
    });


      $scope.vcs = apiService.vc;

      $scope.addVC = function() {
        $scope.vcs.$add({
          id: 1,
          name: $scope.vc,
          email: $scope.vc+"@gmail.com"
        });
        $scope.vc = "";
      };

      $scope.vcs.$loaded(function() {
        if ($scope.vcs.length === 0) {
          $scope.vcs.$add({
            id: 1,
            name: "Jan de VC"
          });
        }
      });

      $scope.startups = apiService.startup;

      $scope.addStartup = function() {
        $scope.startups.$add({
          id: 1,
          name: $scope.startup
        });
        $scope.startup = "";
      };

      $scope.startups.$loaded(function() {
        if ($scope.startups.length === 0) {
          $scope.startups.$add({
            id: 1,
            name: "PieSync"
          });
        }
      });

      ////
      $scope.choices = apiService.choices;

      $scope.addChoice = function() {
        $scope.choices.$add({
          name: $scope.choice,
          value: 1
        });
        $scope.choice = "";
      };



      $scope.choices.$loaded(function() {
        if ($scope.choices.length === 0) {
          $scope.choices.$add({
            value: 10,
            name: "First"
          });
          $scope.choices.$add({
            value: 5,
            name: "Second"
          });
        }
      });


      $scope.deleteVC = function(index) {
        $scope.vcs.$remove(index);
      };
      $scope.deleteLoc = function(index) {
        $scope.locations.$remove(index);
      };
      $scope.deleteStartup = function(index) {
        $scope.startups.$remove(index);
      };

      $scope.deleteChoice = function(index) {
        $scope.choices.$remove(index);
      };

      $scope.deleteTimeblock = function(index) {
        $scope.timeblocks.$remove(index);
      };

      $scope.saveChoice = function(index) {
        $scope.choices.$save(index);
      };

      $scope.saveTimeBlock = function(index) {
        $scope.timeblocks.$save(index);
      };

      $scope.saveVC = function(index) {
        $scope.vcs.$save(index);
      };


      $scope.timeblocks = apiService.timeblocks;

      $scope.saveTime = function() {
        $scope.timeblocks.$save();
      };



      //$scope.timeblocks.$loaded(function() {
      //  if (angular.isUndefined($scope.timeblocks)) {
      //    $scope.timeblocks.value = 6;
      //    $scope.timeblocks.start = "15:00";
      //    $scope.timeblocks.end = "17:00";
      //    $scope.timeblocks.block = 20;
      //
      //    $scope.timeblocks.$save();
      //  }
      //});

      $scope.timeblock = "13:00 - 13:20";

      $scope.countTime = 1;

      $scope.addTimeblock = function() {

        $scope.timeblocks.$add({
          name: $scope.timeblock,
          index: $scope.countTime
        });
        $scope.countTime++;
        $scope.timeblock = "";
      };

      $scope.saveChoices = function() {
        $scope.choices.$save();
      };

    }]);
