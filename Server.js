import express from 'express';
import dotenv from 'dotenv';
import './models/db.js'; // Triggers DB connection
import AuthRouter from './Routes/AuthRouter.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4040;

app.use(express.json());





//important
app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter);




// Routes
app.get('/', (req, res) => {
  res.send('🎉 Velvo Backend is Running Successfully!');
});

app.get('/ping', (req, res) => {
  res.send('Pong from Velvo backend!');
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
