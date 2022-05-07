import { Request, Response } from 'express';
import { GetLastMonthMeasurementService } from '../../services/devices/GetLastMonthMeasurementService';

interface IRequestBody {
    deviceId: string
}

class GetLastMonthMeasurementController {
    async handle(request: Request, response: Response) {
        const { deviceId } = request.body as IRequestBody;
        const service = new GetLastMonthMeasurementService();

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

export { GetLastMonthMeasurementController };
