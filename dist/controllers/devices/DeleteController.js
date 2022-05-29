"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteController = void 0;
const DeleteService_1 = require("../../services/devices/DeleteService");
class DeleteController {
    async handle(request, response) {
        const { deviceId } = request.body;
        const service = new DeleteService_1.DeleteSevice();
        try {
            const result = await service.execute(deviceId);
            return response.status(200).json({ deleted: result });
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
