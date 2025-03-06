import User from "../models/user_model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All field must required!",
      });
    }
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.status(400).json({
        success: false,
        message: "Email is already exsit!",
      });
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });
    await newUser.save();
    return res
      .status(201)
      .json({ success: true, message: "user created successfully!", newUser });
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Error!",
        error: error.message,
      });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields must required!" });
    }
    const findUser =await User.findOne({ email });
    if (!findUser) {
      return res
        .status(400)
        .json({ success: false, message: "user not exsit please register!" });
    }
    const comparePassword = await bcrypt.compare(password,findUser.password);
    if (!comparePassword) {
      return res
        .status(400)
        .json({ success: false, message: "password does not match!" });
    }

    const token = await jwt.sign({
      userId: findUser._id,
      email: findUser.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" } 
);

return res.status(200).json({
    success:true,
    message:"User login successfully!",
    token
});



  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal server error!",
        error: error.message,
      });
  }
};

export const Logout=async(req,res)=>{
  try {
    res.clearCookie("token",{
        httpOnly:true,
        secure:true,
        sameSite: "None",
        maxAge: 60 * 60 * 1000,
    });
    return res.status(200).json({
        success: true,
        message: "User logged out successfully!",
      });
  } catch (error) {
    return res.status(500).json({
        success: false,
        message: "Internal server error!",
        error: error.message,
      });
  }  
}
