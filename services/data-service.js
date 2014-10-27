'use strict'

var request = require('request');
var everliveUrl = 'http://api.everlive.com/v1/IBDA1Rw2BbBGUsGE/';

var GoalTypes = {
  Daily: 1,
  Weekly: 2,
  Monthly: 3,
  Yearly: 4
};

var DataService = function() {

};

DataService.prototype.getAgileResultsUrl = function() {
    return everliveUrl + 'AgileResult';
};

DataService.prototype.getDaily = function(date, user, done) {
    var url = this.getAgileResultsUrl();
    url += '?filter={"Type":' + GoalTypes.Daily+'}';
    request(url, function(err, response, body) {
       done(null, body);
    });
};

module.exports = DataService;