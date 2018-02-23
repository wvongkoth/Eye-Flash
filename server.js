//require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//const flashcardsAPI = require('./controllers/flashcards_api')
//const flashcardsHTML = require('./controllers/flashcards_html');

const environment = process.env.NODE_ENV || 'development';
var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/tacobell');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Mongoose Error: ', err);
});
db.once('open', function () {
    console.log('Mongoose connection successful.');
});

var Deck = require('./models/deck.js');
var FlashCard = require('./models/flashCard.js');
var CardSet = require('./models/cardSet.js')

app.get('/cardSet', function (req, res) {
    CardSet.find({}, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json(doc);
        }
    });
});

app.get('/deck', function (req, res) {
    Deck.find({}, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json(doc);
        }
    });
});

app.get('/flashCard', function (req, res) {
    FlashCard.find({}, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json(doc);
        }
    });
});
app.post('/cardSet', function (req, res, next) {
    var post = new CardSet({
        card_id: "filler",
        set_id: "dillery"
    }).done(function (res) {
        console.log(CardSet.cardSetSchema.card_id)
    })
    post.save(function (err, post) {
        if (err) { return next(err) }
        res.json(201, post)
   })
});

//app.use('/', flashcardsHTML.router);
//app.use('/api', flashcardsAPI.router);

app.listen(PORT, () => {
    console.log(`Express is listening on port ${PORT}`);
})