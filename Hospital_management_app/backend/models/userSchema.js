import mongoose from "mongoose";
import validator from 'validator'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema=new mongoose.Schema({
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
password:{
type:String,
minLength:[8,'password must contain at least 8 characters'],
required:true,
select:false
},
role:{
type:String,
required:true,
enum:["Doctor","Patient","Admin"]
},
doctorDepartment:{
   type:String, 
},
docAvatar:{
    public_id:String,
    url:String
}

},{timestamps:true})

// hash passowrd when schema is saved
userSchema.pre("save",async function(next){
    if(!this.isModified('password')){
        next()
    };
    this.password= await bcryptjs.hash(this.password,10)
});
// compare password
userSchema.methods.comparePassword=async function (enteredPassword) {
    return await bcryptjs.compare(enteredPassword,this.password);
};

// fucntion when user is login generate token

userSchema.methods.generateJsonWebToken = function() {
   return jwt.sign(
     { id: this._id },
     process.env.JWT_SECERET_KEY,
     { expiresIn: process.env.JWT_EXPIRES }
   );
}

const User = mongoose.model("User",userSchema);

export { User };