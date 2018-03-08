const mongoose = require('mongoose');

const Deck = require('./deck_model');
const FlashCard = require('./flashcard_model');

mongoose.connect('mongodb://localhost/flashcardApp');

const flashcardCommands = {
    addNewDeck: (deckName, cardFront, translatedLanguage) => {
        const myDeck = new Deck({
            deckName, 
            translatedLanguage
        });
        return myDeck.save().then((document) => {
            const phraseArray = cardFront.toUpperCase().split(" ");
            const cardImages = [];
            phraseArray.map((i) => {
                cardImages.push({
                    word: i,
                    image: null
                });
            });
            const deckID = document._id;
            const myCard = new FlashCard({
                deckID,
                cardFront,
                cardImages
            });
            return myCard.save();
        });
    },
    addNewCard: (deckID, cardFront) => {
        const phraseArray = cardFront.toUpperCase().split(" ");
        const cardImages = [];
        phraseArray.map((i) => {
            cardImages.push({
                word: i,
                image: null
            });
        });
        const myCard = new FlashCard({
            deckID,
            cardFront,
            cardImages
        });
        return myCard.save();
    },
    updateImages: (cardID, imageArray) => {
       return FlashCard.findByIdAndUpdate(cardID, {$set: {cardImages: imageArray}}, {new: true})
    },
    getAllDecks: () => {
        return Deck.find();
    },
    getAllCards: () => {
        return FlashCard.find();
    },
    getOneCard: (cardID) => {
        return FlashCard.findById(cardID);
    },
    getNextCard: (deckID) => {
        return FlashCard.find({deckID});
    },
};

module.exports = {
    flashcardCommands
};