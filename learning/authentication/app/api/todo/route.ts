import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { config } from "../auth/[...nextauth]/config";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(config);

  if (!session) {
    return NextResponse.json({message:"incorrect inputs"})
  } else {
    return NextResponse.json({message: session.user.username})
  }

  
};
