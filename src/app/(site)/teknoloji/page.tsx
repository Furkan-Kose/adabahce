import {
  Droplets,
  CalendarCheck,
  BarChart3,
  ShieldCheck,
  Leaf,
  CheckCircle2,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Teknolojimiz",
  description:
    "Ada Bahçe sürdürülebilir hidroponik tarım teknolojisi. %95 su tasarrufu, yıl boyu kesintisiz üretim, pestisitsiz güvenilir ürünler.",
  openGraph: {
    title: "Teknolojimiz | Ada Bahçe",
    description:
      "Ada Bahçe'nin sürdürülebilir üretim teknolojisi ve hidroponik tarım sistemleri.",
    url: "https://adabahce.com.tr/teknoloji",
  },
};

const features = [
  {
    icon: CalendarCheck,
    title: "Yıl Boyu Kesintisiz Üretim",
    description:
      "Kontrollü ortam teknolojisi sayesinde; yılın 365 günü, en ideal ve doğal yetiştirme koşulları sağlanır. Mevsimsel riskler ortadan kalkar, sürekli ve stabil üretim mümkün olur.",
    color: "emerald",
  },
  {
    icon: Droplets,
    title: "%95'e Varan Su Tasarrufu",
    description:
      "Hidroponik sistem, geleneksel tarıma kıyasla %95'e kadar daha az su kullanır. Doğal kaynakları korurken verimliliği artırır.",
    color: "blue",
  },
  {
    icon: BarChart3,
    title: "Öngörülebilir Hasat ve Akıllı Planlama",
    description:
      "Gerçek zamanlı dijital izleme ile tüm üretim süreci takip edilir. Hasat hacimleri önceden planlanabilir; satış tahminlemeleri daha doğru yapılır.",
    color: "purple",
  },
  {
    icon: ShieldCheck,
    title: "Pestisitsiz, Güvenilir Ürünler",
    description:
      "Kontrollü ve temiz üretim ortamı sayesinde pestisit kullanılmaz. Tüketicinin güvenle ve gönül rahatlığıyla tüketebileceği ürünler üretilir.",
    color: "orange",
  },
  {
    icon: Leaf,
    title: "Doğayla Uyumlu, Sürdürülebilir Yaklaşım",
    description:
      "Kaynak verimliliği ve kontrollü üretim yöntemleri, daha dengeli ve sürdürülebilir bir tarım pratiği sağlar.",
    color: "green",
  },
];

const colorClasses: Record<string, { bg: string; icon: string }> = {
  emerald: { bg: "from-emerald-100 to-emerald-200", icon: "text-emerald-700" },
  blue: { bg: "from-blue-100 to-blue-200", icon: "text-blue-700" },
  purple: { bg: "from-purple-100 to-purple-200", icon: "text-purple-700" },
  orange: { bg: "from-orange-100 to-orange-200", icon: "text-orange-700" },
  green: { bg: "from-green-100 to-green-200", icon: "text-green-700" },
};

const Technology = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-green-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sürdürülebilir Üretim Teknolojisi
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Biz Ada Bahçe olarak, geleceğin üretim biçimini bugünden
            geliştirmeye odaklanıyoruz.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = colorClasses[feature.color];
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-emerald-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`bg-gradient-to-br ${colors.bg} w-14 h-14 rounded-xl flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`w-7 h-7 ${colors.icon}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <h3 className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainable Hydroponic Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                <Leaf className="w-4 h-4" />
                Sürdürülebilir Hidroponik Tarım
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Modern yaşam için taze, yerel ve kaynak verimli yeşillikler.
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Tazeliği Yeniden Tasarlıyoruz
                  </h3>
                  <p className="text-gray-600">
                    Sürdürülebilir hidroponik üretimle doğal, besleyici ve
                    güvenilir gıda
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Kontrollü Ortam Tarımı, Maksimum Tazelik
                  </h3>
                  <p className="text-gray-600">
                    Verimli, izlenebilir ve besin değeri yüksek yeşillikler.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Gelecek İçin Üretiyoruz
                  </h3>
                  <p className="text-gray-600">
                    Sürdürülebilir tarım ile sağlıklı gıdayı yerel topluluklara
                    taşıyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/tech.webp"
                alt="Sürdürülebilir Hidroponik Tarım"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                width={800}
                height={500}
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Droplets className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-emerald-600">%95</p>
                    <p className="text-sm text-gray-600">Su Tasarrufu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">365</p>
              <p className="text-emerald-200">Gün Üretim</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">%95</p>
              <p className="text-emerald-200">Su Tasarrufu</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">%0</p>
              <p className="text-emerald-200">Pestisit</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">%100</p>
              <p className="text-emerald-200">İzlenebilirlik</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Geleceğin Tarımını Birlikte İnşa Edelim
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Sürdürülebilir, verimli ve doğayla uyumlu tarım teknolojimiz
            hakkında daha fazla bilgi almak için bizimle iletişime geçin.
          </p>
          <a
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
          >
            İletişime Geçin
          </a>
        </div>
      </section>
    </div>
  );
};

export default Technology;
