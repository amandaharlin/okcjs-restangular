'use strict';

/**
 * @ngdoc service
 * @name jobApp.JobFactory
 * @description
 * # JobFactory
 * Factory in the jobApp.
 */
angular.module('jobApp')
  .factory('JobResource', [ '$resource', function ($resource) {
    return $resource('/jobs/:id', null, {
        list: { method: 'GET', isArray: true},
        somethingElse: { method: 'get', customStuff: 'yay'}
    });
  }
]);
