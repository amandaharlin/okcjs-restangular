'use strict';

JobApp
  .config(['$stateProvider',
    function contact($stateProvider) {

      function resolveJob(JobResourceRestangular, $stateParams){
        return JobResourceRestangular.get($stateParams.id);
      }

      function contactCtrl($scope, job) {
        $scope.contact = job;
        $scope.resttype = 'restangular';
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

      $stateProvider.state('restangular.contact', contactView);
    }
]);
