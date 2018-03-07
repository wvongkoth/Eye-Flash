const mongoose = require('mongoose');

var Deck = require('./deck.js');
var FlashCard = require('./flashCard.js');

const flashcardCommands = {
    addNewDeck: (deck, cardFront, cardBack, cb) => {
        Deck.create({
            deckName: deck
        }, (err, deck) => {
            if (err) {
                return cb(err);
            }
            FlashCard.create({
                front: cardFront,
                back: cardBack
            }, (err, card) => {
                if (err) { console.log(err) }
                card.save();
                deck.deckCards.push(card);
                deck.save();
                cb(undefined, card);
            });
        });
    },
    addNewCard: (cardFront, cardBack, deckId, deckImages, cb) => {
        FlashCard.create({
            front: cardFront,
            back: cardBack,
            image: deckImages
        }, (err, newCard) => {
            if (err) {
                return cb(err)
            }
            Deck.findById({
                deckID,
            }, (err, deck) => {
                if (err) {
                    return cb(err);
                }
                deck.deckCards.push(newCard);
                deck.save();
                cb(undefined, deck);
            })
        })
    },
    getDecks: (cb) => {
        Deck.find({

        }, (err, decks) => {
            if (err) {
                return cb(err)
            }
            cb(undefined, decks)
        })
    },
    getCard: (deckId, currentCardNum, cb) => {
        Deck.findById(deckId, (err, decks) => {
            if (err) {
                return cb(err)
            }
            var myObject = decks.deckCards[currentCardNum];

            myObject.currentCard = currentCardNum;
            myObject.totalCards = decks.deckCards.length;
            cb(undefined, myObject);
        });
    },
    updateCard: (cardId, selectedImage, cb) => {
        FlashCard.findByIdAndUpdate({
            cardId
        }, (err, card) => {
            if (err) {
                cb(err);
            }
            card.image = selectedImage;
            card.save();
            cb(undefined, card);
        });
    },
    deleteCard: (cardId, cb) => {
        FlashCard.findByIdAndRemove(cardId, (err, todo) => {
            if (err) {
                return cb(err)
            }
            cb(undefined, todo)
        });
    },
    deleteDeck: (deckId, cb) => {
        Deck.findByIdAndRemove(deckId, (err, todo) => {
            if (err) {
                return cb(err)
            }
            cb(undefined, todo);
        });
    },
    
};

function split(phrase) {
    var wordArray = phrase.split(' ');
    for (var i = 0; i < wordArray.length; i++) {
        icon(wordArray[i]);
    };
};
//var flashcardCommands = mongoose.model('Flashcard', cardSchema);

module.exports = {
    flashcardCommands
};