import mongoose from 'mongoose'
import validator from 'validator'


const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        unique:true,
        required: [true, 'Username is required!'], 
        minLength:[5,'Name must contain 5 characters!'],
        maxLength:[10,'Name Should contain 10 characters!']

    },
    email:{
        type:String,
       required:[true,'email must required!'],
       validate:{
        validator:validator.isEmail,
         message: 'Please enter a valid email address!'
       }

    },
    password:{
        type:String,
        required:[true,'password must required!']
    }
})
const User=mongoose.model("User",userSchema)
export default User;