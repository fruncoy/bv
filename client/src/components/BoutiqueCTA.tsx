export default function BoutiqueCTA() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-10">
      <div className="flex items-center gap-6">
        <div className="flex-1 h-px bg-[#111] relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-[#111] rotate-45" />
        </div>
        <a
          href="/boutique"
          className="whitespace-nowrap text-[11px] font-black uppercase tracking-[0.25em] text-[#111] border border-[#111] px-6 py-3 rounded-full hover:opacity-50 transition-opacity duration-200"
        >
          Enter the Atelier
        </a>
      </div>
    </section>
  );
}
