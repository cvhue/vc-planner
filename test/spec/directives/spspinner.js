'use strict';

describe('Directive: spSpinner', function () {

  // load the directive's module
  beforeEach(module('vcPlannerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sp-spinner></sp-spinner>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the spSpinner directive');
  }));
});
