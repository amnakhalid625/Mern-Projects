import express from 'express'
const app =express()
import dotenv from "dotenv";
dotenv.config()
import cors from 'cors'
import dbConnection from './database/dbConnection.js';
import { userRoute } from './routes/userRoutes.js';

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api',userRoute)


dbConnection();

app.listen(process.env.PORT,()=>{
    console.log(`server listen on the port ${process.env.PORT}`)
})