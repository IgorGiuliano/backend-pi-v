"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLastMonthMeasurementService = void 0;
const database_1 = require("../../prisma/database");
class GetLastMonthMeasurementService {
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
exports.GetLastMonthMeasurementService = GetLastMonthMeasurementService;
