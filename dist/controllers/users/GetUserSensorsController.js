"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserSensorsControler = void 0;
const GetUserSensorsService_1 = require("../../services/user/GetUserSensorsService");
class GetUserSensorsControler {
    async handle(request, response) {
        const { id } = request.body;
        const service = new GetUserSensorsService_1.GetUserSensorsService();
        try {
            const result = await service.execute(id);
            return response.status(200).json(result);
        }
        catch (err) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }
        return null;
    }
}
exports.GetUserSensorsControler = GetUserSensorsControler;
