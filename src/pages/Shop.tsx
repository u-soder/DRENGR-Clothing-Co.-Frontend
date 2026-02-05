import { useState, useMemo } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { products, priceRanges } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { ProductFilters } from "@/components/shop/ProductFilters";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
      const sizeMatch = selectedSize === "" || product.sizes.includes(selectedSize);
      const priceRange = priceRanges[selectedPriceRange];
      const priceMatch = product.price >= priceRange.min && product.price <= priceRange.max;
      
      return categoryMatch && sizeMatch && priceMatch;
    });
  }, [selectedCategory, selectedSize, selectedPriceRange]);

  return (
    <>
      <Helmet>
        <title>Shop | DRENGR Clothing Co.</title>
        <meta name="description" content="Shop the latest streetwear collection from Drengr Clothing Co. Hoodies, t-shirts, pants, jackets and accessories." />
      </Helmet>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display text-5xl md:text-7xl tracking-tight text-foreground animate-fade-up">
              SHOP
            </h1>
            <p className="mt-4 text-muted-foreground font-body animate-fade-up animation-delay-100">
              {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 text-foreground font-body text-sm tracking-widest uppercase"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </button>

            {/* Filters Sidebar */}
            <aside
              className={cn(
                "lg:w-64 flex-shrink-0",
                showFilters ? "block" : "hidden lg:block"
              )}
            >
              <div className="sticky top-28">
                <div className="flex items-center justify-between lg:hidden mb-6">
                  <h2 className="font-display text-xl tracking-wider">Filters</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <ProductFilters
                  selectedCategory={selectedCategory}
                  selectedSize={selectedSize}
                  selectedPriceRange={selectedPriceRange}
                  onCategoryChange={setSelectedCategory}
                  onSizeChange={setSelectedSize}
                  onPriceRangeChange={setSelectedPriceRange}
                />
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-24">
                  <p className="text-muted-foreground font-body text-lg">
                    No products match your filters
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedSize("");
                      setSelectedPriceRange(0);
                    }}
                    className="mt-4 btn-secondary py-3 px-6 text-sm"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-fade-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
