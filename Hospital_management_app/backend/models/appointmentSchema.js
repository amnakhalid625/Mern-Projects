import mongoose from "mongoose";
import validator from 'validator'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

const appointmentSchema=new mongoose.Schema({
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
NIC:{
    type:String,
    required:true,
    minLength:[13,"NIC  must contain exact 13 digits! "],
    maxLength:[13,"NIC must contain exact 13 digits! "],
},
dob:{
    type:Date,
    required:[true,"DOB is required!"]

},
gender:{
    type:String,
    required:true,
    enum:["Male","Female"]
},
appointment_date:{
    type:String,
    required:true
},
deparatment:{
    type:String,
    required:true 
},
doctor:{
    firstName:{

    },
    lastName:{

    }
},
hasVisited:{
    type:Boolean,
    default:false
},
doctorId:{
    type:mongoose.Schema.ObjectId,
    required:true

},
patientId:{
    type:mongoose.Schema.ObjectId,
    required:true

},
address:{
   type:String,
   required:true, 
},
status:{
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default:"pending"
}
},{timestamps:true})


const Appiontment= mongoose.model("Appiontment",appointmentSchema);

export { Appiontment };