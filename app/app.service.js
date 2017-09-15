app
	.factory("userService", function($localStorage, $q, md5) {

		var service = {

			getUsers: getUsers,
			addUser: addUser,
			getUser: getUser,
			updateUser: updateUser

		}

		return service;



		function getUsers() {
			var defer = $q.defer();
			$localStorage.users = $localStorage.users || [];

			if ($localStorage.users) {
				
				defer.resolve($localStorage.users);
				
			}

			return defer.promise;
		}

		function addUser(user) {
			var defer = $q.defer();
			var idUser = md5.createHash(user.firstName + user.lastName);
			var usersList = $localStorage.users;
			var newUser = {
				firstName: user.firstName,
				lastName: user.lastName,
				tel: user.tel,
				email: user.email,
				age: user.age,
				gender: user.gender,
				selected: false,
				id: idUser
			};
			var userToFind = _.find(usersList, { 'id': idUser });

			if (!userToFind) {

				defer.resolve(newUser);

			}

			else {

				defer.reject("This user already exists! Try to register using a different name");

			}

			return defer.promise;
		}

		function getUser(user) {
			var defer = $q.defer();
			var usersList = $localStorage.users;
			var userToFind = _.find(usersList, user);

			if (userToFind) {

				defer.resolve(userToFind);

			}

			else {

				defer.reject("Something went wrong in finding the requested item in the local storage!");

			}

			return defer.promise;
		}

		function updateUser(user) {
			var defer = $q.defer();
			var idUser = md5.createHash(user.firstName + user.lastName);
			var usersList = $localStorage.users;
			var changedUser = {
				firstName: user.firstName,
				lastName: user.lastName,
				tel: user.tel,
				email: user.email,
				age: user.age,
				gender: user.gender,
				selected: false,
				id: idUser
			};

			if (changedUser) {

				defer.resolve(changedUser);

			}

			return defer.promise;
		}

	});