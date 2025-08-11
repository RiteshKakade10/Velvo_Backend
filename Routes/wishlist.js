import express from 'express';
const router=express.Router();
import Authentication from '../Middlewares/Auth';
import wishlistController,{wishlist,getWishlist} from '../Controllers/wishlistController';

router.post('/add',Authentication,wishlist);
router.post('/',Authentication,getWishlist);
