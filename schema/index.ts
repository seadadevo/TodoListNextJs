import z from "zod";

export const todoFormSchema = z.object({
  title: z.string().min(4, {
    message: "Title must be at least 4 characters.",
  })
  .max(100, {
    message: "Title must be at most 100 characters.",
  }),
  body: z.string().min(20, {
    message: "Body must be at least 20 characters.",
  }).max(100, {
    message: "Body must be at most 100 characters.",
  })
  .optional().or(z.literal("")),
  completed: z.boolean().optional()
});

