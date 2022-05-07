"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateService = void 0;
const database_1 = require("../../prisma/database");
class CreateService {
    async execute(id, deviceId) {
        const user = await database_1.prisma.user.findFirst({
            where: {
                id
            }
        });
        console.log(user);
        const device = await database_1.prisma.devices.create({
            data: {
                deviceId,
                cnpjDaInstituicao: user.cnpjDaInstituicao
            }
        });
        console.log(device);
        return device;
    }
}
exports.CreateService = CreateService;
