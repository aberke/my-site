var mySiteApp = angular.module('mySiteApp', ['ngRoute'])

	.config(function($locationProvider) {

		$locationProvider.html5Mode(true);

	})

	.config(function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: '/static/html/partials/index.html',
			})
			.when('/resume-pdf', {
				templateUrl: '/static/html/partials/resume-pdf.html',
			})
			.otherwise({
				redirectTo: '/'
			});
});

	// TODO: put App.config --> routes in routes.js