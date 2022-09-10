// Google Cloud: App Engine Managed
var express = require('express');
var app = express();
const port = 8080;

//request and respond, boot by node server.js

// App listening on port 8080
app.listen(port, () => {
    console.log('server running at ' + port);
});

// on the request to root (localhost:8080/)
app.get('/', function (req, res) {
    res.send('ROOT HOME, this is the homeeeeeeee!');
});

// on the request to get JSON data (localhost:8080/)
app.get('/data', function (req, res) {
    res.send(JSON.stringify({id: 1, name: "David", description: "Hello, this is a very generic text blurb"}));
});

// On localhost:8080/welcome
app.get('/welcome', function (req, res) {
    res.send('Welcome, needed to make sure get requests works');
});

// Change the 404 message modifying the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});
