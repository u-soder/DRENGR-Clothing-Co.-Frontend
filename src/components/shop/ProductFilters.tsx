import { categories, sizes, priceRanges } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductFiltersProps {
  selectedCategory: string;
  selectedSize: string;
  selectedPriceRange: number;
  onCategoryChange: (category: string) => void;
  onSizeChange: (size: string) => void;
  onPriceRangeChange: (index: number) => void;
}

export const ProductFilters = ({
  selectedCategory,
  selectedSize,
  selectedPriceRange,
  onCategoryChange,
  onSizeChange,
  onPriceRangeChange,
}: ProductFiltersProps) => {
  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div>
        <h3 className="font-display text-lg tracking-wider mb-4 text-foreground">Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn("filter-chip", selectedCategory === category && "active")}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="font-display text-lg tracking-wider mb-4 text-foreground">Size</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onSizeChange("")}
            className={cn("filter-chip", selectedSize === "" && "active")}
          >
            All
          </button>
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={cn("filter-chip", selectedSize === size && "active")}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-display text-lg tracking-wider mb-4 text-foreground">Price</h3>
        <div className="flex flex-wrap gap-2">
          {priceRanges.map((range, index) => (
            <button
              key={range.label}
              onClick={() => onPriceRangeChange(index)}
              className={cn("filter-chip", selectedPriceRange === index && "active")}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
