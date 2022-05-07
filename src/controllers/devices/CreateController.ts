import { Request, Response } from 'express';
import { CreateService } from '../../services/devices/CreateService';

interface IRequestBody {
    id: string,
    deviceId: string
}

class CreateController {
    async handle(request: Request, response: Response) {
        const { id, deviceId } = request.body as IRequestBody;
        const service = new CreateService();
        console.log('controller');

        try {
            const result = await service.execute(id, deviceId);
            return response.status(200).json({ data: result });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { CreateController };
