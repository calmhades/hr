var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [
    {
        name: "Eric Hickstein",
        phone: "1-800-588-2300",
        email: "eric@thehicksteins.com",
        id: "435"
    },
    {
        name: "Anonymous",
        phone: "1-800-867-5309",
        email: "anonymous@anonymous.tor",
        id: "0"
    }
];

var waitlist = [
    {
        name: "Anonymous",
        phone: "1-800-867-5309",
        email: "anonymous@anonymous.tor",
        id: "0"
    }
];

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"))
});

app.get("/api/tables", function(req, res){
    return res.json(tables)
});

app.get("/api/waitlist", function(req, res){
    return res.json(waitlist)
});

app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    if (tables.length >= 5) {
        // res.redirect(302, '/api/waitlist');
    var newTable = req.body;
  
    console.log(newTable);
  
    waitlist.push(newTable);
  
    res.json(newTable);
    }
    else {// This works because of our body-parser middleware    
    var newTable = req.body;
  
    console.log(newTable);
  
    tables.push(newTable);
  
    res.json(newTable);
}})
    ;

app.post("/api/waitlist", function(req, res) {
    var newTable = req.body;
  
    console.log(newTable);
  
    waitlist.push(newTable);
  
    res.json(newTable);
    })
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});