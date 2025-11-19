"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { getProduct, updateProduct, uploadProductImage } from "../../../../../lib/actions/products";
import { ArrowLeftIcon, UploadIcon } from "lucide-react";
import Link from "next/link";
import type { Product } from "../../../../../lib/types";
import { toast } from "react-toastify";
import Image from "next/image";

export default function AdminUpdateProductPage() {
  const params = useParams();
  const productId = params.id as string;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      await loadProduct();
    }
    fetchData();
  }, [productId]);

  const loadProduct = async () => {
    try {
      const data = await getProduct(productId);
      if (data) {
        setProduct(data);
        setName(data.name);
        setDescription(data.description || "");
        setImageUrl(data.image_url || "");
        setImagePreview(data.image_url);
      } else {
        setError("Ürün bulunamadı");
      }
    } catch (err) {
      console.error("Error loading product:", err);
      setError("Ürün yüklenirken hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      let finalImageUrl = imageUrl;

      // Upload new image if selected
      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);
        
        const uploadResult = await uploadProductImage(formData);
        if (!uploadResult.success) {
          setError(uploadResult.error || "Resim yüklenemedi");
          setSaving(false);
          return;
        }
        finalImageUrl = uploadResult.url || "";
      }

      // Update product
      const result = await updateProduct(productId, {
        name,
        description,
        image_url: finalImageUrl,
      });

      if (result.success) {
        router.push("/admin/urunler");
        router.refresh();
        toast.success("Ürün başarıyla güncellendi.");
      } else {
        setError(result.error || "Ürün güncellenemedi");
      }
    } catch (err) {
      console.error("Error updating product:", err);
      setError("Bir hata oluştu");
      toast.error("Bir hata oluştu");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-xl text-gray-600">Yükleniyor...</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Ürün bulunamadı
        </div>
        <Link 
          href="/admin/urunler"
          className="inline-block mt-4 text-blue-500 hover:text-blue-600"
        >
          ← Geri Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/urunler"
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">Ürünü Düzenle</h1>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Ürün Adı *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Ürün adını girin"
            className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={saving}
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Açıklama
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Ürün açıklamasını girin"
            className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-32"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={saving}
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
            Ürün Resmi
          </label>
          <div className="flex flex-col gap-4">
            {imagePreview && (
              <div className="relative w-48 h-48 border border-gray-300 rounded-md overflow-hidden">
                <Image 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                  width={192}
                  height={192}
                />
              </div>
            )}
            <label className="cursor-pointer">
              <div className="flex items-center gap-2 border border-gray-300 p-3 rounded-md hover:bg-gray-50 transition-colors">
                <UploadIcon className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600">
                  {imageFile ? imageFile.name : "Yeni resim seçin"}
                </span>
              </div>
              <input
                id="image"
                type="file"
                name="image"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
                disabled={saving}
              />
            </label>
            <p className="text-sm text-gray-500">
              PNG, JPG veya WEBP formatında, maksimum 5MB. Yeni resim seçerseniz eskisi değiştirilecektir.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={saving || !name}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {saving ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
          </button>
          <Link
            href="/admin/urunler"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-md transition-colors inline-block text-center"
          >
            İptal
          </Link>
        </div>
      </form>
    </div>
  );
}