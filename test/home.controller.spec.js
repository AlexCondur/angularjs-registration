describe('Controller: HomeController', function () {
    
    beforeEach(module('app'));
    
    var $controller;
    var homeCtrl;
    
    beforeEach(inject(function (_$controller_) {

        $controller = _$controller_;
        homeCtrl = $controller('HomeController');        

    }));

    it('sets the greeting message to "Welcome!"', function () {

        expect(homeCtrl.title).toEqual('Welcome!');

   });

});