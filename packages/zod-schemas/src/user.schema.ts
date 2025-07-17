import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" }),

  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),

  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must not exceed 15 digits" }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

// Types (optional)
export type UserInput = z.infer<typeof userSchema>;
