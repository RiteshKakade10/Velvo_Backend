import bcrypt from 'bcrypt';
import userModel from '../models/Users.js';
import jwt from 'jsonwebtoken';

export const Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User Already Exist Please Login",
        success: false
      });
    }
    

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Save new user
    const uModel = new userModel({ name, email, password: hashPassword });
    await uModel.save();

    // Respond success
    res.status(201).json({
      message: "Signup Successfully",
      success: true
    });

  } catch (error) {
    console.error("Signup Error:", error); // Add this for debugging
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const user=await userModel.findOne({email});
    if(!user){
      return res.status(403).json({
        message:"Account Not Found",
        success:false,
      })
    }

    //pasword check 
    const isPassCorrect=await bcrypt.compare(password,user.password);

    if(!isPassCorrect){
      return res.status(403).json({
        message:"Login Failed!!Password is wrong!!",
        success:false,
      })
    }

    //craete a JWT Token
    const jwtToken=jwt.sign(
      {email:user.email,_id:user.id},
      process.env.JWT_SECRET,
      {expiresIn:'24h'},
    );

    // Respond success
    res.status(201).json({
      message: "Login Successfully",
      success: true,
      jwtToken,
      email,
      name:user.name
    });

  } catch (error) {
    console.error("Login Error:", error); // Add this for debugging
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};

