import { StatusCodes } from 'http-status-codes';
import user from '../models/user.model.js';

class UserController {
  getAll = (req, res) => {
    user.find().then(docs => res.status(StatusCodes.OK).send(docs))
    .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err));
  }
  createUser = (req, res) => {
    const body = req.body;
    user.create(body).then(docs => res.status(StatusCodes.OK).send(docs))
    .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err));
  }
}

export default UserController;