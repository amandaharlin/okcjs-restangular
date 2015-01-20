'use strict';

describe('Service: JobFactory', function () {

  // load the service's module
  beforeEach(module('jobApp'));

  // instantiate service
  var JobFactory;
  beforeEach(inject(function (_JobFactory_) {
    JobFactory = _JobFactory_;
  }));

  it('should do something', function () {
    expect(!!JobFactory).toBe(true);
  });

});
