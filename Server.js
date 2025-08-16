import express from 'express';
import dotenv from 'dotenv';
//import path from 'path';
//import { fileURLToPath } from 'url';
import cors from 'cors';
import bodyParser from 'body-parser';

import '../Backend/Config/db.js'; // Make sure this path is correct
import AuthRouter from './Routes/AuthRouter.js';
import ProductRouter from './Routes/ProductsRouter.js';
import ContactRouter from './Routes/Contact.router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4040;

// For __dirname in ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(express.json()); // Also parses JSON payloads

// EJS setup
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'Pages')); // 'Pages' folder for views
// app.use(express.static(path.join(__dirname, 'public'))); // Static files




// API Routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/',ContactRouter);

// Basic routes
app.get('/home', (req, res) => {
  res.send('Velvo Backend is Running Successfully!');
});

app.get('/ping', (req, res) => {
  res.send('Pong from Velvo backend!');
});



// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
