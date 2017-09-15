beforeEach(function(){
    angular.module('angular-md5',[]);
    module('angular-md5');

    module(function($provide) {
        $provide.service('md5', function() {
            this.createHash = jasmine.createSpy('createHash').and.callFake(function(text) {          
                return text;
            });
        });
    });
});