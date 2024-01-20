import { z } from "zod";

export const FormSchema = z.object({
  username: z
    .string()
    .min(1, { message: "username is required" })
    .min(4, { message: "at least 4 characters" }),
  message: z.string().min(1, { message: "message is requried" }),
});
