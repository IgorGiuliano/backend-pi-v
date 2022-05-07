import { Request, Response } from 'express';
import { GetLastDayMeasurementService } from '../../services/devices/GetLastDayMeasurementService';

interface IRequestBody {
    deviceId: string
}

class GetLastDayMeasurementController {
    async handle(request: Request, response: Response) {
        const { deviceId } = request.body as IRequestBody;
        const service = new GetLastDayMeasurementService();

        try {
            const result = await service.execute(deviceId);
            return response.status(200).json({ result });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { GetLastDayMeasurementController };
