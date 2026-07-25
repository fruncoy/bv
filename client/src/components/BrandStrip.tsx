const BRANDS = ["Chanel", "Fendi", "Tommy Hilfiger", "Prada", "Hermès", "Coach", "Michael Kors", "Zara"];

export default function BrandStrip() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-14 xl:px-20 py-10 sm:py-10 md:py-12 lg:py-14">
      {/* Mobile: 2 rows (4 + 3) */}
      <div className="grid grid-cols-4 gap-3 md:hidden">
        {BRANDS.map((brand) => (
          <div key={brand} className="px-3 py-3 border border-black rounded-xl cursor-default flex items-center justify-center">
            <span className="text-black font-semibold tracking-widest uppercase text-xs text-center">{brand}</span>
          </div>
        ))}
      </div>

      {/* Tablet / Laptop / Desktop: 1 row */}
      <div className="hidden md:flex items-center justify-center gap-4 lg:gap-6">
        {BRANDS.map((brand) => (
          <div key={brand} className="px-6 py-3 border border-black rounded-xl cursor-default whitespace-nowrap">
            <span className="text-black font-semibold tracking-widest uppercase text-sm">{brand}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
