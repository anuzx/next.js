import { Resend } from "resend";
import { ApiResponse } from "@/types/ApiResponse";

export const resend = new Resend(process.env.RESEND_API_KEY);


// Importing the React component that generates the verification email's content
import VerificationEmail from "@/components/Email-template";

//emails are always async 
// This function sends a verification email using the 'resend' service.
// It accepts the user's email, username, and verification code as parameters and returns an ApiResponse object.
export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode:string
): Promise<ApiResponse>{
    try {
      // Calling the resend library's 'emails.send' method to send an email
      await resend.emails.send({
        from: "onboarding@resend.dev", //sender's email
        to: email, // recipient's email
        subject: "feedback app verification code",
        react: VerificationEmail({ username, otp: verifyCode }),
      });
        
        return { success: true, message: "verification email send successfully" };
        
    } catch (error) {
        console.log("error while sending verification email", error);
        return {success:false , message:"failed to send verification email"}
        
    }
}

