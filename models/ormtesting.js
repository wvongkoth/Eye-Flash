const mongoose = require('mongoose');

var Deck = require('./deck.js');
var FlashCard = require('./flashCard.js');
var CardSet = require('./cardSet.js');

//requires post
function AddNewDeck() {
    Deck.create({ user_id: "filler", deckName: "filer" }, function (err, doc) {
        if (err) console.log(err)
        FlashCard.create({ front: "filler", back: "filler" }, function (err, card) {
            doc.deckCards.push(card);
            mod.save();
        });
    });
};

function addNewCard() {
    Flashcard.create({ front: "back", back: "front" }, function (err, doc) {

        if (err) console.log(err);
        Deck.findOne({ _id: "object_id somewhere in url" }, function (err, deck) {
            if (err) return errorHandle(err);
            deck.deckCards.push(doc);
            deck.save();
        });
    });
};

function updateCard() {
    FlashCard.find({ _id: "object_id somewhere in url" }, function (err, card) {
        if (err) console.log(err);
        card.front = "user input"
        card.back = "user input";
        card.save();
    });
}

function errorHandle(err) {
    console.log("oops! something went wrong! \n error: " + err);
}