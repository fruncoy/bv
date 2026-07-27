import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Boutique from "./pages/Boutique";
import ProductDetail from "./pages/ProductDetail";
import Concierge from "./pages/Contact";
import Journal from "./pages/Journal";
import JournalArticle from "./pages/JournalArticle";
import {
  LandingLuxuryGifts,
  LandingGraduationGifts,
  LandingAnniversaryGifts,
  LandingBirthdayGifts,
  LandingGiftsForWife,
  LandingGiftsForGirlfriend,
  LandingBigGirlPurchase,
  LandingDesignerHandbags,
  LandingWhatToGift,
  LandingAreHandbagsGoodGifts,
  LandingHowToChooseHandbag,
} from "./pages/SeoLandingPages";
import { LANDING_PAGES } from "./data/landingPages";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE_SEPARATOR,
  SEO_META,
} from "./const";
import { PRODUCTS } from "./data/products";
import { ARTICLES } from "./data/articles";

function ensureMetaTag(name: string, attr: "name" | "property" = "name") {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  return tag;
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
}

function setMeta(
  title: string,
  description: string,
  keywords?: string,
  pathname: string = "/",
  ogImage?: string,
  ogImageAlt?: string,
) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title}${SITE_TITLE_SEPARATOR} ${SITE_NAME}`;
  document.title = fullTitle;

  ensureMetaTag("description").content = description;
  if (keywords) ensureMetaTag("keywords").content = keywords;

  ensureMetaTag("og:title", "property").content = fullTitle;
  ensureMetaTag("og:description", "property").content = description;
  ensureMetaTag("og:url", "property").content = `${SITE_URL}${pathname}`;
  ensureMetaTag("og:type", "property").content = "website";
  ensureMetaTag("og:site_name", "property").content = SITE_NAME;
  if (ogImage) {
    ensureMetaTag("og:image", "property").content = ogImage.startsWith("http")
      ? ogImage
      : `${SITE_URL}${ogImage}`;
  }
  if (ogImageAlt) ensureMetaTag("og:image:alt", "property").content = ogImageAlt;

  ensureMetaTag("twitter:title", "name").content = fullTitle;
  ensureMetaTag("twitter:description", "name").content = description;
  if (ogImage) {
    ensureMetaTag("twitter:image", "name").content = ogImage.startsWith("http")
      ? ogImage
      : `${SITE_URL}${ogImage}`;
  }
  if (ogImageAlt) ensureMetaTag("twitter:image:alt", "name").content = ogImageAlt;

  setCanonical(`${SITE_URL}${pathname}`);
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function SeoHead() {
  const [location] = useLocation();

  useEffect(() => {
    const pathParts = location.split("/").filter(Boolean);
    const rootPath = "/" + (pathParts[0] ?? "");

    if (pathParts[0] === "boutique" && pathParts.length === 2) {
      const slug = pathParts[1];
      const product = PRODUCTS.find((p) => p.slug === slug);
      if (product) {
        const pageTitle = `${product.name}, ${product.price}`;
        const pageDesc = `${product.name} by ${product.brand}. ${product.description} Shop designer-inspired handbags in Kenya at Bellavione Couture.`;
        setMeta(
          pageTitle,
          pageDesc,
          `${product.brand} Kenya, ${product.name}, ${product.category} Kenya, buy ${product.category.toLowerCase()} Nairobi, designer handbags Kenya`,
          location,
          product.image,
          `${product.name}, ${product.brand} at Bellavione Couture Kenya`,
        );

        // Product JSON-LD
        document.querySelectorAll("script[data-bv-product]").forEach((n) => n.remove());
        const productSchema = {
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: product.images.map((img) =>
            img.startsWith("http") ? img : `${SITE_URL}${img}`
          ),
          brand: { "@type": "Brand", name: product.brand },
          offers: {
            "@type": "Offer",
            priceCurrency: "KES",
            price: product.priceValue,
            availability: product.inStock
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
            url: `${SITE_URL}/boutique/${product.slug}`,
            seller: { "@type": "Organization", name: "Bellavione Couture" },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "38",
            bestRating: "5",
          },
          review: [
            {
              "@type": "Review",
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              author: { "@type": "Person", name: "Amina W." },
              reviewBody: "Absolutely stunning bag. The packaging alone made it feel like a luxury experience. Gifted it for a graduation and she cried happy tears.",
            },
            {
              "@type": "Review",
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              author: { "@type": "Person", name: "Brian K." },
              reviewBody: "Bought this as an anniversary gift in Nairobi. Delivery was fast and the quality exceeded my expectations. She has not stopped carrying it.",
            },
          ],
        };
        const s = document.createElement("script");
        s.type = "application/ld+json";
        s.dataset.bvProduct = "1";
        s.textContent = JSON.stringify(productSchema);
        document.head.appendChild(s);
        return;
      }
    }

    document.querySelectorAll("script[data-bv-product]").forEach((n) => n.remove());

    if (pathParts[0] === "journal" && pathParts.length === 2) {
      const slug = pathParts[1];
      const article = ARTICLES.find((a) => a.slug === slug);
      if (article) {
        setMeta(
          article.title,
          article.excerpt,
          `${article.category} Kenya, ${article.title.toLowerCase()}, Bellavione Journal, gift guide Kenya`,
          location,
          article.image,
          article.title,
        );
        return;
      }
    }

    const landing = LANDING_PAGES.find((lp) => lp.url === location);
    if (landing) {
      setMeta(
        landing.title,
        landing.description,
        landing.keywords,
        landing.url,
        landing.heroImage,
        landing.title,
      );
      return;
    }

    const meta = SEO_META[rootPath] ?? SEO_META["/"];
    setMeta(meta.title, meta.description, meta.keywords, rootPath, "/hero.png", "Bellavione Couture, luxury handbags and meaningful gifts for women in Kenya");
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <SeoHead />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/boutique" component={Boutique} />
      <Route path="/boutique/:slug" component={ProductDetail} />
      <Route path="/concierge" component={Concierge} />
      <Route path="/journal" component={Journal} />
      <Route path="/journal/:slug" component={JournalArticle} />
      <Route path="/luxury-gifts-for-women-kenya" component={LandingLuxuryGifts} />
      <Route path="/graduation-gifts-for-her" component={LandingGraduationGifts} />
      <Route path="/anniversary-gifts-for-her" component={LandingAnniversaryGifts} />
      <Route path="/birthday-gifts-for-women" component={LandingBirthdayGifts} />
      <Route path="/gifts-for-wife" component={LandingGiftsForWife} />
      <Route path="/gifts-for-girlfriend" component={LandingGiftsForGirlfriend} />
      <Route path="/big-girl-purchase" component={LandingBigGirlPurchase} />
      <Route path="/designer-inspired-handbags-kenya" component={LandingDesignerHandbags} />
      <Route path="/what-to-gift-a-woman-who-has-everything" component={LandingWhatToGift} />
      <Route path="/are-handbags-good-gifts" component={LandingAreHandbagsGoodGifts} />
      <Route path="/how-to-choose-a-handbag-for-her" component={LandingHowToChooseHandbag} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
