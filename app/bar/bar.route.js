angular.
    module('app.bar').
    config(function ($stateProvider) {
        $stateProvider.
            state('bar', {
                url: '/bar',
                templateUrl: 'app/bar/bar.html'
            });
    });
