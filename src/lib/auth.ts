import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const SESSION_COOKIE_NAME = "admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

/**
 * Server-side authentication utility
 * All password validation happens on the server - never send passwords to client
 */
export class AuthService {
  /**
   * Validate admin credentials against environment variables
   * This runs entirely on the server
   */
  static async validateCredentials(username: string, password: string): Promise<boolean> {
    const validUsername = process.env.ADMIN_USERNAME;
    const validPassword = process.env.ADMIN_PASSWORD;

    if (!validUsername || !validPassword) {
      console.error("Admin credentials not configured in environment variables");
      return false;
    }

    // Simple string comparison (consider using bcrypt for production)
    return username === validUsername && password === validPassword;
  }

  /**
   * Create a session token (simple implementation)
   * For production, consider using JWT or more secure session management
   */
  static createSessionToken(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2);
    const secret = process.env.SESSION_SECRET || "default-secret";
    
    // Simple token creation (consider using proper JWT for production)
    return Buffer.from(`${timestamp}-${random}-${secret}`).toString("base64");
  }

  /**
   * Set session cookie (server-side only)
   */
  static async setSession() {
    const token = this.createSessionToken();
    const cookieStore = await cookies();
    
    cookieStore.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_MAX_AGE,
      path: "/",
    });
  }

  /**
   * Clear session cookie
   */
  static async clearSession() {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE_NAME);
  }

  /**
   * Check if user is authenticated (server component)
   */
  static async isAuthenticated(): Promise<boolean> {
    const cookieStore = await cookies();
    const session = cookieStore.get(SESSION_COOKIE_NAME);
    return !!session?.value;
  }

  /**
   * Check if user is authenticated (middleware)
   */
  static isAuthenticatedFromRequest(request: NextRequest): boolean {
    const session = request.cookies.get(SESSION_COOKIE_NAME);
    return !!session?.value;
  }
}

