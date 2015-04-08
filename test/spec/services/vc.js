'use strict';

describe('Service: vc', function () {

  // load the service's module
  beforeEach(module('vcPlannerApp'));

  // instantiate service
  var vc;
  beforeEach(inject(function (_vc_) {
    vc = _vc_;
  }));

  it('should do something', function () {
    expect(!!vc).toBe(true);
  });

});
