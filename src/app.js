import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

//Load environment variables
import 'dotenv/config';

//Setup DB connection
import './config/db.js';

//Import routes
import apiRoutes from './routes/api.routes.js';

const app = express();
app.use(helmet())
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

//Use routes
app.use('/api', apiRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => { 
  console.log('listening on port ' + port);
});

