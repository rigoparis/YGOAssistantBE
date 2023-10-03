import { StatusCodes } from "http-status-codes";
import deckModel from "../models/deck.model.js";

class DeckController {
  getAll = (req, res) => {
    deckModel
      .find({ deleted: false })
      .then((decks) => res.status(StatusCodes.OK).send(decks))
      .catch((err) => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err));
  };
  getById = (req, res) => {
    deckModel
      .findOne({ _id: req.body._id, deleted: false })
      .then((deck) => res.status(StatusCodes.OK).send(deck))
      .catch((err) => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err));
  };
  createDeck = (req, res) => {
    const { body } = req;
    deckModel
      .create(body)
      .then((deck) => res.status(StatusCodes.OK).send(deck))
      .catch((err) => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err));
  };
  patchDeck = (req, res) => {
    deckModel
      .findOneAndUpdate({ _id: req.body._id, deleted: false }, req.body, {
        new: true,
      })
      .then((deck) => res.status(StatusCodes.OK).send(deck))
      .catch((err) => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err));
  };
  deleteDeck = (req, res) => {
    deckModel
      .findOneAndUpdate({ _id: req.body.id, deleted: false }, { deleted: true })
      .then(() => res.status(StatusCodes.OK).send())
      .catch((err) => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err));
  };
  getAllByUserId = (req, res) => {
    const { userId } = req.query;
    deckModel
      .find({ createdByUser: userId, deleted: false })
      .then((decks) => res.status(StatusCodes.OK).send(decks))
      .catch((err) => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err));
  };
}

export default DeckController;
