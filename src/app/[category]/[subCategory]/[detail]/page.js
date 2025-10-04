import Breadcrumbs from "@/components/common/breadcrumbs";
import Call from "@/components/common/call";
import Email from "@/components/common/email";
import GalleryGrid from "@/components/common/imageGallery";
import SpecificationGrid from "@/components/common/specificationGrid";
import Whatsapp from "@/components/common/whatsapp";
import { Card } from "@/components/ui/card";
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
    <section clas>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Components", href: "/components" },
          { label: "Breadcrumb" },
        ]}
      />
      <h1 className="font-semibold text-4xl">Yellow Metal Button</h1>
      <GalleryGrid />
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 pr-12">
          <SpecificationGrid />
        </div>
        <div className="col-span-1">
          <Card className={"px-4"}>
            <h3>Contact</h3>
            <Call />
            <Email />
            <Whatsapp />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Detail;
