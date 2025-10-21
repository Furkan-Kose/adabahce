import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="Ada Bahçe Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
                <span className="text-xl font-bold">Ada Bahçe</span>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Topraksız tarım teknolojileri ile doğal ve taze ürünler yetiştiriyoruz.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-emerald-100 hover:text-white transition-colors text-sm">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-emerald-100 hover:text-white transition-colors text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-emerald-100 hover:text-white transition-colors text-sm">
                  Ürünlerimiz
                </Link>
              </li>
              <li>
                <Link href="/teknoloji" className="text-emerald-100 hover:text-white transition-colors text-sm">
                  Teknoloji
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-emerald-100 text-sm">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>+90 (555) 123 45 67</span>
              </li>
              <li className="flex items-start space-x-2 text-emerald-100 text-sm">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>info@adabahce.com</span>
              </li>
              <li className="flex items-start space-x-2 text-emerald-100 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Çalışma Saatleri</h3>
            <div className="text-emerald-100 text-sm space-y-2">
              <p>Pazartesi - Cuma</p>
              <p className="font-medium text-white">08:00 - 18:00</p>
              <p className="mt-3">Cumartesi</p>
              <p className="font-medium text-white">09:00 - 15:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-100 text-sm">
          <p>&copy; {new Date().getFullYear()} Ada Bahçe. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
