import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const CreateNewUserSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name cannot be shorter than 2 characters" })
    .max(50, { message: "Name cannot be longer than 50 characters" }),

  password: z
    .string()
    .min(2, { message: "Password cannot be shorter than 2 characters" }),

  role: z.string(),
});

export const CreateNewUniversitySchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name cannot be shorter than 2 characters" }),
  state: z.string(),
  type: z.string(),
});
