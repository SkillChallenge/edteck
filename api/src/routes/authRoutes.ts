import { Router } from 'express';
import { UserController } from '../controllers/authController';

const userRouter = Router();

userRouter.post('/register',UserController.register);
userRouter.post('/login', UserController.login);
userRouter.get('/', UserController.getAll);
userRouter.get('/:id', UserController.getById);
userRouter.put('/:id', UserController.update);
userRouter.delete('/:id', UserController.delete);

export default userRouter;