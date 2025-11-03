
"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
export default function Home() {

  return (
    <>
      <SessionProvider>
        <Main />
      </SessionProvider>
    </>
  )
    
}
function Main() {
  const session = useSession();
  return (
    <>
      {session.status == "authenticated" && <button onClick={() => signOut()}>Singout</button>}
      {session.status == "unauthenticated" && <button onClick={()=>signIn()}>signIn</button>}
    </>
  )
}