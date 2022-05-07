import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({ Message: 'Token não existente' });
    }

    try {
        const { sub } = verify(authToken, process.env.JWT_SECRET) as IPayload;
        request.id = sub;

        return next();
    } catch (err: unknown) {
        if (err instanceof Error) {
            return response.status(401).json({ Error: err.message });
        }
    }

    return null;
}
