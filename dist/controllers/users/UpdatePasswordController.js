"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePasswordController = void 0;
const UpdatePasswordService_1 = require("../../services/user/UpdatePasswordService");
class UpdatePasswordController {
    async handle(request, response) {
        const { id, password, newPassword, newPasswordConfirmation } = request.body;
        const service = new UpdatePasswordService_1.UpdatePasswordService();
        try {
            if (!password || !newPassword || !newPasswordConfirmation) {
                throw new Error('Campos incompletos');
            }
            if (newPassword.length < 6 || newPasswordConfirmation.length < 6) {
                throw new Error('Nova senha com menos de 6 caracteres');
            }
            if (newPassword !== newPasswordConfirmation) {
                throw new Error('A nova senha e sua confirmação não conferem');
            }
            const result = await service.execute(id, password, newPassword);
            return response.status(200).json({ status: result });
        }
        catch (err) {
            if (err instanceof Error) {
                return response.status(401).json({ Error: err.message });
            }
        }
        return null;
    }
}
exports.UpdatePasswordController = UpdatePasswordController;
