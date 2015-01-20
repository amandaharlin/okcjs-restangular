'use strict';
JobApp
.config(['$stateProvider',
function rolodex($stateProvider) {

    function resolveJobs(JobResourceRestangular){
      return JobResourceRestangular.getList();
    }

    var rolodexResolve = {
      jobs : resolveJobs
    };

    function rolodexCtrl($scope, $stateParams, jobs) {
      $scope.rolodex = jobs;
      $scope.resttype = 'restangular';
    }

    var rolodexView = {
      url: '/rolodex',
      templateUrl: 'views/rolodex.html',
      controller: rolodexCtrl,
      resolve: rolodexResolve
    };

    $stateProvider
    .state('restangular.rolodex', rolodexView);
  }
]);
