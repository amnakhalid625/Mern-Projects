import express from 'express'
const registerRoute=express.Router();
import { Login, Logout, Register } from '../controller/registerController.js';


 registerRoute.post('/register/user',Register)
 registerRoute.post('/login/user',Login)
 registerRoute.post('/logout/user',Logout)



 export {registerRoute}