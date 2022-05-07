"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteService = void 0;
const database_1 = require("../../prisma/database");
class DeleteService {
    async execute(id) {
        await database_1.prisma.user.delete({
            where: {
                id
            }
        });
        return 'Usuário excluído';
    }
}
exports.DeleteService = DeleteService;
