/* node */
var DataService = require('./data-service');
var dataService = new DataService();

var RouteHandlers = {
    getDaily: function(req, res) {
        dataService.getDaily(req.query, null, function(err, data) {
            RouteHandlers.sendJson(res, data);
        });
    },

    createDaily: function(req, res) {
        dataService.saveDaily(req.body, null, function(err, data) {
            RouteHandlers.sendJson(res, data);
        });
    },

    sendJson: function(res, data) {
        res.set('Content-Type', 'application/json');
        res.status(200).send(data);
    }
};

module.exports = RouteHandlers;