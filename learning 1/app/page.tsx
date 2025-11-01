
import Link from "next/link"
import dotenv from "dotenv";

dotenv.config();
//what are we doing :
//creating a frontend to do signup ,send that data to backend and store it in our database
export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      <div>
        Todo application
        <br />
        <br/>
        <Link className="text-md border m-2" href="/signin">
          Sign in 
        </Link>
        <br />
        <br/>
        <Link className="text-md border m-2" href="/signup">
          Signup 
        </Link>
      </div>
    </div>
  );
}
