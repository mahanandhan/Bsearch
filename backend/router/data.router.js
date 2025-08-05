import express from 'express';
import { getData, postData } from '../controller/data.controller.js';

const router = express.Router();

router.post('/data', postData);
router.get('/search', getData);

export default router;