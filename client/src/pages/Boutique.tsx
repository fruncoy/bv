import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/data/products";

export default function Boutique() {
  const [, navigate] = useLocation();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.details.some((d) => d.toLowerCase().includes(q)) ||
      p.colors.some((c) => c.name.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-4 sm:px-8 lg:px-12 xl:px-16 py-10 lg:py-14">

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
            <h1 className="text-[32px] sm:text-[42px] font-black text-[#111] leading-tight">Our Boutique</h1>
            {/* Search */}
            <div className="relative w-full sm:w-72 flex-shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]" />
              <input
                type="text"
                placeholder="Search by brand, colour, style..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl text-[13px] text-[#111] placeholder-[#aaa] focus:outline-none focus:border-[#111] transition-colors"
              />
              {query && (
                <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#aaa] hover:text-[#111] transition-colors">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
          <p className="text-[14px] text-[#666] max-w-lg">Discover designer-inspired handbags handpicked from Türkiye, curated for those who appreciate unique statement pieces.</p>
        </div>

        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-[15px] font-bold text-[#111]">No results for "{query}"</p>
            <p className="text-[13px] text-[#999] mt-1">Try searching by brand, colour or style</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => navigate(`/boutique/${product.slug}`)}
              >
                <div className="relative bg-[#f5f5f5] aspect-[4/5]">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                  <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${product.inStock ? "bg-white text-emerald-700" : "bg-white text-red-500"}`}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[10px] uppercase tracking-widest text-[#999] font-semibold">{product.brand}</p>
                    <h3 className="text-[13px] font-bold text-[#111] leading-snug mt-0.5 truncate">{product.name}</h3>
                    <p className="text-[13px] font-black text-[#999] mt-0.5">{product.price}</p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate(`/boutique/${product.slug}`); }}
                    className="w-full border border-[#111] text-[#111] text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded-xl hover:bg-[#111] hover:text-white transition-colors"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
