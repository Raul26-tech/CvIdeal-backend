import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z
      .string({
        required_error: "Nome é obrigatório.",
        invalid_type_error: "O nome informado é inválido.",
      })
      .min(3, "O nome deve ter entre 3 e 255 caracteres.")
      .max(255, "O nome deve ter entre 3 e 255 caracteres."),
    email: z
      .string({
        required_error: "E-mail é obrigatório.",
        invalid_type_error: "O e-mail informado é inválido.",
      })
      .email("O e-mail informado é inválido."),
    emailConfirm: z
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
      .min(6, "A senha deve ter entre 6 e 255 caracteres.")
      .max(255, "A senha deve ter entre 6 e 255 caracteres."),
    passwordConfirm: z
      .string({
        required_error: "Senha é obrigatória.",
        invalid_type_error: "A senha informada é inválida.",
      })
      .min(6, "A senha deve ter entre 6 e 255 caracteres.")
      .max(255, "A senha deve ter entre 6 e 255 caracteres."),
    status: z.enum(["active", "inactive"]).optional(),
    phone: z.string().optional(),
  })
  .refine((data) => {
    return data.email === data.emailConfirm;
  }, "Os e-mails informados não coincidem.")
  .refine((data) => {
    return data.password === data.passwordConfirm;
  }, "As senhas informadas não coincidem.");

export type CreateUserDto = z.infer<typeof createUserSchema>;
