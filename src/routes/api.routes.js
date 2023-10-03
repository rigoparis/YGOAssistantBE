import express from 'express';

import userRoutes from "./user.routes.js";
import cardRoutes from "./card.routes.js";
import deckRoutes from "./deck.routes.js";

const router = express.Router();

router.use('/user', userRoutes);
router.use('/card', cardRoutes);
router.use('/deck', deckRoutes);

export default router;