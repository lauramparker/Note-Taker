//Dependencies.  include path package to get the right path for html
var path = require("path");


//Routing

module.exports = function(app) {


    //HTML GET when user wants to enter notes
    app.get("/notes", function(req, res){
        res.sednFile(path.join(_dirname, "../public/notes.html"));
    });

    
    
    //default to home if no matching routes
    app.get("/*", function(req, res){
        res.sednFile(path.join(_dirname, "../public/index.html"));
    });

};