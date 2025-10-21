"use client";

import { useState } from 'react'
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/hakkimizda', label: 'Hakkımızda' },
    { path: '/urunler', label: 'Ürünlerimiz' },
    { path: '/teknoloji', label: 'Teknoloji' },
    { path: '/iletisim', label: 'İletişim' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Ada Bahçe"
              width={64}
              height={64}
              className="object-contain"
            />
            <span className="text-xl font-bold text-emerald-600">Ada Bahçe</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  pathname === link.path
                    ? 'text-emerald-700 border-b-2 border-emerald-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium transition-colors hover:text-emerald-600 py-2 ${
                  pathname === link.path
                    ? 'text-emerald-700 bg-emerald-50 px-3 rounded'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header