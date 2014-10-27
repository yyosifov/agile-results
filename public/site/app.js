define(['angular', 'uiRouter'], function(angular) {
    var agileResultsApp = angular.module('agileResults', ['ui.router']);

    agileResultsApp.config(function($stateProvider) {
        $stateProvider.state('base', {
                url: '/',
                templateUrl: 'partials/main.html'
            });
    });

    return agileResultsApp;
});
