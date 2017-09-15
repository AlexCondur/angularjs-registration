describe('Users Controller:', function () {

    beforeEach(module('app'));


    var $controller,
        $q,
        deferred,
        usersCtrl,
        mockLocalData,
        mockUserService,
        $scope,
        newUser;


    beforeEach(inject(function (_$controller_, _$q_, _$rootScope_, userService) {

        $controller = _$controller_;
        $q = _$q_;
        deferred = _$q_.defer();
        mockLocalData = [{
            "firstName": "Marcel",
            "lastName": "Pavel",
            "tel": "0744222111",
            "email": "mpavel@eurovision.ro",
            "age": "50",
            "gender": "M",
            "selected": false,
            "id": "9476d417bfbf5da3576367a961b71750"
        }];
        mockUserService = userService;
        $scope = _$rootScope_.$new();
        newUser = {
            "firstName": "Roxana",
            "lastName": "Grivei",
            "tel": "0728129382",
            "email": "woofwoof@yahoo.com",
            "age": "21",
            "gender": "F",
            "selected": false,
            "id": "ad3e33345ae9219ccfba5c3f70ce7585"
        };

        usersCtrl = $controller('UsersController', {
            $scope: $scope,
            localData: mockLocalData,
            userService: mockUserService
        });

    }));

    beforeEach(function () {

        usersCtrl.form = {
            $setPristine: jasmine.createSpy('$setPristine'),
            $setUntouched: jasmine.createSpy('$setUntouched'),
            $valid: true
        };

        spyOn(usersCtrl, 'resetForm').and.callThrough();

    });


    it('should initialize the users list with an array', function () {

        expect(usersCtrl.users.length).toBeGreaterThan(0);
        expect(usersCtrl.users).toEqual(mockLocalData);

    });

    it('should have formData defined and this to be an object', function () {

        expect(usersCtrl.formData).toBeDefined();
        expect(typeof (usersCtrl.formData)).toBe('object');

    });

    describe('The registerUser function', function () {

        beforeEach(function () {

            spyOn(mockUserService, 'addUser').and.returnValue(deferred.promise);

            usersCtrl.registerUser();

        });

        it('should call addUser on userService on calling registerUser', function () {

            expect(mockUserService.addUser).toHaveBeenCalled();

        });

        it('should call resetForm on promise resolve and the newUser to be pushed into the users object', function () {

            deferred.resolve(newUser);

            $scope.$apply();

            expect(usersCtrl.resetForm).toHaveBeenCalled();
            expect(usersCtrl.users.length).toBe(2);

        });

        it('should keep things the same at promise reject', function () {

            deferred.reject();

            $scope.$apply();

            expect(usersCtrl.resetForm).not.toHaveBeenCalled();
            expect(usersCtrl.users.length).toBe(1);

        });

    });

    describe('The deleteUser function', function () {

        beforeEach(function () {

            spyOn(mockUserService, 'getUser').and.returnValue(deferred.promise);

            usersCtrl.deleteUser(newUser);

        });

        it('should call getUser on userService on calling deleteUser', function () {

            expect(mockUserService.getUser).toHaveBeenCalled();

        });

        it('should delete the only user in the users object on promise resolve', function () {

            deferred.resolve({
                "firstName": "Marcel",
                "lastName": "Pavel",
                "tel": "0744222111",
                "email": "mpavel@eurovision.ro",
                "age": "50",
                "gender": "M",
                "selected": false,
                "id": "9476d417bfbf5da3576367a961b71750"
            });

            $scope.$apply();

            expect(usersCtrl.users).toEqual([]);

        });

        it('should keep things the same at promise reject', function () {

            deferred.reject();

            $scope.$apply();

            expect(usersCtrl.users).toEqual(mockLocalData);

        });

    });

    describe('The editUser function', function () {

        beforeEach(function () {

            spyOn(mockUserService, 'getUser').and.returnValue(deferred.promise);

            usersCtrl.editUser(newUser);

        });

        it('should call getUser on userService on calling editUser', function () {

            expect(mockUserService.getUser).toHaveBeenCalled();

        });

        it('should set showButton value to be true and populate formData with the data returned by the resolved promise', function () {

            deferred.resolve(newUser);

            $scope.$apply();

            expect(usersCtrl.showButton).toBe(true);
            expect(usersCtrl.formData).toEqual(newUser);

        });

        it('should keep things the same at promise reject', function () {

            deferred.reject();

            $scope.$apply();

            expect(usersCtrl.formData).toEqual({});

        });

    });

    describe('The saveChanges function', function () {

        beforeEach(function () {

            spyOn(mockUserService, 'updateUser').and.returnValue(deferred.promise);

            usersCtrl.saveChanges();

        });

        it('should call updateUser on userService on calling saveChanges', function () {

            expect(mockUserService.updateUser).toHaveBeenCalled();

        });

        it('should reset showButton value to false and call the resetForm function at promise resolve', function () {

            deferred.resolve(newUser);

            $scope.$apply();

            expect(usersCtrl.showButton).toBe(false);
            expect(usersCtrl.resetForm).toHaveBeenCalled();

        });

    });

    describe('The cancelEditFunction', function () {

        it('should set the showButton property to false and call the resetForm function', function () {

            usersCtrl.showButton = true;

            usersCtrl.cancelEdit();

            expect(usersCtrl.showButton).toBe(false);
            expect(usersCtrl.resetForm).toHaveBeenCalled();

        });

    });

    describe('The resetForm function', function () {

        it('should reset the form on function call and set it to pristine', function () {

            usersCtrl.formData = {
                "firstName": "Marcel",
                "lastName": "Pavel",
                "tel": "0744222111",
                "email": "mpavel@eurovision.ro",
                "age": "50",
                "gender": "M",
                "selected": false,
                "id": "9476d417bfbf5da3576367a961b71750"
            };

            usersCtrl.resetForm();

            expect(usersCtrl.formData).toEqual({});
            expect(usersCtrl.form.$setPristine).toHaveBeenCalled();
            expect(usersCtrl.form.$setUntouched).toHaveBeenCalled();

        });

    });

});