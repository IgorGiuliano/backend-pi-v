import { prisma } from '../../prisma/database';

class CreateService {
    async execute(id: string, deviceId: string) {
        const user = await prisma.user.findFirst({
            where: {
                id
            }
        });

        console.log(user);

        const device = await prisma.devices.create({
            data: {
                deviceId,
                cnpjDaInstituicao: user.cnpjDaInstituicao
            }
        });

        console.log(device);

        return device;
    }
}

export { CreateService };
