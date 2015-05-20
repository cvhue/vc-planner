'use strict';

/**
 * @ngdoc function
 * @name vcPlannerApp.controller:SolveCtrl
 * @description
 * # SolveCtrl
 * Controller of the vcPlannerApp
 */
angular.module('vcPlannerApp')
  .controller('SolveCtrl', function ($scope, $timeout, solviceApi, apiService) {
    $scope.counter = 13;

    $scope.solver = apiService.solver;

    $scope.assignments = apiService.assignments;

    convertToPlan();
    calcScores();

    $scope.lastSolve = function(){
      return moment.duration(moment($scope.solver.last).diff(moment())).humanize(true);
    };


    $scope.startSolving = function() {
      $scope.solve = !$scope.solve;
      var plan = convertToPlan();
      solviceApi.solve(plan)
        .success(function(data){
          $scope.solver.last = moment().format();
          $scope.solver.$save();
          $scope.solve = !$scope.solve;
          // remove old assignments
          for(var i=0;i<$scope.assignments.length;i++) $scope.assignments.$remove(i);
          angular.forEach(data.assignments,function(a){
            $scope.assignments.$add(a);
          });
          calcScores();
        })
        .error(function(data){
          console.log(data);
        });

      $scope.onTimeout();
    };

    $scope.choices = apiService.choices;

    function getValue(choiceName) {
      var c = {};
      angular.forEach($scope.choices, function(choice){
        if(choice.name===choiceName) c = choice;
      });
      return c.value;
    }


    var choiceMap = {};
    _.forEach($scope.choices, function(c){
        choiceMap[c.name] = c.value;
    });

    function calcScores() {
      $scope.score = {};
      $scope.totalAppointments = {};
      $scope.gotFirst = {};


      _.forEach($scope.plan.vcs, function(vc){
         var startupsForVC = _($scope.assignments)
          .filter(function(a) {return a.vc==vc.name;})
          .map('startup');

        var points = startupsForVC
          .map(function(start){return _.find($scope.plan.desiderates, {"vc":vc.name,"startup":start}) })
          .map('value');

        console.log(points);


        var maxVal = _.max($scope.choices, 'value').value;
        console.log(maxVal);
        $scope.score[vc.name] = points.reduce(function(a,b) {return a+b;},0);
        $scope.totalAppointments[vc.name] = startupsForVC.size();
        $scope.gotFirst[vc.name] = points.indexOf(maxVal)!=-1;

      })
      console.log($scope.score);
    }



    function convertToPlan() {
      $scope.plan = {};
      $scope.plan.vcs = apiService.vc;
      $scope.plan.locations = apiService.location;
      $scope.plan.startups = apiService.startup;
      $scope.plan.timeblocks = apiService.timeblocks;
      $scope.plan.desiderates = [];
      apiService.desiderate.forEach(function(vc,key){
        angular.forEach(vc, function(startup, choice){
          var des = {
            "vc": key,
            "startup": startup,
            "value": getValue(choice)
          };
          $scope.plan.desiderates.push(des);
        })

      });
      console.log($scope.plan);
      return $scope.plan;
    }

    $scope.onTimeout = function () {
      $scope.counter--;
      if ($scope.counter > 0)
        $timeout($scope.onTimeout, 1000);
      if ($scope.counter < 0) $scope.solve = false;
    };
  });
