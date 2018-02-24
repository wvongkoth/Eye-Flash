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
  
    Deck.find({})
        .then(function (results) {
            console.log(results)
            res.json(results)
        })
        .catch(function(err) {
            console.log(err);
        })
       /*  if (err) {
            console.log(err);
        } else {
            res.json(doc);
            console.log(doc)
        }
    }); */

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

app.get('/api/sortDeck/:id', function (req, res) {
    Deck.find({ deckName: req.params.id }).sort("-_id");
    console.log(Deck)
});

app.get('/api/makeDeck/:user', function (req, res, next) {
    FlashCard.find({}, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json(doc);
            Deck.findOne({ user_id: req.params.user }, function (err, mod) {
                mod.deckCards = doc;
                mod.save();
            });
        }
    });
});

app.get('/api/newCard/:front/:back/:deck', function (req, res) {
    FlashCard.create({ front: req.params.front, back: req.params.back });
    FlashCard.find({}, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json(doc);
        }
    });
})

//app.use('/', flashcardsHTML.router);
//app.use('/api', flashcardsAPI.router);

app.listen(PORT, () => {
    console.log(`Express is listening on port ${PORT}`);
})