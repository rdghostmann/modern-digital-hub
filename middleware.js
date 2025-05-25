import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req });
  const url = req.nextUrl.clone();

  // Allow access to login and register for unauthenticated users
  if (!token) {
    if (url.pathname !== "/login" && url.pathname !== "/register") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }

  const userRole = token.role;

  // User restrictions: Can only access /dashboard
  if (userRole === "user") {
    if (url.pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  // Admin restrictions: Only allow /admin, /admin/users, /admin/posts, /admin/analytics
  if (userRole === "admin") {
    const allowedAdminPaths = [
      "/admin",
      "/admin/users",
      "/admin/posts",
      "/admin/analytics"
    ];
    // If trying to access /dashboard, /login, /register, or any non-allowed /admin subpage, redirect to /admin
    if (
      url.pathname === "/dashboard" ||
      url.pathname === "/login" ||
      url.pathname === "/register" ||
      (url.pathname.startsWith("/admin") && !allowedAdminPaths.includes(url.pathname))
    ) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  return NextResponse.next();
}

// Apply middleware only to relevant routes
export const config = {
  matcher: ["/admin/:path*", "/dashboard", "/login", "/register"],
};