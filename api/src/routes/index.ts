import express from 'express';
import userRouter from "../routes/authRoutes";
import challengeRouter from "./challengeRoutes";
import {isAdmin, protect} from '../middleware/authMiddleware';
import { AdminController } from '../controllers/adminController';

const allRouter = express.Router();


allRouter.use('/users', userRouter);
allRouter.use('/challenges', challengeRouter);
allRouter.use('/admin/dashboard', protect, isAdmin, AdminController.getDashboard)

export default allRouter;