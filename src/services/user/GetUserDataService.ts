import { prisma } from '../../prisma/database';

class GetUserDataService {
    async execute(id: string) {
        const result = await prisma.user.findFirst({
            where: {
                id
            }
        });

        return result;
    }
}

export { GetUserDataService };
