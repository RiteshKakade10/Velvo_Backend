import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import '../Backend/Config/db.js';
import AuthRouter from './Routes/AuthRouter.js';
import ProductRouter from './Routes/ProductsRouter.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4040;

// For __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// EJS integration - point to Pages folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Pages')); // <-- Changed from ./views to ./Pages
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(cors());

// API routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

// Routes
app.get('/home', (req, res) => {
  res.send('Velvo Backend is Running Successfully!');
});

app.get('/ping', (req, res) => {
  res.send('Pong from Velvo backend!');
});

// EJS page route
app.get('/homepage', (req, res) => {
  res.render('Home', { // Match file name in Pages (case-sensitive)
    title: 'Home Page',
    name: 'Ritesh'
  });
});

app.get("/page1",(req,res)=>{
  res.send(
    "<h1>Name:Ritesh Raju Kakade</h1>"
  )
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
