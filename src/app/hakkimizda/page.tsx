import { Award, Heart, Target, Users } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Hakkımızda',
}

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
            Doğaya saygılı, teknolojiye açık. Ada Bahçe ile tanışın.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Biz Kimiz?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ada Bahçe, Türkiye&apos;de hidroponik tarım teknolojileri ile sürdürülebilir ve doğal gıda üretimi yapan öncü bir şirkettir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                2020 yılında kurulan şirketimiz, modern tarım teknolojilerini geleneksel değerlerimizle birleştirerek, hem çevreyi koruyan hem de en kaliteli ürünleri üreten bir sistem geliştirmiştir.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Topraksız tarım sayesinde su tasarrufu, pestisitsiz üretim ve mevsimden bağımsız hasat imkanı sunuyoruz.
              </p>
            </div>

            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/4505166/pexels-photo-4505166.jpeg?auto=compress&cs=tinysrgb&w=800"
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
              Ada Bahçe&quot;yi Ada Bahçe yapan temel prensiplerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-linear-to-br from-emerald-100 to-emerald-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Kalite
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Her üretim aşamasında en yüksek kalite standartlarını koruyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-linear-to-br from-emerald-100 to-emerald-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sürdürülebilirlik
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Çevre dostu üretim yöntemleriyle gelecek nesillere yaşanabilir bir dünya bırakıyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-linear-to-br from-emerald-100 to-emerald-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                İnovasyon
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Son teknoloji ile sürekli gelişen sistemlerimizle sektöre öncülük ediyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-linear-to-br from-emerald-100 to-emerald-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Güven
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Müşterilerimize karşı şeffaflık ve dürüstlük ilkesiyle hareket ediyoruz.
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
                alt="Taze Sebzeler"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                width={800}
                height={450}
              />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Vizyonumuz
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Türkiye&apos;de topraksız tarımın öncüsü olarak, sürdürülebilir gıda üretiminde lider konuma gelmek.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Her eve taze, doğal ve güvenilir ürünler ulaştırarak, toplum sağlığına katkıda bulunmak istiyoruz.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
                <p className="text-emerald-900 font-medium italic">
                  &quot;Doğal olarak taze&quot; sloganımızla, her gün binlerce aileye sağlıklı yaşam sunuyoruz.
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
}

export default About