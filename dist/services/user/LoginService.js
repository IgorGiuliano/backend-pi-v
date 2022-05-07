"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt_1 = __importDefault(require("bcrypt"));
const database_1 = require("../../prisma/database");
class LoginService {
    async execute(email, password) {
        const user = await database_1.prisma.user.findFirst({
            where: {
                email
            }
        });
        console.log(user);
        if (!user) {
            throw new Error('O usuário não foi cadastrado');
        }
        if (!(await bcrypt_1.default.compare(password, user.password))) {
            throw new Error('Usuário ou senha incorretos');
        }
        const token = (0, jsonwebtoken_1.sign)({
            user: {
                name: user.name
            }
        }, process.env.JWT_SECRET, {
            subject: user.id,
            expiresIn: '1d'
        });
        return { token, data: { id: user.id, name: user.name, email: user.email } };
    }
}
exports.LoginService = LoginService;
