import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const token = req.cookies.get(COOKIE_NAME)?.value;

    const verified = token ? await verifyToken(token) : null;

    // 1. Guard API mail endpoint
    if (pathname.startsWith("/api/mail") && !verified) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Guard frontend /mail page: redirect to /login if unauthenticated
    if (pathname.startsWith("/mail") && !verified) {
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("from", pathname);
        return NextResponse.redirect(loginUrl);
    }

    // 3. If authenticated user visits /login, redirect directly to /mail
    if (pathname === "/login" && verified) {
        return NextResponse.redirect(new URL("/mail", req.url));
    }

    return NextResponse.next();
}

// Match only protected areas + login page
export const config = {
    matcher: ["/mail/:path*", "/api/mail/:path*", "/login"],
};