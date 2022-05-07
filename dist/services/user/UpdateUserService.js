"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserService = void 0;
const database_1 = require("../../prisma/database");
class UpdateUserService {
    async execute(id, email, name, lastName, cpf, cargo) {
        const user = await database_1.prisma.user.update({
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
exports.UpdateUserService = UpdateUserService;
