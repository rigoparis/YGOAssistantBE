import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import cardImageModel from '../models/cardImages.model.js';

class CardController {
  getByFuzzyName = async (req, res) => {
    try {
        const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=' + req.body.fuzzyName;
        const response = await axios.get(url, { responseType: 'application/json' });
        if (response.status === 200) res.status(StatusCodes.OK).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
  }
}

export default CardController;