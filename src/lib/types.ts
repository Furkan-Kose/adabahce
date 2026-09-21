export interface Product {
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
  price: number | null;
  weight_gram: number | null;
  created_at: string;
  updated_at: string;
}

/**
 * Siteye (public) gönderilen ürün alanları.
 * Fiyat ve gramaj bilinçli olarak dışarıda bırakılmıştır.
 */
export type PublicProduct = Pick<
  Product,
  "id" | "name" | "description" | "image_url" | "created_at"
>;

export interface ProductInput {
  name: string;
  description?: string;
  image_url?: string;
  price?: number | null;
  weight_gram?: number | null;
}
