var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
    front: {
        type: String,
        required: false
    },
    back: {
        type: String,
        required: false
    },
    image: {
        type: [],
        required: false
    }
});

var flashCard = mongoose.model('Flashcard', cardSchema);
module.exports = flashCard;

