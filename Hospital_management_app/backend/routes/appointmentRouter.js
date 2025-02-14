import express from 'express'
import { postAppointment } from '../controllers/appointmentController.js';
import { isPatientAuthenticalted } from '../middlewares/Auth.js';
const router=express.Router()

router.post('/post', isPatientAuthenticalted,postAppointment)

export default router;