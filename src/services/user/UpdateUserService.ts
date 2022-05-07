import { prisma } from '../../prisma/database';

class UpdateUserService {
    async execute(id: string, email: string, name: string, lastName: string, cpf: string, cargo: string) {
        const user = await prisma.user.update({
            where: {
                id
            },
            data: {
                email,
                name,
                lastName,
                cpf,
                cargo
            }
        });

        return user;
    }
}

export { UpdateUserService };
