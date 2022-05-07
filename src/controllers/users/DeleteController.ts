import { Request, Response } from 'express';
import { DeleteService } from '../../services/user/DeleteService';

interface IRequestBody {
    id: string
}

class DeleteController {
    async handle(request: Request, response: Response) {
        const { id } = request.body as IRequestBody;
        const service = new DeleteService();

        try {
            const result = await service.execute(id);

            return response.status(200).json(result).redirect('/');
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { DeleteController };
