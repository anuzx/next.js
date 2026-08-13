import { getServerSession } from "next-auth";
import { config } from "../api/auth/[...nextauth]/config";

export default async function Dashboard() {
  const session = await getServerSession(config);

  if (!session?.user?.username) {
    return <div>you are not logged in</div>;
  }

  return (
    <div className="bg-black h-screen text-white">
      hi there -{JSON.stringify(session.user.username)}
    </div>
  );
}
