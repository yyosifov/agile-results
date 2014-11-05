/* require */
'use strict';

require.config({
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router',
        'lodash': 'bower_components/lodash/dist/lodash',
        'app': 'app',
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
        'jquery-ui': '//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min'
    },
    shim: {
        'angular': { 'exports': 'angular' },
        'angular-ui-router': ['angular'],
        'lodash': {
            'exports': '_'
        },
        'jquery-ui': {
            exports: '$',
            deps: ['jquery']
        }
    },
    deps: ['app']
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require([
    'angular',
    'app',
    'jquery-ui'
], function(angular, app) {
    angular.element().ready(function() {
        angular.resumeBootstrap([app.name]);
    });
});