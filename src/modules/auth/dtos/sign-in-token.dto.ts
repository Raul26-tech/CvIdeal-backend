import { z } from "zod";

export const signTokenServiceSchema = z.object({
  userId: z
    .string({
      required_error: "O ID do usuário é obrigatório.",
      invalid_type_error: "O ID do usuário deve ser uma string.",
    })
    .uuid("O ID do usuário deve ser um UUID válido."),
  email: z
    .string({
      required_error: "E-mail é obrigatório.",
      invalid_type_error: "O e-mail informado é inválido.",
    })
    .email("O e-mail informado é inválido."),
});

export type SignTokenServiceDTO = z.infer<typeof signTokenServiceSchema>;
