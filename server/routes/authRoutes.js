import { Router } from 'express';
import { loginAdmin } from '../controllers/authController.js';

const router = Router();

// Admin Login Route
router.post('/login', loginAdmin);

export default router;