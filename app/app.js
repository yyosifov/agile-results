define(['angular', 'uiRouter', 'menu', 'dailyController', 'goal', 'goalList'], function (angular) {
    var agileResultsApp = angular.module('agileResults', ['ui.router']);
    var dailyController = require('dailyController');

    agileResultsApp.config(function ($stateProvider, $urlRouterProvider) {
        //$urlRouterProvider.otherwise('/daily');

        $stateProvider.state('daily', {
            url: '/daily',
            templateUrl: 'partials/daily.html',
            abstract: true
        }).state('daily.manage', {
                url: '/manage',
                templateUrl: 'partials/daily-manage.html',
                controller: dailyController
            })
            .state('daily.history', {
            url: '/history',
            templateUrl: 'partials/daily-history.html'
        });
    });

    agileResultsApp.directive('menu', require('menu'));
    agileResultsApp.directive('goal', require('goal'));
    agileResultsApp.directive('goalList', require('goalList'));

    return agileResultsApp;
});
