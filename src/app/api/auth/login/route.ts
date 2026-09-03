import { NextResponse } from "next/server";
import { signToken, COOKIE_NAME } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        const validEmail = process.env.ADMIN_EMAIL;
        const validPassword = process.env.ADMIN_PASSWORD;

        // Direct comparison with env variables
        if (email !== validEmail || password !== validPassword) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }

        const token = await signToken({ email });

        const response = NextResponse.json(
            { message: "Authenticated successfully" },
            { status: 200 }
        );

        // Set secure httpOnly cookie
        response.cookies.set({
            name: COOKIE_NAME,
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 5 * 60, // 5 minutes
        });

        return response;
    } catch (err) {
        console.error("Error in login route:", err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}