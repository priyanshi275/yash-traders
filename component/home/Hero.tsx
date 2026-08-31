import { ArrowRight } from "lucide-react";

import Reveal from "../common/Reveal";

const categoryTags = [
  "Hardware",
  "Plumbing",
  "Electrical",
  "Paints",
  "Sanitaryware",
];

const stats = [
  { number: "17+", label: "Years of Trust" },
  { number: "50+", label: "Premium Brands" },
  { number: "1000+", label: "Happy Customers" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[680px] md:min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/image/hero/hero.jpg')",
      }}
    >
      {/* Single, considered overlay for legibility — content is anchored
          bottom-left, so the gradient is heaviest there and lightest
          toward the top-right where the photo can breathe. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

      {/* Content — anchored toward the bottom, editorial poster composition
          rather than a vertically-centered landing-page block. */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[680px] md:min-h-screen flex items-end px-5 sm:px-6 lg:px-8 pt-28 pb-12 md:pb-16">

        <div className="max-w-4xl w-full">

          {/* Kicker — states the business type and how long established */}
          <Reveal>
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Trusted Building Solutions Partner &middot; Since 2009
            </p>
          </Reveal>

          {/* Wordmark — bold and memorable, but grounded immediately
              below by the tagline so it reads as identity, not decoration */}
          <Reveal delay={0.08}>
            <h1 className="mt-3 md:mt-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.95] tracking-tight text-white">
              Yash Traders
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-4 md:mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-gray-200">
              From premium hardware, plumbing and electrical supplies to
              sanitaryware, paints, power tools and construction essentials —
              your one-stop building solutions partner in Ghaziabad.
            </p>
          </Reveal>

          {/* CTA hierarchy: one dominant primary action, one quiet secondary link */}
          <Reveal delay={0.24}>
            <div className="mt-7 md:mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">

              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-7 py-3.5 md:px-9 md:py-4 font-bold text-white transition-colors duration-200 hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
              >
                Explore Products
                <ArrowRight size={19} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-semibold text-white/90 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
              >
                Contact Us
                <ArrowRight size={16} />
              </a>

            </div>
          </Reveal>

          {/* Category tags — quiet inline list, not competing pill badges */}
          <Reveal delay={0.32}>
            <p className="mt-6 md:mt-8 text-sm text-white/60">
              {categoryTags.map((item, index) => (
                <span key={item}>
                  {item}
                  {index < categoryTags.length - 1 && (
                    <span className="mx-2.5 text-white/30">&middot;</span>
                  )}
                </span>
              ))}
            </p>
          </Reveal>

          {/* Stats — a slim, quiet rail so it supports rather than
              competes with the wordmark and CTA above it */}
          <Reveal delay={0.4}>
            <div className="mt-7 md:mt-9 pt-6 md:pt-7 border-t border-white/15 flex flex-wrap gap-x-8 gap-y-3">
              {stats.map((item) => (
                <div key={item.label} className="flex items-baseline gap-2">
                  <span className="text-lg md:text-xl font-bold text-orange-400">
                    {item.number}
                  </span>
                  <span className="text-xs md:text-sm text-white/60">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

        </div>

      </div>

    </section>
  );
}
