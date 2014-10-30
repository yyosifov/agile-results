define([], function() {
    return function() {
        return {
            restrict: 'E',
            scope: {
                goals: '=goals'
            },
            templateUrl: 'directives/goal/goalList.html',
            link: function($scope, $element, attrs) {
                $scope.hasNewGoals = false;
                for(var i = 0; i < $scope.goals.length; i++) {
                    $scope.hasNewGoals |= $scope.goals[i].isNew;
                }
            }
        };
    };
});