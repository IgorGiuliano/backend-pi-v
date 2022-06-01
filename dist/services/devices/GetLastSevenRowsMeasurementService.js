"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLastSevenRowsMeasurementService = void 0;
const database_1 = require("../../prisma/database");
class GetLastSevenRowsMeasurementService {
    async execute(deviceId) {
        const result = await database_1.prisma.devicesMessages.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            where: {
                deviceId
            },
            take: 70
        });
        return result;
    }
}
exports.GetLastSevenRowsMeasurementService = GetLastSevenRowsMeasurementService;
