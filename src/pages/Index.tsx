import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>DRENGR Clothing Co. | Modern Streetwear</title>
        <meta name="description" content="Drengr Clothing Co. - Modern streetwear for the bold. Born from the culture, designed for the fearless. Shop our latest collection." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Drengr Clothing streetwear fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight text-foreground animate-fade-up">
            DRENGR Clothing Co.
          </h1>
          <p className="mt-4 font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto animate-fade-up animation-delay-100">
            Modern streetwear for the bold
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-200">
            <Link to="/shop" className="btn-primary flex items-center justify-center gap-2">
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/about" className="btn-secondary">
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-foreground/50" />
        </div>
      </section>

      {/* Marquee */}
      <section className="py-6 bg-card border-y border-border overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(10).fill(null).map((_, i) => (
            <span key={i} className="font-display text-2xl tracking-[0.3em] text-muted-foreground mx-8">
              DRENGR CLOTHING CO.
            </span>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl tracking-tight text-foreground animate-fade-up">
              BORN FROM THE CULTURE
            </h2>
            <p className="mt-8 font-body text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up animation-delay-100">
              DRENGR represents the fearless spirit of street culture. Every piece is crafted with precision, 
              designed for those who refuse to blend in. We don't follow trends — we set them.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight text-foreground">
              Featured
            </h2>
            <Link
              to="/shop"
              className="nav-link font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground flex items-center gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-card to-background opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl tracking-tight text-foreground">
              JOIN THE MOVEMENT
            </h2>
            <p className="mt-6 font-body text-lg text-muted-foreground">
              Be the first to know about new drops, exclusive releases, and member-only deals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-secondary border border-border px-6 py-4 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
              <button className="btn-primary whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
