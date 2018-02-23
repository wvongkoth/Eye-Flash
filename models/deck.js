var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deckSchema = new Schema({
  deckName: {
    type: String,
    required:false
  },
  user_id: {
      type: String,
      required: false
  },
  cardNum: {
      type: Number,
      required:false
  }
});

var deck = mongoose.model('Deck', deckSchema);
module.exports = deck;
