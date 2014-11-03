define([
    'angular',
    'components/common/directives/goal/goal',
    'components/common/directives/goal/goalList',
    'components/common/directives/menu/menu',
    'components/common/services/goalsService'
], function(angular, goal, goalList, menu, GoalsService) {
    var mod = angular.module('common', []);

    mod.directive('goal', goal);
    mod.directive('goalList', goalList);
    mod.directive('menu', menu);

    mod.service('GoalsService', GoalsService);

    return mod;
});