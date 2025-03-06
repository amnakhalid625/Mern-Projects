import mongoose from "mongoose";


export const dbConnection= async ()=>{
    try {
      await mongoose.connect(process.env.MONGI_URI)
      console.log('mongoose database connected!')
    } catch (error) {
       console.log('error in the database connection ${error') 
    }
}