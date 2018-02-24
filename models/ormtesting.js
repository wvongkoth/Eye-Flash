const mongoose = require('mongoose');

var Deck = require('./deck.js');
var FlashCard = require('./flashCard.js');
var CardSet = require('./cardSet.js')

FlashCard.find({}).sort('-date').exec(function (err, docs) {
    for (i = 0; i < docs.;i++) {

    }
});
Deck.sort({ field: 'asc', test: -1 });
Deck.find().sort('_id', 1).limit(5).select('title  _id').exec(function (e, data) {
    //handle result
}
});

Deck.find(function (err, deck) {
    if (err) return console.error(err);
    console.log(kittens);
})
//working? sort id
FlashCard.find({}).sort("-_id");