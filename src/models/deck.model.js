import mongoose from "mongoose";

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const deckSchema = new Schema({
  _id: { type: objectId, auto: true },
  deckname: { type: String, required: true },
  dateCreated: { type: Date, default: new Date() },
  createdByUser: { type: objectId, ref: "users", required: true },
  mainDeck: [{ type: Number, required: true }],
  extraDeck: [{ type: Number, required: true }],
  sideDeck: [{ type: Number, required: true }],
  tags: [{ type: String, required: true }],
  deleted: { type: Boolean, default: false },
  flow: {
    nodes: [{ type: Schema.Types.Mixed }],
    edges: [{ type: Schema.Types.Mixed }],
  },
  likes: [{ type: objectId, ref: "users" }],
  dislikes: [{ type: objectId, ref: "users" }],
});

const deckModel = mongoose.model("decks", deckSchema);

export default deckModel;
