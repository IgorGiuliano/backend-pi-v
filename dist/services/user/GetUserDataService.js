"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserDataService = void 0;
const database_1 = require("../../prisma/database");
class GetUserDataService {
    async execute(id) {
        const result = await database_1.prisma.user.findFirst({
            where: {
                id
            }
        });
        return result;
    }
}
exports.GetUserDataService = GetUserDataService;
