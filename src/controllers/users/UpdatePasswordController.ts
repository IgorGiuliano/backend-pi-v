import { Request, Response } from 'express';
import { UpdatePasswordService } from '../../services/user/UpdatePasswordService';

interface IRequestBody {
    id: string,
    password: string,
    newPassword: string,
    newPasswordConfirmation: string
}

class UpdatePasswordController {
    async handle(request: Request, response: Response) {
        const { id, password, newPassword, newPasswordConfirmation } = request.body as IRequestBody;
        const service = new UpdatePasswordService();

        try {
            if (!password || !newPassword || !newPasswordConfirmation) {
                throw new Error('Campos incompletos');
            }

            if (newPassword.length < 6 || newPasswordConfirmation.length < 6) {
                throw new Error('Nova senha com menos de 6 caracteres');
            }

            if (newPassword !== newPasswordConfirmation) {
                throw new Error('A nova senha e sua confirmação não conferem');
            }

            const result = await service.execute(id, password, newPassword);

            return response.status(200).json({ status: result });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(401).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { UpdatePasswordController };
