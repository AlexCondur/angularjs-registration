var app = angular
	.module('app', ['appTemplates', 'ui.router', 'ngStorage', 'angular-md5'])
	.config(['$urlRouterProvider', function ($urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
	}]);