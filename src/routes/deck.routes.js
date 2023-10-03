import express from "express";
import DeckController from '../controllers/deck.controller.js';

const router = express.Router();
const deckController = new DeckController();

router.get('/', deckController.getAll);
router.get('/getById', deckController.getById);
router.post('/createDeck', deckController.createDeck);
router.patch('/patchDeck', deckController.patchDeck);
router.delete('/deleteDeck', deckController.deleteDeck);
router.get('/getAllByUserId', deckController.getAllByUserId)

export default router;