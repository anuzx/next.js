"use client"


import { TextInput } from "@repo/ui/input"
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  return (
    <div >
      <TextInput size="small"placeholder="Room code..." />
      <button onClick={() => {
        router.push("/chat/123")
      }}>Join Room</button>
    </div>
  );
}
