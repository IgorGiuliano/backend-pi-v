"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLastWeekMeasurementController = void 0;
const GetLastWeekMeasurementService_1 = require("../../services/devices/GetLastWeekMeasurementService");
class GetLastWeekMeasurementController {
    async handle(request, response) {
        const { deviceId } = request.body;
        const service = new GetLastWeekMeasurementService_1.GetLastWeekMeasurementService();
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
exports.GetLastWeekMeasurementController = GetLastWeekMeasurementController;
