import { Request, Response } from 'express';
import { GetLastMeasurementService } from '../../services/devices/GetLastMeasurementService';

interface IRequestBody {
    deviceId: string
}
class GetLastMeasurementController {
    async handle(request: Request, response: Response) {
        const { deviceId } = request.body as IRequestBody;
        const service = new GetLastMeasurementService();

        try {
            const result = await service.execute(deviceId);
            return response.status(200).json(result);
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { GetLastMeasurementController };
