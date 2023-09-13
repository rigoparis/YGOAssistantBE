import { StatusCodes } from 'http-status-codes';
import jsonwebtoken from "jsonwebtoken";
import user from "../models/user.model.js";

const verifyToken = (req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET, async (err, decode) => {
      if (err) req.user = undefined;
        const userDoc = await user.findOne({
          _id: decode.id
        })
          if (userDoc) {
            req.validToken = true;
            next();
            
          } else {
            return res.status(StatusCodes.UNAUTHORIZED)
              .send({message: "Invalid or missing token"});
          }
    });
  } else {
    return res.status(StatusCodes.UNAUTHORIZED).send({message: "Invalid or missing token"});
  }
};

export default verifyToken