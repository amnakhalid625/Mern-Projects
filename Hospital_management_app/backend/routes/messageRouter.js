import express from 'express'
import { getMessages, sendMessage } from '../controllers/messageController.js'
import { isAdminAuthenticalted } from '../middlewares/Auth.js'
const router=express.Router()

router.post('/send',sendMessage);
router.get('/get/all',isAdminAuthenticalted,getMessages)

export default router;