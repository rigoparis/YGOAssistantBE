import express from "express";
import CardController from '../controllers/card.controller.js';
import verifyToken from "../middleware/authJWT.js";

const router = express.Router();
const cardController = new CardController();

router.get('/getByFuzzyName', cardController.getByFuzzyName)

export default router;