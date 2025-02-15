import express from 'express'
import { deleteAppointment, getAppointment, postAppointment, updateAppointmentStatus } from '../controllers/appointmentController.js';
import { isAdminAuthenticalted, isPatientAuthenticalted } from '../middlewares/Auth.js';
const router=express.Router()

router.post('/post', isPatientAuthenticalted,postAppointment)
router.get('/getall', isAdminAuthenticalted,getAppointment)
router.put('/update/:id',isAdminAuthenticalted,updateAppointmentStatus)
router.delete('/delete/:id',isAdminAuthenticalted,deleteAppointment)

export default router;