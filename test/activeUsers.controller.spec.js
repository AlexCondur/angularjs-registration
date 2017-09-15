describe('Controller: ActiveUsersController', function() {
    
    beforeEach(module('app'));

    var $controller,
        activeCtrl,
        mockLocalData,
        mockUserService,
        $q,
        $scope,
        deferred;

    beforeEach(inject(function(_$controller_, _userService_, _$q_, _$rootScope_) {

        $controller = _$controller_;
        mockUserService = _userService_;

        $scope = _$rootScope_.$new();
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

        spyOn(mockUserService, 'getUsers').and.callThrough();
        
        activeCtrl = $controller('ActiveUsersController', { localData: mockLocalData, userService: mockUserService });

    }));

    it('should be defined', function() {

        expect(activeCtrl).toBeDefined(); 

    });

    it('should set the view model object localData', function() {

        expect(activeCtrl.users).toEqual(mockLocalData);

    });

});