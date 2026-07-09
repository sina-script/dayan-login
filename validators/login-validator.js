import * as z from "zod";

const loginSchema = z.object({
  username: z
    .string({ required_error: "The username must be initialized" })
    .min(6, "Your username must be more than 6 characters")
    .max(30,"Your username must be less than 30 characters")
    .regex(),
  password: z
    .string({ required_error: "The password must be initialized." })
    .min(8, "Your password must be more than 8 characters")
    .max(30,"Your password must be less than 30 characters")
    .regex(),
});

export default loginSchema;
