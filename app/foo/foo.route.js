angular.
    module('app.foo').
    config(function ($routeProvider) {
        $routeProvider.
            when('/foo', {
                templateUrl: 'app/foo/foo.html'
            }).
            otherwise({
                redirectTo: '/foo'
            })
    });
