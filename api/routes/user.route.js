import express from 'express'
import { text } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test',text)

export default router;