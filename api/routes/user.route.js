import express from 'express'
import { text, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test',text)
router.post('/update/:id',verifyToken,updateUser)

export default router;