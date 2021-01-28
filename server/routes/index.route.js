import express from 'express';
import sessionRoutes from './session.route';
import userRoutes from './user.route';

const router = express.Router();

// mount auth routes at /auth
router.use('/session', sessionRoutes);

// mount user routes at /users
router.use('/users', userRoutes);

export default router;