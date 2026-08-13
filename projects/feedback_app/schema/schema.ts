import { z } from "zod";


export const usernameValidation = z
  .string()
  .min(2, "username must be atleast 2 characters")
  .max(20, "username must be at max 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "username must not contain special characters");

export const SignupSchema = z.object({
  username: usernameValidation,
  password: z.string().min(6),
  email: z.email(),
});

export const SigninSchema = z.object({
  password: z.string().min(6),
  email: z.email(),
});

export const VerifyCodeSchema = z.object({
    code : z.string().length(6 , "verification code must be 6 digits")
})

export const AcceptMessageSchema = z.object({
    acceptMessages:z.boolean()
})

export const MessageSchema = z.object({
    content : z.string().min(10 , {message:"content must have atleast 10 characters"}).max(1000 , {message:"maximum limit of content is 1000 characters"})
})