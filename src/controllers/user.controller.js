import { StatusCodes } from 'http-status-codes';
import jsonwebtoken from 'jsonwebtoken';
import userModel from '../models/user.model.js';

class UserController {
  getAll = (req, res) => {
    userModel.find().select('-password')
    .then(users => res.status(StatusCodes.OK).send(users))
    .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err));
  }
  createUser = (req, res) => {
    const body = req.body;
    userModel.create(body)
    .then(user => res.status(StatusCodes.OK).send(user))
    .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err));
  }
  login = async (req, res) => {
    try {
      const body = req.body;
      const userDoc = await userModel.findOne({ username: body.username })
      userDoc.comparePassword(body.password, function (err, isMatch) {
        if (err) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
  
        userDoc.password = undefined;
        if (isMatch) {
          var token = jsonwebtoken.sign({
            id: userDoc.id
          }, process.env.API_SECRET, {
            expiresIn: 86400
          });

          console.log(StatusCodes.OK)
          return res.status(StatusCodes.OK).send({
            user: userDoc,
            accessToken: token
          });
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
      }) 
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
  }
}

export default UserController;