define([
    'angular',
    'components/common/directives/goal/goal',
    'components/common/directives/goal/goalList',
    'components/common/directives/menu/menu',
    'components/common/services/goalsService',
    'components/common/directives/jqdatepicker/jqdatepicker'
], function(angular, goal, goalList, menu, GoalsService, jqdatepicker) {
    var mod = angular.module('common', []);

    mod.directive('goal', goal);
    mod.directive('goalList', goalList);
    mod.directive('menu', menu);
    mod.directive('jqdatepicker', jqdatepicker);

    mod.service('GoalsService', GoalsService);

    return mod;
});