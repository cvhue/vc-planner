'use strict';

describe('Controller: SolveCtrl', function () {

  // load the controller's module
  beforeEach(module('vcPlannerApp'));

  var SolveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SolveCtrl = $controller('SolveCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
