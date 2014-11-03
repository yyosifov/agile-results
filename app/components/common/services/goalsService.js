define(['angular'], function (angular) {
    return ['config', '$http', '$q', function (config, $http, $q) {
        var serverUrl = config.httpServerUrl;
        var dailyUrl = serverUrl + 'api/v1/agile/daily'; // can use $resource

        var GoalsService = function () {

        }

        GoalsService.prototype.getDaily = function (now) {
            var deferred = $q.defer();

            var date = splitDate(now);
            var url = dailyUrl + '?Day=' + date.Day + '&Month=' + date.Month + '&Year=' + date.Year;
            $http.get(url).then(function (res) {
                //alert(JSON.stringify(res));
                deferred.resolve(res.data.Result);
            });

            return deferred.promise;
        };

        var splitDate = function (now) {
            return {
                Day: now.getDate(),
                Month: now.getMonth(),
                Year: now.getFullYear()
            };
        };

        var generateGuid = function () {
            var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
            return guid;
        };

        GoalsService.prototype.wrapGoal = function (goal, type) {
            var wrappedGoal = angular.copy(goal);
            wrappedGoal.IsNew = !goal.Id;
            wrappedGoal.Id = goal.Id || generateGuid();
            wrappedGoal.Type = goal.Type || type;
            wrappedGoal.Data = wrappedGoal.Data || {};
            if (wrappedGoal.Type === 1) {/*daily*/
                if (!wrappedGoal.Data.Date) {
                    var now = splitDate(new Date());
                    wrappedGoal.Data.Date = now;
                }
            }

            wrappedGoal.save = angular.bind(this, function (item) {
                if (item.IsNew) {
                    $http.post(dailyUrl, item, {
                        'Content-Type': 'application/json'
                    }).then(function() {
                            item.IsNew = false; // no longer new.
                        }, function() {
                            // error occured, handle it here;
                        });


                }
            }, wrappedGoal);

            return wrappedGoal;
        };

        return GoalsService;
    }];
});