import Breadcrumbs from "@/components/common/breadcrumbs";
import GalleryGrid from "@/components/common/imageGallery";
import React from "react";

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
    <section>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Components", href: "/components" },
          { label: "Breadcrumb" },
        ]}
      />
      <h1 className="font-semibold text-4xl">Yellow Metal Button</h1>
      <GalleryGrid />
    </section>
  );
};

export default Detail;
