import Reveal from "../common/Reveal";

const features = [
  "Established in 2009",
  "50+ Trusted Brands",
  "100% Genuine Products",
  "GST Billing Available",
  "Retail & Bulk Orders",
  "Serving Builders & Contractors",
  "Expert Product Guidance",
  "Competitive Pricing",
];

const stats = [
  { title: "Since", value: "2009" },
  { title: "Brands", value: "50+" },
  { title: "Customers", value: "1000+" },
  { title: "Quality", value: "100%" },
];

export default function About() {
  return (
    <section id = "about" className="bg-white py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* =========================
              LEFT — large statement
              + supporting content
          ========================= */}

          <Reveal className="lg:col-span-1">

              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-orange-600">
                About Yash Traders
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-zinc-900">
                Your Reliable Partner for
                <span className="block text-zinc-400">
                  Hardware &amp; Building Materials
                </span>
              </h2>

              <p className="mt-6 md:mt-8 text-base md:text-lg leading-7 md:leading-8 text-zinc-600">
                Established in <strong className="text-zinc-900">2009</strong>,
                Yash Traders has earned the trust of builders, contractors,
                architects and interior designers by supplying genuine
                products from India&apos;s leading brands.
              </p>

              <p className="mt-4 text-base md:text-lg leading-7 md:leading-8 text-zinc-600">
                From hardware and plumbing supplies to sanitaryware,
                electrical materials, paints, power tools and construction
                accessories, we provide quality products, expert guidance
                and competitive pricing under one roof.
              </p>

              {/* Features — plain list with a minimal marker, not pill tags */}

              <div className="mt-8 md:mt-10 grid grid-cols-2 gap-x-6 gap-y-3 md:gap-y-4 border-t border-zinc-200 pt-6 md:pt-8">

                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-sm md:text-base text-zinc-700">
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

          </Reveal>


          {/* =========================
              RIGHT — trust metrics,
              spec-sheet style, not a
              boxed card
          ========================= */}

          <Reveal delay={0.15} className="lg:col-span-1 lg:pl-10 lg:border-l lg:border-zinc-200">

              <h3 className="text-sm md:text-base font-bold uppercase tracking-wider text-zinc-900">
                Yash Traders at a Glance
              </h3>

              <div className="mt-6 border-t border-zinc-200">
                {stats.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-baseline justify-between py-4 md:py-5 border-b border-zinc-200"
                  >
                    <span className="text-sm md:text-base text-zinc-600">
                      {item.title}
                    </span>
                    <span className="text-2xl md:text-3xl font-extrabold text-zinc-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 md:mt-10 border-l-2 border-orange-500 pl-4 md:pl-5 py-1">
                <h4 className="text-base md:text-lg font-bold text-zinc-900">
                  Why Customers Trust Us
                </h4>
                <p className="mt-2 text-sm md:text-base leading-6 md:leading-7 text-zinc-600">
                  For over 17 years, Yash Traders has built long-term
                  relationships through genuine products, reliable service,
                  expert recommendations and competitive pricing.
                </p>
              </div>

          </Reveal>

        </div>

      </div>
    </section>
  );
}
