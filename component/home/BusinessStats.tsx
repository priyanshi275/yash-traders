import Reveal from "../common/Reveal";

const stats = [
  {
    number: "17+",
    title: "Years of Experience",
    description: "Serving customers since 2009",
  },
  {
    number: "50+",
    title: "Trusted Brands",
    description: "National & international brands",
  },
  {
    number: "11+",
    title: "Product Categories",
    description: "For construction & interiors",
  },
  {
    number: "GST",
    title: "Billing Available",
    description: "Professional & transparent",
  },
];

export default function BusinessStats() {
  return (
    <section className="relative z-10 -mt-14 sm:-mt-16 md:-mt-20 pb-14 md:pb-20 px-5 sm:px-6">

      <Reveal>
        <div className="max-w-6xl mx-auto bg-white border border-zinc-200 rounded-lg shadow-[0_25px_60px_-20px_rgba(0,0,0,0.25)] px-5 py-6 sm:px-8 sm:py-8 md:px-14 md:py-10">

          {/* Label row */}

          <div className="pb-5 md:pb-7 mb-5 md:mb-7 border-b border-zinc-200">
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Trusted Since 2009
            </span>
            <p className="mt-1.5 text-sm md:text-base text-zinc-500">
              Serving builders, contractors and businesses with trusted products.
            </p>
          </div>

          {/* Stats — plain, typographic, spec-sheet presentation */}

          <div className="grid grid-cols-2 md:flex md:items-stretch">

            {stats.map((item, index) => {
              const isRightColMobile = index % 2 === 1;
              const isSecondRowMobile = index >= 2;
              const isFirstDesktop = index === 0;

              return (
                <div
                  key={item.title}
                  className={`flex flex-col px-3 py-4 md:flex-1 md:px-8 md:py-0 border-zinc-200 ${
                    isRightColMobile ? "border-l" : ""
                  } ${isSecondRowMobile ? "border-t" : ""} ${
                    isFirstDesktop ? "md:border-l-0 md:border-t-0" : "md:border-l md:border-t-0"
                  }`}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
                    {item.number}
                  </span>

                  <span className="mt-1.5 text-xs md:text-sm font-semibold text-zinc-800">
                    {item.title}
                  </span>

                  <span className="mt-0.5 text-[11px] md:text-xs text-zinc-500 leading-4">
                    {item.description}
                  </span>
                </div>
              );
            })}

          </div>

        </div>
      </Reveal>

    </section>
  );
}
