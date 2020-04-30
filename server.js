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

  app.get("/all", function (req, res) {
    db.breweries.find({}, function(error, found) {
      if (error) {
        console.log(error);
      } else {
        res.send(found);
      }
    })
  })


  app.get("/all/:brewery", function(req, res) {
    console.log(req.params.brewery)
    db.breweries.findOne({name: req.params.brewery}, function (error, found) {
      if (error) {
        console.log(error);

      }else {
        res.send(found);
      }
    })
  })

app.listen(3300, function() {
  console.log("App running on port 3300!");
});
