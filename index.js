var express = require('express');
var RouteHandlers = require('./services/route-handlers');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/app'));

app.get('/agile/daily', RouteHandlers.getDaily);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});