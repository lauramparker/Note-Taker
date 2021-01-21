//Dependencies
const fs = require("fs");
const express = require("express");
const app = express();

//Global Variable to contain all notes data in backend
//Normally would use data folder and objects, but this is string data only with no other elements, ie, date, complete, etc
//var notesData = [];
//var deletedData = [];


//ROUTING

module.exports = function(app) {
    
    //API GET request to read saved notes from db
    app.get("/api/notes", function (req, res) {

        let notesData = JSON.parse(fs.readFileSync("./db/db.json", "UTF-8"));

        console.log(notesData); //debugging

        res.json(notesData);
    });



    //API POST handles the data submission to the server when the user adds notes

    app.post("/api/notes", function(req, res) {

        //getting new note from request body to add to notesData
        let addNote = req.body;

        //giving new note an id (for use in deleting later). String keeps id from changing
        addNote.id = (notesData.length).toString();

        // Read data from 'db.json' file
        let notesData = JSON.parse(fs.readFileSync("../db/db.json", "UTF-8"));

        //push to the notesData
        notesData.push(addNote);


        //Write to the db.json file
        fs.writeFileSync(json, JSON.stringify(notesData), function (err) {

            if (err) {
                throw err;
            }
            console.log("New note has been saved!");

        });

        //returns note list with newly added note
        res.json(notesData);


    });   


    //API DELETE
    app.delete("/api/notes:id", function(req, res) {


        // Read data from 'db.json' file
        let notesData = JSON.parse(fs.readFileSync("../db/db.json", "UTF-8"));

        let deletedNoteId = req.params.id;

        // filter data to get notes except the one to delete
        let deletedData = notesData.filter(notesData => {
            return addNote.id !== deletedNoteId} );

        //Write to the db.json file
        fs.writeFileSync(json, JSON.stringify(deletedData), function (err) {

            if (err) {
                throw err;
            }
            console.log("Note has been deleted!");

        });

        //returns note list without newly deleted note
        res.json(notesData);
    });



}; //end module exports function