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
      "/kanta/kors black image.png",
      "/kanta/kors black decorated.png",
      "/kanta/kors black open.png",
      "/kanta/kors black lady.png",
      "/kanta/kors blue image.png",
      "/kanta/kors blue decorated.png",
      "/kanta/kors blue open.png",
      "/kanta/kors blue lady.png",
      "/kanta/kors brown untagged.png",
      "/kanta/kors brown decor.png",
      "/kanta/kors brown tag.png",
      "/kanta/kors  white.png",
      "/kanta/kors white.png",
      "/kanta/michael kors white.png",
      "/kanta/michael  kors white open.png",
      "/kanta/kors white with lady.png",
    ],
    colorImages: {
      "Black":  ["/kanta/kors featured.png", "/kanta/kors black image.png", "/kanta/kors black decorated.png", "/kanta/kors black open.png", "/kanta/kors black lady.png"],
      "Cobalt": ["/kanta/kors blue image.png", "/kanta/kors blue decorated.png", "/kanta/kors blue open.png", "/kanta/kors blue lady.png"],
      "Cognac": ["/kanta/kors brown untagged.png", "/kanta/kors brown decor.png", "/kanta/kors brown tag.png"],
      "Ivory":  ["/kanta/kors  white.png", "/kanta/kors white.png", "/kanta/michael kors white.png", "/kanta/michael  kors white open.png", "/kanta/kors white with lady.png"],
    },
    colors: [
      { name: "Black",  hex: "#1a1a1a", inStock: true },
      { name: "Cobalt", hex: "#0047AB", inStock: true },
      { name: "Cognac", hex: "#9A4722", inStock: true },
      { name: "Ivory",  hex: "#F5F0E8", inStock: true },
    ],
    description: "Four colours, one obsession. This Michael Kors shoulder bag is structured, sleek, and built for the woman who knows exactly what she wants. Available in Black, Cobalt, Cognac, and Ivory.",
    details: ["Premium pebbled leather", "Gold-tone hardware", "Interior zip & slip pockets", "Adjustable shoulder strap", "Dust bag included"],
  },
  {
    id: 2, slug: "zara-half-moon-bag", name: "ZARA Signature Half-Moon Handbag", price: "KES 6,500", priceValue: 6500,
    brand: "Zara", category: "Shoulder Bags", inStock: true,
    image: "/kanta/Zara Moon Bag Featured.png",
    images: [
      "/kanta/Zara Moon Bag Featured.png",
      "/kanta/ZARA Signature Half-Moon Handbag (1).png",
      "/kanta/ZARA Signature Half-Moon Handbag (2).png",
      "/kanta/ZARA Signature Half-Moon Handbag (4).png",
      "/kanta/ZARA Signature Half-Moon Handbag (5).png",
    ],
    colors: [
      { name: "Black",        hex: "#1a1a1a", inStock: true },
      { name: "Burgundy",     hex: "#6D1A36", inStock: true },
      { name: "Cognac Brown", hex: "#9A4722", inStock: true },
    ],
    description: "The half-moon silhouette, a shape that flatters every arm and every occasion. Minimal in form, maximum in impact. Available in three stunning colourways to match every mood.",
    details: ["Structured faux leather", "Curved half-moon silhouette", "Top zip closure", "Detachable crossbody strap", "Dust bag included"],
  },
  {
    id: 3, slug: "zara-trapeze-bag", name: "ZARA Trapeze Silhouette Handbag", price: "KES 5,500", priceValue: 5500,
    brand: "Zara", category: "Shoulder Bags", inStock: true,
    image: "/kanta/zara cheater lady.png",
    images: [
      "/kanta/zara cheater lady.png",
      "/kanta/zara cheater bag image.png",
      "/kanta/zara cheater decorated image.png",
      "/kanta/zara cheater opened.png",
      "/kanta/zara black bag.png",
      "/kanta/zara black decorated.png",
      "/kanta/zara black lady model.png",
      "/kanta/zara cream bage image.png",
      "/kanta/zara cream bag decorated.png",
      "/kanta/zara cream bag lady.png",
    ],
    colorImages: {
      "Cheater": ["/kanta/zara cheater lady.png", "/kanta/zara cheater bag image.png", "/kanta/zara cheater decorated image.png", "/kanta/zara cheater opened.png"],
      "Black":   ["/kanta/zara black bag.png", "/kanta/zara black decorated.png", "/kanta/zara black lady model.png"],
      "Cream":   ["/kanta/zara cream bage image.png", "/kanta/zara cream bag decorated.png", "/kanta/zara cream bag lady.png"],
    },
    colors: [
      { name: "Cheater", hex: "#C4A882", inStock: true },
      { name: "Black",   hex: "#1a1a1a", inStock: true },
      { name: "Cream",   hex: "#F5F0DC", inStock: true },
    ],
    description: "The ZARA Trapeze Silhouette is structured confidence in bag form. Wide at the top, tapered at the base, effortlessly modern. Available in Cheater, Black, and Cream.",
    details: ["Structured faux leather", "Trapeze silhouette", "Top zip closure", "Detachable crossbody strap", "Dust bag included"],
  },
  {
    id: 4, slug: "tommy-hilfiger-bag", name: "Tommy Hilfiger Signature Tote", price: "KES 6,500", priceValue: 6500,
    brand: "Tommy Hilfiger", category: "Totes", inStock: true,
    image: "/kanta/red and blue hilfigher lady.png",
    images: [
      "/kanta/black hilfigher image.png",
      "/kanta/black hilfigher decorated.png",
      "/kanta/black hilfigher lady.png",
      "/kanta/tommy hilfigher black open.png",
      "/kanta/red and blue hilfigher image.png",
      "/kanta/red and blue hilfigher decorated.png",
      "/kanta/red and blue hilfigher open.png",
      "/kanta/red and blue hilfigher lady.png",
      "/kanta/red and white hilfigher image.png",
      "/kanta/red and white hilfigher decorated.png",
      "/kanta/red and white hilfiher lady.png",
      "/kanta/Tommy Hilfiger white image.png",
      "/kanta/tommy hilfigher open white.png",
      "/kanta/tommy hilfigher white decorated.png",
      "/kanta/tommy hilfigher white lady carrying the bag.png",
    ],
    colorImages: {
      "Black":         ["/kanta/black hilfigher image.png", "/kanta/black hilfigher decorated.png", "/kanta/black hilfigher lady.png", "/kanta/tommy hilfigher black open.png"],
      "Navy/Red":      ["/kanta/red and blue hilfigher image.png", "/kanta/red and blue hilfigher decorated.png", "/kanta/red and blue hilfigher open.png", "/kanta/red and blue hilfigher lady.png"],
      "White/Red":     ["/kanta/red and white hilfigher image.png", "/kanta/red and white hilfigher decorated.png", "/kanta/red and white hilfiher lady.png"],
      "White":         ["/kanta/Tommy Hilfiger white image.png", "/kanta/tommy hilfigher open white.png", "/kanta/tommy hilfigher white decorated.png", "/kanta/tommy hilfigher white lady carrying the bag.png"],
    },
    colors: [
      { name: "Black",     hex: "#1a1a1a", inStock: true },
      { name: "Navy/Red",  hex: "#0D2B6B/#CC0000", inStock: true },
      { name: "White/Red", hex: "#F9F9F9/#CC0000", inStock: true },
      { name: "White",     hex: "#EFEFEF", inStock: true },
    ],
    description: "The Tommy Hilfiger Signature Tote brings preppy American style to every carry. Spacious, structured, and instantly recognisable. Four colourways, all iconic.",
    details: ["Canvas and faux leather trim", "Signature Tommy Hilfiger branding", "Magnetic snap closure", "Interior zip pocket", "Dust bag included"],
  },
];

export const CATEGORIES = ["All", "Shoulder Bags", "Totes", "Crossbody"];
export const BRANDS = ["All", "Michael Kors", "Zara", "Tommy Hilfiger"];
