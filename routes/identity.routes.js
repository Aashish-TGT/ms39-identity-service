import express from 'express';
import { bindIdentity, getConsent } from '../controllers/identity.controller.js';

const router = express.Router();

router.post('/bind/identity', bindIdentity);
router.get('/consent/:receiptId', getConsent);

export default router;
