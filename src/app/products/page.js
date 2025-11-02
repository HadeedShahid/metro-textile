import Breadcrumbs from "@/components/common/breadcrumbs";
import Listings from "@/components/common/listings";
import SortBy from "@/components/common/sortby";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import React from "react";

const getSeoData = () => {
  return {
    h1: "All Products",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
    ],
  };
};

const ProductsPage = () => {
  const { h1, breadcrumbs } = getSeoData();

  return (
    <section className="space-y-6">
      {/* ✅ H1 */}
      <h1 className="font-semibold text-4xl md:text-5xl py-6">{h1}</h1>

      {/* ✅ Category Pills */}
      <div className="flex gap-4 w-full overflow-x-auto hide-scrollbar pb-2">
        <Button
          href="/products"
          variant="default"
          className="p-4 rounded-full"
          size="sm"
        >
          All Products
        </Button>

        {categories.map((cat) => (
          <Button
            key={cat.id}
            href={`/${cat.id}`}
            variant="outline"
            className="p-4 rounded-full"
            size="sm"
          >
            {cat.label}
          </Button>
        ))}
      </div>

      {/* ✅ Breadcrumbs + Sorting */}
      <div className="flex justify-between items-center">
        <Breadcrumbs items={breadcrumbs} />
        <SortBy />
      </div>

      {/* ✅ Product Grid */}
      <Listings items={products} />
    </section>
  );
};

export default ProductsPage;
