define([], function() {
    return function() {
        return {
            restrict: 'E',
            scope: {
                item: '=item'
            },
            templateUrl: 'components/common/directives/goal/goal.html'
        };
    };
});