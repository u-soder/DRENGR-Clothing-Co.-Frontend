import hoodie1 from "@/assets/products/hoodie-1.jpg";
import cargoPants from "@/assets/products/cargo-pants.jpg";
import tshirt1 from "@/assets/products/tshirt-1.jpg";
import bomberJacket from "@/assets/products/bomber-jacket.jpg";
import sweatpants from "@/assets/products/sweatpants.jpg";
import beanie from "@/assets/products/beanie.jpg";
import hoodieWhite from "@/assets/products/hoodie-white.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  sizes: string[];
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Shadow Oversized Hoodie",
    price: 120,
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
    image: cargoPants,
    description: "Premium heavyweight cotton blend oversized hoodie",
  },
  {
    id: "2",
    name: "Tactical Cargo Pants",
    price: 145,
    category: "Pants",
    sizes: ["S", "M", "L", "XL"],
    image: cargoPants,
    description: "Relaxed fit cargo pants with multiple utility pockets",
  },
  {
    id: "3",
    name: "Essential Logo Tee",
    price: 55,
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: tshirt1,
    description: "100% organic cotton tee with minimal branding",
  },
  {
    id: "4",
    name: "Midnight Bomber Jacket",
    price: 220,
    category: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    image: bomberJacket,
    description: "Classic bomber silhouette with modern streetwear details",
  },
  {
    id: "5",
    name: "Comfort Joggers",
    price: 95,
    category: "Pants",
    sizes: ["S", "M", "L", "XL"],
    image: sweatpants,
    description: "Premium fleece joggers with tapered fit",
  },
  {
    id: "6",
    name: "Logo Beanie",
    price: 40,
    category: "Accessories",
    sizes: ["ONE SIZE"],
    image: beanie,
    description: "Ribbed knit beanie with embroidered logo",
  },
  {
    id: "7",
    name: "Ghost Oversized Hoodie",
    price: 120,
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
    image: hoodieWhite,
    description: "Premium heavyweight cotton blend oversized hoodie in white",
  },
  {
    id: "8",
    name: "Archive Logo Tee",
    price: 55,
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: tshirt1,
    description: "Vintage wash tee with archive logo print",
  },
  {
    id: "9",
    name: "Archive Logo Tee",
    price: 55,
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: tshirt1,
    description: "Vintage wash tee with archive logo print",
  },
  {
    id: "10",
    name: "Archive Logo Tee",
    price: 55,
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: tshirt1,
    description: "Vintage wash tee with archive logo print",
  },
  {
    id: "11",
    name: "Archive Logo Tee",
    price: 55,
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: tshirt1,
    description: "Vintage wash tee with archive logo print",
  },
  {
    id: "12",
    name: "Archive Logo Tee",
    price: 55,
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: tshirt1,
    description: "Vintage wash tee with archive logo print",
  },
];

export const categories = ["All", "Hoodies", "T-Shirts", "Pants", "Jackets", "Accessories"];
export const sizes = ["S", "M", "L", "XL", "XXL", "ONE SIZE"];
export const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $150", min: 100, max: 150 },
  { label: "Over $150", min: 150, max: Infinity },
];
