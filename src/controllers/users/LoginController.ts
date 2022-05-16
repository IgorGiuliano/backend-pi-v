import { Request, Response } from 'express';
import { LoginService } from '../../services/user/LoginService';

interface IRequestBody {
    email: string,
    password: string
}

class LoginController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body as IRequestBody;
        const service = new LoginService();

        try {
            if (!email || !password) {
                response.json({ Error: 'Campos incompletos' });
            }

            if (password.length < 6) {
                response.json({ Error: 'Senha com menos de 6 caracteres' });
            }

            const token = await service.execute(email, password);

            return response.status(200).json({ logged: token });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message }).redirect('/');
            }
        }

        return null;
    }
}

export { LoginController };
