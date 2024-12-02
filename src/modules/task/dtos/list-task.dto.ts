import { z } from "zod";

export const ListTaskSchema = z.object({
  search: z.string().optional(),
  status: z.enum(["pending", "completed"]).optional(),
  parsedStatus: z.array(z.enum(["pending", "completed"])).optional(),
});

export type ListTaskDTO = z.infer<typeof ListTaskSchema>;
