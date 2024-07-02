import express from 'express';
import { UserController } from '../controller/user-controlller';

export const publicRouter = express.Router();

publicRouter.post('/api/users', UserController.register);
