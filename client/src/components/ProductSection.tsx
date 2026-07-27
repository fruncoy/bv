import { useLocation } from "wouter";
import { PRODUCTS } from "@/data/products";

type Product = typeof PRODUCTS[0];

function ProductCard({ product }: { product: Product }) {
  const [, navigate] = useLocation();
  return (
    <div
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
          <h3 className="text-[13px] font-bold text-[#111] leading-snug">{product.name}</h3>
          <p className="text-[13px] font-black text-[#999]">{product.price}</p>
        </div>
        <div className="flex items-center gap-1.5">
          {product.colors.map((c) => {
            const parts = c.hex.includes("/") ? c.hex.split("/") : null;
            return parts ? (
              <div key={c.name} title={c.name} className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0 overflow-hidden" style={{ background: `linear-gradient(90deg, ${parts[0]} 50%, ${parts[1]} 50%)` }} />
            ) : (
              <div key={c.name} title={c.name} className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
            );
          })}
          <span className="text-[10px] text-[#aaa] ml-0.5">{product.colors.length} colour{product.colors.length > 1 ? "s" : ""}</span>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); navigate(`/boutique/${product.slug}`); }}
          className="w-full border border-[#111] text-[#111] text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded-xl hover:bg-[#111] hover:text-white transition-colors duration-200"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default function ProductSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="mb-10">
        <h2 className="text-[28px] sm:text-[36px] font-black text-[#111] leading-tight">Our Boutique</h2>
        <p className="text-[14px] text-[#666] mt-2 max-w-xl leading-relaxed">
          Each designer-inspired handbag is thoughtfully handpicked from Türkiye, bringing you exclusive designs with timeless appeal.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
        {PRODUCTS.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
