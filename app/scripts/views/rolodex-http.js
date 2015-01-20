'use strict';
JobApp
.config(['$stateProvider',
function rolodex($stateProvider) {

    function resolveJobs($http, $q){
      var dfd = $q.defer();
      var gems = $http
        .get('/jobs')
        .success(function(data){
          dfd.resolve(data);
        });
      return dfd.promise;
    }

    var rolodexResolve = {
      jobs : resolveJobs
    };

    function rolodexCtrl($scope, $stateParams, jobs) {
      $scope.rolodex = jobs;
      $scope.resttype = 'http';
    }

    var rolodexView = {
      url: '/rolodex',
      templateUrl: 'views/rolodex.html',
      controller: rolodexCtrl,
      resolve: rolodexResolve
    };

    $stateProvider
      .state('http.rolodex', rolodexView);
  }
]);
