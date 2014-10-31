define([], function() {
    return function() {
        return {
            restrict: 'E',
            scope: {
                goals: '=goals'
            },
            templateUrl: 'directives/goal/goalList.html',
            link: function($scope, $element, attrs) {
            }
        };
    };
});