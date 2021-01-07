//LOAD DATA
//link routes to the data sources, i.e, notes

var notesData =  require("../data/notesData");

//ROUTING

module.exports = function(app) {
    
    //API GET
    app.get("/api/notes", fucntion (req, res) {
        res.json(notesData);
    });


    //API POST handles the data submission to the server when the user submits notes

    app.post("/api/notes", function(req, res) {

        //need conditional code 


    });



}; //end module exports function