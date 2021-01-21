//Dependencies.  include path package to get the right path for html
var path = require("path");
const express = require("express");
const app = express();


//Routing

module.exports = function(app) {


    // GET home page on page load
    app.get("/", function (_req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));

        console.log("Home page loaded"); //debugging
    });


    //HTML GET when user wants to enter notes
    app.get("/notes", function(_req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));

        console.log("Notes page loaded"); //debugging
    });

    
    //default to home if no matching routes
    app.get("*", function(_req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};