import { Request, Response } from 'express';
import { DeleteSevice } from '../../services/devices/DeleteService';

interface IRequestBody {
    id: string,
    deviceId: string
}
class DeleteController {
    async handle(request: Request, response: Response) {
        const { deviceId } = request.body as IRequestBody;
        const service = new DeleteSevice();

        try {
            const result = await service.execute(deviceId);
            return response.status(200).json({ deleted: result });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }
        return null;
    }
}

export { DeleteController };
