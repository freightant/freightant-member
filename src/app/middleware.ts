import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value; // Replace with your auth token logic

  if (!token) {
    // If the token doesn't exist, redirect to the signin page
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  try {
    // Call the profile status API
    const res = await fetch("https://freightant-api.onrender.com/api/user/profileStatus", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch profile status.");
    }

    const data = await res.json();
    const profileStatus = data.profileStatus;

    // Redirect based on profileStatus
    if (profileStatus === "incomplete") {
      return NextResponse.redirect(new URL("/onboarduser", request.url));
    }

    if (profileStatus === "in_review") {
      return NextResponse.redirect(new URL("/review", request.url));
    }

    if (profileStatus === "verified") {
      return NextResponse.next(); // Allow access to the requested page
    }

    // Handle unexpected profile status values
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  } catch (error) {
    console.error("Middleware error:", error);
    // Redirect to signin in case of errors
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
}

// Add the matcher to apply the middleware to all routes
export const config = {
  matcher: "/:path*", // This applies the middleware to all routes
};
