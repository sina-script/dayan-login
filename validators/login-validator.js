import * as z from "zod";

const loginSchema = z.object({
  username: z
    .string()
    .min(6, "Your username must be more than 6 characters")
    .max(30, "Your username must be less than 30 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "You can only enter alphabets, numbers, and underscores",
    ),
  password: z
    .string()
    .min(8, "Your password must be more than 8 characters")
    .max(30, "Your password must be less than 30 characters")
    .regex(/[a-z]/,"You must enter at least one lowercase letter")
    .regex(/[A-Z]/,"You must enter at least one uppercase letter")
    .regex(/[0-9]/,"You must enter at least a number")
    .regex(/[!@#$%^&*]/,"You must enter at least a symbol")
});

export default loginSchema;
