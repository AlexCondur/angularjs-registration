app
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider.state('activeUsers', {
			url: '/activeUsers',
			templateUrl: 'app/activeUsers/activeUsers.html',
			controller: 'ActiveUsersController',
			controllerAs: 'activeCtrl',
			resolve: {
				localData: ['userService', function (userService) { return userService.getUsers().then(function (data) { return data; }) }]
			}
		})
	}]);