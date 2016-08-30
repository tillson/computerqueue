var express = require('express'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
port = process.env.PORT || 8080,
route = require('./app/routes/route.js'),
app = express();

app.set('view engine', 'jade');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({
  extended: 'true'
}));
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));
app.use(methodOverride('X-HTTP-Method-Override'));

app.locals.production = (port == process.env.PORT);

app.use('/', express.static(__dirname + '/public/'));
app.use('/assets', express.static(__dirname + '/bower_components/'));
app.use('/', route);

app.listen(port, function() {
  console.log('Listening on port ' +  port);
});
