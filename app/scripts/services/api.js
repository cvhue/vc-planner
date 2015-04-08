'use strict';

/**
 * @ngdoc service
 * @name vcPlannerApp.api
 * @description
 * # api
 * Factory in the vcPlannerApp.
 */
angular.module('vcPlannerApp')
  .factory('apiService' , function ($firebaseArray, $firebaseObject) {

    var URL = 'https://vc-planner.firebaseio.com/';

    var location = new Firebase(URL+'location');
    var vc = new Firebase(URL+'vc');
    var startup = new Firebase(URL+'startup');
    var desiderate = new Firebase(URL+'desiderate');
    var timeblock = new Firebase(URL+'timeblock');


    var service = {
      location : $firebaseArray(location),
      vc: $firebaseArray(vc),
      startup: $firebaseArray(startup),
      desiderate: $firebaseObject(desiderate),
      timeblocks: $firebaseObject(timeblock)
    };

    return service;
});
