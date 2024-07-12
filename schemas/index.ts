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

export const CreateNewInternSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name cannot be shorter than 2 characters" }),
  phonenumber: z
    .string()
    .min(11, { message: "Phonenumber must be 11 characters" })
    .max(11, { message: "Phonenumber must be 11 characters" }),
  email: z.string().email("Must be valid email"),
  universityId: z.string(),
  lab: z.string(),
  startDate: z.date(),
  endDate: z.date(),
});

export const EditNewInternSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name cannot be shorter than 2 characters" }),
  phonenumber: z
    .string()
    .min(11, { message: "Phonenumber must be 11 characters" })
    .max(11, { message: "Phonenumber must be 11 characters" }),
  email: z.string().email("Must be valid email"),
  universityId: z.string(),
  university: z.string(),
  lab: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  status: z.string(),
});
