'use strict';

describe('Directive: joblist', function () {

  // load the directive's module
  beforeEach(module('jobApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<joblist></joblist>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the joblist directive');
  }));
});
