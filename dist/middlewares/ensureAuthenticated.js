"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(request, response, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({ Message: 'Token não existente' });
    }
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(authToken, process.env.JWT_SECRET);
        request.id = sub;
        return next();
    }
    catch (err) {
        if (err instanceof Error) {
            return response.status(401).json({ Error: err.message });
        }
    }
    return null;
}
exports.ensureAuthenticated = ensureAuthenticated;
