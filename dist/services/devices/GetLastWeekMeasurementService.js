"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLastWeekMeasurementService = void 0;
const database_1 = require("../../prisma/database");
class GetLastWeekMeasurementService {
    async execute(deviceId) {
        const result = await database_1.prisma.devicesMessages.findFirst({
            orderBy: {
                createdAt: 'desc'
            },
            where: {
                deviceId
            }
        });
        return result;
    }
}
exports.GetLastWeekMeasurementService = GetLastWeekMeasurementService;
