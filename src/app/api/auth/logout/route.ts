import { COOKIE_NAME } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const response = NextResponse.json(
            { message: "Logged out successfully" },
            { status: 200 }
        );
        response.cookies.delete(COOKIE_NAME)
        return response
    } catch (err) {
        console.error("Error in logout route:", err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}   