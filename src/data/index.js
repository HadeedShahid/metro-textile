const products = [
  {
    id: "1",
    name: "Premium Silver Metal Buttons",
    category: "Buttons",
    subCategory: "Metal Buttons",
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
    subCategory: "Plastic Zippers",
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
    subCategory: "Copper Rivets",
    image: "/sample.jpg",
  },
  {
    id: "5",
    name: "Antique Brass Buttons",
    category: "Buttons",
    subCategory: "shank-buttons",
    image: "/sample.jpg",
    badges: [{ label: "Popular", variant: "popular" }],
  },
  {
    id: "6",
    name: "Heavy Duty Zippers",
    category: "Zippers",
    subCategory: "Metal Zippers",
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

export { products, linksData };
