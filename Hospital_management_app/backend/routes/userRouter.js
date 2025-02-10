import express from 'express'
import { addNewAdmin, addNewDoctor, getAllDoctors, getUserDetails, logoutAdmin, logoutPateint, patientLogin, patientRegister } from '../controllers/userController.js';
import { isAdminAuthenticalted, isPatientAuthenticalted } from '../middlewares/Auth.js'

const router = express.Router()

router.post('/patient/register', patientRegister)
router.post('/patient/login', patientLogin)
router.post('/admin/register', isAdminAuthenticalted,addNewAdmin)
router.get('/doctors',getAllDoctors)
router.get('/admin/me',isAdminAuthenticalted,getUserDetails)
router.get('/patient/me',isPatientAuthenticalted,getUserDetails)
router.get('/admin/logout',isAdminAuthenticalted,logoutAdmin)
router.get('/patient/logout',isPatientAuthenticalted,logoutPateint)
router.post('/doctor/addnew',isAdminAuthenticalted,addNewDoctor)






export default router;

