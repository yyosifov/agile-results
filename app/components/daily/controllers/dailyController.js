define(['angular', 'lodash'], function (angular, _) {
    return ['$scope', 'GoalsService', function ($scope, GoalsService) {
        var maxGoalsCount = 5;

        var addEmptyGoal = function() {
            $scope.goals[$scope.goals.length] = goalsService.wrapGoal({
                Type: 1 /*daily, todo: enum*/
            }); // can add method emptyGoal() or get..
        }

        $scope.goals = [];
        $scope.$on('hello', function(event, item) {
            var index = $scope.goals.indexOf(item);
            if(index > -1) {
                $scope.goals.splice(index, 1);

                addEmptyGoal();
            }
        });

        var goalsService = new GoalsService();
        goalsService.getDaily(new Date()).then(function (goals) {
            $scope.goals = angular.copy(goals || []);
            $scope.goals = _.map($scope.goals, goalsService.wrapGoal);

            while ($scope.goals.length < maxGoalsCount) {
                addEmptyGoal();
            }
        }, function (err) {
            console.log('cannot retrieve daily goals. error: ' + err);
        });

    }];
});