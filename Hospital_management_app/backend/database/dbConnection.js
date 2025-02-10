import mongoose from "mongoose"
const dbConnection= async()=>{
try {
    mongoose.connect(process.env.MONGO_URI)
    console.log('database connected successfully!')
} catch (error) {
  console.log(`error in the database connection${error}`)  
}
}
export default dbConnection;
