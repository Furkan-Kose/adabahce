import { NextResponse } from "next/server";
import { AuthService } from "../../../../lib/auth";

export async function POST() {
  try {
    // Clear session
    await AuthService.clearSession();

    return NextResponse.json(
      { success: true, message: "Çıkış başarılı" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Bir hata oluştu" },
      { status: 500 }
    );
  }
}

