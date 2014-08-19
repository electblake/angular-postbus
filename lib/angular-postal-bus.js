angular.module('ngPostBus')
    .config(function ($provide) {
        $provide.decorator('$rootScope', [
            '$delegate', function ($delegate) {
            Object.defineProperty($delegate.constructor.prototype, 
            '$bus', {
                value: postal,
                enumerable: false
            });

            return $delegate;
        }]);
    });