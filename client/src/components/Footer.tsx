const FOOTER_LOGO = "/logo.png";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-8 lg:px-14 xl:px-20 pt-4 sm:pt-6 pb-8 sm:pb-10 lg:pb-12">
      <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] bg-[#111] text-white px-5 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16">
        <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-10 lg:gap-11 text-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-3 w-full">
            <blockquote
              className="text-center text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] leading-[1.3] text-white italic break-words max-w-3xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              &ldquo;In order to be irreplaceable one must always be different&rdquo;
            </blockquote>
            <span
              className="text-center text-[11px] sm:text-[12px] md:text-[13px] font-medium uppercase tracking-[0.24em] sm:tracking-[0.28em] text-white/55"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Coco Chanel
            </span>
          </div>

          <img
            src={FOOTER_LOGO}
            alt="Bellavione"
            className="h-12 sm:h-16 lg:h-20 w-auto max-w-[85%] object-contain brightness-0 invert"
          />

          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-2 w-full">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
              Join our circle
            </span>
            <a
              href={`https://wa.me/254142160076?text=${encodeURIComponent("Hi Bellavione 👋 I just got your number from your website. I am interested in your bags, can we discuss more about them?")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="group flex items-center gap-2 text-white/85 hover:text-white transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] underline underline-offset-4 decoration-white/30 group-hover:decoration-white transition-all">
                WhatsApp
              </span>
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://tiktok.com/bellavione"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="group flex items-center gap-2 text-white/85 hover:text-white transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
              </svg>
              <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] underline underline-offset-4 decoration-white/30 group-hover:decoration-white transition-all">
                TikTok
              </span>
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://instagram.com/bellavione"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group flex items-center gap-2 text-white/85 hover:text-white transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] underline underline-offset-4 decoration-white/30 group-hover:decoration-white transition-all">
                Instagram
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
