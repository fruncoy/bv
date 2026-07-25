import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { ArrowLeft, Check, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/data/products";

const WA_NUMBER = "254142160076";

interface OrderData {
  name: string;
  email: string;
  colors: string[];
  qty: string;
  fulfillment: string;
  payment: string;
  town: string;
  reason: string;
  isGift: string;
  whatsappGroup: string;
}

const EMPTY: OrderData = {
  name: "", email: "", colors: [], qty: "1", fulfillment: "", payment: "",
  town: "", reason: "", isGift: "", whatsappGroup: "",
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

    // Step 1: fulfillment + payment + town

    <div key="1" className="flex flex-col gap-5">
      <div>
        <label className="text-[11px] font-black uppercase tracking-widest text-[#111] mb-2 block">How would you like to receive it?</label>
        <div className="flex flex-col gap-2">
          {["Pickup at our pick station", "Delivery to my address"].map(opt => (
            <button key={opt} onClick={() => {
              set("fulfillment", opt);
              if (opt === "Pickup at our pick station") set("payment", "Pay at pickup");
              else set("payment", "Pay before delivery");
            }} className={`px-4 py-3 border text-[13px] font-semibold text-left transition-all ${data.fulfillment === opt ? "border-[#111] bg-[#111] text-white" : "border-gray-200 text-[#555]"}`}>{opt}</button>
          ))}
        </div>
      </div>
      {data.fulfillment === "Pickup at our pick station" && (
        <p className="text-[12px] text-red-500">* You can pay before pickup or pay at the pick station within 12 hours of your order.</p>
      )}
      {data.fulfillment === "Delivery to my address" && (
        <p className="text-[12px] text-red-500">* Payment is required before delivery.</p>
      )}
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
    </div>,

    // Step 2: reason + gift + reorder + group
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
        <label className="text-[11px] font-black uppercase tracking-widest text-[#111] mb-2 block">Can we add you to our WhatsApp group for new arrivals?</label>
        <div className="flex gap-2">
          {["Yes please", "No thanks"].map(opt => (
            <button key={opt} onClick={() => set("whatsappGroup", opt)} className={`flex-1 py-2.5 border text-[13px] font-bold transition-all ${data.whatsappGroup === opt ? "border-[#111] bg-[#111] text-white" : "border-gray-200 text-[#555]"}`}>{opt}</button>
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
    !!(data.fulfillment && data.payment && (data.town.includes(",") || data.town.trim().includes(" ")) && data.town.trim().length >= 5),
    !!(data.isGift && data.whatsappGroup),
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
      `Fulfillment: ${data.fulfillment}\n` +
      `Payment: ${data.payment}\n` +
      `Town: ${data.town}\n` +
      `Why this bag: ${data.reason || "Not specified"}\n` +
      `For: ${data.isGift}\n` +
      `WhatsApp group: ${data.whatsappGroup}\n\n` +
      `Please share availability, payment details and next steps with me. Thank you!`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-0 sm:px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-md bg-white rounded-none shadow-2xl flex flex-col max-h-[90svh]">

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

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);
  const [showOrder, setShowOrder] = useState(false);

  const displayImages = product.images;

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

  const related = PRODUCTS.filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand)).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-4 sm:px-8 lg:px-12 xl:px-16 py-10 lg:py-14">

        <button onClick={() => navigate("/boutique")} className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-[#555] hover:text-[#111] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Boutique
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

          {/* Images - main image left, vertical thumbs right */}
          <div className="flex gap-3 lg:max-w-[520px]">
            {/* Main image */}
            <div className="flex-1 rounded-2xl overflow-hidden bg-[#f5f5f5] aspect-[4/5]">
              <img src={displayImages[activeImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {/* Thumbnails */}
            <div className="flex flex-col gap-2">
              {displayImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-12 h-12 rounded-xl overflow-hidden bg-[#f5f5f5] border-2 flex-shrink-0 transition-all ${activeImage === i ? "border-[#111]" : "border-transparent opacity-50 hover:opacity-80"}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#999] font-semibold">{product.brand} · {product.category}</p>
              <h1 className="text-[22px] sm:text-[26px] font-black text-[#111] leading-tight mt-1">{product.name}</h1>
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
                {product.colors.map(c => (
                  <div
                    key={c.name}
                    title={c.name}
                    className={`w-8 h-8 rounded-full border-2 border-gray-200 ${!c.inStock ? "opacity-30" : ""}`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                {product.colors.map(c => (
                  <span key={c.name} className={`text-[11px] ${c.inStock ? "text-[#555]" : "text-[#bbb] line-through"}`}>{c.name}</span>
                ))}
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
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
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

      {showOrder && <OrderModal product={{ ...product, colors: product.colors }} onClose={() => setShowOrder(false)} />}
    </div>
  );
}
