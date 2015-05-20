'use strict';

/**
 * @ngdoc function
 * @name vcPlannerApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the vcPlannerApp
 */
angular.module('vcPlannerApp')
  .controller('ScheduleCtrl', function ($scope, apiService) {

    $scope.plan = {};

    $scope.isLoaded = false;


    $scope.plan.assignments = apiService.assignments;
    $scope.plan.vcs = apiService.vc;
    $scope.plan.startups = apiService.startup;
    $scope.plan.locations = apiService.location;
    $scope.plan.timeblocks = apiService.timeblocks;

    $scope.plan.assignments.$loaded(function(x){
      $scope.isLoaded = true;
    });


    $scope.vcfilter = "";

    $scope.assignments = [];

    angular.forEach($scope.assignments, function(a) {

    });


    $scope.containsVC = function(vc, time,location){
      var ass = $scope.getAssignment(time, location);
      console.log(ass.indexOf(vc) > -1);
      return ass.indexOf(vc)>-1;
    }


    $scope.getAssignment = function(time, location) {
      if($scope.plan.assignments){
        var assignments = _.filter($scope.plan.assignments, function(a){
          return a.timeBlock==time.name && a.location==location.name;
        });
        var assignment = assignments[0];
        return assignment.vc + " : " + assignment.startup
      }

    }


  });
