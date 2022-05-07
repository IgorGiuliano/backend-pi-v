"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const LoginController_1 = require("../controllers/users/LoginController");
const RegisterController_1 = require("../controllers/users/RegisterController");
const UpdatePasswordController_1 = require("../controllers/users/UpdatePasswordController");
const UpdateUserController_1 = require("../controllers/users/UpdateUserController");
const DeleteController_1 = require("../controllers/users/DeleteController");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post('/login', new LoginController_1.LoginController().handle);
userRoutes.post('/register-user', new RegisterController_1.RegisterController().handle);
userRoutes.post('/update-password', ensureAuthenticated_1.ensureAuthenticated, new UpdatePasswordController_1.UpdatePasswordController().handle);
userRoutes.post('/update-user', ensureAuthenticated_1.ensureAuthenticated, new UpdateUserController_1.UpdateUserController().handle);
userRoutes.post('/delete-user', ensureAuthenticated_1.ensureAuthenticated, new DeleteController_1.DeleteController().handle);
