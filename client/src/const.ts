export const SITE_URL = "https://bellavione.shop";
export const SITE_NAME = "Bellavione Couture";
export const SITE_TAGLINE = "For Women Who Know The Difference";
export const SITE_TITLE_SEPARATOR = ",";
export const SITE_FALLBACK_TITLE = `Bellavione Couture, Luxury Handbags & Meaningful Gifts In Kenya`;

export const SEO_META: Record<string, { title: string; description: string; keywords?: string }> = {
  "/": {
    title: "Bellavione Couture, Luxury Handbags & Meaningful Gifts In Kenya",
    description:
      "Bellavione Couture is Kenya's destination for designer-inspired handbags and thoughtful luxury gifts for women. Curated for birthdays, anniversaries, graduations, and meaningful milestones.",
    keywords:
      "luxury gifts Kenya, designer inspired handbags Kenya, birthday gifts for women, anniversary gifts for her, graduation gifts for her, gifts for wife, gifts for girlfriend, unique handbags Nairobi, self gifting, big girl purchase",
  },
  "/boutique": {
    title: "Boutique, Designer Inspired Handbags In Kenya",
    description:
      "Shop Bellavione's curated collection of designer-inspired handbags in Kenya. From statement pieces to everyday classics, beautifully crafted, thoughtfully selected.",
    keywords: "boutique handbags Kenya, designer inspired handbags Nairobi, Michael Kors Kenya, Zara handbags Kenya, Tommy Hilfiger Kenya, ladies handbags Kenya",
  },
  "/concierge": {
    title: "Concierge, Personalised Gift Styling and Help Choosing",
    description:
      "Not sure which handbag she will love? Bellavione Concierge helps you choose a meaningful gift based on her personality, style, budget and occasion in Kenya.",
    keywords: "gift concierge Kenya, help choosing handbag, personalised gift advice Nairobi, gift styling Kenya",
  },
  "/journal": {
    title: "The Journal, Gift Guides, Style and Luxury Moments",
    description:
      "Bellavione Journal, gift guides for every occasion, handbag styling tips, luxury lifestyle in Kenya, and celebrating the meaningful moments that matter.",
    keywords: "gift guide Kenya, handbag style guide, Nairobi fashion blog, luxury gifting ideas Kenya",
  },
  "/404": {
    title: "Page Not Found",
    description: "The page you were looking for at Bellavione Couture could not be found.",
  },
};

export function buildMetaTitle(segmentTitle?: string): string {
  if (!segmentTitle) return SITE_FALLBACK_TITLE;
  if (segmentTitle.includes(SITE_NAME)) return segmentTitle;
  return `${segmentTitle} ${SITE_TITLE_SEPARATOR} ${SITE_NAME}`;
}

