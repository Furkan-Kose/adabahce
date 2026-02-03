import { Award, Heart, Target, Users } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Ada Bahçe hakkında bilgi edinin. Topraksız tarım teknolojileri alanında 15+ yıllık deneyime sahibiz. Vizyonumuz, misyonumuz ve değerlerimiz hakkında daha fazla öğrenin.",
  openGraph: {
    title: "Hakkımızda | Ada Bahçe",
    description:
      "Ada Bahçe'nin tarihçesi, vizyon ve misyonu hakkında bilgi edinin.",
    url: "https://adabahce.com.tr/hakkimizda",
  },
};

const About = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <section className="relative bg-linear-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-green-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hakkımızda</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Doğadan aldığımız ilhamla geleceğe sürdürülebilir bir üretim
            anlayışı sunuyoruz.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Biz Kimiz?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Adada yaşayan herkesin ortak bir isteği var: Taze, güvenilir ve
                doğadan gelen sebzeleri sofrasında görmek. Biz, bu isteğin
                doğayla buluştuğu yerdeyiz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ada Bahçe, doğadan aldığı ilhamla geleceğe sürdürülebilir bir
                üretim anlayışı sunan bir markadır. Hidroponik (topraksız) tarım
                yöntemiyle doğaya zarar vermeden, kaynakları bilinçle kullanarak
                üretim yapar; su, enerji ve alan verimliliğini esas alır.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Her bir bitkinin en doğal koşullarda, dengeli bir biçimde
                büyümesini sağlar. Üretim bizim için sadece bir süreç değil,
                doğayla kurulan bilinçli bir denge.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/images/hero.jpeg"
                alt="Hidroponik Sistemler"
                className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
                width={800}
                height={450}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Değerlerimiz doğayla birlikte filizleniyor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-linear-to-br from-emerald-100 to-emerald-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Doğayla Uyum
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Her adımda doğayla uyumu ön planda tutuyor, çevreye duyarlı bir
                sistem kuruyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-linear-to-br from-emerald-100 to-emerald-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Şeffaflık
              </h3>
              <p className="text-gray-600 leading-relaxed">
                İzlenebilir bir sistem ile her sürecimizi açık ve şeffaf bir
                şekilde yönetiyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-linear-to-br from-emerald-100 to-emerald-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Yenilikçilik
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Doğadan aldığımız ilhamı modern üretim anlayışıyla
                birleştiriyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-linear-to-br from-emerald-100 to-emerald-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sorumluluk
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kaynakları bilinçle kullanarak sorumlu ve sürdürülebilir üretim
                yapıyoruz.
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
                src="/images/about.jpeg"
                alt="Taze Sebzeler"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                width={800}
                height={450}
              />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Misyonumuz</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hidroponik tarımla yetiştirdiğimiz taze sebzeleri, adalılara
                hızlı ve güvenilir bir şekilde ulaştırmak.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Her hasatta doğayla birlikte büyüyor, yaşamı besleyen bir denge
                kuruyoruz. Doğadan aldığımız ilhamı modern üretim anlayışıyla
                birleştirerek çevreye duyarlı, yenilikçi ve izlenebilir bir
                sistem kuruyoruz.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
                <p className="text-emerald-900 font-medium italic">
                  &quot;Ada Bahçe - Doğal olarak taze. 🌿&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">5000+</p>
              <p className="text-emerald-100 text-lg">m² Üretim Alanı</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">%90</p>
              <p className="text-emerald-100 text-lg">Su Tasarrufu</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">365</p>
              <p className="text-emerald-100 text-lg">Gün Kesintisiz Üretim</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
