import CredentialsProvider from "next-auth/providers/credentials";

let ID = 1;
const USERS: { id: string; username: string; password: string }[] = [];

export const config = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        if (!username || !password) {
          return null;
        }

        const existingUser = USERS.find((u) => u.username === username);

        if (existingUser) {
          if (existingUser.password === password) {
            return existingUser;
          } else {
            return null;
          }
        }

        const newUser = {
          id: ID.toString(),
          username,
          password,
        };

        ID++;
        USERS.push(newUser);

        return newUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // `user` is only defined on sign-in
      if (user) {
        token.id = user.id;
        token.username = (user as any).username;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).username = token.username;
      }
      return session;
    },
  },
};
