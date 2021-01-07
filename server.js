//Dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");

//Set up Express; exported from the routes.js files
var app = express();

//Set Up PORT
var PORT = process.env.PORT || 8080;

//Sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routes
require(".routes/routes")(app);


//Starts server Listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});