import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { cn } from "@/lib/utils";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCartStore();

  if (!product) {
    return (
      <section className="py-24 text-center">
        <h1 className="font-display text-4xl text-foreground">Product Not Found</h1>
        <Link to="/shop" className="mt-6 inline-block btn-secondary py-3 px-6">
          Back to Shop
        </Link>
      </section>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize);
    }
    openCart();
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{product.name} | Drengr Clothing Co.</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm tracking-wider mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO SHOP
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <div className="animate-fade-up">
              <div className="relative bg-card overflow-hidden aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-fade-up animation-delay-100">
              <p className="text-muted-foreground font-body text-sm tracking-widest uppercase mb-2">
                {product.category}
              </p>
              <h1 className="font-display text-4xl md:text-5xl tracking-tight text-foreground">
                {product.name}
              </h1>
              <p className="font-display text-3xl text-foreground mt-4">
                ${product.price}
              </p>
              
              <p className="text-muted-foreground font-body mt-6 leading-relaxed">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mt-8">
                <p className="text-foreground font-body text-sm tracking-widest uppercase mb-4">
                  SIZE
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "filter-chip px-6 py-3 text-sm",
                        selectedSize === size && "active"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-muted-foreground text-sm mt-2">Please select a size</p>
                )}
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <p className="text-foreground font-body text-sm tracking-widest uppercase mb-4">
                  QUANTITY
                </p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-body text-foreground w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={cn(
                  "mt-8 w-full btn-primary py-4 text-sm font-body tracking-widest",
                  !selectedSize && "opacity-50 cursor-not-allowed"
                )}
              >
                ADD TO CART — ${product.price * quantity}
              </Button>

              {/* Product Details */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-foreground font-body text-sm tracking-widest uppercase mb-4">
                  PRODUCT DETAILS
                </h3>
                <ul className="space-y-2 text-muted-foreground font-body text-sm">
                  <li>• Premium quality materials</li>
                  <li>• Streetwear inspired design</li>
                  <li>• Relaxed, comfortable fit</li>
                  <li>• Machine washable</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-24">
              <h2 className="font-display text-3xl tracking-tight text-foreground mb-8">
                YOU MAY ALSO LIKE
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/product/${relatedProduct.id}`}
                    className="group"
                  >
                    <div className="relative bg-card overflow-hidden aspect-[3/4]">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-3">
                      <h3 className="font-display text-sm tracking-wide text-foreground group-hover:text-muted-foreground transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-foreground font-body text-sm mt-1">
                        ${relatedProduct.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
