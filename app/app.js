define(['angular',
    'uiRouter',
    './components/common/common',
    './components/daily/daily'
], function (angular) {
    var agileResultsApp = angular.module('agileResults', ['ui.router', 'common', 'daily']);
    var ngInjector = angular.injector(['ng']),
        $window = ngInjector.get('$window');

    var config = {
        'httpServerUrl': '//' + $window.location.host + '/' // 'http://localhost:5000/'
    };
    agileResultsApp.constant('config', config);

    return agileResultsApp;
});