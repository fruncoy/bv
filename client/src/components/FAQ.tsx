import { useState } from "react";

const FAQS = [
  {
    q: "Where is Bellavione located?",
    a: "Bellavione is a fully online boutique. We do not have a physical store or showroom. Everything happens through our website and WhatsApp, from browsing to ordering to delivery. This allows us to keep our prices competitive and our service personal. You shop from wherever you are in Kenya, and we bring the bag to your door.",
  },
  {
    q: "Is Bellavione a registered business?",
    a: "Yes. We are officially registered as Bellavione Couture. You are shopping with a legitimate, accountable business.",
  },
  {
    q: "How do you deliver?",
    a: "We deliver straight to your doorstep across Kenya using Wells Fargo courier services. Once your order is confirmed and payment received, we dispatch your bag and share a tracking update with you via WhatsApp.",
  },
  {
    q: "Who pays for delivery?",
    a: "Delivery fees are covered by the customer. The exact cost depends on your location and will be shared with you before you confirm your order. We always aim to find the most affordable rate for your area.",
  },
  {
    q: "Do I pay before or after delivery?",
    a: "Payment is required before dispatch. Once we confirm your order details and share the delivery fee, you complete payment and we ship immediately.",
  },
  {
    q: "Where do your bags come from?",
    a: "Every bag in our collection is handpicked from Türkiye, one of the world's leading fashion manufacturing hubs. We personally curate each piece for quality, design, and finish before it ever reaches you.",
  },
  {
    q: "Do you do pre-orders?",
    a: "Not yet, but we are working on it. Pre-orders are coming soon. Follow us on Instagram and TikTok or join our WhatsApp circle to be the first to know when they launch.",
  },
  {
    q: "Do you offer refunds or exchanges?",
    a: "All sales are final. We do not offer refunds or exchanges. This is why we encourage you to review all product images carefully, check the available colours, and reach out to us on WhatsApp before placing your order if you have any questions. We are always happy to help you choose the right piece.",
  },
  {
    q: "How do I know the bag will look like the photos?",
    a: "We photograph every bag ourselves. What you see is exactly what you get. We do not use stock images or edited renders. If you want additional angles or a closer look at a specific detail, message us on WhatsApp and we will send you more.",
  },
  {
    q: "Can I order as a gift for someone?",
    a: "Absolutely. Many of our customers order for birthdays, anniversaries, and special occasions. Just let us know during checkout and we will ensure the packaging is gift-ready.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full py-5 text-center"
      >
        <span className="text-[14px] font-bold text-[#111] leading-snug">{q}</span>
      </button>
      {open && (
        <p className="text-[13px] text-[#666] leading-relaxed pb-5 px-4 text-center">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-[26px] sm:text-[32px] font-black text-[#111] leading-tight mb-10 text-center">Everything you need to know about Bellavione Couture</h2>
        <div>
          {FAQS.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  );
}
