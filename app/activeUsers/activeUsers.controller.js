app
	.controller('ActiveUsersController', ActiveUsersController);

function ActiveUsersController(localData) {
	this.users = localData;
};