angular.module('myHealth').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
	 	$locationProvider.html5Mode(true);

	 	$stateProvider
	 	.state('apts', {
	 		url:'/apts',
	 		template: '<apt-list></apt-list>'
	 	})
	 	.state('aptDetails', {
	 		url:'/apts/:aptId',
	 		template: '<apt-details><apt-details>',
	 		resolve: {
	 			currentUser: ($q) => {
	 				if (Meteor.userId() == null) {
	 					return $q.reject();
	 				}
	 				else {
	 					return $q.resolve();
	 				}
	 			}
	 		}
	 	      }); 

    $urlRouterProvider.otherwise("/apts");
  })
  .run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        $state.go('apts');
      }
    });
  });