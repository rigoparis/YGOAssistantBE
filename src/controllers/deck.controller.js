import { StatusCodes } from 'http-status-codes';
import jsonwebtoken from 'jsonwebtoken';
import deckModel from '../models/deck.model.js';

class DeckController {
  getAll = (req, res) => {
    deckModel.find({deleted: false})
    .then(decks => res.status(StatusCodes.OK).send(decks))
    .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err));
  }
  getOne = (req, res) => {
    deckModel.findOne({ _id: req.body.id, deleted: false})
    .then(deck => res.status(StatusCodes.OK).send(deck))
    .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err));
  }
  createDeck = (req, res) => {
    const body = req.body;
    deckModel.create(body)
    .then(deck => res.status(StatusCodes.OK).send(deck))
    .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err));
  }
  patchDeck = (req, res) => {
    deckModel.findOneAndUpdate({ _id: req.body.id, deleted: false}, req.body)
    .then(deck => res.status(StatusCodes.OK).send(deck))
    .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err));
  }
  deleteDeck = (req, res) => {
    deckModel.findOneAndUpdate({ _id: req.body.id, deleted: false}, {deleted: true})
    .then(() => res.status(StatusCodes.OK).send())
    .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err));
  }
}

export default UserController;