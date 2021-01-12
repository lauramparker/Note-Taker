//Dependencies
const fs = require("fs");

//Global Variable to contain all notes data
var notesData;


//ROUTING

module.exports = function(app) {
    
    //API GET request to read saved notes from db
    app.get("/api/notes", function (req, res) {

        let notes = fs.readFileSync("./db/db.json", "UTF-8");
        if (notes) { //how to state if current notes has something...don' tneed if/then?
            notesData = Json.parse(notes)
        } else {
            notesData = [];
        }

        console.log("Sending Notes Data: " + JSON.stringify(notesData));

        res.json(notesData);
    });



    //API POST handles the data submission to the server when the user adds notes

    app.post("/api/notes", function(req, res) {

        //getting new note from request body to add to notesData
        const addNote = request.body;

        notesData.push(addNote);

        console.log("Added note: " + JSON.stringify(addNote) + "to database.");

        //send response
        res.json(notesData);

    });



}; //end module exports function