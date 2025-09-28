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

const products = [
  {
    id: "1",
    name: "Premium Silver Metal Buttons",
    category: "Metal Buttons",
    image: "/sample.jpg",
    badges: [{ label: "Popular", variant: "popular" }],
    actions: [
      { label: "Customize", variant: "outline" },
      { label: "Quote", variant: "default" },
    ],
  },
  {
    id: "2",
    name: "Industrial Grade Zippers",
    category: "Zippers",
    image: "/sample.jpg",
    badges: [{ label: "Featured", variant: "featured" }],
    actions: [
      { label: "Specifications", variant: "outline" },
      { label: "Sample", variant: "default" },
    ],
  },
  {
    id: "3",
    name: "Copper Rivets & Grommets",
    category: "Rivets",
    image: "/sample.jpg",
  },
  {
    id: "4",
    name: "Brass Snap Fasteners",
    category: "Snap Fasteners",
    image: "/sample.jpg",
    actions: [
      { label: "Color Options", variant: "outline" },
      { label: "Bulk Order", variant: "default" },
    ],
  },
  {
    id: "5",
    name: "Antique Brass Buttons",
    category: "Metal Buttons",
    image: "/sample.jpg",
    badges: [{ label: "Popular", variant: "popular" }],
  },
  {
    id: "6",
    name: "Heavy Duty Zippers",
    category: "Zippers",
    image: "/sample.jpg",
    badges: [{ label: "Featured", variant: "featured" }],
  },
];

const Category = async ({ params, searchParams }) => {
  const { category } = await params;
  const { h1, breadcrumbs } = getCategorySeoData(category);
  return (
    <section className="space-y-6">
      <h1 className="font-semibold text-4xl">{h1}</h1>
      <div className="flex justify-between items-center">
        <Breadcrumbs items={breadcrumbs} />
        <Select />
      </div>
      <Listings items={products}></Listings>
    </section>
  );
};

export default Category;
