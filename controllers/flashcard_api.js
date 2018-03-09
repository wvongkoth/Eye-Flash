const express = require('express');
const {flashcardCommands} = require('../models/flashcardORM')
var router = express.Router();

router.get('/jsonTest', (req, res) => {
    res.send({
        status: "Everything is okay!"
    });
});

router.get('/allDecks', (req, res) => {
    flashcardCommands.getAllDecks().then((document) => {
        res.send(document);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/allCards', (req, res) => {
    flashcardCommands.getAllCards().then((document) => {
        res.send(document);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/oneCard/:cardID', (req, res) => {
    const cardID = req.params.cardID;
    flashcardCommands.getOneCard(cardID).then((document) => {
        res.send(document);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/nextCard/:deckID/:currentCard', (req, res) => {
    const { deckID, currentCard } = req.params;
    flashcardCommands.getNextCard(deckID).then((document) => {
        const totalCards = document.length - 1;
        const card = document[parseInt(currentCard)];
        res.send({
            totalCards,
            currentCard: parseInt(currentCard),
            card
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/jsonTest', (req, res) => {
    const {myName} = req.body;
    res.send({
        status: `Everything is okay, ${myName}`
    });
});

router.post('/newDeck', (req, res) => {
    const {deckName, cardFront, translatedLanguage} = req.body;
    flashcardCommands.addNewDeck(deckName, cardFront, translatedLanguage).then((document) => {
        res.send(document)
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/newCard', (req, res) => {
    const {deckID, cardFront} = req.body;
    flashcardCommands.addNewCard(deckID, cardFront).then((document) => {
        res.send(document)
    }, (e) => {
        res.status(400).send(e);
    });
});

router.put('/saveImages', (req, res) => {
    const {cardID, cardImages} = req.body;
    flashcardCommands.updateImages(cardID, cardImages).then((document) => {
        res.send(document);
    }, (e) => {
        res.status(400).send(e);
    });
});

module.exports = router