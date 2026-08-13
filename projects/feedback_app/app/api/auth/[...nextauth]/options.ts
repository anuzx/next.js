//all providers in this file
//we are designing signin page using next-auth

import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";
import { UserModel } from "@/model/user";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: any): Promise<any> {
        await dbConnect();
        try {
          const user = await UserModel.findOne({
            $or: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          });

          // If no user found, throw an error
          if (!user) {
            throw new Error("no user found with this email");
          }

          // If the user's account is not verified, throw an error
          if (!user.isVerified) {
            throw new Error("please verify your account before login");
          }
            
          // Check if the password is valid
          const isValidPassword = await bcrypt.compare(
            credentials.password,
            user.password,
          );

          if (isValidPassword) {
            return user;
          } else {
            throw new Error("incorrect password");
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
    ],
    callbacks: {
        async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
        token.isVerified = user.isVerified;
        token.isAcceptingMessages = user.isAcceptingMessages;
        token.username = user.username;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.isVerified = token.isVerified;
        session.user.isAcceptingMessages = token.isAcceptingMessages;
        session.user.username = token.username;
      }
      return session;
    },
    },
    pages: {
        signIn: "/sign-in"
    },
    session: {
        strategy:"jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
};
