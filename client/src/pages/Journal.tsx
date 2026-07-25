import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ARTICLES } from "@/data/articles";

export default function Journal() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-4 sm:px-8 lg:px-12 xl:px-16 py-10 lg:py-14">
        <div className="mb-10">
          <h1 className="text-[32px] sm:text-[42px] font-black text-[#111] leading-tight">The Journal</h1>
          <p className="text-[14px] text-[#666] mt-2 max-w-xl leading-relaxed">
            Style notes, gift guides, and honest advice for the woman who knows what she wants.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ARTICLES.map((article) => (
            <div
              key={article.slug}
              onClick={() => navigate(`/journal/${article.slug}`)}
              className="group cursor-pointer flex flex-col gap-4 border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors duration-200"
            >
              {/* Article image */}
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
              </div>

              <div className="px-5 pb-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">{article.category}</span>
                  <span className="text-[11px] text-[#999]">{article.readTime}</span>
                </div>
                <h2 className="text-[16px] font-black text-[#111] leading-snug group-hover:opacity-70 transition-opacity">{article.title}</h2>
                <p className="text-[13px] text-[#666] leading-relaxed line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[11px] text-[#bbb]">{article.date}</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#111]">Read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
