import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { ArrowLeft, Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/data/products";

const WA_NUMBER = "254142160076";

interface OrderData {
  name: string;
  email: string;
  colors: string[];
  qty: string;
  town: string;
  reason: string;
  isGift: string;
  hearAboutUs: string;
  payment: string;
  fulfillment: string;
  whatsappGroup: string;
}

const EMPTY: OrderData = {
  name: "", email: "", colors: [], qty: "1", town: "",
  reason: "", isGift: "", hearAboutUs: "", payment: "", fulfillment: "", whatsappGroup: "",
};

function OrderModal({ product, onClose }: { product: typeof PRODUCTS[0]; onClose: () => void }) {
  const [step, setStep] = useState(-1); // -1 = welcome screen
  const [data, setData] = useState<OrderData>({ ...EMPTY });

  const set = (key: keyof OrderData, val: string) => setData(d => ({ ...d, [key]: val }));

  const steps = [
    // Step 0: color + qty
    <div key="0" className="flex flex-col gap-5">
      <div>
        <label className="text-[11px] font-black uppercase tracking-widest text-[#111] mb-2 block">Choose Colour <span className="normal-case font-normal tracking-normal text-[#999]">(you can select multiple)</span></label>
        <div className="flex flex-wrap gap-3">
          {product.colors.map(c => {
            const selected = data.colors.includes(c.name);
            return (
              <button
                key={c.name}
                disabled={!c.inStock}
                onClick={() => setData(d => ({ ...d, colors: selected ? d.colors.filter(x => x !== c.name) : [...d.colors, c.name] }))}
                className={`flex items-center gap-2 px-3 py-2 border text-[12px] font-semibold transition-all ${selected ? "border-[#111] bg-[#111] text-white" : "border-gray-200 text-[#555]"} ${!c.inStock ? "opacity-30 cursor-not-allowed" : ""}`}
              >
                <span className="w-4 h-4 rounded-full border border-white/30 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                {c.name}
                {!c.inStock && <span className="text-[10px]">(sold out)</span>}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <label className="text-[11px] font-black uppercase tracking-widest text-[#111] mb-2 block">How Many Pieces?</label>
        <div className="flex gap-2">
          {["1", "2", "3", "4+"].map(q => (
            <button key={q} onClick={() => set("qty", q)} className={`flex-1 py-2.5 border text-[13px] font-bold transition-all ${data.qty === q ? "border-[#111] bg-[#111] text-white" : "border-gray-200 text-[#555]"}`}>{q}</button>
          ))}
        </div>
      </div>
    </div>,

    // Step 1: town
    <div key="1" className="flex flex-col gap-5">
      <div>
        <label className="text-[11px] font-black uppercase tracking-widest text-[#111] mb-2 block">Your Town / Area</label>
        <input
          value={data.town}
          onChange={e => set("town", e.target.value)}
          placeholder="e.g. Lavington, Nairobi"
          className="w-full px-4 py-3 border border-gray-200 text-[14px] focus:outline-none focus:border-[#111] transition-colors"
        />
        {data.town.length > 0 && !data.town.includes(",") && !data.town.trim().includes(" ") && (
          <p className="text-[12px] text-[#111] mt-1">* Please include your area and town, e.g. Lavington, Nairobi</p>
        )}
      </div>
      <p className="text-[12px] text-[#999]">We deliver door to door via Wells Fargo. Payment is required before delivery.</p>
    </div>,

    // Step 2: reason + gift + hear about us
    <div key="2" className="flex flex-col gap-5">
      <div>
        <label className="text-[11px] font-black uppercase tracking-widest text-[#111] mb-2 block">What drew you to this bag?</label>
        <textarea
          rows={2}
          value={data.reason}
          onChange={e => set("reason", e.target.value)}
          placeholder="e.g. I love the colour, it matches my style..."
          className="w-full px-4 py-3 border border-gray-200 text-[14px] focus:outline-none focus:border-[#111] transition-colors resize-none"
        />
      </div>
      <div>
        <label className="text-[11px] font-black uppercase tracking-widest text-[#111] mb-2 block">Is this for you or a gift?</label>
        <div className="flex gap-2">
          {["For me", "It's a gift"].map(opt => (
            <button key={opt} onClick={() => set("isGift", opt)} className={`flex-1 py-2.5 border text-[13px] font-bold transition-all ${data.isGift === opt ? "border-[#111] bg-[#111] text-white" : "border-gray-200 text-[#555]"}`}>{opt}</button>
          ))}
        </div>
      </div>
      <div>
        <label className="text-[11px] font-black uppercase tracking-widest text-[#111] mb-2 block">How did you hear about us?</label>
        <div className="flex flex-wrap gap-2">
          {["Instagram", "TikTok", "WhatsApp", "Friend/Family", "Google", "Other"].map(opt => (
            <button key={opt} onClick={() => set("hearAboutUs", opt)} className={`px-3 py-2 border text-[12px] font-semibold transition-all ${data.hearAboutUs === opt ? "border-[#111] bg-[#111] text-white" : "border-gray-200 text-[#555]"}`}>{opt}</button>
          ))}
        </div>
      </div>
    </div>,

    // Step 3: name + email
    <div key="3" className="flex flex-col gap-5">
      <div>
        <label className="text-[11px] font-black uppercase tracking-widest text-[#111] mb-2 block">Your Name</label>
        <input
          autoFocus
          value={data.name}
          onChange={e => set("name", e.target.value)}
          placeholder="e.g. Amina"
          className="w-full px-4 py-3 border border-gray-200 text-[14px] focus:outline-none focus:border-[#111] transition-colors"
        />
      </div>
      <div>
        <label className="text-[11px] font-black uppercase tracking-widest text-[#111] mb-2 block">Email Address</label>
        <input
          value={data.email}
          onChange={e => set("email", e.target.value)}
          placeholder="e.g. amina@email.com"
          type="email"
          className="w-full px-4 py-3 border border-gray-200 text-[14px] focus:outline-none focus:border-[#111] transition-colors"
        />
      </div>
    </div>,
  ];

  const canNext = [
    data.colors.length > 0 && !!data.qty,
    !!(data.town.trim().length >= 3),
    !!(data.isGift && data.hearAboutUs),
    data.name.trim().length >= 2,
  ];

  function sendToWhatsApp() {
    const msg =
      `Hi Bellavione! I'd like to place an order.\n\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email || "Not provided"}\n` +
      `Bag: ${product.name}\n` +
      `Colour: ${data.colors.join(", ")}\n` +
      `Qty: ${data.qty}\n` +
      `Town: ${data.town}\n` +
      `Why this bag: ${data.reason || "Not specified"}\n` +
      `For: ${data.isGift}\n` +
      `Heard about us: ${data.hearAboutUs}\n\n` +
      `Please share payment details and next steps. Thank you!`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-md bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90svh]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-baseline gap-2">
            <p className="text-[11px] uppercase tracking-widest text-[#999] font-semibold">Order</p>
            {step >= 0 && <p className="text-[11px] text-[#999]">· Step {step + 1} of {steps.length}</p>}
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <X className="w-4 h-4 text-[#111]" />
          </button>
        </div>



        {/* Body */}
        <div className="px-6 py-5 overflow-y-auto flex-1">
          {step === -1 ? (
            <div className="flex flex-col gap-5 py-2">
              <div>
                <h3 className="text-[20px] font-black text-[#111] leading-snug">You have great taste.</h3>
                <p className="text-[14px] text-[#666] mt-3 leading-relaxed">
                  The <span className="font-bold text-[#111]">{product.name}</span> is a truly unique piece. The fact that you noticed it says a lot about your eye for fashion.
                </p>
                <p className="text-[14px] text-[#666] mt-3 leading-relaxed">
                  To make this as easy as possible for you, we just need a few quick answers so we can respond immediately and guide you better.
                </p>
              </div>
            </div>
          ) : steps[step]}
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 pt-3 flex items-center justify-between flex-shrink-0 border-t border-gray-100">
          {step > 0 ? (
            <button onClick={() => setStep(s => s - 1)} className="text-[12px] font-bold uppercase tracking-widest text-[#999] hover:text-[#111] transition-colors">Back</button>
          ) : <div />}
          {step === -1 ? (
            <button
              onClick={() => setStep(0)}
              className="w-full bg-[#111] text-white text-[14px] font-black uppercase tracking-widest px-6 py-4 hover:bg-[#333] transition-colors"
            >
              Of course, I know the Difference
            </button>
          ) : step < steps.length - 1 ? (
            <button
              disabled={!canNext[step]}
              onClick={() => setStep(s => s + 1)}
              className="bg-[#111] text-white text-[12px] font-black uppercase tracking-widest px-6 py-3 hover:bg-[#333] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next
            </button>
          ) : (
            <button
              disabled={!canNext[step]}
              onClick={sendToWhatsApp}
              className="bg-emerald-700 text-white text-[12px] font-black uppercase tracking-widest px-6 py-3 hover:bg-emerald-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Send Order via WhatsApp
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Lightbox({ images, index, onClose, productName }: { images: string[]; index: number; onClose: () => void; productName?: string }) {
  const [current, setCurrent] = useState(index);
  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length);
  const next = () => setCurrent(i => (i + 1) % images.length);

  return (
    <div className="fixed inset-0 z-[200] flex flex-col" onClick={onClose}>
      {/* clean white bg */}
      <div className="absolute inset-0 bg-white" />

      {/* top bar */}
      <div className="relative z-10 flex items-center justify-between px-5 py-4 flex-shrink-0">
        <img src="/logo.png" alt="Bellavione Couture, luxury handbags Kenya" className="h-10 select-none" draggable={false} onContextMenu={e => e.preventDefault()} />
        <div className="flex items-center gap-3">
          <span className="text-[#999] text-[12px]">{current + 1} / {images.length}</span>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center hover:bg-[#333] transition-colors">
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* main image area */}
      <div className="relative z-10 flex-1 flex items-center justify-center min-h-0" onClick={onClose}>
        <button
          onClick={e => { e.stopPropagation(); prev(); }}
          className="absolute left-3 sm:left-6 p-2 sm:p-3 text-[#111] transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="relative max-w-2xl w-full px-16 sm:px-20" onClick={e => e.stopPropagation()}>
          <img
            src={images[current]} alt={`${productName ?? "Bellavione handbag"}, view ${current + 1} of ${images.length}`}
            className="w-full max-h-[70svh] object-contain select-none"
            draggable={false}
            onContextMenu={e => e.preventDefault()}
          />
        </div>

        <button
          onClick={e => { e.stopPropagation(); next(); }}
          className="absolute right-3 sm:right-6 p-2 sm:p-3 text-[#111] transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* scrollable thumbnail strip */}
      <div className="relative z-10 flex-shrink-0 pb-4 pt-3" onClick={e => e.stopPropagation()}>
        <div className="flex gap-2 overflow-x-auto px-4 scrollbar-hide">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-14 h-14 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${current === i ? "border-white" : "border-transparent opacity-40 hover:opacity-70"}`}
            >
              <img src={img} alt={`Handbag gallery thumbnail ${i + 1}`} className="w-full h-full object-cover" draggable={false} onContextMenu={e => e.preventDefault()} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);
  const [showOrder, setShowOrder] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 text-[#999]">
          <p className="text-[15px]">Product not found.</p>
          <button onClick={() => navigate("/boutique")} className="text-[12px] font-black uppercase tracking-widest text-[#111] underline">Back to Boutique</button>
        </div>
        <Footer />
      </div>
    );
  }

  const displayImages = product.images;
  const THUMB_LIMIT = 5;
  const visibleThumbs = displayImages.slice(0, THUMB_LIMIT);
  const extraCount = displayImages.length - THUMB_LIMIT;
  const related = PRODUCTS.filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand)).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-4 sm:px-8 lg:px-12 xl:px-16 py-10 lg:py-14">

        <button onClick={() => navigate("/boutique")} className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-[#555] hover:text-[#111] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Boutique
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

          {/* Images */}
          <div className="flex gap-3 lg:max-w-[520px]">
            {/* Main image */}
            <div
              className="relative flex-1 rounded-2xl overflow-hidden bg-[#f5f5f5] aspect-[4/5] cursor-zoom-in"
              onClick={() => setLightboxIndex(activeImage)}
            >
              <img
                src={displayImages[activeImage]} alt={product.name}
                className="w-full h-full object-cover select-none"
                draggable={false}
                onContextMenu={e => e.preventDefault()}
              />
              {/* transparent overlay blocks right-click save on the image */}
              <div className="absolute inset-0" onContextMenu={e => e.preventDefault()} />
            </div>
            {/* Thumbnails, max 5, last one shows +N */}
            <div className="flex flex-col gap-2">
              {visibleThumbs.map((img, i) => {
                const isLast = i === THUMB_LIMIT - 1 && extraCount > 0;
                return (
                  <button
                    key={i}
                    onClick={() => isLast ? setLightboxIndex(i) : setActiveImage(i)}
                    className={`relative w-12 h-12 rounded-xl overflow-hidden bg-[#f5f5f5] border-2 flex-shrink-0 transition-all ${activeImage === i && !isLast ? "border-[#111]" : "border-transparent opacity-50 hover:opacity-80"}`}
                  >
                    <img src={img} alt={`${product.name} thumbnail ${i + 1}`} className="w-full h-full object-cover" draggable={false} onContextMenu={e => e.preventDefault()} />
                    {isLast && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white text-[11px] font-black">+{extraCount}</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-[22px] sm:text-[26px] font-black text-[#111] leading-tight">{product.name}</h1>
              <p className="text-[20px] font-black text-[#111] mt-2">{product.price}</p>
            </div>

            <div className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest ${product.inStock ? "text-emerald-700" : "text-red-500"}`}>
              {product.inStock ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
              {product.inStock ? "In Stock" : "Out of Stock"}
            </div>

            <p className="text-[13px] text-[#555] leading-relaxed">{product.description} {product.details.join(", ")}</p>

            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-[#111] mb-3">Available Colours</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(c => {
                  const parts = c.hex.includes("/") ? c.hex.split("/") : null;
                  return (
                    <div key={c.name} className={`flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-full text-[12px] font-semibold text-[#555] ${!c.inStock ? "opacity-30" : ""}`}>
                      {parts ? (
                        <span className="w-3.5 h-3.5 rounded-full border border-gray-300 flex-shrink-0 overflow-hidden" style={{ background: `linear-gradient(90deg, ${parts[0]} 50%, ${parts[1]} 50%)` }} />
                      ) : (
                        <span className="w-3.5 h-3.5 rounded-full border border-gray-300 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                      )}
                      {c.name}
                      {!c.inStock && <span className="text-[10px] text-[#bbb]">(sold out)</span>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order Now */}
            <div className="border border-[#111] rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[13px] font-black text-[#111]">{product.name}</p>
                <p className="text-[13px] font-black text-[#111]">{product.price}</p>
              </div>
              <button
                disabled={!product.inStock}
                onClick={() => setShowOrder(true)}
                className="w-full bg-[#111] text-white text-[12px] font-black uppercase tracking-widest py-3.5 rounded-xl hover:bg-[#333] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-[18px] font-black text-[#111] mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <div key={p.id} onClick={() => { navigate(`/boutique/${p.slug}`); setActiveImage(0); }} className="cursor-pointer group">
                  <div className="rounded-2xl overflow-hidden bg-[#f5f5f5] aspect-[4/5] mb-3">
                    <img src={p.image} alt={p.name} draggable={false} onContextMenu={e => e.preventDefault()} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 select-none" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-[#999] font-semibold">{p.brand}</p>
                  <p className="text-[13px] font-bold text-[#111] mt-0.5">{p.name}</p>
                  <p className="text-[13px] font-black text-[#999] mt-0.5">{p.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />

      {lightboxIndex !== null && <Lightbox images={displayImages} index={lightboxIndex} onClose={() => setLightboxIndex(null)} productName={product.name} />}
      {showOrder && <OrderModal product={{ ...product, colors: product.colors }} onClose={() => setShowOrder(false)} />}
    </div>
  );
}
