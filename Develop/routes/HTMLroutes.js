//Dependencies.  include path package to get the right path for html
var path = require("path");


//Routing

module.exports = function(app) {


    // GET home page on page load
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


    //HTML GET when user wants to enter notes
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    
    //default to home if no matching routes
    app.get("/*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};