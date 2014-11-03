'use strict'

var request = require('request');
var everliveUrl = 'http://api.everlive.com/v1/IBDA1Rw2BbBGUsGE/';

var GoalTypes = {
    Daily: 1,
    Weekly: 2,
    Monthly: 3,
    Yearly: 4
};

var DataService = function () {

};

DataService.prototype.getAgileResultsUrl = function () {
    return everliveUrl + 'AgileResult';
};

DataService.prototype.getDaily = function (date, user, done) {
    var filter = '{"Type": ' + GoalTypes.Daily + ', "Data.Date.Day": ' + date.Day
    + ', "Data.Date.Month": ' + date.Month + ', "Data.Date.Year": ' + date.Year + '}';

    var options = {
        method: 'get',
        url: this.getAgileResultsUrl(),
        headers: {
            'X-Everlive-Filter': filter
        }
    };
    request(options, function (err, response, body) {
        done(err, body);
    });
};

DataService.prototype.saveDaily = function (goal, user, done) {
    var options = {
        json: true,
        url: this.getAgileResultsUrl()
    };
    if (goal.IsNew) {
        // create
        options.method = 'post';
        delete(goal.IsNew);

        options.body = goal;

        request(options, function (err, res, body) {
            if (err) {
                return done(err);
            }

            if(res.statusCode === 201) {
                done();
            } else {
                done(body);
            }
        });
    } else {
        // update
    }
};

module.exports = DataService;