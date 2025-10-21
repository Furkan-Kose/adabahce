import React from 'react'
import Image from 'next/image';
import { Leaf } from 'lucide-react';
import { products } from '../app/urunler/page';

const ProductsSection = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Taze ve Doğal Ürünlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ada Bahçe&apos;nin özenle yetiştirdiği ürünlerle sağlıklı beslenmenin keyfini çıkarın.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 8).map((product) => (
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

          {/* Tüm Ürünleri Gör Butonu */}
          <div className="mt-12 text-center">
            <a
              href="/urunler"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg"
            >
              Tüm Ürünleri Gör
            </a>
          </div>
        </div>
    </section>
  )
}

export default ProductsSection