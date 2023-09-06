import express from 'express';

//Load environment variables
import 'dotenv/config';

//Setup DB connection
import './config/db.js';

//Import routes
import apiRoutes from './routes/api.routes.js';

const app = express();
app.use(express.json());

//Use routes
app.use('/api', apiRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => { 
  console.log('listening on port ' + port);
});

