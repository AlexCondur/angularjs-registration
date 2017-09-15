var app = angular
	.module('app', ['appTemplates', 'ui.router', 'ngStorage', 'angular-md5'])
	.config(function ($urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
	});