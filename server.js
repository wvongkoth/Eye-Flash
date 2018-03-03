require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const flashcardAPI = require('./controllers/flashcard_api')
const flashcardHTML = require('./controllers/flashcard_html');

mongoose.connect('mongodb://localhost/tacobell');

const environment = process.env.NODE_ENV || 'development';
var PORT = process.env.PORT || 5000;

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(express.static('public'));
// app.use('/static', express.static('my-react-app/build/static'))

app.use('/api', flashcardAPI.router);
// app.use('/', flashcardHTML.router)

app.listen(PORT, () => {
    console.log(`Express is listening on port ${PORT}`);
})
