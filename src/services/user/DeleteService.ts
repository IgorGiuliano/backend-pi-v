import { prisma } from '../../prisma/database';

class DeleteService {
    async execute(id: string) {
        await prisma.user.delete({
            where: {
                id
            }
        });

        return 'Usuário excluído';
    }
}

export { DeleteService };
