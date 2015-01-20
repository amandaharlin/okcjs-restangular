'use strict';

/**
 * @ngdoc function
 * @name jobApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jobApp
 */
angular.module('jobApp')
  .controller('MainCtrl', function ($scope, $state) {
    $scope.$state = $state;
  });
