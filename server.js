// requiring express & handlebars
var express = require('express');
var exphbs  = require('express-handlebars');

// setting up port
var PORT = process.env.PORT || 8080;

// launching the server
var app = express();

// Requiring our models for syncing
var db = require("./models");

// serve static content for the app from the 'public' folder
app.use(express.static('public'));

// parse application body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// setting up habdlebars 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
