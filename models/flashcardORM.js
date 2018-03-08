const mongoose = require('mongoose');

const Deck = require('./deck_model');
const FlashCard = require('./flashcard_model');
const Translate = require('./googleTranslate');

mongoose.connect('mongodb://localhost/flashcardApp');

const flashcardCommands = {
    addNewDeck: async (deckName, cardFront, translatedLanguage) => {
        try {
            const myDeck = new Deck({
                deckName, 
                translatedLanguage
            });
            const savedDeck = await myDeck.save();
            const phraseArray = cardFront.toUpperCase().split(" ");
            const cardImages = [];
            phraseArray.map((i) => {
                cardImages.push({
                    word: i,
                    image: null
                });
            });
            const translatedPhrase = await Translate.translateMe(cardFront, translatedLanguage);
            const deckID = savedDeck._id;
            const myCard = new FlashCard({
                deckID,
                cardFront,
                cardBack: translatedPhrase.text,
                cardImages
            });
            return await myCard.save();
        }
        catch (e) {
            console.log(e);
        }
    },
    addNewCard: async (deckID, cardFront) => {
        try {
            const phraseArray = cardFront.toUpperCase().split(" ");
            const cardImages = [];
            phraseArray.map((i) => {
                cardImages.push({
                    word: i,
                    image: null
                });
            });
            const userDeck = await Deck.findById(deckID).exec();
            const translatedPhrase = await Translate.translateMe(cardFront, userDeck.translatedLanguage);
            const myCard = new FlashCard({
                deckID,
                cardFront,
                cardBack: translatedPhrase.text,
                cardImages
            });
            return myCard.save();
        }
        catch (e) {
            console.log(e);
        }
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