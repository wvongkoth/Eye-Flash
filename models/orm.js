const mongoose = require('mongoose');

var Deck = require('./deck.js');
var FlashCard = require('./flashCard.js');
var CardSet = require('./cardSet.js');

//requires post also makes a new deck and adds an first card to it.
function AddNewDeck() {
    Deck.create({ user_id: "filler", deckName: "filer" }, function (err, doc) {
        if (err) HandleError(err)
        FlashCard.create({ front: "filler", back: "filler" }, function (err, card) {
            doc.deckCards.push(card);
            mod.save();
        });
    });
};

//makes a new card and adds it to the deck that is specifed in the url by its object id
function addNewCard() {
    Flashcard.create({ front: "back", back: "front" }, function (err, doc) {

        if (err) handleError(err);
        Deck.findOne({ _id: "object_id somewhere in url" }, function (err, deck) {
            if (err) return errorHandle(err);
            deck.deckCards.push(doc);
            deck.save();
        });
    });
};

//allows for the card to be edited 
function updateCard() {
    FlashCard.findByIdAndUpdate({ _id: "object_id somewhere in url" }, function (err, card) {
        if (err) errorHandle(err);
        card.front = "user input"
        card.back = "user input";
        card.save();
    });
}

//the deletes may not work as intended yet still working on the proper syntax should be done by the end on 2/25/2018
//deletes a selected card based on the object id
function deleteCard() {
    //Card id should be the wanted cards id
    FlashCard.findByIdAndRemove(req.params."card id", (err, todo) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "card deleted",
            id: card._id
        };
        return res.status(200).send(response);
    });
}

function deleteDeck() {
    //Deck id should be the decks object id 
    Deck.findByIdAndRemove(req.params."card id", (err, todo) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "deck deleted",
            id: deck._id
        };
        return res.status(200).send(response);
    });
}

//simple error handleing will update with actual hanldeing later
function errorHandle(err) {
    console.log("oops! something went wrong! \n error: " + err);
}