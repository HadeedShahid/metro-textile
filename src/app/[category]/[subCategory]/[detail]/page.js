import Breadcrumbs from "@/components/common/breadcrumbs";
import Call from "@/components/common/call";
import Email from "@/components/common/email";
import GalleryGrid from "@/components/common/imageGallery";
import SpecificationGrid from "@/components/common/specificationGrid";
import Whatsapp from "@/components/common/whatsapp";
import Cta from "@/components/Cta";
import { Card } from "@/components/ui/card";
import React from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/common/listingCard";
import OurClient from "@/components/OurClient";
import KeyFeatures from "@/components/common/KeyFeatures";
import {
  getCategoryById,
  getSubcategoryById,
  getProductBySlug,
  getProductsBySubcategory,
} from "@/utils";

export default async function DetailPage({ params }) {
  const { category, subCategory, detail } = await params;

  const categoryData = getCategoryById(category);
  const subcategoryData = getSubcategoryById(category, subCategory);
  const product = getProductBySlug(detail);

  if (!categoryData || !subcategoryData || !product) {
    return <div className="py-20 text-center">Product not found.</div>;
  }

  // Get similar products from the same subcategory
  const similarProducts = getProductsBySubcategory(subCategory).filter(
    (p) => p.id !== product.id
  );

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: categoryData.label, href: categoryData.href },
    { label: subcategoryData.label, href: subcategoryData.href },
    { label: product.name },
  ];

  return (
    <>
      <section className="pb-22">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="font-semibold text-4xl">{product.name}</h1>
        <GalleryGrid />
        <div className="grid md:grid-cols-3 gap-2">
          <div className="col-span-2 md:pr-12">
            <SpecificationGrid />
          </div>
          <div className="hidden md:block md:col-span-1">
            <Card className={"px-4"}>
              <h3>Contact</h3>
              <Call />
              <Email />
              <Whatsapp />
            </Card>
          </div>
        </div>
        {/* key features div */}
        <div>
          <KeyFeatures />
        </div>
        {similarProducts.length > 0 && (
          <section className="flex flex-col gap-4">
            <h2 className="font-semibold text-4xl">Explore Similar Products</h2>
            <div className="flex gap-4 overflow-scroll hide-scrollbar">
              {similarProducts.map((item, index) => (
                <ProductCard key={index} {...item} />
              ))}
            </div>
          </section>
        )}
        <OurClient />
        <Cta />
      </section>
      <div className="md:hidden fixed bottom-0 border-t-2 bg-white w-full py-4">
        <Call />
        <Email />
        <Whatsapp />
      </div>
    </>
  );
}
