// requiring express & handlebars
var express = require('express');
var exphbs  = require('express-handlebars');

// setting up port
var PORT = process.env.PORT || 8080;

// launching the server
var app = express();

// serve static content for the app from the 'public' folder
app.use(express.static('public'));

// parse application body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// setting up habdlebars 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
