// var mongo = require('mongodb');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:7001/mydb";

const express = require('express');
const app = express();
app.set('view engine', 'pug');                      //Set the render engine
var path = require('path');                         //Honestly Not Sure :P
app.use(express.static(__dirname + '/public'));   //Set the /images folder to be publicly viewable
//console.log(`Made Directory: ${__dirname}\\images`);

//Log the port to the console
const server = app.listen(12983, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

//Set up Dir Routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/' + 'index.html'));
})

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/' + 'about.html'));
})

app.get('/menu', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/' + 'menu.html'));
})

app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/' + 'contact.html'));
})