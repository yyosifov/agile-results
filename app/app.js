define(['angular', 'uiRouter', 'menu'], function (angular) {
    var agileResultsApp = angular.module('agileResults', ['ui.router']);
    var menuDirective = require('menu');

    agileResultsApp.config(function ($stateProvider, $urlRouterProvider) {
        //$urlRouterProvider.otherwise('/daily');

        $stateProvider.state('daily', {
            url: '/daily',
            templateUrl: 'partials/daily.html',
            abstract: true
        }).state('daily.manage', {
                url: '/manage',
                templateUrl: 'partials/daily-manage.html'
            })
            .state('daily.history', {
            url: '/history',
            templateUrl: 'partials/daily-history.html'
        });
    });

    agileResultsApp.directive('menu', menuDirective);

    return agileResultsApp;
});
