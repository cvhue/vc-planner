'use strict';

describe('Service: solvice', function () {

  // load the service's module
  beforeEach(module('vcPlannerApp'));

  // instantiate service
  var solvice;
  beforeEach(inject(function (_solvice_) {
    solvice = _solvice_;
  }));

  it('should do something', function () {
    expect(!!solvice).toBe(true);
  });

});
