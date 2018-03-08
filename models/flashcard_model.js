const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CardSchema = new Schema({
    deckID: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    cardFront: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
        uppercase: true
    },
    cardBack: {
        type: String,
        required: false,
        minLength: 1,
        trim: true,
        uppercase: true
    },
    cardImages: {
        type: Array,
        required: false,
    },
});

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;