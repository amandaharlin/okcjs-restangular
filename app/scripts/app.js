  'use strict';

  var applicationDependencies =  [
  'ui.router',
  'ngResource',
  'restangular'
  ];

  var JobApp = angular
  .module('jobApp', applicationDependencies);

  function defaultStateProvider($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
    .otherwise('/');

    var jobHomeView = {
      url: '/',
      templateUrl: './views/main.html',
    };

    $stateProvider
        .state('home', jobHomeView)
        .state('http', {
          url : '/http',
          template: '<h1>$http</h1><ui-view/>',
          abstract: true
        })
        .state('resource', {
          url : '/resource',
          template: '<h1>$resource</h1><ui-view/>',
          abstract: true
        })
        .state('restangular', {
          url : '/restangular',
          template: '<h1>Restangular</h1><ui-view/>',
          abstract: true
        });
  }

  function run($rootScope) {


    $rootScope.$on('$stateChangeError', function(){

      console.error(arguments);

    });

    console.log('the app is running', $rootScope);
  }

  JobApp
  .config(['$stateProvider', '$urlRouterProvider', defaultStateProvider])
  .run(['$rootScope', run]);


  window.JobApp = JobApp;
  window.angular = window.angular || angular;
