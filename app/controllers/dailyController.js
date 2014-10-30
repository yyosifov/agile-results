define([], function() {
    return ['$scope', function($scope) {
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

        $scope.dailyName = 'Hello from Daily';
    }];
});