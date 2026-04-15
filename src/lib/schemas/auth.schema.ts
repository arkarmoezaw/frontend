import * as z from "zod";

const passwordRules = z
  .string()
  .min(6, "Password must be at least 6 characters.");

export const loginSchema = z.object({
  email: z.string().trim().email("Invalid email address."),
  password: passwordRules,
});

export const registerSchema = z
  .object({
    fullname: z.string().trim().min(2, "Name must be at least 2 characters."),
    email: z.string().trim().email("Invalid email address."),
    password: passwordRules,
    confirmPassword: z.string().min(0, "Please confirm your password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
