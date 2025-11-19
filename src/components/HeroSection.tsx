import { Leaf, Sprout } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative bg-linear-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-12 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                <Leaf className="w-4 h-4" />
                <span>Topraksız Tarım Teknolojisi</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Doğayla Buluşan,
                <span className="text-emerald-600"> Taze Lezzet</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Taze, güvenilir ve doğadan gelen sebzeler sunuyoruz. Hidroponik tarım ile doğaya zarar vermeden, bilinçli üretim yapıyoruz.
              </p>

              <div className="relative inline-block">
                <p className="text-3xl text-emerald-700 font-handwriting italic">
                  Doğal olarak taze.
                </p>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-emerald-400 to-green-400 rounded-full"></div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/urunler"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 md:py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Ürünlerimizi Keşfedin
                </Link>
                <Link
                  href="/hakkimizda"
                  className="bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-3 md:py-4 rounded-lg font-medium transition-all"
                >
                  Hakkımızda
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/4505166/pexels-photo-4505166.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Hidroponik Tarım"
                  className="w-full h-[500px] object-cover"
                  width={800}
                  height={500}
                />
                <div className="absolute inset-0 bg-linear-to-t from-emerald-900/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Sprout className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">%100</p>
                    <p className="text-sm text-gray-600">Doğal Ürünler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HeroSection