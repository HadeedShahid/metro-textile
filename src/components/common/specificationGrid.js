import { cn } from "@/lib/utils";
const sampleData = [
  { label: "Material", value: "Pure Brass with Anti-Rust Coating" },
  { label: "Finish", value: "Matte Black" },
  { label: "Diameter", value: "18 mm" },
  { label: "Weight", value: "2.5 g" },
  { label: "Packaging", value: "50 pcs per pack" },
  { label: "Best For", value: "Jeans, Jackets, Bags" },
];

function SpecificationGrid({ title = "Specifications", data = sampleData }) {
  if (!data?.length) return null;

  // Split into 2 columns for desktop, 1 for mobile
  const mid = Math.ceil(data.length / 2);
  const columns = [data.slice(0, mid), data.slice(mid)];

  return (
    <div id="product-details" className="flex flex-col w-full">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      <div className={cn("grid gap-6 text-xs md:text-sm md:grid-cols-2")}>
        {columns.map((items, col) => (
          <div key={col}>
            {items.map((item, index) => {
              const isFirst = index === 0;
              const isLast = index === items.length - 1;

              return (
                <div key={index} className="flex -mt-[1px]">
                  {/* Label cell */}
                  <div
                    className={cn(
                      "text-gray-400 border border-gray-200 bg-gray-50 py-2 px-3 w-full flex items-center",
                      isFirst && "ltr:rounded-tl-lg rtl:rounded-tr-lg",
                      isLast && "ltr:rounded-bl-lg rtl:rounded-br-lg"
                    )}
                  >
                    {item.label}
                  </div>
                  {/* Value cell */}
                  <div
                    className={cn(
                      "font-medium border border-gray-200 py-2 px-3 w-full flex items-center",
                      isFirst && "ltr:rounded-tr-lg rtl:rounded-tl-lg",
                      isLast && "ltr:rounded-br-lg rtl:rounded-bl-lg"
                    )}
                  >
                    {item.value}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecificationGrid;
