// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.post("/api/fileanalyse", upload.single("upfile"), function(req, res) {
  return res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size});
  
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
