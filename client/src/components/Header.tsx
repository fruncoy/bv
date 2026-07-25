import { useEffect, useRef, useState } from "react";
import { LayoutGrid, X } from "lucide-react";

const LOGO_URL = "/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileMenuOpen]);

  return (
    <header ref={menuRef} className="relative z-50 pt-6 px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-between px-6 sm:px-8 lg:px-10 py-4 sm:py-5">
        <a href="/" className="flex-shrink-0">
          <img
            src={LOGO_URL}
            alt="Bellavione"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10 xl:gap-12">
          <a
            href="/"
            className="text-sm md:text-base font-black uppercase tracking-[0.06em] md:tracking-[0.08em] text-[#222] hover:opacity-60 transition-opacity duration-200"
          >
            Maison
          </a>
          <a href="/boutique" className="text-sm md:text-base font-black uppercase tracking-[0.06em] md:tracking-[0.08em] text-[#222] hover:opacity-60 transition-opacity duration-200">Boutique</a>
          <a href="/journal" className="text-sm md:text-base font-black uppercase tracking-[0.06em] md:tracking-[0.08em] text-[#222] hover:opacity-60 transition-opacity duration-200">The Journal</a>
          <a href="/concierge" className="text-sm md:text-base font-black uppercase tracking-[0.06em] md:tracking-[0.08em] text-[#222] hover:opacity-60 transition-opacity duration-200">Concierge</a>
        </nav>

        <button
          className="md:hidden text-[#222] p-1"
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <LayoutGrid className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
          mobileMenuOpen ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="bg-white border border-gray-100 shadow-sm flex items-center justify-around px-4 py-3">
          <a href="/" onClick={() => setMobileMenuOpen(false)} className="text-[10px] font-black uppercase tracking-[0.15em] text-[#222] hover:opacity-60 transition-opacity">Maison</a>
          <a href="/boutique" onClick={() => setMobileMenuOpen(false)} className="text-[10px] font-black uppercase tracking-[0.15em] text-[#222] hover:opacity-60 transition-opacity">Boutique</a>
          <a href="/journal" onClick={() => setMobileMenuOpen(false)} className="text-[10px] font-black uppercase tracking-[0.15em] text-[#222] hover:opacity-60 transition-opacity">Journal</a>
          <a href="/concierge" onClick={() => setMobileMenuOpen(false)} className="text-[10px] font-black uppercase tracking-[0.15em] text-[#222] hover:opacity-60 transition-opacity">Concierge</a>
        </div>
      </div>
    </header>
  );
}
