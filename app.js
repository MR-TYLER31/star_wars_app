var express = require('express');
var app = express();


app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// HOME ROUTE
app.get('/', routes.home);

// Single Movie 
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// NotFound
app.get('*', routes.notFound);



app.listen(5000, function() {
    console.log("The server is running on localhost:5000");
});