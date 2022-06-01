import { prisma } from '../../prisma/database';

class GetLastSevenRowsMeasurementService {
    async execute(deviceId: string) {
        const result = await prisma.devicesMessages.findMany({
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

export { GetLastSevenRowsMeasurementService };
