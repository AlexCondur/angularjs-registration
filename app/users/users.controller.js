app
	.controller('UsersController', UsersController)

function UsersController(localData, userService) {
	var vm = this;
	vm.users = localData;
	vm.formData = {};

	vm.registerUser = registerUser;
	vm.deleteUser = deleteUser;
	vm.editUser = editUser;
	vm.saveChanges = saveChanges;
	vm.cancelEdit = cancelEdit;
	vm.resetForm = resetForm;


	function registerUser() {

		if (vm.form.$valid) {

			userService.addUser(vm.formData)
				.then(function (data) {

					vm.users.push(data);
					vm.resetForm();

				})
				.catch(function (error) {

					alert('Promise rejected with: ' + error);

				})

		}

	};

	function deleteUser(user) {

		userService.getUser(user)
			.then(function (data) {

				_.remove(vm.users, data);

			})
			.catch(function (error) {

				alert('Promise rejected with: ' + error);

			})

	};

	function editUser(user) {

		userService.getUser(user)
			.then(function (data) {

				vm.showButton = true;
				vm.formData = data;

			})
			.catch(function (error) {

				alert('Promise rejected with: ' + error);

			})

	};

	function saveChanges() {

		if (vm.form.$valid) {

			userService.updateUser(vm.formData)
				.then(function (data) {

					vm.showButton = false;
					vm.resetForm();

				})

		}

	};

	function cancelEdit() {

		vm.showButton = false;
		vm.resetForm();

	}

	function resetForm() {

		vm.formData = {};
		vm.form.$setPristine();
		vm.form.$setUntouched();

	}

};