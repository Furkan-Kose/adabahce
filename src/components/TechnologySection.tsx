import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const TechnologySection = () => {
  return (
    <section className="py-20 bg-linear-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/about.jpeg"
                alt="Yeşil Yapraklar"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                width={800}
                height={400}
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Doğadan İlham Alan Üretim
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Doğadan aldığımız ilhamı modern üretim anlayışıyla birleştiriyor; çevreye duyarlı, yenilikçi ve izlenebilir bir sistem kuruyoruz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Üretim bizim için sadece bir süreç değil, doğayla kurulan bilinçli bir denge. Her hasatta doğayla birlikte büyüyor, yaşamı besleyen bir denge kuruyoruz.
              </p>
              <Link
                href="/teknoloji"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg"
              >
                Teknolojimizi Keşfedin
              </Link>
            </div>
          </div>
        </div>
    </section>
  )
}

export default TechnologySection