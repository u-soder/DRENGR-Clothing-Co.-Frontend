import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizeSelect, setShowSizeSelect] = useState(false);
  const { addItem, openCart } = useCartStore();

  const handleAddToCart = () => {
    if (selectedSize) {
      addItem(product, selectedSize);
      openCart();
      setSelectedSize(null);
      setShowSizeSelect(false);
    } else {
      setShowSizeSelect(true);
    }
  };

  return (
    <article className="product-card group">
      <div className="relative bg-card overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-full object-cover transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
          {showSizeSelect ? (
            <div className="animate-scale-in w-full max-w-[200px]">
              <p className="text-foreground text-sm font-body mb-3 text-center">Select Size</p>
              <div className="grid grid-cols-3 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "filter-chip text-xs py-2",
                      selectedSize === size && "active"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={cn(
                  "mt-4 w-full btn-primary py-3 text-sm",
                  !selectedSize && "opacity-50 cursor-not-allowed"
                )}
              >
                Add to Cart
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="btn-primary py-3 px-8 text-sm animate-fade-up"
            >
              Quick Add
            </button>
          )}
        </div>
      </div>

      <Link to={`/product/${product.id}`} className="block mt-4">
        <h3 className="font-display text-lg tracking-wide text-foreground hover:text-muted-foreground transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm font-body mt-1">
          {product.category}
        </p>
        <p className="text-foreground font-body mt-2">${product.price}</p>
      </Link>
    </article>
  );
};
