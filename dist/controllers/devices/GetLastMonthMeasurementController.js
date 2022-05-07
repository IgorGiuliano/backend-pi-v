"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLastMonthMeasurementController = void 0;
const GetLastMonthMeasurementService_1 = require("../../services/devices/GetLastMonthMeasurementService");
class GetLastMonthMeasurementController {
    async handle(request, response) {
        const { deviceId } = request.body;
        const service = new GetLastMonthMeasurementService_1.GetLastMonthMeasurementService();
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
exports.GetLastMonthMeasurementController = GetLastMonthMeasurementController;
