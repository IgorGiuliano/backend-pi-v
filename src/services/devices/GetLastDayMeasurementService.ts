/* eslint-disable no-underscore-dangle */
import { prisma } from '../../prisma/database';

class GetLastDayMeasurementService {
    async execute(deviceId: string) {
        const date = new Date();
        const nowDate = date.getTime();
        const dayTimeInMiliseconds = nowDate - (24 * 60 * 60 * 1000);

        const result = await prisma.devicesMessages.groupBy({
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

export { GetLastDayMeasurementService };
