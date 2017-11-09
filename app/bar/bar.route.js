angular.
    module('app.bar').
    config(function ($routeProvider) {
        $routeProvider.
            when('/bar', {
                templateUrl: 'app/bar/bar.html'
            });
    });
