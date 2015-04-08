'use strict';

/**
 * @ngdoc service
 * @name vcPlannerApp.spinner
 * @description
 * # spinner
 * Factory in the vcPlannerApp.
 */
angular.module('vcPlannerApp')

  .constant('spinnerConfig', {
    max: 99,
    min: 0
  })

  .controller('SpinnerController', ['spinnerConfig', function(spinnerConfig) {
    this.activeClass = spinnerConfig.activeClass || 'active';
  }])


  .directive('spinner', function() {
    return {
      restrict: 'EA',
      replace: true,
      controller: 'SpinnerController',
      template: '<span class="ui-spinner ui-widget-content ui-corner-all">' +
      '    <input class="ui-spinner-input" ng-model="inputValue" type="number" min="{{min}}" max="{{mx}}" name="{{inputName}}" id="{{inputName}}">' +
      ' <a class="ui-spinner-button ui-spinner-up ui-corner-tr" tabindex="-1" ng-click="increment()"><span class="ui-icon ui-icon-triangle-1-n">▲</span></a>' +
      '    <a class="ui-spinner-button ui-spinner-down ui-corner-br" tabindex="-1" ng-click="decrement()"><span class="ui-icon ui-icon-triangle-1-s">▼</span></a>' +
      '    </span>',
      scope: {
        'value': '='
      },
      link: function (scope) {
        scope.$watch('inputValue', function(newValue) {
          if (newValue === 'undefined' || newValue === ''){
            scope.inputValue = '1';
          }else{
            scope.inputValue = String(newValue).replace(/[^\d]/g, '');
          }
        });

        scope.increment = function(){
          if ((Number(scope.inputValue) + 1) < $attrs.max){
            scope.inputValue = String(Number(scope.inputValue) + 1);
          }
        };

        scope.decrement = function(){
          if ((Number(scope.inputValue) - 1) < $attrs.min){
            scope.inputValue = String(Number(scope.inputValue) - 1);
          }
        };
      }
    };
  });
