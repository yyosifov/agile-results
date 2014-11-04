/* node */
var DataService = require('./data-service');
var dataService = new DataService();

var RouteHandlers = {
    getDaily: function(req, res) {
        dataService.getDaily(req.query, null, function(err, data) {
            RouteHandlers.sendJson(res, data);
        });
    },

    saveGoal: function(req, res) {
        dataService.saveGoal(req.body, null, function(err, data) {
            RouteHandlers.sendJson(res, data);
        });
    },

    deleteGoal: function(req, res) {
        dataService.deleteGoal(req.params.goalId, null, function(err, data) {
            RouteHandlers.sendJson(res, data);
        });
    },

    sendJson: function(res, data) {
        res.set('Content-Type', 'application/json');
        res.status(200).send(data);
    }
};

module.exports = RouteHandlers;