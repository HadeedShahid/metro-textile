import Breadcrumbs from "@/components/common/breadcrumbs";
import Listings from "@/components/common/listings";
import { Select } from "@/components/common/select";
import SortBy from "@/components/common/sortby";
import { Button } from "@/components/ui/button";
import React from "react";

const getCategorySeoData = (category) => {
  switch (category) {
    case "products":
      return {
        h1: "Products",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "All Products", href: "/products" },
          // { label: "Buttons" },
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

const linksData = [
  {
    label: "All Products",
    href: "/products",
    title: "Products",
    value: "products",
  },
  {
    label: "Buttons",
    href: "/buttons",
    title: "Buttons for sale",
    value: "buttons",
  },
  {
    label: "Zippers",
    href: "/zippers",
    title: "Zippers for sale",
    value: "zippers",
  },
  {
    label: "Rivets",
    href: "/rivets",
    title: "Rivets for sale",
    value: "rivets",
  },
  {
    label: "Buckles",
    href: "/buckles",
    title: "Buckles for sale",
    value: "buckles",
  },
  { label: "Snaps", href: "/snaps", title: "Snaps for sale", value: "snaps" },
  { label: "Hooks", href: "/hooks", title: "Hooks for sale", value: "hooks" },
  {
    label: "Clasps",
    href: "/clasps",
    title: "Clasps for sale",
    value: "clasps",
  },
  {
    label: "Eyelets",
    href: "/eyelets",
    title: "Eyelets for sale",
    value: "eyelets",
  },
];

const Category = async ({ params, searchParams }) => {
  const { category } = await params;
  const { h1, breadcrumbs } = getCategorySeoData(category);
  return (
    <section className="space-y-6">
      <h1 className="font-semibold text-9xl py-6">{h1}</h1>
      <div className="flex gap-4 w-full overflow-x-scroll hide-scrollbar">
        {linksData.map(({ label, href, title, value }) => (
          <Button
            key={label}
            href={href}
            variant={value === category ? "default" : "outline"}
            className={"p-4 rounded-full"}
            title={title}
            size="sm"
          >
            {label}
          </Button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <Breadcrumbs items={breadcrumbs} />
        <SortBy />
      </div>
      <Listings items={products}></Listings>
    </section>
  );
};

export default Category;
