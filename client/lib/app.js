angular.module('myHealth', [
							'angular-meteor',
							'ui.router',
							'accounts.ui',
							'angularUtils.directives.dirPagination',
							  'uiGmapgoogle-maps']);
function onReady() {
  angular.bootstrap(document, ['myHealth'], {
    strictDi: true
  });
} 

if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
angular.element(document).ready(onReady);