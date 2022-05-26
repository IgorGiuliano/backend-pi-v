import { GetUserDataService } from '@services/user/GetUserDataService';
import { Request, Response } from 'express';

interface IRequestBody {
    id: string
}

class GetUserDataControler {
    async handle(request: Request, response: Response) {
        const { id } = request.body as IRequestBody;
        const service = new GetUserDataService();

        try {
            const result = await service.execute(id);
            return response.status(200).json(result);
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { GetUserDataControler };
