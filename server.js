// Dependencies
var express = require("express");
var logger = require("morgan");
var mongojs = require("mongojs");


var app = express();


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Mongojs configuration
var databaseUrl = "mkebrew";
var collections = ["breweries"];


var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.post("/submit", function(req, res) {
  
    var brewery = req.body;

    db.breweries.save(brewery, function(error, saved) {

      if (error) {
        console.log(error);
      }
      else {

        res.send(saved);
      }
    });
  });
  

app.listen(3300, function() {
  console.log("App running on port 3300!");
});
