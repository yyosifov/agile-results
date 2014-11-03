define(['angular',
    'uiRouter',
    './components/common/common',
    './components/daily/daily'
], function (angular) {
    var agileResultsApp = angular.module('agileResults', ['ui.router', 'common', 'daily']);

    var config = {
        'httpServerUrl': 'http://localhost:5000/'
    };
    agileResultsApp.constant('config', config);

    return agileResultsApp;
});