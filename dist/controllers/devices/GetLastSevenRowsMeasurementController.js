"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLastSevenRowsMeasurementController = void 0;
const GetLastSevenRowsMeasurementService_1 = require("../../services/devices/GetLastSevenRowsMeasurementService");
class GetLastSevenRowsMeasurementController {
    async handle(request, response) {
        const { deviceId } = request.body;
        const service = new GetLastSevenRowsMeasurementService_1.GetLastSevenRowsMeasurementService();
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
exports.GetLastSevenRowsMeasurementController = GetLastSevenRowsMeasurementController;
