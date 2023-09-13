const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const deckSchema = new Schema({
  _id: { type: objectId, auto: true },
  deckname: { type: String, required: true },
  dateCreated: { type: Date, required: true },
  createdByUser: { type: objectId, ref: 'users', required: true },
  cards: [{ type: String, required: true }],
  tags: [{ type: String, required: true }],
  deleted: { type: Boolean, required: true, default: false },
  flow: {
    nodes: [{ type: Schema.Types.Mixed }],
    edges: [{ type: Schema.Types.Mixed }],
  }
});

const deckModel = mongoose.model('decks', deckSchema);
module.exports = deckModel;