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
          name: $scope.vc
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


      $scope.deleteStartup = function(index) {
        console.log('deleted ' + index);
      };



    }]);
