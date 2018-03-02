const express = require('express');
var router = express.Router();

const { flashcardCommands } = require('../models/flashcardORM');

router.get('/getAllDecks', (req, res) => {
    flashcardCommands.getDecks((err, response) => {
        if (err) {
            res.status(400).json(err)
        }
        return res.json(response);
    });
});

router.get('/getCard/:deckID/:currentCard', (req, res) => {
    // CHANGE TO URL PARAMS
    var deckID = req.params.deckID;
    var currentCard = req.params.currentCard;

    flashcardCommands.getCard(deckID, currentCard, (err, response) => {
        if (err) {
            res.status(400).json(err);
        }
        return res.json(response);
    });
});

router.post('/addNewDeck', (req, res) => {
    const { deckName, cardFront, cardBack } = req.body;

    flashcardCommands.addNewDeck(deckName, cardFront, cardBack, (err, response) => {
        res.json({
            status: 'Everything is okay! Deck has been added ' + deckName +" "+cardFront +" "+ cardBack
        });
    });
});

router.post('/addNewCard', (req, res) => {
    const { cardFront, cardBack, deckID } = req.body;

    flashcardCommands.addNewCard(cardFront, cardBack, deckID, (err, response) => {
        res.json({
            status: 'Your new card has been added!'
        });
    });
});

router.post('/updateCard', (req, res) => {
    const { cardID, cardBack, cardFront } = req.body;

    flashcardCommands.updateCard(cardID, cardFront, cardBack, (err, response) => {
        res.json({
            status: 'Your card has been updated!'
        });
    });
});

router.delete('/deleteCard', (req, res) => {
    var cardID = req.body.cardID;

    flashcardCommands.deleteCard(cardID, (err, response) => {
        res.json({
            status: 'Your card has been deleted!'
        });
    });
});

router.delete('/deleteDeck', (req, res) => {
    var deckID = req.body.deckID;

    flashcardCommands.deleteDeck(deckID, (err, response) => {
        res.json({
            status: 'Your deck has been deleted!'
        });
    });
});

router.get('/mylesSucks', (req, res) => {
    res.send('I agree!');
});


module.exports = {
    router
};