import bcrypt from 'bcrypt';
import { prisma } from '../../prisma/database';

class RegisterService {
    async execute(
        name: string, lastName: string, email: string, cpf: string, password: string, cargo: string,
        cnpjDaInstituicao: string, nomeDaInstituicao: string, tipoDeInstituicao: string
    ) {
        const user = await prisma.user.findFirst({
            where: {
                email
            }
        });

        const instituicao = await prisma.instituicao.findFirst({
            where: {
                cnpjDaInstituicao
            }
        });

        if (!instituicao) {
            await prisma.instituicao.create({
                data: {
                    cnpjDaInstituicao,
                    nomeDaInstituicao,
                    tipoDeInstituicao
                }
            });
        }

        if (!user) {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);

            const User = await prisma.user.create({
                data: {
                    email,
                    password: hash,
                    name,
                    lastName,
                    cpf,
                    cargo,
                    cnpjDaInstituicao
                }
            });

            return User;
        }

        throw new Error(`O email ${email}, já está sendo utilizado`);
    }
}

export { RegisterService };
