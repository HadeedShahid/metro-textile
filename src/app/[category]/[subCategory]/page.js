import Breadcrumbs from "@/components/common/breadcrumbs";
import Listings from "@/components/common/listings";
import { Select } from "@/components/common/select";
import React from "react";

const getCategorySeoData = (category) => {
  switch (category) {
    case "buttons":
      return {
        h1: "Shop Buttons Online – Metal, Plastic & More",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Components", href: "/components" },
          { label: "Breadcrumb" },
        ],
      };
      break;

    default:
      break;
  }
};
// sampleData.js
export const sampleListings = [
  {
    title: "Modern Apartment in Downtown",
    category: "Miami, FL",

    imageSrc: "/sample-long.png",
  },
  {
    title: "Cozy Studio Near Central Park",
    category: "Miami, FL",

    imageSrc: "/sample.jpg",
  },
  {
    title: "Luxury Villa with Pool",
    category: "Miami, FL",

    imageSrc: "/sample.jpg",
  },
  {
    title: "Beachfront Condo",
    category: "Miami, FL",
    imageSrc: "/sample.jpg",
  },
  {
    title: "Beachfront Condo",
    category: "Miami, FL",
    imageSrc: "/sample.jpg",
  },
  {
    title: "Beachfront Condo",
    category: "Miami, FL",
    imageSrc: "/sample.jpg",
  },
  {
    title: "Beachfront Condo",
    category: "Miami, FL",
    imageSrc: "/sample.jpg",
  },
  {
    title: "Beachfront Condo",
    category: "Miami, FL",
    imageSrc: "/sample.jpg",
  },
  {
    title: "Beachfront Condo",
    category: "Miami, FL",
    imageSrc: "/sample.jpg",
  },
  {
    title: "Beachfront Condo",
    category: "Miami, FL",
    image: "/sample.jpg",
  },
];

const SubCategory = async ({ params, searchParams }) => {
  const { category } = await params;
  const { h1, breadcrumbs } = getCategorySeoData(category);
  return (
    <section>
      <h1 className="font-semibold text-4xl">{h1}</h1>
      <div className="flex justify-between items-center">
        <Breadcrumbs items={breadcrumbs} />
        <Select />
      </div>
      <Listings items={sampleListings}></Listings>
    </section>
  );
};

export default SubCategory;
