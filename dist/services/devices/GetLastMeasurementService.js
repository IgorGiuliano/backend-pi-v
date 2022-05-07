"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLastMeasurementService = void 0;
const database_1 = require("../../prisma/database");
class GetLastMeasurementService {
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
exports.GetLastMeasurementService = GetLastMeasurementService;
