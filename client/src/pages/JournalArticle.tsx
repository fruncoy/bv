import { useParams, useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ARTICLES } from "@/data/articles";

export default function JournalArticle() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 text-[#999]">
          <p className="text-[15px]">Article not found.</p>
          <button onClick={() => navigate("/journal")} className="text-[12px] font-black uppercase tracking-widest text-[#111] underline">Back to Journal</button>
        </div>
        <Footer />
      </div>
    );
  }

  const others = ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-4 sm:px-8 lg:px-12 xl:px-16 py-10 lg:py-14">

        <button
          onClick={() => navigate("/journal")}
          className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-[#555] hover:text-[#111] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> The Journal
        </button>

        <div className="max-w-2xl">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">{article.category}</span>
            <span className="text-[11px] text-[#999]">{article.date}</span>
            <span className="text-[11px] text-[#999]">{article.readTime}</span>
          </div>

          <h1 className="text-[28px] sm:text-[36px] font-black text-[#111] leading-tight mb-6">{article.title}</h1>

          {/* Cover */}
          <div className="rounded-2xl overflow-hidden aspect-[16/9] w-full mb-8">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" loading="lazy" />
          </div>

          {/* Body */}
          <div className="flex flex-col gap-6">
            {article.body.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-[17px] font-black text-[#111] mb-2">{section.heading}</h2>
                )}
                <p className="text-[15px] text-[#444] leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[14px] font-black text-[#111]">Ready to find your perfect bag?</p>
              <p className="text-[13px] text-[#666] mt-0.5">Browse our handpicked collection from Turkiye.</p>
            </div>
            <a href="/boutique" className="whitespace-nowrap bg-[#111] text-white text-[11px] font-black uppercase tracking-widest px-5 py-3 rounded-xl hover:bg-[#333] transition-colors">
              Shop Now
            </a>
          </div>
        </div>

        {/* Other articles */}
        {others.length > 0 && (
          <div className="mt-16 max-w-2xl">
            <p className="text-[11px] font-black uppercase tracking-widest text-[#999] mb-6">More from the Journal</p>
            <div className="flex flex-col gap-4">
              {others.map((a) => (
                <div
                  key={a.slug}
                  onClick={() => navigate(`/journal/${a.slug}`)}
                  className="cursor-pointer flex items-start gap-4 group"
                >
                  <div className="rounded-xl overflow-hidden w-20 h-16 flex-shrink-0">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">{a.category}</span>
                    <p className="text-[14px] font-bold text-[#111] leading-snug mt-0.5 group-hover:opacity-60 transition-opacity">{a.title}</p>
                    <p className="text-[11px] text-[#999] mt-0.5">{a.readTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
