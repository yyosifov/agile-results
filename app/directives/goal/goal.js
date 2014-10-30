define([], function() {
    return function() {
        return {
            restrict: 'E',
            scope: {
                item: '=item'
            },
            templateUrl: 'directives/goal/goal.html'
        };
    };
});