'use strict';

JobApp
  .config(['$stateProvider',
    function contact($stateProvider) {

      function resolveJob($http, $q, $stateParams){

        var dfd = $q.defer();
        var gems = $http
          .get('/jobs/' + $stateParams.id)
          .success(function(data){
            dfd.resolve(data);
          });

        return dfd.promise;
      }
      function contactCtrl($scope, job) {
        $scope.contact = job;
        $scope.resttype = 'http';
      }

      var contactResolve = {
        job: resolveJob
      };

      var contactView = {
        url: '/contact/:id',
        templateUrl: 'views/contact.html',
        controller: contactCtrl,
        resolve: contactResolve
      };

      $stateProvider.state('http.contact', contactView);
    }
]);
