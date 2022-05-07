"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLastMeasurementController = void 0;
const GetLastMeasurementService_1 = require("../../services/devices/GetLastMeasurementService");
class GetLastMeasurementController {
    async handle(request, response) {
        const { deviceId } = request.body;
        const service = new GetLastMeasurementService_1.GetLastMeasurementService();
        try {
            const result = await service.execute(deviceId);
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
exports.GetLastMeasurementController = GetLastMeasurementController;
