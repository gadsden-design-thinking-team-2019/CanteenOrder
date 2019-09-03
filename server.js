// var mongo = require('mongodb');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:7001/mydb";

const express = require('express');
const app = express();
app.set('view engine', 'pug');
var path = require('path');

//Log the port to the console
const server = app.listen(12983, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.createCollection("customers", function(err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//     });
// });

//Load the webpages
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/' + 'about.html'));
})

app.get('/menu', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/' + 'menu.html'));
})

app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/' + 'contact.html'));
})