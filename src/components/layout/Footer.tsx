import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-display text-3xl tracking-wider text-foreground">
              DRENGR Clothing Co.
            </span>
            <p className="mt-4 text-muted-foreground text-sm font-body leading-relaxed">
              Modern streetwear for the bold. Born from the culture, designed for the fearless.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-6 text-foreground">Navigate</h4>
            <ul className="space-y-3">
              {["Home", "Shop", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground text-sm font-body hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-6 text-foreground">Support</h4>
            <ul className="space-y-3">
              {["Shipping", "Returns", "Size Guide", "FAQ"].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground text-sm font-body cursor-pointer hover:text-foreground transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-6 text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
                aria-label="Facebook"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-6 text-muted-foreground text-sm font-body">
              Email - drengrclothing@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © 2025 DRENGR Clothing Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-muted-foreground text-sm font-body cursor-pointer hover:text-foreground transition-colors">
              Privacy Policy
            </span>
            <span className="text-muted-foreground text-sm font-body cursor-pointer hover:text-foreground transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
