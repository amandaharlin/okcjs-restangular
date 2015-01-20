'use strict';
JobApp
.config(['$stateProvider',
function rolodex($stateProvider) {

    function resolveJobs(JobResource){
      return JobResource
        .list() //or query
        .$promise;
    }

    var rolodexResolve = {
      jobs : resolveJobs
    };

    function rolodexCtrl($scope, $stateParams, jobs) {
      $scope.rolodex = jobs;
      $scope.resttype = 'resource';
    }

    var rolodexView = {
      url: '/rolodex',
      templateUrl: 'views/rolodex.html',
      controller: rolodexCtrl,
      resolve: rolodexResolve
    };

    $stateProvider
    .state('resource.rolodex', rolodexView);
  }
]);
