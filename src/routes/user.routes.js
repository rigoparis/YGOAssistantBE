import express from "express";
import UserController from '../controllers/user.controller.js';

const router = express.Router();
const userController = new UserController();

router.get('/getAll', userController.getAll);
router.post('/createUser', userController.createUser);

export default router;