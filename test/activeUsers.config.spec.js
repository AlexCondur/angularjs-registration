describe('ActiveUsers config', function () {

    beforeEach(module('app'));

    var $q,
        deferred,
        users,
        $scope,
        state;

    beforeEach(inject(function (userService, _$q_, _$rootScope_, $state) {

        mockUserService = userService;
        $q = _$q_;
        deferred = _$q_.defer();
        $scope = _$rootScope_.$new();
        state = $state;
        users = [{
            "firstName": "Marcel",
            "lastName": "Pavel",
            "tel": "0744222111",
            "email": "mpavel@eurovision.ro",
            "age": "50",
            "gender": "M",
            "selected": false,
            "id": "MarcelPavel"
        }];

        spyOn(mockUserService, 'getUsers').and.returnValue(deferred.promise);

    }));

    describe('', function () {

        beforeEach(function () {

            state.go('activeUsers');
            $scope.$apply();

        });

        it('should call getUsers on resolve', function () {

            expect(mockUserService.getUsers).toHaveBeenCalled();

        });

        it('should return data on promise resolve', function () {

            deferred.resolve(users);

            $scope.$apply();

            expect(users).toBe(users);

        });

    });

});