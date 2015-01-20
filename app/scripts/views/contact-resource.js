'use strict';

JobApp
  .config(['$stateProvider',
    function contact($stateProvider) {

      function resolveJob(JobResource, $stateParams){
        var params = {
          id: $stateParams.id
        };
        return JobResource
          .get(params)
          .$promise;
      }
      
      function contactCtrl($scope, job) {
        $scope.contact = job;
        $scope.resttype = 'resource';
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

      $stateProvider.state('resource.contact', contactView);
    }
]);
