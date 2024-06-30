import express from 'express';
import { UsersController } from './users.controller.js';

const usersRouter = express.Router();

usersRouter.get('/', UsersController.getUsers);
usersRouter.get('/:id', UsersController.getUserById);
usersRouter.patch('/:id', UsersController.updateUser);
usersRouter.delete('/:id', UsersController.deleteUser);

export default usersRouter;
