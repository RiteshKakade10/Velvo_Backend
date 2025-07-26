import express from 'express';
import { loginValidation, signupValidation } from '../Middlewares/AuthValidation.js';
import { Login, Signup } from '../Controllers/AuthController.js';


const router = express.Router();

router.post('/signup', signupValidation, Signup);
router.post('/login',loginValidation,Login);

export default router;
