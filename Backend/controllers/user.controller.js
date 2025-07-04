import User from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//Route for user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //checking user already exists or not
    const exists = await User.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "user already exist",
      });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = createToken(newUser._id);
    res.json({
      success: true,
      token,
      message: "User Registered Successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//Route for user Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "User doesn't exists",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({
        success: true,
        token,
      });
    } else {
      res.json({ success: false, message: "Invalid credential" });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//Route for admin Login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token =jwt.sign(email+password, process.env.JWT_SECRET);
      res.json({success:true,token})
    }
    else{
      
      res.json({success:false,message:"Invalid Credential"})
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { loginUser, registerUser, adminLogin };
