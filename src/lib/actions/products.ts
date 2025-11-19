"use server";

import { createClient } from "../supabase/server";
import { revalidatePath } from "next/cache";
import { AuthService } from "../auth";
import type { Product, ProductInput } from "../types";

/**
 * Ensure user is authenticated before performing actions
 */
async function requireAuth() {
  const isAuthenticated = await AuthService.isAuthenticated();
  if (!isAuthenticated) {
    throw new Error("Unauthorized");
  }
}

/**
 * Get all products
 */
export async function getProducts(): Promise<Product[]> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }

  return data || [];
}

/**
 * Get a single product by ID
 */
export async function getProduct(id: string): Promise<Product | null> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching product:", error);
    return null;
  }

  return data;
}

/**
 * Create a new product
 */
export async function createProduct(input: ProductInput): Promise<{ success: boolean; error?: string; data?: Product }> {
  try {
    await requireAuth();
    
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from("products")
      .insert({
        name: input.name,
        description: input.description || null,
        image_url: input.image_url || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Error creating product:", error);
      return { success: false, error: "Failed to create product" };
    }

    revalidatePath("/admin/urunler");
    revalidatePath("/admin");
    revalidatePath("/urunler");

    return { success: true, data };
  } catch (error) {
    console.error("Error creating product:", error);
    return { success: false, error: "Unauthorized or server error" };
  }
}

/**
 * Update an existing product
 */
export async function updateProduct(
  id: string,
  input: ProductInput
): Promise<{ success: boolean; error?: string }> {
  try {
    await requireAuth();

    const supabase = await createClient();

    const { data: oldProduct } = await supabase
      .from("products")
      .select("image_url")
      .eq("id", id)
      .single();

    if (oldProduct?.image_url && input.image_url && oldProduct.image_url !== input.image_url) {
      try {
        const oldFileName = oldProduct.image_url.split("/").pop();
        if (oldFileName) {
          await supabase.storage.from("products").remove([oldFileName]);
        }
      } catch (err) {
        console.error("Error deleting old image:", err);
      }
    }

    const { error } = await supabase
      .from("products")
      .update({
        name: input.name,
        description: input.description || null,
        image_url: input.image_url || oldProduct?.image_url || null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating product:", error);
      return { success: false, error: "Failed to update product" };
    }

    revalidatePath("/admin/urunler");
    revalidatePath("/admin");
    revalidatePath("/urunler");

    return { success: true };
  } catch (error) {
    console.error("Error updating product:", error);
    return { success: false, error: "Unauthorized or server error" };
  }
}


/**
 * Delete a product
 */
export async function deleteProduct(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    await requireAuth();
    
    const supabase = await createClient();
    
    // First, get the product to find its image URL
    const { data: product } = await supabase
      .from("products")
      .select("image_url")
      .eq("id", id)
      .single();

    // Delete the product from database
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting product:", error);
      return { success: false, error: "Failed to delete product" };
    }

    // If product had an image, delete it from storage
    if (product?.image_url) {
      try {
        const fileName = product.image_url.split("/").pop();
        if (fileName) {
          await supabase.storage
            .from("products")
            .remove([fileName]);
        }
      } catch (storageError) {
        console.error("Error deleting image from storage:", storageError);
        // Continue even if storage deletion fails
      }
    }

    revalidatePath("/admin/urunler");
    revalidatePath("/admin");
    revalidatePath("/urunler");

    return { success: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false, error: "Unauthorized or server error" };
  }
}

/**
 * Upload image to Supabase Storage
 */
export async function uploadProductImage(formData: FormData): Promise<{ success: boolean; url?: string; error?: string }> {
  try {
    await requireAuth();
    
    const file = formData.get("file") as File;
    if (!file) {
      return { success: false, error: "No file provided" };
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      return { success: false, error: "File must be an image" };
    }

    // Validate file size (1MB max)
    if (file.size > 1 * 1024 * 1024) {
      return { success: false, error: "File size must be less than 1MB" };
    }

    const supabase = await createClient();
    
    // Generate unique filename
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

    // Upload to storage
    const { error: uploadError } = await supabase.storage
      .from("products")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      console.error("Error uploading image:", uploadError);
      return { success: false, error: "Failed to upload image" };
    }

    // Get public URL
    const { data } = supabase.storage
      .from("products")
      .getPublicUrl(fileName);

    return { success: true, url: data.publicUrl };
  } catch (error) {
    console.error("Error uploading image:", error);
    return { success: false, error: "Unauthorized or server error" };
  }
}

