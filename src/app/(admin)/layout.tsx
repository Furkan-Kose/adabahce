"use client";

import Sidebar from "@/components/admin/Sidebar";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function AdminLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const pathname = usePathname();

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <main className="bg-gray-50 min-h-screen flex">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div
        className={`transition-all ${isCollapsed ? "ml-20" : "ml-64"} flex-1 p-4`}
      >
        {children}
      </div>
      <ToastContainer position="bottom-right" theme="colored" />
    </main>
  );
}
