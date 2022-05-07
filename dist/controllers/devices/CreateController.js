"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateController = void 0;
const CreateService_1 = require("../../services/devices/CreateService");
class CreateController {
    async handle(request, response) {
        const { id, deviceId } = request.body;
        const service = new CreateService_1.CreateService();
        console.log('controller');
        try {
            const result = await service.execute(id, deviceId);
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
exports.CreateController = CreateController;
