// Import ExpressJS and initialize it.
let express = require('express');
let routes = require('./api-routes');
let app = express();
let port = process.env.PORT || 8080;

//Import and configure Body Parser to handle POST Requests
let parser = require('body-parser');
app.use(parser.urlencoded({
    extended: true
}));

app.use(parser.json())

//Import and configure Mongoose to connect with MongoDB
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restapi')
var db = mongoose.connection;


// Configure our express to use the routes on other file.
app.use('/api', routes);

// Send an Hello message in the root url
app.get('/', (req, res) => res.send('Welcome to RESTHubApi!'));

app.listen(port, function () {
     console.log("Running API on port " + port);
});