import { NextResponse } from "next/server";

//this page handles backend requests

export function GET() {
    return NextResponse.json({
        user: "igris",
        email:"kucchupucchu@gmail.com"
    })
}

//since we can have different types of handlers like GET , POST we dont use default export 

