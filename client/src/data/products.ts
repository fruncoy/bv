export interface ColorVariant {
  name: string;
  hex: string;
  inStock: boolean;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  price: string;
  priceValue: number;
  brand: string;
  category: string;
  inStock: boolean;
  image: string;
  images: string[];
  colorImages?: Record<string, string[]>;
  colors: ColorVariant[];
  description: string;
  details: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 1, slug: "michael-kors-bag", name: "Michael Kors Avril Small Top-Zip Satchel", price: "KES 5,500", priceValue: 5500,
    brand: "Michael Kors", category: "Shoulder Bags", inStock: true,
    image: "/kanta/kors featured.png",
    images: [
      "/kanta/kors featured.png",
      "/kanta/kors black decorated.png",
      "/kanta/kors blue image.png",
      "/kanta/kors blue open.png",
      "/kanta/kors brown untagged.png",
      "/kanta/kors brown decor.png",
      "/kanta/kors  white.png",
      "/kanta/michael kors white.png",
    ],
    colorImages: {
      "Black":  ["/kanta/kors featured.png", "/kanta/kors black decorated.png"],
      "Cobalt": ["/kanta/kors blue image.png", "/kanta/kors blue open.png"],
      "Cognac": ["/kanta/kors brown untagged.png", "/kanta/kors brown decor.png"],
      "Ivory":  ["/kanta/kors  white.png", "/kanta/michael kors white.png"],
    },
    colors: [
      { name: "Black", hex: "#1a1a1a", inStock: true },
      { name: "Cobalt", hex: "#0047AB", inStock: true },
      { name: "Cognac", hex: "#9A4722", inStock: true },
      { name: "Ivory", hex: "#F5F0E8", inStock: true },
    ],
    description: "Four colours, one obsession. This Michael Kors shoulder bag is structured, sleek, and built for the woman who knows exactly what she wants. Available in Black, Cobalt, Cognac, and Ivory.",
    details: ["Premium pebbled leather", "Gold-tone hardware", "Interior zip & slip pockets", "Adjustable shoulder strap", "Dust bag included"],
  },
  {
    id: 2, slug: "zara-half-moon-bag", name: "ZARA Signature Half-Moon Handbag", price: "KES 5,500", priceValue: 5500,
    brand: "Zara", category: "Shoulder Bags", inStock: true,
    image: "/kanta/Zara Moon Bag Featured.png",
    images: [
      "/kanta/Zara Moon Bag Featured.png",
      "/kanta/ZARA Signature Half-Moon Handbag (1).png",
      "/kanta/ZARA Signature Half-Moon Handbag (2).png",
      "/kanta/ZARA Signature Half-Moon Handbag (4).png",
      "/kanta/ZARA Signature Half-Moon Handbag (5).png",
    ],
    colorImages: {
      "Black":        ["/kanta/Zara Moon Bag Featured.png", "/kanta/ZARA Signature Half-Moon Handbag (1).png", "/kanta/ZARA Signature Half-Moon Handbag (2).png", "/kanta/ZARA Signature Half-Moon Handbag (4).png", "/kanta/ZARA Signature Half-Moon Handbag (5).png"],
      "White":        ["/kanta/Zara Moon Bag Featured.png", "/kanta/ZARA Signature Half-Moon Handbag (1).png", "/kanta/ZARA Signature Half-Moon Handbag (2).png", "/kanta/ZARA Signature Half-Moon Handbag (4).png", "/kanta/ZARA Signature Half-Moon Handbag (5).png"],
      "Burgundy":     ["/kanta/Zara Moon Bag Featured.png", "/kanta/ZARA Signature Half-Moon Handbag (1).png", "/kanta/ZARA Signature Half-Moon Handbag (2).png", "/kanta/ZARA Signature Half-Moon Handbag (4).png", "/kanta/ZARA Signature Half-Moon Handbag (5).png"],
      "Cognac Brown": ["/kanta/Zara Moon Bag Featured.png", "/kanta/ZARA Signature Half-Moon Handbag (1).png", "/kanta/ZARA Signature Half-Moon Handbag (2).png", "/kanta/ZARA Signature Half-Moon Handbag (4).png", "/kanta/ZARA Signature Half-Moon Handbag (5).png"],
    },
    colors: [
      { name: "Black",        hex: "#1a1a1a", inStock: true },
      { name: "White",        hex: "#F9F9F9", inStock: true },
      { name: "Burgundy",     hex: "#6D1A36", inStock: true },
      { name: "Cognac Brown", hex: "#9A4722", inStock: true },
    ],
    description: "The half-moon silhouette, a shape that flatters every arm and every occasion. Minimal in form, maximum in impact. Available in four stunning colourways to match every mood.",
    details: ["Structured faux leather", "Curved half-moon silhouette", "Top zip closure", "Detachable crossbody strap", "Dust bag included"],
  },
];

export const CATEGORIES = ["All", "Shoulder Bags", "Totes", "Crossbody"];
export const BRANDS = ["All", "Michael Kors", "Zara"];
