import mongoose from "mongoose";
import validator from 'validator'

const messageSchema=new mongoose.Schema({
firstName:{
    type:String,
    required:true,
    minLength:[3,"First Name must contain at least 3 character"]
},

lastName:{
    type:String,
    required:true,
    minLength:[3,"First Name must contain at least 3 character"]
},
email:{
    type:String,
    required:true,
    validate:[validator.isEmail,'please provide a valid Email']

},
phone:{
    type:String,
    required:true,
    minLength:[11,"Phone Number must contain exact 11 digits "],
    maxLength:[11,"Phone Number must contain exact 11 digits "],
},
message:{
    type:String,
    required:true,
    minLength:[10,"message must contain at least 10 characters! "],
},


},{timestamps:true})

const Message = mongoose.model("Message",messageSchema);

export { Message };