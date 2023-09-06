const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const deckSchema = new Schema({
  _id: { type: objectId, auto: true },
  deckname: { type: String, required: true },
  dateCreated: { type: Date, required: true },
  createdByUser: { type: objectId, ref: 'users', required: true },
  cards: [{ type: String, required: true }]
});

const deck = mongoose.model('decks', deckSchema);
module.exports = category;