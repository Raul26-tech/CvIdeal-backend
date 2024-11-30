import { z } from "zod";

export const RefreshTokenSchema = z.object({
  refreshToken: z.string().min(1, "O refresh token é obrigatório."),
  userId: z.string().uuid("O ID do usuário deve ser um UUID válido."),
});

export type RefreshTokenDTO = z.infer<typeof RefreshTokenSchema>;
