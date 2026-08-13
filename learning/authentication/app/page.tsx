"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { signOut, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();

  useEffect(() => {
    axios.post("/api/todo", {}).then((res) => console.log(res.data));
  }, []);

  return (
    <>
      <div className="bg-black text-white h-screen">
        {status === "authenticated" ? (
          <div>
            <button onClick={() => signOut()}>Logout</button>
            <br />
            HI {JSON.stringify(session.user)}
          </div>
        ) : (
          <div>
            welcome baby doll , sigin first
            <br />
            <button
              className="m-1 border-white border-2"
              onClick={() => signIn()}
            >
              singin
            </button>
            <button
              className="m-1 border-white border-2"
              onClick={() => signIn()}
            >
              signup
            </button>
          </div>
        )}
      </div>
    </>
  );
}
