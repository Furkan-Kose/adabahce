import { NextRequest, NextResponse } from "next/server";
import { AuthService } from "../../../../lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Validate credentials on server
    const isValid = await AuthService.validateCredentials(username, password);

    if (!isValid) {
      return NextResponse.json(
        { error: "Geçersiz kullanıcı adı veya şifre" },
        { status: 401 }
      );
    }

    // Create session
    await AuthService.setSession();

    return NextResponse.json(
      { success: true, message: "Giriş başarılı" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Bir hata oluştu" },
      { status: 500 }
    );
  }
}

