var express = require('express');
var RouteHandlers = require('./services/route-handlers');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());

var baseUrl = '/api/v1';
var dailyUrl = '/agile/daily';

var router = express.Router();
router.route(dailyUrl)
    .get(RouteHandlers.getDaily)
    .post(RouteHandlers.createDaily);

// hit only when nothing else have handled the request.
router.use(function(req,res,next) {
    console.log('unrouted url: ' + req.url);
    next();
});

app.use('/api/v1/', router);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});