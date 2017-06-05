var express         = require('express');
var app             = express();
var mongoose        = require('mongoose');
var config          = require('./config');
var setUpController = require('./controllers/setupController');

// set up view engine
app.set('view engine', 'ejs');

// set up middleware / static files
app.use(express.static(`${__dirname}/public`));

// connect to db
mongoose.connect(config.getDbConnectionString());

// invoke controllers
setUpController(app);

// port
var port = process.env.PORT || 3000;
app.listen(port);
console.log(`Listening to port ${port}`);
