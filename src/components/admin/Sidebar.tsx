"use client";
import { ArrowLeftIcon, HomeIcon, BoxIcon, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Sidebar = ({ isCollapsed, setIsCollapsed }: any) => {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const menuItems = [
    { label: "Anasayfa", icon: <HomeIcon />, href: "/admin" },
    { label: "Ürünler", icon: <BoxIcon />, href: "/admin/urunler" },
    { label: "Siteye Dön", icon: <ArrowLeftIcon />, href: "/" },
  ];

  const handleLogout = async () => {

    setLoggingOut(true);
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        router.push("/admin/login");
        router.refresh();
      } else {
        alert("Çıkış yapılırken bir hata oluştu");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("Bir hata oluştu");
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-gray-800 text-white flex flex-col transition-all ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <h1
          className={`text-xl font-bold transition-opacity ${
            isCollapsed ? "opacity-0 hidden" : "block"
          }`}
        >
          Admin Panel
        </h1>
        <button
          className="text-gray-400 hover:text-white"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? ">" : "<"}
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center gap-4 px-4 py-3 hover:bg-gray-700 transition-colors"
          >
            <span className="text-lg">{item.icon}</span>
            <span
              className={`text-base font-medium transition-all ${
                isCollapsed ? "hidden" : "block"
              }`}
            >
              {item.label}
            </span>
          </a>
        ))}
      </div>

      {/* Logout Button */}
      <div className="border-t border-gray-700 mt-auto">
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="w-full flex items-center gap-4 px-4 py-3 hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <LogOutIcon className="text-lg" />
          <span
            className={`text-base font-medium transition-all ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            {loggingOut ? "Çıkış yapılıyor..." : "Çıkış Yap"}
          </span>
        </button>
      </div>

      {/* Footer */}
      <div className="px-4 py-4 text-sm text-gray-400">
        <p className={`${isCollapsed ? "hidden" : "block"}`}>© 2025 Admin Panel</p>
      </div>
    </div>
  );
};

export default Sidebar;
