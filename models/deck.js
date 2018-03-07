var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeckSchema = new Schema({
    deckName: {
        type: String,
        required: false
    },
    transLanguage: {
        type: String,
        required: false
    },
    user_id: {
        type: String,
        required: false
    },
    deckCards: {
        type: [],
        required: false
    }
});

var Deck = mongoose.model('Deck', DeckSchema);
module.exports = Deck;