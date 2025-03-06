import express from 'express'
const app=express()
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import {registerRoute} from './routes/registerRoute.js';
dotenv.config();
import cookieParser from 'cookie-parser';

app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}))
app.use(cookieParser());


app.use('/api',registerRoute)


dbConnection();
app.listen(process.env.PORT,()=>{
console.log(`app listen on the port ${process.env.PORT}`)
})