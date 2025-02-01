import mongoose from 'mongoose'


const dbConnection= async ()=>{
try {
  await  mongoose.connect(process.env.MONGO_URI)
  console.log('connect database successfully!')

} catch (error) {

    console.log(error,'error in the connection of the database')
}
}
export default dbConnection;