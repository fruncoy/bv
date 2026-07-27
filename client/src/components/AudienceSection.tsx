export default function AudienceSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="mb-12">
        <h2 className="text-[28px] sm:text-[36px] font-black text-[#111] leading-tight max-w-lg">
          Curated for Your Finest Moments
        </h2>
        <p className="text-[14px] text-[#666] mt-3 max-w-xl leading-relaxed">
          Our designer-inspired handbags aren't made for ordinary days. They're handpicked to complement life's most beautiful moments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: full height card, gift */}
        <div
          className="relative rounded-2xl overflow-hidden flex flex-col justify-end min-h-[480px]"
          style={{ backgroundImage: "url('/gift.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="relative z-10 p-8">
            <h3 className="text-[20px] font-black text-white leading-snug">Thoughtful Gift Givers</h3>
            <p className="text-[13px] text-white/80 mt-2 leading-relaxed max-w-sm">
              For those looking to surprise a partner, friend, or someone special with a unique and elegant handbag.
            </p>
          </div>
        </div>

        {/* Right: 2 stacked cards */}
        <div className="flex flex-col gap-4">
          <div
            className="relative rounded-2xl overflow-hidden flex flex-col justify-end flex-1 min-h-[228px]"
            style={{ backgroundImage: "url('/date.png')", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 p-6">
              <h3 className="text-[17px] font-black text-white leading-snug">Women Who Enjoy Moments</h3>
              <p className="text-[12px] text-white/80 mt-1.5 leading-relaxed">
                For the woman who embraces self-care, dates, coffee moments, and experiences that celebrate herself.
              </p>
            </div>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden flex flex-col justify-end flex-1 min-h-[228px]"
            style={{ backgroundImage: "url('/fine.png')", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 p-6">
              <h3 className="text-[17px] font-black text-white leading-snug">Women Who Appreciate the Finer Things</h3>
              <p className="text-[12px] text-white/80 mt-1.5 leading-relaxed">
                For those who value elegance, individuality, and beautifully curated pieces that elevate special occasions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
