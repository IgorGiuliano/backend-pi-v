"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserDataControler = void 0;
const GetUserDataService_1 = require("@services/user/GetUserDataService");
class GetUserDataControler {
    async handle(request, response) {
        const { id } = request.body;
        const service = new GetUserDataService_1.GetUserDataService();
        try {
            const result = await service.execute(id);
            return response.status(200).json(result);
        }
        catch (err) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }
        return null;
    }
}
exports.GetUserDataControler = GetUserDataControler;
