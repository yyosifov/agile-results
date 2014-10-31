define(['angular', 'lodash'], function(angular, _) {
    return ['$scope', 'GoalsService', function($scope, GoalsService) {
        $scope.goals = [];
        $scope.dailyName = 'Hello from Daily';

        var goalsService = new GoalsService();
        goalsService.getDaily(new Date()).then(function(goals) {
            $scope.goals = angular.copy(goals);

            _.each($scope.goals, function(item) {
                item.IsNew = false;
            });
        }, function(err) {
            console.log('cannot retrieve daily goals. error: ' + err);
        });

        /*
        $scope.goals = [
            {
                isNew: true,
                id: 1
            },
            {
                isNew: true,
                id: 2
            },
            {
                isNew: false,
                id: 3
            }
        ];
*/
    }];
});