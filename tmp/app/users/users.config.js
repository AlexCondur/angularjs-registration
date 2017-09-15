app
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider.state('users', {
			url: '/users',
			templateUrl: 'app/users/users.html',
			controller: 'UsersController',
			controllerAs: 'usersCtrl',
			resolve: {
				localData: ['userService', function (userService) {
					return userService.getUsers().then(function (data) {
						return data;
					})
				}]
			}
		});
	}]);