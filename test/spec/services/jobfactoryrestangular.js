'use strict';

describe('Service: JobFactoryRestangular', function () {

  // load the service's module
  beforeEach(module('jobApp'));

  // instantiate service
  var JobFactoryRestangular;
  beforeEach(inject(function (_JobFactoryRestangular_) {
    JobFactoryRestangular = _JobFactoryRestangular_;
  }));

  it('should do something', function () {
    expect(!!JobFactoryRestangular).toBe(true);
  });

});
