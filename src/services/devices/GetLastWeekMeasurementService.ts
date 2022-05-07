import { prisma } from '../../prisma/database';

class GetLastWeekMeasurementService {
    async execute(deviceId: string) {
        const result = await prisma.devicesMessages.findFirst({
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

export { GetLastWeekMeasurementService };
