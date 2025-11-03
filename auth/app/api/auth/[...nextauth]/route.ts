import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
//here we define configurational parameter to tell nextjs which authentication we want to use

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "email",
      // `credentials` is used to generate a form on the sign in page.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "mail@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
          const username = credentials?.username
          const password = credentials?.password
          //here we have to do db req to check if username password are correct 
          //lets assume we get these credentials from db
          const user = {
              name: "anuj",
              id: "1",
              username: "kuchupuchu@gmail.com"
          }
          if (user) {
              return user; //they will be allowed to login 

          } else {
              return null //they will not login
          }
      },
    }),
  ],
}); 

export { handler as GET, handler as POST }
