import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/user/UpdateUserService';

interface IRequestBody {
    id: string,
    email: string,
    name: string,
    lastName: string,
    cpf: string,
    cargo: string
}

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { id, email, name, lastName, cpf, cargo } = request.body as IRequestBody;
        const service = new UpdateUserService();

        try {
            const result = await service.execute(id, email, name, lastName, cpf, cargo);
            return response.status(200).json({ data: result });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { UpdateUserController };
