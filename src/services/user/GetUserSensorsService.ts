import { prisma } from '../../prisma/database';

class GetUserSensorsService {
    async execute(id: string) {
        const user = await prisma.user.findFirst({
            where: {
                id
            }
        });

        const sensors = await prisma.devices.findMany({
            where: {
                cnpjDaInstituicao: user.cnpjDaInstituicao
            }
        });

        return sensors;
    }
}

export { GetUserSensorsService };
