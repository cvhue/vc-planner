'use strict';

describe('Controller: DesiderateCtrl', function () {

  // load the controller's module
  beforeEach(module('vcPlannerApp'));

  var DesiderateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DesiderateCtrl = $controller('DesiderateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
