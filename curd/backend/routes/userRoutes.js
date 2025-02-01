import express, { response } from 'express'
import User from '../models/user.model.js'

const userRoute=express.Router()

userRoute.post('/register', async(req,res)=>{
try {
    const {name,fathername,email,phone}=req.body
    if(!name || !email || !fathername || !phone){
        return res.status(400).json({success:false,message:"All field must field:name,email,fathername and phone."})
    }

    const exsitingUser=await User.findOne({email})
    if(exsitingUser){
        return res.status(400).json({success:false,message:"User already exsit with this email"})

    }
    const createUser=await User.create({
        name,email,fathername,phone
    });
    // send success response
    await createUser.save()
 res.status(201).json({success:true,message:"User Created successfully!",createUser})
} catch (error) {
    console.error("Error creating user:", error);
    if(error.name=== 'Validation Error'){
        return res.status(400).json({
            success:false,
            message:"Validation failed!",
            errors:error.errors
        });
    }
    return res.status(500).json({ success: false, message: "Internal Server Error" ,
        error:error.message

    }); 
}
});

//get all users
userRoute.get('/users',async(req,res)=>{
try {
    const users= await User.find()
    if(!users){
        return res.status(404).json({success:false,message:"No user Found in database!"})
    }
    res.status(200).json({success:true,users})
} catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });

}
})

//fetch single user
userRoute.get('/users/:id',async(req,res)=>{
    try {
        const findUser=await User.findById(req.params.id)
        if(!findUser){
return res.status(400).json({success:false,message:"User not found"})
        }
        res.status(200).json({success:true,findUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" });
 
    }
})

// update user

userRoute.put('/users/:id',async(req,res)=>{
try {
    const { name, email, fathername,phone } = req.body;
    const updateUser=await User.findByIdAndUpdate(
        req.params.id,
        {name,email,fathername,phone},
        {new:true,runValidators:true}

    )
    if(!updateUser){
        return res.status(404).json({ success: false, message: "User not found" });


    }
    return res.status(200).json({success:true,message:"User updated successfully!",updateUser})
    
} catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Internal Server Error" });

}
})


userRoute.delete('/users/:id',async(req,res)=>{
try {
   const deleteUser=await User.findByIdAndDelete(req.params.id)
   if(!deleteUser){
    return res.status(404).json({success:false,message:"user not found!"})

   }
   return res.status(200).json({success:true,message:"user delete successfully!"})
} catch (error) {
   console.log('error in the delting of the user') 
   return res.status(500).json({success:false,message:"Internal server error"})
}
})



export {userRoute}