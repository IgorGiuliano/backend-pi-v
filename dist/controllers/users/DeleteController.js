"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteController = void 0;
const DeleteService_1 = require("../../services/user/DeleteService");
class DeleteController {
    async handle(request, response) {
        const { id } = request.body;
        const service = new DeleteService_1.DeleteService();
        try {
            const result = await service.execute(id);
            return response.status(200).json(result).redirect('/');
        }
        catch (err) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }
        return null;
    }
}
exports.DeleteController = DeleteController;
