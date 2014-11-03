define([], function() {
    return function() {
        return {
            restrict: 'E',
            scope: {
                goals: '=goals'
            },
            templateUrl: 'components/common/directives/goal/goalList.html',
            link: function($scope, $element, attrs) {
            }
        };
    };
});