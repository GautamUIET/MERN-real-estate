import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createListening ,deleteListening,updateListing,getListing,getListings} from '../controllers/lisning.controller.js';
const router = express.Router();

router.post('/create',verifyToken,createListening);
router.delete('/delete/:id',verifyToken,deleteListening);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id',getListing);
router.get('/get', getListings);
export default router;