import { useLocation } from "wouter";
import { ArrowLeft, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LANDING_PAGES, getLandingProducts, LandingPageData } from "@/data/landingPages";
import { useEffect } from "react";

interface Props {
  page: LandingPageData;
}

function SeoLandingPage({ page }: Props) {
  const [, navigate] = useLocation();
  const products = getLandingProducts(page.recsSlugs);

  useEffect(() => {
    const data = page;
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: data.jsonLdBreadcrumb.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    };

    const webpage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: data.title,
      description: data.description,
      url: `https://bellavione.shop${data.url}`,
      inLanguage: "en-KE",
      isPartOf: {
        "@type": "WebSite",
        name: "Bellavione Couture",
        url: "https://bellavione.shop",
      },
      mainEntity: {
        "@type": "FAQPage",
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    };

    const removeJsonLd = () => {
      document.querySelectorAll("script[data-bv-landing]").forEach((n) => n.remove());
    };

    removeJsonLd();

    const injectJsonLd = (obj: unknown, id: string) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.bvLanding = id;
      s.textContent = JSON.stringify(obj);
      document.head.appendChild(s);
    };

    injectJsonLd(breadcrumbList, "bc");
    injectJsonLd(webpage, "wp");

    return removeJsonLd;
  }, [page]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="px-4 sm:px-8 lg:px-12 xl:px-16 py-10 lg:py-14">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-[#555] hover:text-[#111] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Maison
        </button>

        {/* HERO, same rounded magazine card as Home.tsx hero */}
        <section className="w-full pb-10 sm:pb-10 md:pb-12 lg:pb-14">
          <div className="md:hidden">
            <div
              className="relative overflow-hidden rounded-[22px] sm:rounded-[26px] w-full"
              style={{ height: "calc(100svh - 260px)", minHeight: "460px", maxHeight: "620px" }}
            >
              <img src={page.heroImage} alt={page.title} className="w-full h-full object-cover object-center block" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 95% 85% at 5% 100%, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.28) 28%, rgba(0,0,0,0.14) 46%, rgba(0,0,0,0) 68%)" }} />
              <div className="absolute inset-0 z-10 flex flex-col justify-end px-6 sm:px-8 pb-8 pt-16">
                <span className="self-start bg-white/90 text-[#004D40] text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4">
                  {page.heroEyebrow}
                </span>
                <h1 className="font-black text-white leading-[1.05] tracking-[-0.01em] text-[26px] sm:text-[32px] max-w-[92%]" style={{ textShadow: "0 1px 0 rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.6), 0 0 32px rgba(0,0,0,0.4)" }}>
                  {page.heroTitle}
                </h1>
                <p className="mt-4 text-white/90 text-[13px] sm:text-[14px] leading-relaxed max-w-[90%]" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.55)" }}>
                  {page.heroSupporting}
                </p>
                <div className="mt-6">
                  <a
                    href="/boutique"
                    className="group relative inline-flex items-center justify-center rounded-full border border-[#004D40]/80 text-[#004D40] bg-white hover:bg-[#004D40] hover:text-white hover:shadow-[0_6px_24px_-8px_rgba(6,95,70,0.55)] transition-all duration-300 uppercase font-black focus:outline-none text-[10px] tracking-[0.2em]"
                    style={{ padding: "0.75rem 1.5rem" }}
                  >
                    {page.heroCTA}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div
              className="relative overflow-hidden rounded-[30px] w-full"
              style={{ height: "calc(100svh - 280px)", minHeight: "460px", maxHeight: "560px" }}
            >
              <img src={page.heroImage} alt={page.title} className="w-full h-full object-cover object-center block" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 95% 85% at 4% 100%, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.26) 28%, rgba(0,0,0,0.12) 46%, rgba(0,0,0,0) 68%)" }} />
              <div className="absolute inset-0 z-10 flex flex-col justify-end px-10 lg:px-14 pb-10 lg:pb-12 pt-20">
                <span className="self-start bg-white/90 text-[#004D40] text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5">
                  {page.heroEyebrow}
                </span>
                <h1 className="font-black text-white leading-[1.05] tracking-[-0.01em] text-[40px] lg:text-[48px] xl:text-[54px] max-w-[68%]" style={{ textShadow: "0 1px 0 rgba(0,0,0,0.15), 0 6px 24px rgba(0,0,0,0.6), 0 0 48px rgba(0,0,0,0.4)" }}>
                  {page.heroTitle}
                </h1>
                <p className="mt-5 text-white/90 text-[14px] lg:text-[15px] leading-relaxed max-w-[55%]" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.55)" }}>
                  {page.heroSupporting}
                </p>
                <div className="mt-8">
                  <a
                    href="/boutique"
                    className="group relative inline-flex items-center justify-center rounded-full border border-[#004D40]/80 text-[#004D40] bg-white hover:bg-[#004D40] hover:text-white hover:shadow-[0_8px_28px_-10px_rgba(6,95,70,0.6)] transition-all duration-300 uppercase font-black focus:outline-none text-[11px] lg:text-[12px] tracking-[0.24em]"
                    style={{ padding: "0.9rem 2rem" }}
                  >
                    {page.heroCTA}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY, emotion */}
        <section className="py-16 lg:py-20 max-w-3xl mx-auto text-center">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.24em] text-[#004D40] mb-5">The Meaning</span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-black text-[#111] leading-tight mb-8">{page.whyTitle}</h2>
          <div className="flex flex-col gap-5">
            {page.whyParagraphs.map((p, i) => (
              <p key={i} className="text-[15px] lg:text-[16px] text-[#444] leading-[1.85]">
                {p}
              </p>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* AUDIENCE */}
        <section className="py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-14">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.24em] text-[#004D40] mb-5">Who It Is For</span>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-black text-[#111] leading-tight">{page.audienceTitle}</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
            {page.audienceItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4 border border-gray-100 rounded-2xl p-5 sm:p-6 bg-white hover:border-[#004D40]/20 hover:shadow-[0_10px_40px_-20px_rgba(0,77,64,0.25)] transition-all duration-300">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#004D40]/10 text-[#004D40] flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <p className="text-[14px] text-[#222] leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* PRODUCT RECOMMENDATIONS */}
        <section className="py-16 lg:py-20">
          <div className="mb-10 lg:mb-12">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.24em] text-[#004D40] mb-4">Curated Edit</span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-black text-[#111] leading-tight max-w-2xl">{page.recsTitle}</h2>
            <p className="text-[14px] text-[#666] mt-3 max-w-2xl leading-relaxed">{page.recsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {products.map((p) => (
              <a
                key={p.id}
                href={`/boutique/${p.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-400"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f6f6f6]">
                  <img src={p.image} alt={`${p.name}, ${page.title}`} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4 sm:p-5 flex flex-col gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#004D40]">{p.brand}</span>
                  <h3 className="text-[13px] sm:text-[14px] font-black text-[#111] leading-snug group-hover:text-[#004D40] transition-colors">{p.name}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-[14px] font-black text-[#111]">{p.price}</p>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#999] group-hover:text-[#004D40] transition-colors">View →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* FAQ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-14">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.24em] text-[#004D40] mb-5">Gift Guidance</span>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-black text-[#111] leading-tight">{page.faqTitle}</h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col divide-y divide-gray-100 border-y border-gray-100">
            {page.faqs.map((f, i) => (
              <div key={i} className="py-6 sm:py-7">
                <h3 className="text-[15px] sm:text-[16px] font-black text-[#111] leading-snug mb-3">{f.question}</h3>
                <p className="text-[14px] text-[#555] leading-[1.85]">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="relative overflow-hidden rounded-[24px] lg:rounded-[32px] bg-[#111] text-white px-6 sm:px-10 lg:px-16 py-12 lg:py-16 text-center">
            <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#004D40]/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-28 -left-20 w-80 h-80 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.24em] text-[#a3d4c4] mb-5">Your Next Step</span>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-black leading-tight mb-4">{page.ctaTitle}</h2>
              <p className="text-white/70 text-[14px] lg:text-[15px] leading-relaxed mb-8">{page.ctaSubtitle}</p>
              <a
                href="/boutique"
                className="inline-flex items-center justify-center rounded-full bg-[#004D40] hover:bg-[#00695C] text-white transition-all duration-300 uppercase font-black tracking-[0.24em] shadow-[0_10px_40px_-12px_rgba(6,95,70,0.6)] text-[11px] lg:text-[12px]"
                style={{ padding: "1rem 2.25rem" }}
              >
                {page.ctaButton}
              </a>
            </div>
          </div>
        </section>

        {/* Internal links to other SEO landing pages (hidden nav friendly) */}
        <section className="pb-8 lg:pb-10">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-[#999] uppercase tracking-widest">
            {LANDING_PAGES.filter((lp) => lp.slug !== page.slug).map((lp) => (
              <a
                key={lp.slug}
                href={lp.url}
                className="text-[#555] hover:text-[#004D40] transition-colors"
                rel="nofollow noopener"
              >
                {lp.title.split(",")[0].trim()}
              </a>
            ))}
            <a href="/journal/why-a-handbag-makes-the-perfect-gift" className="text-[#555] hover:text-[#004D40] transition-colors">
              Why handbags make meaningful gifts →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export function LandingLuxuryGifts() {
  const page = LANDING_PAGES.find((p) => p.slug === "luxury-gifts-for-women-kenya")!;
  return <SeoLandingPage page={page} />;
}

export function LandingGraduationGifts() {
  const page = LANDING_PAGES.find((p) => p.slug === "graduation-gifts-for-her")!;
  return <SeoLandingPage page={page} />;
}

export function LandingAnniversaryGifts() {
  const page = LANDING_PAGES.find((p) => p.slug === "anniversary-gifts-for-her")!;
  return <SeoLandingPage page={page} />;
}

export function LandingBirthdayGifts() {
  const page = LANDING_PAGES.find((p) => p.slug === "birthday-gifts-for-women")!;
  return <SeoLandingPage page={page} />;
}

export function LandingGiftsForWife() {
  const page = LANDING_PAGES.find((p) => p.slug === "gifts-for-wife")!;
  return <SeoLandingPage page={page} />;
}

export function LandingGiftsForGirlfriend() {
  const page = LANDING_PAGES.find((p) => p.slug === "gifts-for-girlfriend")!;
  return <SeoLandingPage page={page} />;
}

export function LandingBigGirlPurchase() {
  const page = LANDING_PAGES.find((p) => p.slug === "big-girl-purchase")!;
  return <SeoLandingPage page={page} />;
}

export function LandingDesignerHandbags() {
  const page = LANDING_PAGES.find((p) => p.slug === "designer-inspired-handbags-kenya")!;
  return <SeoLandingPage page={page} />;
}

export function LandingWhatToGift() {
  const page = LANDING_PAGES.find((p) => p.slug === "what-to-gift-a-woman-who-has-everything")!;
  return <SeoLandingPage page={page} />;
}

export function LandingAreHandbagsGoodGifts() {
  const page = LANDING_PAGES.find((p) => p.slug === "are-handbags-good-gifts")!;
  return <SeoLandingPage page={page} />;
}

export function LandingHowToChooseHandbag() {
  const page = LANDING_PAGES.find((p) => p.slug === "how-to-choose-a-handbag-for-her")!;
  return <SeoLandingPage page={page} />;
}
