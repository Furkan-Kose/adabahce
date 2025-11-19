"use client";

import { SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getProducts, deleteProduct } from "../../../../lib/actions/products";
import type { Product } from "../../../../lib/types";
import { toast } from "react-toastify";
import Image from "next/image";

export default function AdminProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  };

  const openDeleteModal = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleDelete = async () => {
    if (!selectedProduct) return;

    setDeleting(selectedProduct.id);
    try {
      const result = await deleteProduct(selectedProduct.id);
      if (result.success) {
        setProducts(products.filter((p) => p.id !== selectedProduct.id));
        toast.success(`"${selectedProduct.name}" ürünü başarıyla silindi.`);
      } else {
        toast.error(result.error || "Ürün silinirken hata oluştu");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Bir hata oluştu");
    } finally {
      setDeleting(null);
      setModalOpen(false);
      setSelectedProduct(null);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-xl text-gray-600">Yükleniyor...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Ürünler</h1>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Ürün ara..."
            className="p-2 border border-gray-300 rounded-l-lg w-80"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-500 text-white p-2 rounded-r-lg">
            <SearchIcon />
          </button>
        </div>
        <Link
          href="/admin/urunler/ekle"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Yeni Ürün Ekle
        </Link>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="bg-white shadow-md rounded-lg p-8 text-center">
          <p className="text-gray-600">Henüz ürün bulunmamaktadır.</p>
        </div>
      ) : (
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-left">Fotoğrafı</th>
              <th className="py-3 px-6 text-left">Ürün Adı</th>
              <th className="py-3 px-6 text-left">Açıklama</th>
              <th className="py-3 px-6 text-center">Aksiyonlar</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-300 hover:bg-gray-100"
              >
                <td className="py-3 px-6">
                  {product.image_url ? (
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                      width={64}
                      height={64}
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Resim Yok</span>
                    </div>
                  )}
                </td>
                <td className="py-3 px-6 font-medium">{product.name}</td>
                <td className="py-3 px-6 max-w-md truncate">
                  {product.description || "-"}
                </td>
                <td className="py-3 px-6">
                  <div className="flex justify-center items-center gap-4">
                    <Link
                      href={`/admin/urunler/${product.id}`}
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg transition-colors"
                    >
                      Güncelle
                    </Link>
                    <button
                      onClick={() => openDeleteModal(product)}
                      disabled={deleting === product.id}
                      className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-lg transition-colors cursor-pointer"
                    >
                      Sil
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal */}
      {modalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/50 "
            onClick={() => setModalOpen(false)} 
          ></div>

          {/* Modal Kutusu */}
          <div
            className="relative bg-white rounded-lg shadow-lg p-6 w-96 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-4">
              &quot;{selectedProduct.name}&quot; ürününü silmek istediğinizden emin misiniz?
            </h2>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setModalOpen(false)}
                className="px-8 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
              >
                İptal
              </button>
              <button
                onClick={handleDelete}
                className="px-8 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 cursor-pointer"
                disabled={deleting === selectedProduct.id}
              >
                {deleting === selectedProduct.id ? "Siliniyor..." : "Sil"}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
