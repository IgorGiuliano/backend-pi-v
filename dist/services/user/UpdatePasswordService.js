"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePasswordService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const database_1 = require("../../prisma/database");
class UpdatePasswordService {
    async execute(id, password, newPassword) {
        console.log('Service');
        const user = await database_1.prisma.user.findFirst({
            where: {
                id
            }
        });
        if (!(await bcrypt_1.default.compare(password, user.password))) {
            throw new Error('Senha incorreta');
        }
        const salt = await bcrypt_1.default.genSalt(10);
        const hash = await bcrypt_1.default.hash(newPassword, salt);
        await database_1.prisma.user.update({
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
exports.UpdatePasswordService = UpdatePasswordService;
