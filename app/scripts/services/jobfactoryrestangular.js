'use strict';

/**
 * @ngdoc service
 * @name jobApp.JobFactoryRestangular
 * @description
 * # JobFactoryRestangular
 * Factory in the jobApp.
 */
 angular.module('jobApp')
 .factory('JobResourceRestangular', [ 'Restangular', function (Restangular) {
   return Restangular.all('jobs');
   }
 ]);
