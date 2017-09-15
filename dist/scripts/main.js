function HomeController(){this.title="Welcome!"}function ActiveUsersController(t){this.users=t}function UsersController(t,e){var r=this;r.users=t,r.formData={},r.registerUser=function(){r.form.$valid&&e.addUser(r.formData).then(function(t){r.users.push(t),r.resetForm()}).catch(function(t){alert("Promise rejected with: "+t)})},r.deleteUser=function(t){e.getUser(t).then(function(t){_.remove(r.users,t)}).catch(function(t){alert("Promise rejected with: "+t)})},r.editUser=function(t){e.getUser(t).then(function(t){r.showButton=!0,r.formData=t}).catch(function(t){alert("Promise rejected with: "+t)})},r.saveChanges=function(){r.form.$valid&&e.updateUser(r.formData).then(function(t){r.showButton=!1,r.resetForm()})},r.cancelEdit=function(){r.showButton=!1,r.resetForm()},r.resetForm=function(){r.formData={},r.form.$setPristine(),r.form.$setUntouched()}}angular.module("appTemplates",[]).run(["$templateCache",function(t){t.put("app/activeUsers/activeUsers.html",'<div class="container">\n\t<input type="text" class="form-control ng-pristine ng-valid" id="search" ng-model="searchKey" placeholder="Search">\n\t<h3 class="categ">Utilizatori activi:</h3>\n\t\t<div class="table-responsive">\n\t\t\t<table class="table table-bordered table-hover">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Nume</th>\n\t\t\t\t\t\t<th>Prenume</th>\n\t\t\t\t\t\t<th>Telefon</th>\n\t\t\t\t\t\t<th>E-mail</th>\n\t\t\t\t\t\t<th>Vârstă</th>\n\t\t\t\t\t\t<th>Gen</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr ng-repeat="user in activeCtrl.users | filter: searchKey" ng-if="user.selected === true">\n\t\t\t\t\t\t<td>{{user.lastName}}</td>\n\t\t\t\t\t\t<td>{{user.firstName}}</td>\n\t\t\t\t\t\t<td>{{user.tel}}</td>\n\t\t\t\t\t\t<td>{{user.email}}</td>\n\t\t\t\t\t\t<td>{{user.age}}</td>\n\t\t\t\t\t\t<td>{{user.gender}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>'),t.put("app/home/home.html",'<div class="container">\n\t<h1 id="title_home">{{homeCtrl.title}}</h1>\n</div>'),t.put("app/users/users.html",'<div class="container">\n\t<div class="row">\n\t\t<div class="col-md-4 col-xs-12">\n\t\t\t<h3 class="categ">Registration form:</h3>\n\t\t\t<form name="usersCtrl.form" novalidate>\n\t\t\t\t\x3c!-- firstName --\x3e\n\t\t\t\t<div class="form-group" ng-class="{\'has-error\' : usersCtrl.form.firstName.$invalid && !usersCtrl.form.firstName.$pristine }">\n\t\t\t\t\t<input type="text" pattern="[a-zA-Z- ]+" name="firstName" placeholder="First Name" class="form-control" ng-model="usersCtrl.formData.firstName" ng-maxlength="40" required>\n\t\t\t\t\t<p ng-show="usersCtrl.form.firstName.$invalid && !usersCtrl.form.firstName.$pristine" class="help-block">Enter a valid name using a maximum or 40 alphabetic characters!</p>\n\t\t\t\t</div>\n\n\t\t\t\t\x3c!-- lastName --\x3e\n\t\t\t\t<div class="form-group" ng-class="{\'has-error\' : usersCtrl.form.lastName.$invalid && !usersCtrl.form.lastName.$pristine }">\n\t\t\t\t\t<input type="text" pattern="[a-zA-Z- ]+" name="lastName" placeholder="Last Name" class="form-control" ng-model="usersCtrl.formData.lastName" ng-maxlength="40" required>\n\t\t\t\t\t<p ng-show="usersCtrl.form.lastName.$invalid && !usersCtrl.form.lastName.$pristine" class="help-block">Enter a valid name using a maximum or 40 alphabetic characters!</p>\n\t\t\t\t</div>\n\n\t\t\t\t\x3c!-- telephone --\x3e\n\t\t\t\t<div class="form-group" ng-class="{\'has-error\' : usersCtrl.form.tel.$invalid && !usersCtrl.form.tel.$pristine }">\n\t\t\t\t\t<input type="text" pattern="[0-9.]+" name="tel" placeholder="Phone no." class="form-control" ng-model="usersCtrl.formData.tel" ng-minlength="10" ng-maxlength="10" required>\n\t\t\t\t\t<p ng-show="usersCtrl.form.tel.$invalid && !usersCtrl.form.tel.$pristine" class="help-block">Enter a valid phone number!</p>\n\t\t\t\t</div>\n\n\t\t\t\t\x3c!-- email --\x3e\n\t\t\t\t<div class="form-group" ng-class="{\'has-error\' : usersCtrl.form.email.$invalid && !usersCtrl.form.email.$pristine }">\n\t\t\t\t\t<input type="email" pattern="[^@]+@[^@]+\\.[a-zA-Z]{2,6}" name="email" placeholder="Email" class="form-control" ng-model="usersCtrl.formData.email" required>\n\t\t\t\t\t<p ng-show="usersCtrl.form.email.$invalid && !usersCtrl.form.email.$pristine" class="help-block">Enter a valid email address(Ex: useremail@domain.com)!</p>\n\t\t\t\t</div>\n\n\t\t\t\t\x3c!-- age --\x3e\n\t\t\t\t<div class="form-group" ng-class="{\'has-error\' : usersCtrl.form.age.$invalid && !usersCtrl.form.age.$pristine }">\n\t\t\t\t\t<input type="number" min="7" max="122" name="age" placeholder="Age" class="form-control" ng-model="usersCtrl.formData.age" required>\n\t\t\t\t\t<p ng-show="usersCtrl.form.age.$invalid && !usersCtrl.form.age.$pristine" class="help-block">Enter a valid age!</p>\n\t\t\t\t</div>\n\n\t\t\t\t\x3c!-- gender --\x3e\n\t\t\t\t<div class="form-group" ng-class="{\'has-error\' : usersCtrl.form.gender.$invalid && !usersCtrl.form.gender.$pristine }">\n\t\t\t\t\t<select name="gender" class="form-control" ng-model="usersCtrl.formData.gender" required>\n\t\t\t\t\t\t<option value>Gender</option>\n\t\t\t\t\t\t<option value = "M">M</option>\n\t\t\t\t\t\t<option value = "F">F</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<p ng-show="usersCtrl.form.gender.$invalid && !usersCtrl.form.gender.$pristine" class="help-block">Select an option!</p>\n\t\t\t\t</div>\n\n\t\t\t\t\x3c!-- buttons --\x3e\n\t\t\t\t<button ng-hide="usersCtrl.showButton" type="button" class="btn btn-primary" ng-disabled="usersCtrl.form.$invalid" ng-click="usersCtrl.registerUser()">Register</button>\n\t\t\t\t<button ng-hide="usersCtrl.showButton" type="button" class="btn btn-danger" ng-disabled="usersCtrl.form.$pristine" ng-click="usersCtrl.resetForm()">Reset form</button>\n\t\t\t\t<button ng-show="usersCtrl.showButton" type="button"  class="btn btn-warning" ng-disabled="usersCtrl.form.$invalid" ng-click="usersCtrl.saveChanges()">Save</button>\n\t\t\t\t<button ng-show="usersCtrl.showButton" type="button" class="btn btn-danger" ng-disabled="usersCtrl.form.$invalid" ng-click="usersCtrl.cancelEdit()">Cancel</button>\n\t\t\t</form>\n\t\t</div>\n\n\t\t<div class="col-md-8 col-xs-12" align="center">\n\t\t\t<h3 class="categ">Utilizatori inregistrați:</h3>\n\t\t\t<div class="table-responsive">\n\t\t\t\t<table class="table table-bordered table-hover">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th>First Name</th>\n\t\t\t\t\t\t\t<th>Last Name</th>\n\t\t\t\t\t\t\t<th>Phone number</th>\n\t\t\t\t\t\t\t<th>Email</th>\n\t\t\t\t\t\t\t<th>Age</th>\n\t\t\t\t\t\t\t<th>Gender</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr ng-repeat="user in usersCtrl.users">\n\t\t\t\t\t\t\t<td style="white-space:nowrap;">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<button class="btn btn-sm btn-danger" ng-click="usersCtrl.deleteUser(user)"><i class="fa fa-trash" aria-hidden="true"></i></button>\n\t\t\t\t\t\t\t\t\t<button class="btn btn-sm btn-warning" ng-click="usersCtrl.editUser(user)"><i class="fa fa-pencil" aria-hidden="true"></i></button>\n\t\t\t\t\t\t\t\t\t<input type="checkbox" ng-model="user.selected">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>{{user.firstName}}</td>\n\t\t\t\t\t\t\t<td>{{user.lastName}}</td>\n\t\t\t\t\t\t\t<td>{{user.tel}}</td>\n\t\t\t\t\t\t\t<td>{{user.email}}</td>\n\t\t\t\t\t\t\t<td>{{user.age}}</td>\n\t\t\t\t\t\t\t<td>{{user.gender}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>')}]);var app=angular.module("app",["appTemplates","ui.router","ngStorage","angular-md5"]).config(["$urlRouterProvider",function(t){t.otherwise("/home")}]);app.factory("userService",["$localStorage","$q","md5",function(t,e,r){return{getUsers:function(){var r=e.defer();return t.users=t.users||[],t.users&&r.resolve(t.users),r.promise},addUser:function(n){var s=e.defer(),a=r.createHash(n.firstName+n.lastName),l=t.users,o={firstName:n.firstName,lastName:n.lastName,tel:n.tel,email:n.email,age:n.age,gender:n.gender,selected:!1,id:a};return _.find(l,{id:a})?s.reject("This user already exists! Try to register using a different name"):s.resolve(o),s.promise},getUser:function(r){var n=e.defer(),s=t.users,a=_.find(s,r);return a?n.resolve(a):n.reject("Something went wrong in finding the requested item in the local storage!"),n.promise},updateUser:function(n){var s=e.defer(),a=r.createHash(n.firstName+n.lastName),l=(t.users,{firstName:n.firstName,lastName:n.lastName,tel:n.tel,email:n.email,age:n.age,gender:n.gender,selected:!1,id:a});return l&&s.resolve(l),s.promise}}}]),app.config(["$stateProvider",function(t){t.state("home",{url:"/home",templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"homeCtrl"})}]),app.config(["$stateProvider",function(t){t.state("activeUsers",{url:"/activeUsers",templateUrl:"app/activeUsers/activeUsers.html",controller:"ActiveUsersController",controllerAs:"activeCtrl",resolve:{localData:["userService",function(t){return t.getUsers().then(function(t){return t})}]}})}]),app.config(["$stateProvider",function(t){t.state("users",{url:"/users",templateUrl:"app/users/users.html",controller:"UsersController",controllerAs:"usersCtrl",resolve:{localData:["userService",function(t){return t.getUsers().then(function(t){return t})}]}})}]),app.controller("HomeController",HomeController),ActiveUsersController.$inject=["localData"],app.controller("ActiveUsersController",ActiveUsersController),UsersController.$inject=["localData","userService"],app.controller("UsersController",UsersController);