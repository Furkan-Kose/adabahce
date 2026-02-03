import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Ada Bahçe ile iletişime geçin. Sorularınız, önerileriniz ve iş birliği teklifleri için bizimle iletişim kurun.",
  openGraph: {
    title: "İletişim | Ada Bahçe",
    description: "Ada Bahçe ile iletişim bilgileri ve iletişim formu.",
    url: "https://adabahce.com.tr/iletisim",
  },
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Bölümü */}
      <section className="relative bg-linear-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-green-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">İletişim</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk
            duyarız
          </p>
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              Ada Bahçe ürünleri hakkında bilgi almak, sipariş vermek veya
              işbirliği teklifleri için aşağıdaki iletişim kanallarından bize
              ulaşabilirsiniz.
            </p>
          </div>

          <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg shrink-0">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  Telefon
                </h3>
                <p className="text-gray-600">+90 (555) 123 45 67</p>
                <p className="text-gray-600">+90 (555) 987 65 43</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg shrink-0">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  E-posta
                </h3>
                <p className="text-gray-600">iletisim@adabahce.com.tr</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg shrink-0">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  Adres
                </h3>
                <p className="text-gray-600">
                  Hidroponik Tarım Merkezi
                  <br />
                  Yeşilköy Mah. Tarım Cad. No:45
                  <br />
                  İstanbul, Türkiye
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg shrink-0">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  Çalışma Saatleri
                </h3>
                <p className="text-gray-600">Pazartesi - Cuma: 08:00 - 18:00</p>
                <p className="text-gray-600">Cumartesi: 09:00 - 15:00</p>
                <p className="text-gray-600">Pazar: Kapalı</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
            <h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">
              Tesisi Ziyaret Edin
            </h3>
            <p className="text-gray-600 text-center">
              Hidroponik tarım sistemlerimizi yakından görmek için randevu
              alabilirsiniz. Size özel bir tur düzenlemekten mutluluk duyarız.
            </p>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 bg-linear-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.79038741!2d28.840139999999998!3d41.005370000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
