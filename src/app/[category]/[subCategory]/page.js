import {
  getCategoryById,
  getSubcategoryById,
  getProductsBySubcategory,
} from "@/utils";
import Breadcrumbs from "@/components/common/breadcrumbs";
import SortBy from "@/components/common/sortby";
import Listings from "@/components/common/listings";
import { Button } from "@/components/ui/button";

export default async function SubcategoryPage({ params }) {
  const { category, subCategory } = await params;

  const categoryData = getCategoryById(category);
  const subcategoryData = getSubcategoryById(category, subCategory);

  if (!categoryData || !subcategoryData)
    return <div className="py-20 text-center">Subcategory not found.</div>;

  const products = getProductsBySubcategory(subCategory);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: categoryData.label, href: categoryData.href },
    { label: subcategoryData.label },
  ];

  return (
    <section className="space-y-6">
      <h1 className="font-semibold text-9xl py-6">{subcategoryData.label}</h1>
      <div className="flex gap-4 w-full overflow-x-scroll hide-scrollbar">
        {categoryData.subcategories?.map((sub) => (
          <Button
            key={sub.id}
            href={sub.href}
            variant={sub.id === subCategory ? "default" : "outline"}
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
      <Listings items={products}></Listings>
    </section>
  );
}
