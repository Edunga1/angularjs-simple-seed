angular.
    module('app.foo').
    config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/foo')

        $stateProvider.
            state('foo', {
                url: '/foo',
                templateUrl: 'app/foo/foo.html'
            }).
            state('foo.sub1', {
                url: '/foo-sub1',
                templateUrl: 'app/foo/foo.sub1.html'
            }).
            state('foo.sub2', {
                url: '/foo-sub2',
                templateUrl: 'app/foo/foo.sub2.html'
            });
    });
