import { Leaf } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { getProducts } from "../../../lib/actions/products";
import type { Product } from "../../../lib/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ürünlerimiz",
  description:
    "Ada Bahçe'nin organik ürünleri keşfedin. Topraksız tarım ile üretilen doğal, taze ve lezzetli sebze ve meyveler.",
  openGraph: {
    title: "Ürünlerimiz | Ada Bahçe",
    description: "Ada Bahçe'nin organik sebze ve meyve ürünleri.",
    url: "https://adabahce.com.tr/urunler",
  },
};

const Products = async () => {
  let products: Product[] = [];
  try {
    products = await getProducts();
  } catch (error) {
    console.error("Error loading products:", error);
  }

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
          {products.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-lg p-8">
                <p className="text-gray-600 text-lg">
                  Henüz ürün bulunmamaktadır.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    {product.image_url ? (
                      <Image
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        width={600}
                        height={400}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <Leaf className="w-16 h-16" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Leaf className="w-3 h-3" />
                      <span>Taze</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    {product.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
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
                      Optimum koşullarda yetiştirilen ürünlerimiz vitamin ve
                      mineral açısından zengindir.
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
                      Su tasarrufu sağlayan sistemlerimizle doğaya saygılı
                      üretim yapıyoruz.
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
};

export default Products;
