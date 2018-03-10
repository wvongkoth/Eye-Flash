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
    updateImages: (cardId, word, image) => {
        console.log('HEY THIS IS WHERE IA M IN THE ORM')
        console.log(cardId)
        console.log(word)
        console.log(image)
        // console.log('YOU HIT THIS THING')
        // console.log(cardId);
        // console.log(word);
        // console.log(image);
        // FlashCard.find({"_id": cardId, "cardImages.word": word }, (err, document) => {
        //     if (err) {
                
        //         console.log(err)
        //     }
        //     console.log(document);
        // }
       return FlashCard.update({"_id": cardId, "cardImages.word": word},  {$set: {"cardImages.$.image": image}})
    },
    // updateImages: (cardID, word, image) => {
    //     return FlashCard.find({ "_id": cardID, "cardImages.word": word})
    // },
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
    getMostRecentCard: () => {
        return FlashCard.findOne().sort({_id: -1}).limit(1)
    } 
};

module.exports = {
    flashcardCommands
};