import { Droplets, Thermometer, Wind, Zap, LineChart, Shield } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Teknolojimiz',
}

const Technology = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <section className="relative bg-linear-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-green-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Teknolojimiz</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Hidroponik tarım ile doğaya zarar vermeden, kaynakları bilinçle kullanıyoruz
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Hidroponik Tarımımız
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hidroponik (topraksız) tarım yöntemiyle doğaya zarar vermeden üretim yapıyoruz. Su, enerji ve alan verimliliğini esas alarak, kaynakları bilinçle kullanıyoruz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Her bir bitkinin en doğal koşullarda, dengeli bir biçimde büyümesini sağlıyoruz. Doğadan aldığımız ilhamı modern üretim anlayışıyla birleştiriyoruz.
              </p>
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
                <p className="text-emerald-900 font-medium">
                  Çevreye duyarlı, yenilikçi ve izlenebilir bir sistem kuruyoruz.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hidroponik Sistem"
                className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
                width={800}
                height={450}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-emerald-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-linear-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Su Yönetimi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kapalı devre sistem ile su %90 oranında tasarruf edilir. Her damla verimli kullanılır.
              </p>
            </div>

            <div className="bg-white border-2 border-emerald-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-linear-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Thermometer className="w-8 h-8 text-orange-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sıcaklık Kontrolü
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Otomatik iklim kontrolü ile bitkiler için ideal ortam sağlanır.
              </p>
            </div>

            <div className="bg-white border-2 border-emerald-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-linear-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Wind className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hava Sirkülasyonu
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gelişmiş havalandırma sistemleri ile taze hava sağlanır ve nem dengesi korunur.
              </p>
            </div>

            <div className="bg-white border-2 border-emerald-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-linear-to-br from-yellow-100 to-yellow-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-yellow-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                LED Aydınlatma
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tam spektrum LED&apos;ler ile bitkiler için optimal fotosentez ortamı oluşturulur.
              </p>
            </div>

            <div className="bg-white border-2 border-emerald-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-linear-to-br from-green-100 to-green-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <LineChart className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Veri Takibi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                IoT sensörleri ile pH, EC, sıcaklık gibi parametreler anlık takip edilir.
              </p>
            </div>

            <div className="bg-white border-2 border-emerald-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-linear-to-br from-emerald-100 to-emerald-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Biyogüvenlik
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kapalı sistem zararlılardan korur, pestisit kullanımına gerek kalmaz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Üretim Sürecimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tohum aşamasından hasada kadar her adımda teknoloji ve özen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tohumlama</h3>
              <p className="text-gray-600 text-sm">
                Organik sertifikalı tohumlar özel ortamda çimlendirilir
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fide Gelişimi</h3>
              <p className="text-gray-600 text-sm">
                Kontrollü ortamda fideler güçlendirilir
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Büyüme</h3>
              <p className="text-gray-600 text-sm">
                Hidroponik sistemde optimal koşullarda gelişim
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl font-bold text-emerald-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hasat</h3>
              <p className="text-gray-600 text-sm">
                Optimum olgunlukta hasat ve aynı gün teslimat
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="https://images.pexels.com/photos/5231153/pexels-photo-5231153.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gelecek Teknolojisi"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                width={800}
                height={400}
              />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Bilinçli Denge
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Her adımda doğayla uyumu, şeffaflığı ve sorumluluğu ön planda tutuyoruz. Üretim bizim için sadece bir süreç değil, doğayla kurulan bilinçli bir denge.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Her hasatta doğayla birlikte büyüyor, yaşamı besleyen bir denge kuruyoruz. Amacımız; hidroponik tarımla yetiştirdiğimiz taze sebzeleri, adalılara hızlı ve güvenilir bir şekilde ulaştırmak.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-emerald-700">%100</p>
                  <p className="text-sm text-gray-600">Sürdürülebilir</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-emerald-700">%100</p>
                  <p className="text-sm text-gray-600">İzlenebilir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technology