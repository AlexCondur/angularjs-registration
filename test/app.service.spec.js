describe('User Service: ', function () {

    var userService,
        $q,
        $localStorage,
        defaultUser,
        $scope,
        func,
        deferred,
        user,
        userGiven,
        existentUser,
        md5;

    beforeEach(module('app'));

    beforeEach(module('angular-md5'));

    beforeEach(inject(function (_userService_, _$q_, _$localStorage_, _$rootScope_, _md5_) {

        userService = _userService_;
        $q = _$q_;
        $localStorage = _$localStorage_;
        $scope = _$rootScope_.$new();
        deferred = _$q_.defer();
        md5 = _md5_;
        user = {
            "firstName": "Roxana",
            "lastName": "Grivei",
            "tel": "0728129382",
            "email": "woofwoof@yahoo.com",
            "age": "21",
            "gender": "F",
            "selected": false
        };
        userGiven = {
            "firstName": "Roxana",
            "lastName": "Grivei",
            "tel": "0728129382",
            "email": "woofwoof@yahoo.com",
            "age": "21",
            "gender": "F",
            "selected": false
        };
        existentUser = {
            "firstName": "Marcel",
            "lastName": "Pavel",
            "tel": "0744222111",
            "email": "mpavel@eurovision.ro",
            "age": "50",
            "gender": "M",
            "selected": false
        }

        //set the default object
        defaultObj = [{
            "firstName": "Marcel",
            "lastName": "Pavel",
            "tel": "0744222111",
            "email": "mpavel@eurovision.ro",
            "age": "50",
            "gender": "M",
            "selected": false,
            "id": "MarcelPavel"
        }];

    }));

    describe('The getUsers function', function () {

        it('should initialize the users object with itself', function () {

            $localStorage.users = defaultObj;

            expect($localStorage.users).toEqual(defaultObj);

        });

        it('should initialize the users object with an empty array', function () {

            $localStorage.users = undefined;

            userService.getUsers();

            expect($localStorage.users).toEqual([]);

        });

        it('should resolve the promise if $localStorage.users is defined', function () {
            
            $localStorage.users = defaultObj;

            userService
                .getUsers()
                .then(function (res) {
                    expect(res).toBe($localStorage.users);
                });
            $scope.$digest();

        });

    });

    describe('The addUser function', function () {

        beforeEach(function () {

            $localStorage.users = defaultObj;

        });

        it('should resolve the promise if the user is new', function () {

            var userId = md5.createHash(userGiven.firstName + userGiven.lastName);

            userService
                .addUser(userGiven)
                .then(function (res) {
                    expect(res).not.toBe($localStorage.users[0]);
                    expect(res.id).toBe(userId);
                });
            $scope.$digest();

        });

        it('should reject the promise if the user already exists', function () {

            userService
                .addUser(existentUser)
                .catch(function (error) {
                    expect(error).toBe('This user already exists! Try to register using a different name');
                });
            $scope.$digest();

        });

    });

    describe('The getUser function', function () {

        beforeEach(function () {

            $localStorage.users = defaultObj;

        });

        it('should resolve the promise if the user already exists', function () {

            userService
                .getUser(existentUser)
                .then(function (res) {
                    expect(res).toBe($localStorage.users[0]);
                });
            $scope.$digest();

        });

        it('should reject the promise if the user cannot be found', function () {

            userService
                .getUser(user)
                .catch(function (error) {
                    expect(error).toBe('Something went wrong in finding the requested item in the local storage!');
                });
            $scope.$digest();

        });

    });

    describe('The updateUser function', function () {

        beforeEach(function () {

            $localStorage.users = defaultObj;

        });

        it('should resolve the promise if the user was changed', function () {

            userService
                .updateUser(existentUser)
                .then(function (res) {
                    expect(res).not.toBe($localStorage.users[0]);
                });
            $scope.$digest();

        });

    });

});