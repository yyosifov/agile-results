/* node */
var DataService = require('./data-service');

var RouteHandlers = {
    getDaily: function(req, res) {
        var dataService = new DataService();
        dataService.getDaily(null, null, function(err, data) {
            RouteHandlers.sendJson(res, data);
        });
    },

    sendJson: function(res, data) {
        res.set('Content-Type', 'application/json');
        res.status(200).send(data);
    }
};

module.exports = RouteHandlers;