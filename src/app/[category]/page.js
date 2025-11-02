import { categories } from "@/data/categories";
import { products } from "@/data/products"; // ✅ Add this
import Breadcrumbs from "@/components/common/breadcrumbs";
import SortBy from "@/components/common/sortby";
import { Button } from "@/components/ui/button";
import Listings from "@/components/common/listings";

export default function CategoryPage({ params }) {
  const { category } = params;

  const categoryData = categories.find((c) => c.id === category);

  if (!categoryData)
    return <div className="py-20 text-center">Category not found.</div>;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: categoryData.label, href: categoryData.href },
  ];

  const filteredProducts = products.filter(
    (p) => p.category === categoryData.id
  );

  return (
    <section className="space-y-6">
      <h1 className="font-semibold text-9xl py-6">{categoryData.label}</h1>
      <div className="flex gap-4 w-full overflow-x-scroll hide-scrollbar">
        {categoryData.subcategories?.map((sub) => (
          <Button
            key={sub.id}
            href={sub.href}
            variant="outline"
            className="p-4 rounded-full"
            size="sm"
          >
            {sub.label}
          </Button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <Breadcrumbs items={breadcrumbs} />
        <SortBy />
      </div>
      <Listings items={filteredProducts}></Listings>
    </section>
  );
}
