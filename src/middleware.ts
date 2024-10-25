import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "Unknown User Agent";
  // Create a response object
  const response = NextResponse.next();

  // Set the cookie
  response.cookies.set("user_agent", userAgent, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}

export const config = {
  matcher: ["/:page*"],
};
