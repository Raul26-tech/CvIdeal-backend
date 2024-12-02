import { z } from "zod";

export const TaskSchema = z.object({
  title: z.string({ message: "O título é obrigatório" }),
  description: z.string({ message: "A descrição é obrigatória" }),
  status: z.enum(["completed", "pending"]).optional(),
  userId: z.string().uuid().optional(),
});

export type CreateTaskDTO = z.infer<typeof TaskSchema>;
