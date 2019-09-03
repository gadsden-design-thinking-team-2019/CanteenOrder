// var mongo = require('mongodb');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:7001/mydb";

const express = require('express');
const app = express();
app.set('view engine', 'pug');

//Log the port to the console
const server = app.listen(7000, () => {
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

//Load the webpage
app.get('/', function (req, res) {
    res.render('index');
})