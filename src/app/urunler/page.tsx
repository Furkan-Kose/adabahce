import { Leaf } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Ürünlerimiz',
};

export const products = [
  {
    id: 1,
    name: 'Yeşil Marul',
    category: 'Yapraklı Sebzeler',
    image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Kıvırcık yapraklı, vitamin deposu taze marul',
  },
  {
    id: 2,
    name: 'Domates',
    category: 'Meyveli Sebzeler',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Sulu ve aromalı, doğal lezzet',
  },
  {
    id: 3,
    name: 'Roka',
    category: 'Yapraklı Sebzeler',
    image: 'https://images.pexels.com/photos/6146971/pexels-photo-6146971.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Acımsı tadıyla salataların vazgeçilmezi',
  },
  {
    id: 4,
    name: 'Fesleğen',
    category: 'Aromatik Bitkiler',
    image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Kokulu ve taze, yemeklere lezzet katan',
  },
  {
    id: 5,
    name: 'Ispanak',
    category: 'Yapraklı Sebzeler',
    image: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Demir deposu, besleyici yapraklar',
  },
  {
    id: 6,
    name: 'Kıvırcık Salata',
    category: 'Yapraklı Sebzeler',
    image: 'https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Hafif ve çıtır dokusuyla ferah bir tat',
  },
  {
    id: 7,
    name: 'Nane',
    category: 'Aromatik Bitkiler',
    image: 'https://images.pexels.com/photos/7441983/pexels-photo-7441983.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Serinletici kokulu, çok yönlü kullanım',
  },
  {
    id: 8,
    name: 'Taze Maydanoz',
    category: 'Aromatik Bitkiler',
    image: 'https://images.pexels.com/photos/54084/pexels-photo-54084.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Her yemeğe yakışan, vitamin deposu',
  },
];

const categories = ['Tümü', 'Yapraklı Sebzeler', 'Meyveli Sebzeler', 'Aromatik Bitkiler'];

const Products = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <section className="relative bg-linear-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-green-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Ürünlerimiz</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Hidroponik sistemlerimizde yetiştirdiğimiz taze ve doğal ürünler
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12 flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width={600}
                    height={400}
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Leaf className="w-3 h-3" />
                    <span>Taze</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-emerald-600 font-medium mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Neden Ada Bahçe Ürünleri?
              </h2>
              <div className="space-y-6 text-left">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-2 rounded-lg shrink-0">
                    <Leaf className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      %100 Doğal
                    </h3>
                    <p className="text-gray-600">
                      Pestisit ve kimyasal gübre kullanmadan yetiştiriyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-2 rounded-lg shrink-0">
                    <Leaf className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Her Zaman Taze
                    </h3>
                    <p className="text-gray-600">
                      Hasat sonrası aynı gün teslim ediyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-2 rounded-lg shrink-0">
                    <Leaf className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Yüksek Besin Değeri
                    </h3>
                    <p className="text-gray-600">
                      Optimum koşullarda yetiştirilen ürünlerimiz vitamin ve mineral açısından zengindir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-2 rounded-lg shrink-0">
                    <Leaf className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Çevre Dostu
                    </h3>
                    <p className="text-gray-600">
                      Su tasarrufu sağlayan sistemlerimizle doğaya saygılı üretim yapıyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products