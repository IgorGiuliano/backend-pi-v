"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserSensorsService = void 0;
const database_1 = require("../../prisma/database");
class GetUserSensorsService {
    async execute(id) {
        const user = await database_1.prisma.user.findFirst({
            where: {
                id
            }
        });
        const sensors = await database_1.prisma.devices.findMany({
            where: {
                cnpjDaInstituicao: user.cnpjDaInstituicao
            }
        });
        return sensors;
    }
}
exports.GetUserSensorsService = GetUserSensorsService;
