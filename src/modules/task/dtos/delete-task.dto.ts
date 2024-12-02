import { z } from "zod";

export const DeleteUserSchema = z.object({
  id: z
    .string({
      message: "Informe um ID válido para continuar.",
    })
    .trim()
    .uuid({
      message: "Informe um ID válido para continuar.",
    }),
});

export type DeleteUserDTO = z.infer<typeof DeleteUserSchema>;
