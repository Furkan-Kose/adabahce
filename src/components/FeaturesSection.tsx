import { Droplets, Leaf, Sun } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Neden Ada Bahçe?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern tarım teknolojileri ile doğaya saygılı, sürdürülebilir üretim yapıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-emerald-50 to-green-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Droplets className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Su Tasarrufu
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Hidroponik sistemlerimiz geleneksel tarıma göre %90 daha az su kullanır.
              </p>
            </div>

            <div className="bg-linear-to-br from-emerald-50 to-green-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Leaf className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Pestisitsiz
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kapalı sistem sayesinde zararlılara karşı kimyasal kullanmadan koruma sağlarız.
              </p>
            </div>

            <div className="bg-linear-to-br from-emerald-50 to-green-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Sun className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Tüm Mevsim
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kontrollü ortam sayesinde yıl boyunca kesintisiz üretim yapabiliyoruz.
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default FeaturesSection