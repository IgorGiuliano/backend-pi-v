"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
const RegisterService_1 = require("../../services/user/RegisterService");
class RegisterController {
    async handle(request, response) {
        const { email, password, passwordConfirmation, name, lastName, cpf, cargo, cnpjDaInstituicao, nomeDaInstituicao, tipoDeInstituicao } = request.body;
        const service = new RegisterService_1.RegisterService();
        try {
            if (!name || !lastName || !email || !cpf || !password || !passwordConfirmation || !cnpjDaInstituicao) {
                throw new Error('Campos incompletos');
            }
            if (password !== passwordConfirmation) {
                throw new Error('As senhas não conferem');
            }
            if (password.length < 6) {
                throw new Error('Senha com menos de 6 caracteres');
            }
            const cnpj = cnpjDaInstituicao.replace('.', '').replace('.', '').replace('/', '').replace('-', '');
            if (cnpj.length !== 14) {
                throw new Error('CNPJ inválido - tamanho');
            }
            if (cnpj === '00000000000000' || cnpj === '11111111111111' || cnpj === '22222222222222' || cnpj === '33333333333333' || cnpj === '44444444444444'
                || cnpj === '55555555555555' || cnpj === '66666666666666' || cnpj === '77777777777777' || cnpj === '88888888888888' || cnpj === '99999999999999') {
                throw new Error('CNPJ inválido - DÃÃÃ');
            }
            const user = await service.execute(name, lastName, email, cpf, password, cargo, cnpjDaInstituicao, nomeDaInstituicao, tipoDeInstituicao);
            return response.status(200).json({ registered: user });
        }
        catch (err) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }
        return null;
    }
}
exports.RegisterController = RegisterController;
