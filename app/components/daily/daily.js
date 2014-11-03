define([
    'angular',
    'components/daily/controllers/dailyController'
], function(angular, dailyController) {
    var mod = angular.module('daily', ['ui.router']);

    mod.config(function ($stateProvider) {
        $stateProvider.state('daily', {
            url: '/daily',
            templateUrl: 'components/daily/partials/daily.html',
            abstract: true
        }).state('daily.manage', {
                url: '/manage',
                templateUrl: 'components/daily/partials/daily-manage.html',
                controller: dailyController
            })
            .state('daily.history', {
                url: '/history',
                templateUrl: 'components/daily/partials/daily-history.html'
            });
    });

    return mod;
});