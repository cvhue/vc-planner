'use strict';

describe('Service: startup', function () {

  // load the service's module
  beforeEach(module('vcPlannerApp'));

  // instantiate service
  var startup;
  beforeEach(inject(function (_startup_) {
    startup = _startup_;
  }));

  it('should do something', function () {
    expect(!!startup).toBe(true);
  });

});
