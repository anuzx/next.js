import { z } from "zod";

export const SignupSchema = z.object({
  username: z.string().max(20),
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