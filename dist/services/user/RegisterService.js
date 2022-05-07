"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const database_1 = require("../../prisma/database");
class RegisterService {
    async execute(name, lastName, email, cpf, password, cargo, cnpjDaInstituicao, nomeDaInstituicao, tipoDeInstituicao) {
        const user = await database_1.prisma.user.findFirst({
            where: {
                email
            }
        });
        const instituicao = await database_1.prisma.instituicao.findFirst({
            where: {
                cnpjDaInstituicao
            }
        });
        if (!instituicao) {
            await database_1.prisma.instituicao.create({
                data: {
                    cnpjDaInstituicao,
                    nomeDaInstituicao,
                    tipoDeInstituicao
                }
            });
        }
        if (!user) {
            const salt = await bcrypt_1.default.genSalt(10);
            const hash = await bcrypt_1.default.hash(password, salt);
            const User = await database_1.prisma.user.create({
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
exports.RegisterService = RegisterService;
