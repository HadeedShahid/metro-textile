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
    case "buttons":
      return {
        h1: "Buttons",
        breadcrumbs: [
          { label: "Home", href: "/buttons" },
          { label: "Buttons", href: "/buttons" },
          // { label: "Buttons" },
        ],
      };
      break;
    case "zippers":
      return {
        h1: "Zippers",
        breadcrumbs: [
          { label: "Home", href: "/zippers" },
          { label: "Zippers", href: "/zippers" },
          // { label: "Buttons" },
        ],
      };
      break;
    case "buckles":
      return {
        h1: "Buckles",
        breadcrumbs: [
          { label: "Home", href: "/buckles" },
          { label: "Buckles", href: "/buckles" },
          // { label: "Buttons" },
        ],
      };
      break;
    case "badges":
      return {
        h1: "Badges",
        breadcrumbs: [
          { label: "Home", href: "/badges" },
          { label: "Badges", href: "/badges" },
          // { label: "Buttons" },
        ],
      };
      break;
    case "plates":
      return {
        h1: "Plates",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Plates", href: "/products" },
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
    label: "Buckles",
    href: "/buckles",
    title: "Buckles for sale",
    value: "buckles",
  },

  {
    label: "Badges",
    href: "/badges",
    title: "Badges for sale",
    value: "badges",
  },
  {
    label: "Plates",
    href: "/plates",
    title: "Plates for sale",
    value: "plates",
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
