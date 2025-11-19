"use client";

import { Suspense } from "react";
import LoginContent from "../../../../components/admin/LoginContent";

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
