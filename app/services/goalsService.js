define([], function () {
    return ['config', '$http', '$q', function (config, $http, $q) {
        var GoalsService = function () {
            this.url = config.httpServerUrl;
        };

        GoalsService.prototype.getDaily = function (now) {
            var deferred = $q.defer();

            var date = this.splitDate(now);
            $http.get(this.url + 'agile/daily').then(function (res) {
                //alert(JSON.stringify(res));
                deferred.resolve(res.data.Result);
            });

            return deferred.promise;
        };

        GoalsService.prototype.splitDate = function (now) {
            return {
                day: now.getDate(),
                month: now.getMonth(),
                year: now.getFullYear()
            };
        };

        return GoalsService;
    }];
});
