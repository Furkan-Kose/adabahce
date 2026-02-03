import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Sol taraf: Başlık ve iletişim */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Ada Bahçe ile İletişime Geçin
              </h2>
              <p className="text-lg text-gray-600">
                Sorularınız, sipariş veya işbirliği talepleriniz için bize ulaşabilirsiniz. Size en hızlı şekilde geri dönüş yapmaktan mutluluk duyarız.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col items-start space-y-1">
                  <div className="flex items-center space-x-2 text-emerald-600">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium text-gray-900">Telefon</span>
                  </div>
                  <p className="text-gray-600 text-sm">+90 (555) 123 45 67</p>
                  <p className="text-gray-600 text-sm">+90 (555) 987 65 43</p>
                </div>

                <div className="flex flex-col items-start space-y-1">
                  <div className="flex items-center space-x-2 text-emerald-600">
                    <Mail className="w-5 h-5" />
                    <span className="font-medium text-gray-900">E-posta</span>
                  </div>
                  <p className="text-gray-600 text-sm">iletisim@adabahce.com.tr</p>
                </div>
              </div>

              <Link
                href="/iletisim"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg self-start mt-4"
              >
                İletişime Geçin
              </Link>
            </div>

            {/* Sağ taraf: Harita veya görsel */}
            <div className="w-full lg:w-1/2 h-64 lg:h-96 relative rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.79038741!2d28.840139999999998!3d41.005370000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1234567890"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
    </section>
  )
}

export default ContactSection