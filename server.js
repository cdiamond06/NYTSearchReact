// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require our Articles Schema
var Articles = require("./models/Articles");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// allows you to connect to the pubic folder which will have the html and bundle js file that will include the components by default
app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB) 


var databaseUri = "mongodb://localhost/nytsearctreact";

if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI);
} else{
  mongoose.connect(databaseUri);
}

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  // whenever localhost 3000 is called we will go to this file
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
// the route /api is called and passed to from helpers.js file (3)
app.get("/savedArticles", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  // do the function and then use mongo db to use the defined schema and sort it by the date
  Articles.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      // send the doc results as a string back to the Main.js file as a result
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
app.use((req,res,next)=>console.log("Someting", next()));
app.post("/savedArticle", function(req, res) {

  console.log("BODY: " + req.body);
  console.log("BODY: " + req.body.title);
  console.log("BODY: " + req.body.date);
  console.log("BODY: " + req.body.url);


  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  // here we are using the create function to create a new data input 
  // (5) from ComponentDidUpdate
  Articles.create({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      // after this is done, it will be sent back to the Main.js file
      res.send("Saved Search");
    }
  });
});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
