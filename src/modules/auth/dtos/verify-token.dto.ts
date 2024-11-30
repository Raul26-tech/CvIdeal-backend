import { z } from "zod";

export const VerifyTokenSchema = z.object({
  bearerToken: z.string().min(1, "O token de autenticação é obrigatório."),
  ignoreExpiration: z.boolean().optional(),
});

export type VerifyTokenDTO = z.infer<typeof VerifyTokenSchema>;
