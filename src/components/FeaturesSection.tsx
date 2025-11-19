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
              Su, enerji ve alan verimliliğini esas alarak, kaynakları bilinçle kullanıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-emerald-50 to-green-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Droplets className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Bilinçli Su Kullanımı
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Su verimliliğini esas alarak, kaynakları sorumlu bir şekilde kullanıyoruz.
              </p>
            </div>

            <div className="bg-linear-to-br from-emerald-50 to-green-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Leaf className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Doğal Koşullar
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Her bir bitkinin en doğal koşullarda, dengeli bir biçimde büyümesini sağlıyoruz.
              </p>
            </div>

            <div className="bg-linear-to-br from-emerald-50 to-green-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Sun className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Alan Verimliliği
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Topraksız tarım ile alan verimliliği sağlayarak sürdürülebilir üretim yapıyoruz.
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default FeaturesSection