"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLastDayMeasurementService = void 0;
const database_1 = require("../../prisma/database");
class GetLastDayMeasurementService {
    async execute(deviceId) {
        const date = new Date();
        const nowDate = date.getTime();
        const dayTimeInMiliseconds = nowDate - (24 * 60 * 60 * 1000);
        const result = await database_1.prisma.devicesMessages.groupBy({
            by: ['deviceId'],
            where: {
                createdAt: {
                    gt: dayTimeInMiliseconds
                },
                deviceId
            },
            _avg: {
                weight: true
            }
        });
        return result[0]._avg;
    }
}
exports.GetLastDayMeasurementService = GetLastDayMeasurementService;
