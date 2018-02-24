var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSetSchema = new Schema({
  card_id: {
    type: String,
    required:false
    },
  set_id: {
     type: String,
     required:false
  }
});

var cardSet = mongoose.model('CardSet', cardSetSchema);
module.exports = cardSet;
