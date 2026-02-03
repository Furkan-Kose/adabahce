"use client";

import { Suspense } from "react";
import { Metadata } from "next";
import LoginContent from "../../../../components/admin/LoginContent";

export const metadata: Metadata = {
  title: "Admin Girişi",
  description: "Ada Bahçe admin paneline giriş yapın.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
