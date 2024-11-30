import { z } from "zod";

export const loginServiceSchema = z.object({
  email: z
    .string({
      required_error: "E-mail é obrigatório.",
      invalid_type_error: "O e-mail informado é inválido.",
    })
    .email("O e-mail informado é inválido."),
  password: z
    .string({
      required_error: "Senha é obrigatória.",
      invalid_type_error: "A senha informada é inválida.",
    })
    .min(6, "A senha deve ter no mínimo 6 caracteres."),
});

export type LoginServiceDTO = z.infer<typeof loginServiceSchema>;
