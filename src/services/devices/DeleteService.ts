import { prisma } from '../../prisma/database';

class DeleteSevice {
    async execute(deviceId: string) {
        await prisma.devices.delete({
            where: {
                deviceId
            }
        });

        return 'Dispositivo excluido com sucesso';
    }
}

export { DeleteSevice };
