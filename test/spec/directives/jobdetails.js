'use strict';

describe('Directive: jobdetails', function () {

  // load the directive's module
  beforeEach(module('jobApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jobdetails></jobdetails>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the jobdetails directive');
  }));
});
