import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
name:{type:String,required:true},
fathername:{type:String,require:true},
email:{type:String,required:true},
phone:
{type:String,
    required:[true,'Phone number is required!'],
    maxlength:
    [11,'Number must has 11 characters!'],
    minength:[11,'Number must exactly 11 characters!'],
    match: [/^\d{11}$/, 'Phone number must be exactly 11 digits!'], 
    trim: true
}
},{timestamps:true})
const User=mongoose.model("User",userSchema)

export default User;