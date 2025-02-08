import express from 'express';
import userRouter from "../routes/authRoutes";
import challengeRouter from "./challengeRoutes";

const allRouter = express.Router();


allRouter.use('/users', userRouter);
allRouter.use('/challenge', challengeRouter);

export default allRouter;