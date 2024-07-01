import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createListening } from '../controllers/lisning.controller.js';
const router = express.Router();

router.post('/create',verifyToken,createListening);
export default router;