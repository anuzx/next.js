
import { NextRequest, NextResponse } from "next/server";
import prismaClient from "../../../lib/db"

export async function POST(req: NextRequest) {
    
    const data = await req.json(); //extract the body from frontend
    console.log(data)
    return NextResponse.json({
        message:"you have been signed up"
    })
}

export async function GET(req:NextRequest) {
    const user = await prismaClient.user.findFirst();

    return NextResponse.json({
        user
    })
}