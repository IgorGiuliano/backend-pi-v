"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSevice = void 0;
const database_1 = require("../../prisma/database");
class DeleteSevice {
    async execute(deviceId) {
        await database_1.prisma.devices.delete({
            where: {
                deviceId
            }
        });
        return 'Dispositivo excluido com sucesso';
    }
}
exports.DeleteSevice = DeleteSevice;
