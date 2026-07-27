import React from "react";

const HERO_IMAGE = "/hero.png";

const L = (_delay: string) => `block`;
const S = (delay: string): React.CSSProperties => ({
  opacity: 0,
  animation: `fadeUp 0.7s ease-out ${delay} forwards`,
});

const CTA_PILL =
  "group relative inline-flex items-center justify-center rounded-full border transition-all duration-300 ease-out uppercase font-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-800/40";

export default function Hero() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-14 xl:px-20 pt-3 sm:pt-4 md:pt-5 pb-10 sm:pb-10 md:pb-12 lg:pb-14">
      {/* Mobile */}
      <div className="md:hidden">
        <div
          className="relative overflow-hidden rounded-[22px] sm:rounded-[26px] w-full"
          style={{ height: "calc(100svh - 220px)", minHeight: "460px", maxHeight: "620px" }}
        >
          <img src={HERO_IMAGE} alt="Bellavione Couture luxury designer-inspired handbag for women in Kenya" className="w-full h-full object-cover object-center block" />
          <div className="absolute inset-0">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 95% 85% at 5% 100%, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.18) 28%, rgba(0,0,0,0.08) 46%, rgba(0,0,0,0) 68%)" }} />
            <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-8 pb-6 sm:pb-7 pt-16 sm:pt-20">
              <h1 className="font-black text-white leading-[0.78] tracking-[-0.015em] text-[24px] sm:text-[30px]" style={{ textShadow: "0 1px 0 rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.55), 0 0 32px rgba(0,0,0,0.35)" }}>
                <span className={L("0.1s")} style={S("0.1s")}>For Women</span><br /><span className={L("0.3s")} style={S("0.3s")}>Who Know</span><br /><span className={L("0.5s")} style={S("0.5s")}>The Difference</span>
              </h1>
              <div className="mt-5 sm:mt-6">
                <a href="/boutique" className={CTA_PILL + " text-[10px] tracking-[0.2em] border-emerald-700 text-emerald-900 bg-white hover:bg-emerald-800 hover:border-emerald-800 hover:text-white hover:shadow-[0_6px_24px_-8px_rgba(6,95,70,0.55)]"} style={{ paddingLeft: "1.4rem", paddingRight: "1.4rem", paddingTop: "0.7rem", paddingBottom: "0.7rem" }}>
                  Enter the Atelier
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden md:block lg:hidden">
        <div
          className="relative overflow-hidden rounded-[26px] w-full"
          style={{ height: "calc(100svh - 260px)", minHeight: "460px", maxHeight: "560px" }}
        >
          <img src={HERO_IMAGE} alt="Bellavione Couture, Kenyan luxury handbags and meaningful gifts for her" className="w-full h-full object-contain object-right block bg-white" />
          <div className="absolute inset-0">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 95% 85% at 4% 100%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.16) 28%, rgba(0,0,0,0.07) 46%, rgba(0,0,0,0) 68%)" }} />
            <div className="relative z-10 h-full flex flex-col justify-end px-10 pb-8 pt-24">
              <h2 className="font-black text-white leading-[0.78] tracking-[-0.015em] text-[36px] max-w-[68%]" style={{ textShadow: "0 1px 0 rgba(0,0,0,0.15), 0 5px 20px rgba(0,0,0,0.55), 0 0 40px rgba(0,0,0,0.35)" }}>
                <span className={L("0.1s")} style={S("0.1s")}>For Women</span><br /><span className={L("0.3s")} style={S("0.3s")}>Who Know</span><br /><span className={L("0.5s")} style={S("0.5s")}>The Difference</span>
              </h2>
              <div className="mt-6">
                <a href="/boutique" className={CTA_PILL + " text-[11px] tracking-[0.22em] border-emerald-800/90 text-emerald-950 bg-white hover:bg-emerald-800 hover:border-emerald-800 hover:text-white hover:shadow-[0_8px_28px_-10px_rgba(6,95,70,0.6)]"} style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "0.75rem", paddingBottom: "0.75rem" }}>
                  Enter the Atelier
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop */}
      <div className="hidden lg:block xl:hidden">
        <div
          className="relative overflow-hidden rounded-[30px] w-full"
          style={{ height: "calc(100svh - 270px)", minHeight: "460px", maxHeight: "580px" }}
        >
          <img src={HERO_IMAGE} alt="Bellavione Couture, Kenyan luxury handbags and meaningful gifts for her" className="w-full h-full object-contain object-right block bg-white" />
          <div className="absolute inset-0">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 95% 85% at 4% 100%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.16) 28%, rgba(0,0,0,0.07) 46%, rgba(0,0,0,0) 68%)" }} />
            <div className="relative z-10 h-full flex flex-col justify-end px-14 pb-9 pt-32">
              <h2 className="font-black text-white leading-[0.78] tracking-[-0.015em] text-[46px] max-w-[65%]" style={{ textShadow: "0 1px 0 rgba(0,0,0,0.15), 0 6px 24px rgba(0,0,0,0.55), 0 0 48px rgba(0,0,0,0.35)" }}>
                <span className={L("0.1s")} style={S("0.1s")}>For Women</span><br /><span className={L("0.3s")} style={S("0.3s")}>Who Know</span><br /><span className={L("0.5s")} style={S("0.5s")}>The Difference</span>
              </h2>
              <div className="mt-7">
                <a href="/boutique" className={CTA_PILL + " text-[11px] tracking-[0.24em] border-emerald-800/90 text-emerald-950 bg-white hover:bg-emerald-800 hover:border-emerald-800 hover:text-white hover:shadow-[0_8px_28px_-10px_rgba(6,95,70,0.6)]"} style={{ paddingLeft: "1.6rem", paddingRight: "1.6rem", paddingTop: "0.8rem", paddingBottom: "0.8rem" }}>
                  Enter the Atelier
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden xl:block">
        <div
          className="relative overflow-hidden rounded-[32px] w-full"
          style={{ height: "calc(100svh - 290px)", minHeight: "480px", maxHeight: "600px" }}
        >
          <img src={HERO_IMAGE} alt="Bellavione Couture, Kenyan luxury handbags and meaningful gifts for her" className="w-full h-full object-contain object-right block bg-white" />
          <div className="absolute inset-0">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 95% 85% at 4% 100%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.16) 28%, rgba(0,0,0,0.07) 46%, rgba(0,0,0,0) 68%)" }} />
            <div className="relative z-10 h-full flex flex-col justify-end pb-9 pt-32" style={{ paddingLeft: "4rem", paddingRight: "4rem" }}>
              <h2 className="font-black text-white leading-[0.78] tracking-[-0.015em] text-[54px] max-w-[62%]" style={{ textShadow: "0 1px 0 rgba(0,0,0,0.15), 0 6px 24px rgba(0,0,0,0.55), 0 0 48px rgba(0,0,0,0.35)" }}>
                <span className={L("0.1s")} style={S("0.1s")}>For Women</span><br /><span className={L("0.3s")} style={S("0.3s")}>Who Know</span><br /><span className={L("0.5s")} style={S("0.5s")}>The Difference</span>
              </h2>
              <div className="mt-7">
                <a href="/boutique" className={CTA_PILL + " text-[12px] tracking-[0.26em] border-emerald-800 text-emerald-950 bg-white hover:bg-emerald-800 hover:border-emerald-800 hover:text-white hover:shadow-[0_10px_32px_-10px_rgba(6,95,70,0.6)]"} style={{ paddingLeft: "1.8rem", paddingRight: "1.8rem", paddingTop: "0.85rem", paddingBottom: "0.85rem" }}>
                  Enter the Atelier
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
