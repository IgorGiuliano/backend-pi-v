"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLastDayMeasurementController = void 0;
const GetLastDayMeasurementService_1 = require("../../services/devices/GetLastDayMeasurementService");
class GetLastDayMeasurementController {
    async handle(request, response) {
        const { deviceId } = request.body;
        const service = new GetLastDayMeasurementService_1.GetLastDayMeasurementService();
        try {
            const result = await service.execute(deviceId);
            return response.status(200).json({ result });
        }
        catch (err) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }
        return null;
    }
}
exports.GetLastDayMeasurementController = GetLastDayMeasurementController;
