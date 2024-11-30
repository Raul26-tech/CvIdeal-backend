import { VerifyTokenService } from "@modules/auth/services/verify-token.service";
import { NextFunction, Request, Response } from "express";
import { container } from "src/framework/container/inversify.config";
import { Unauthorized } from "../errors/Unauthorized";

async function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    // Resolver o serviço de verificação de token
    const verifyTokenService = container.resolve(VerifyTokenService);

    // Extrair o token JWT do cabeçalho de autorização
    const bearerToken = request.headers.authorization;

    if (!bearerToken) {
      throw new Unauthorized("Nenhum token foi enviado no cabeçalho.");
    }

    // Verificar o token usando o serviço
    const { user } = await verifyTokenService.execute({
      bearerToken,
    });

    // Anexar os dados do usuário autenticado ao objeto `request`
    request.user = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    // Continuar para o próximo middleware ou rota
    next();
  } catch (error) {
    // Capturar erros de autenticação
    response.status(401).json({
      error: "Unauthorized",
      message: error.message || "Erro ao autenticar o token.",
    });
  }
}

export { isAuthenticated };
