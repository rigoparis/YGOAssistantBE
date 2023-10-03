import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

const cardImageSchema = new Schema({
    _id: { type: Types.ObjectId, auto: true },
    cardId: { type: Types.String, required: true },
    cardImage: {
        data: { type: Types.Buffer, required: true },
        contentType: { type: Types.String, required: true }
    }
});

const cardImageModel = mongoose.model('cardImages', cardImageSchema);

export default cardImageModel;