import { Router } from 'express';
import { LoginController } from '../controllers/users/LoginController';
import { RegisterController } from '../controllers/users/RegisterController';
import { UpdatePasswordController } from '../controllers/users/UpdatePasswordController';
import { UpdateUserController } from '../controllers/users/UpdateUserController';
import { DeleteController } from '../controllers/users/DeleteController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { GetUserDataControler } from '../controllers/users/GetUserDataController';

const userRoutes = Router();

userRoutes.post('/login', new LoginController().handle);
userRoutes.post('/register-user', new RegisterController().handle);
userRoutes.post('/update-password', ensureAuthenticated, new UpdatePasswordController().handle);
userRoutes.post('/update-user', ensureAuthenticated, new UpdateUserController().handle);
userRoutes.post('/delete-user', ensureAuthenticated, new DeleteController().handle);
userRoutes.post('/get-user-data', ensureAuthenticated, new GetUserDataControler().handle);

export { userRoutes };
