import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    
    const data = await req.json(); //extract the body from frontend
    console.log(data)
    return NextResponse.json({
        message:"you have been signed up"
    })
}