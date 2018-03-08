const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var DeckSchema = new Schema({
    deckName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    translatedLanguage: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

const Deck = mongoose.model('Deck', DeckSchema);

module.exports = Deck;