import { categories } from "@/data/categories";
import { products } from "@/data/products";

export function getCategoryById(id) {
  return categories.find((c) => c.id === id);
}

export function getSubcategoryById(categoryId, subId) {
  const category = getCategoryById(categoryId);
  return category?.subcategories?.find((s) => s.id === subId);
}

export function getProductsBySubcategory(subcategoryId) {
  return products.filter((p) => p.subCategory === subcategoryId);
}
