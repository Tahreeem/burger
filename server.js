var express = require("express");
var logger = require("morgan");
var path = require("path");
var bodyParser = require('body-parser');
require('dotenv');

//var axios = require("axios"); var cheerio = require("cheerio"); const fs = require('fs');

//____________________________________________________________________________________________________

var PORT = process.env.PORT || 3000;

var app = express();

// Configure middleware
app.use(logger("dev")); // Use morgan logger for logging requests
app.use(express.urlencoded({ extended: true })); // Parse request body as JSON
app.use(express.json());
app.use(express.static("public")); // Make public a static folder
app.use(bodyParser.urlencoded({
    extended: true
}));


var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, 'views'));


require("./routes/htmlRoutes.js")(app);
var routes = require("./routes/apiRoutes.js");
app.use(routes);



app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});

