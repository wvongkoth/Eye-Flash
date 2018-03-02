var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
    verified: false,
    front: {
        type: String,
        required: false
    },
    back: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    }
});

var flashCard = mongoose.model('Flashcard', cardSchema);
module.exports = flashCard;




