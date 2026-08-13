"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

// When a client component wraps a server component by accepting it as a children prop or another slot prop, the server component remains a server component and executes entirely on the server
