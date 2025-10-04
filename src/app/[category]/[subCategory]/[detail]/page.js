import Breadcrumbs from "@/components/common/breadcrumbs";
import Call from "@/components/common/call";
import Email from "@/components/common/email";
import GalleryGrid from "@/components/common/imageGallery";
import SpecificationGrid from "@/components/common/specificationGrid";
import Whatsapp from "@/components/common/whatsapp";
import Cta from "@/components/Cta";
import TrustedProducts from "@/components/TrustedProducts";
import { Card } from "@/components/ui/card";
import React from "react";
import { products } from "../page";
import ProductCard from "@/components/common/listingCard";
import OurClient from "@/components/OurClient";

const galleryImages = [
  {
    src: "/sample.jpg",
    alt: "Modern architecture building",
  },
  {
    src: "/sample.jpg",
    alt: "Interior design living room",
  },
  {
    src: "/sample.jpg",
    alt: "Minimalist bedroom",
  },
  {
    src: "/sample.jpg",
    alt: "Contemporary kitchen",
  },
  {
    src: "/sample.jpg",
    alt: "Outdoor patio",
  },
];

const Detail = () => {
  return (
    <>
      <section className="pb-22">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Components", href: "/components" },
            { label: "Breadcrumb" },
          ]}
        />
        <h1 className="font-semibold text-4xl">Yellow Metal Button</h1>
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
        <section className="flex flex-col gap-4">
          <h2 className="font-semibold text-4xl">Explore Similar Products</h2>
          <div className="flex gap-4 overflow-scroll hide-scrollbar">
            {products.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </section>
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
};

export default Detail;
