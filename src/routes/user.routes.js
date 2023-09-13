import express from "express";
import UserController from '../controllers/user.controller.js';
import verifyToken from "../middleware/authJWT.js";

const router = express.Router();
const userController = new UserController();

router.get('/getAll', verifyToken, userController.getAll);
router.post('/createUser', userController.createUser);
router.post('/login', userController.login);

export default router;