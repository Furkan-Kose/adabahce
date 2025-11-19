import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AuthService } from "./lib/auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin routes (except login page)
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const isAuthenticated = AuthService.isAuthenticatedFromRequest(request);

    if (!isAuthenticated) {
      // Redirect to login page
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // If authenticated and trying to access login, redirect to admin dashboard
  if (pathname === "/admin/login") {
    const isAuthenticated = AuthService.isAuthenticatedFromRequest(request);
    
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

