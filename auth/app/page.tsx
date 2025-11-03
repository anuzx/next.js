//"use client"

import { getServerSession } from "next-auth";

//import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
export default async function Home() {
  const session = await getServerSession();
  return (
    <>
      {/* <SessionProvider>
        <Main />
      </SessionProvider> */}
      {JSON.stringify(session)}
    </>
  );
}
// function Main() {
//   const session = useSession();
//   return (
//     <>
//       {session.status == "authenticated" && <button onClick={() => signOut()}>Singout</button>}
//       {session.status == "unauthenticated" && <button onClick={()=>signIn()}>signIn</button>}
//     </>
//   )
// }
