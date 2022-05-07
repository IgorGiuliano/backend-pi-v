"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
const UpdateUserService_1 = require("../../services/user/UpdateUserService");
class UpdateUserController {
    async handle(request, response) {
        const { id, email, name, lastName, cpf, cargo } = request.body;
        const service = new UpdateUserService_1.UpdateUserService();
        try {
            const result = await service.execute(id, email, name, lastName, cpf, cargo);
            return response.status(200).json({ data: result });
        }
        catch (err) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }
        return null;
    }
}
exports.UpdateUserController = UpdateUserController;
