import { BoxIcon, List, PlusCircle } from "lucide-react";
import { getProducts } from "../../../lib/actions/products";
import Link from "next/link";
import type { Product } from "../../../lib/types";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Paneli",
  description: "Ada Bahçe admin paneli dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminDashboard() {
  let products: Product[] = [];
  try {
    products = await getProducts();
  } catch (error) {
    console.error("Error loading products:", error);
  }

  const productCount = products?.length || 0;
  const lastFiveProducts = products.slice(0, 5);

  return (
    <div className="p-8 space-y-8">
      {/* Başlık */}
      <h1 className="text-3xl font-bold text-gray-800">
        Admin Panel - Anasayfa
      </h1>

      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Toplam Ürün */}
        <div className="bg-white shadow-lg p-6 rounded-lg flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Toplam Ürün</h2>
            <p className="text-2xl text-gray-900">{productCount}</p>
          </div>
          <BoxIcon className="text-4xl text-emerald-600" />
        </div>

        {/* Ürünler Sayfası */}
        <Link
          href="/admin/urunler"
          className="bg-white shadow-lg p-6 rounded-lg flex items-center justify-between hover:shadow-xl transition"
        >
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Tüm Ürünler</h2>
            <p className="text-lg text-gray-900">Listele ve Düzenle</p>
          </div>
          <List className="text-4xl text-blue-500" />
        </Link>

        {/* Yeni Ürün Ekle */}
        <Link
          href="/admin/urunler/ekle"
          className="bg-white shadow-lg p-6 rounded-lg flex items-center justify-between hover:shadow-xl transition"
        >
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              Yeni Ürün Ekle
            </h2>
            <p className="text-lg text-gray-900">Hızlı Erişim</p>
          </div>
          <PlusCircle className="text-4xl text-purple-500" />
        </Link>
      </div>

      {/* Son 5 Ürün */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <List /> Son 5 Ürün
        </h2>
        {lastFiveProducts.length === 0 ? (
          <p>Henüz ürün yok.</p>
        ) : (
          <ul className="space-y-4">
            {lastFiveProducts.map((product) => (
              <li
                key={product.id}
                className="flex items-start gap-4 border-b pb-4"
              >
                {product.image_url ? (
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                    width={64}
                    height={64}
                  />
                ) : (
                  <div className="w-16 h-16 px-2 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-sm">
                    Resim Yok
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.description || "-"}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
