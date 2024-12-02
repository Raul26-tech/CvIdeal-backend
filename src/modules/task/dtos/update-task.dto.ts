import { z } from "zod";

export const UpdateTaskSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string({ message: "O título é obrigatório" }).optional(),
  description: z.string({ message: "A descrição é obrigatória" }).optional(),
  status: z.enum(["completed", "pending"]).optional(),
});

export type UpdateTaskDTO = z.infer<typeof UpdateTaskSchema>;
