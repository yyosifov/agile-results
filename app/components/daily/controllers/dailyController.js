define(['angular', 'lodash'], function (angular, _) {
    return ['$scope', 'GoalsService', '$stateParams', '$location',
        function ($scope, GoalsService, $stateParams, $location) {
        // initialize date picker.
        var maxGoalsCount = 5;
        var goalsService = new GoalsService();

        var addEmptyGoal = function () {
            $scope.goals[$scope.goals.length] = goalsService.wrapGoal({
                Type: 1 /*daily, todo: enum*/
            }); // can add method emptyGoal() or get..
        }

        $scope.goals = [];
        $scope.$on('goal-deleted', function (event, item) {
            var index = $scope.goals.indexOf(item);
            if (index > -1) {
                $scope.goals.splice(index, 1);

                addEmptyGoal();
            }
        });

        var isValidDay = function (params) {
            return (params.day && params.day >= 1 && params.day <= 31
                && params.month && params.month >= 0 && params.month <= 11 //JS counts months from 0 to 11
                && params.year && params.year >= 1900 && params.month < 3000);
        };

        var now = new Date();
        // TODO: use $formatters
        $scope.date =  (now.getMonth()+1) + '/' + now.getDate() + '/' + now.getFullYear();//now.getFullYear() + '/' + now.getMonth() + '/' + now.getDay();
        if (isValidDay($stateParams)) {
            //$scope.date = $stateParams.year + '/' + $stateParams.month + '/' + $stateParams.day;
            $scope.date = $stateParams.month + '/' + $stateParams.day + '/' + $stateParams.year;
        }

        var loadGoals = function () {
            goalsService.getDaily($scope.date).then(function (goals) {
                $scope.goals = angular.copy(goals || []);
                $scope.goals = _.map($scope.goals, goalsService.wrapGoal);

                while ($scope.goals.length < maxGoalsCount) {
                    addEmptyGoal();
                }
            }, function (err) {
                console.log('cannot retrieve daily goals. error: ' + err);
            });
        };

        loadGoals();

        $scope.$watch('date', function () {
            //alert('watch: ' + $scope.date);
            //'daily/manage/' +
            $location.path('daily/manage/' + $scope.date);
            loadGoals();
        });
    }];
});