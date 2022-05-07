import bcrypt from 'bcrypt';
import { prisma } from '../../prisma/database';

interface IUserResponse {
    id: string,
    password: string
}

class UpdatePasswordService {
    async execute(id: string, password: string, newPassword: string) {
        console.log('Service');

        const user = await prisma.user.findFirst({
            where: {
                id
            }
        }) as IUserResponse;

        if (!(await bcrypt.compare(password, user.password))) {
            throw new Error('Senha incorreta');
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(newPassword, salt);

        await prisma.user.update({
            where: {
                id
            },
            data: {
                password: hash
            }
        });

        return 'Senha alterada com sucesso';
    }
}

export { UpdatePasswordService };
