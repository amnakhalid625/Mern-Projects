import { User } from "../models/userSchema.js"
import {catchAsyncError}  from '../middlewares/catchAsyncError.js'
import ErrorHandler from '../middlewares/errorMiddleware.js'
import {generateToken} from '../utils/jwtToken.js'
import cloudinary from 'cloudinary'

export const patientRegister = catchAsyncError(async(req, res, next) => {
    const { firstName, lastName, email, phone, NIC, dob, gender, password, role } = req.body;

    if(!firstName || !lastName || !email || !phone || !NIC || !dob || !gender || !password || !role) {
        return next(new ErrorHandler("Please fill all fields", 400));
    }
    
    let user = await User.findOne({email});
    if(user){
        return next(new ErrorHandler("user already register", 400))
    }

    user = await User.create({
        firstName, lastName, email, phone, NIC, dob, gender, password, role
    });


    generateToken(user,"Patient registered successfully",201,res)

   
});


export const patientLogin = catchAsyncError(async(req, res, next) => {
    const { email, password, confirmPassword, role } = req.body;
    if(!email || !password || !confirmPassword || !role){
        return next(new ErrorHandler("all fields must required!",400));
    }
    if(password !== confirmPassword){
        return next(new ErrorHandler("Both password must be same!",400));
    }

    const findUser = await User.findOne({email}).select('+password')
    if(!findUser){
        return next(new ErrorHandler("Invalid Credentials!",400));
    }
    
    const isPasswordMatched = await findUser.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Credentials!",400));
    }

    if(role !== findUser.role){
        return next(new ErrorHandler("User with this role not found!",400));
    }

       generateToken(findUser,"Patient login successfully",201,res)

});


export const addNewAdmin=catchAsyncError(async(req,res,next)=>{
    const { firstName, lastName, email, phone, NIC, dob, gender, password, role } = req.body;

    if(!firstName || !lastName || !email || !phone || !NIC || !dob || !gender || !password ){
        return next(new ErrorHandler("all fields must required!",400));
    }
    const isRegister=await User.findOne({email})
    if(isRegister){
        return next(ErrorHandler(`${isRegister.role}this email is already exsit! `,400));
    }
    const admin=await User.create({
        firstName, lastName, email, phone, NIC, dob, gender, password, role:"Admin"
    })

    res.status(201).json({
        success: true,
        message: "New admin registered successfully"
    });
})


export const getAllDoctors=catchAsyncError(async(req,res,next)=>{
    const doctors=await User.find({role:"Doctor"});
    res.status(200).json({
        success:true,
      doctors,
    })
})

export const getUserDetails=catchAsyncError(async(req,res,next)=>{
    const user=req.user;
    res.status(200).json({success:true,user})

})

export const logoutAdmin = catchAsyncError(async(req, res, next) => {
    res.status(200).cookie("adminToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production"
    }).json({
        success: true,
        message: "Admin logged out successfully!"
    })
})


export const logoutPateint = catchAsyncError(async(req, res, next) => {
    res.status(200).cookie("patientToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production"
    }).json({
        success: true,
        message: "patient logged out successfully!"
    })
})


export const addNewDoctor = catchAsyncError(async(req, res, next) => {
    if(!req.files || Object.keys(req.files).length===0){
        return next(new ErrorHandler("Doctor avatar required!",400))
    }
    const {docAvatar} = req.files;
    const allowedFormats = ['image/png', 'image/jpeg', 'image/webp'];
    if(!allowedFormats.includes(docAvatar.mimetype)){
        return next(new ErrorHandler("file format not supported!",400))
    } 
    const {firstName, lastName, email, phone, NIC, dob, gender, password,doctorDepartment}=req.body;
    if(!firstName || !lastName || !email || !phone || !NIC || !dob || !gender || !password || !doctorDepartment) {
        return next(new ErrorHandler("Please Provide full details", 400));
    }
    const isRegistered= await User.findOne({email})
    if(isRegistered){
        return next(new ErrorHandler("User already exist with this email!", 400));

    };
    const cloudinaryResponse = await cloudinary.uploader.upload(
        docAvatar.tempFilePath
    );
    if(!cloudinaryResponse || cloudinaryResponse.error){
        return next(new ErrorHandler("Error uploading image to cloud storage", 500));
    }
    const doctor =await User.create({
        firstName, lastName, email, phone, NIC, dob, gender, password,doctorDepartment ,role:"Doctor",
        docAvatar:{
            public_id:cloudinaryResponse.public_id,
            url:cloudinaryResponse.secure_url,

        }

    })
    res.status(201).json({
        success: true,
        message: "New Doctor registered!",
        doctor
    })

})
