"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const LoginService_1 = require("../../services/user/LoginService");
class LoginController {
    async handle(request, response) {
        const { email, password } = request.body;
        const service = new LoginService_1.LoginService();
        try {
            if (!email || !password) {
                response.json({ Error: 'Campos incompletos' });
            }
            if (password.length < 6) {
                response.json({ Error: 'Senha com menos de 6 caracteres' });
            }
            const token = await service.execute(email, password);
            return response.status(200).json(token);
        }
        catch (err) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message }).redirect('/');
            }
        }
        return null;
    }
}
exports.LoginController = LoginController;
