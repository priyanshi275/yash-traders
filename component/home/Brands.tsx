import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Reveal from "../common/Reveal";

const brandCategories = [
  {
    title: "Hardware & Door Fittings",
    brands: [
      "Godrej",
      "Ozone",
      "Hettich",
      "Link",
      "Peacock",
      "Perfect Kitchen",
    ],
  },
  {
    title: "Tools & Machinery",
    brands: [
      "Bosch",
      "Ingco",
      "Norton",
      "Birla",
      "Extra Power",
    ],
  },
  {
    title: "Electrical",
    brands: [
      "Havells",
      "Anchor",
      "GM Modular",
      "Polycab",
      "RR Kabel",
      "KEI",
    ],
  },
  {
    title: "Plumbing",
    brands: [
      "Astral",
      "Supreme",
      "Prince",
      "Finolex",
    ],
  },
  {
    title: "Sanitaryware",
    brands: [
      "Jaquar",
      "Hindware",
      "Parryware",
      "Vitton",
      "Home Decore",
      "Waavesons",
      "Zoie",
      "Dollar",
      "Watertech",
      "Gravity",
      "Kevco",
    ],
  },
  {
    title: "Paints",
    brands: [
      "Asian Paints",
      "Berger",
      "Nerolac",
      "Jewel Paints",
    ],
  },
  {
    title: "Adhesives & Waterproofing",
    brands: [
      "Pidilite",
      "Fevicol",
      "Dr. Fixit",
      "M-Seal",
    ],
  },
];

/*
  Explicit brand -> verified logo mapping. Built by hand against the
  actual files in public/image/brands/, not by slugifying brand names,
  because several filenames on disk don't cleanly match the brand name
  (e.g. "Ingco" is stored as incco.jpg, "Parryware" as paryware.jpg,
  and "Prince" as price.jpg). The files themselves are left untouched;
  the mapping is handled entirely here in code.
  Brands with no entry below render as a text-only treatment instead.
*/
const brandLogos: Record<string, string> = {
  Godrej: "/image/brands/godrej.jpg",
  Ozone: "/image/brands/ozone.jpg",
  Hettich: "/image/brands/hettich.jpg",
  Link: "/image/brands/link.jpg",
  Bosch: "/image/brands/bosch.jpg",
  Ingco: "/image/brands/incco.jpg",
  Havells: "/image/brands/havells.jpg",
  Anchor: "/image/brands/anchor.jpg",
  "GM Modular": "/image/brands/gm.jpg",
  Polycab: "/image/brands/polycab.jpg",
  "RR Kabel": "/image/brands/rr-kabel.jpg",
  KEI: "/image/brands/kei.jpg",
  Astral: "/image/brands/astral.jpg",
  Supreme: "/image/brands/supreme.jpg",
  Prince: "/image/brands/price.jpg",
  Finolex: "/image/brands/finolex.jpg",
  Jaquar: "/image/brands/jaquar.jpg",
  Hindware: "/image/brands/hindware.jpg",
  Parryware: "/image/brands/paryware.jpg",
  "Asian Paints": "/image/brands/asian-paints.jpg",
  Berger: "/image/brands/berger.jpg",
  Nerolac: "/image/brands/nerolac.jpg",
  "Jewel Paints": "/image/brands/jewel.jpg",
  Pidilite: "/image/brands/pidilite.jpg",
};

export default function Brands() {
  return (
    <section id = "brands" className="bg-white py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Bespoke, left-aligned section intro */}

        <div className="max-w-2xl">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-orange-600">
            Authorized Dealer
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">
            Trusted Brands We Deal In
          </h2>

          <p className="mt-4 text-base md:text-lg leading-7 text-zinc-600">
            We proudly supply products from India&apos;s leading hardware,
            plumbing, sanitaryware, electrical and construction brands.
          </p>
        </div>

        {/* Brand directory — grouped by trade, thin rule separators
            instead of boxed cards; verified logos where they exist,
            an elegant text treatment everywhere else. */}

        <div className="mt-10 md:mt-14 grid lg:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-8 md:gap-y-10">

          {brandCategories.map((category, ci) => (
            <Reveal key={category.title} delay={Math.min(ci * 0.06, 0.3)}>
              <div className="pt-5 md:pt-6 border-t border-zinc-200">

                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-sm md:text-base font-bold uppercase tracking-wider text-zinc-900">
                    {category.title}
                  </h3>

                  <span className="shrink-0 text-xs text-zinc-400">
                    {category.brands.length} Brands
                  </span>
                </div>

                <div className="mt-4 md:mt-5 grid grid-cols-3 sm:grid-cols-4 gap-2.5 md:gap-3">

                  {category.brands.map((brand) => {
                    const logo = brandLogos[brand];

                    return (
                      <div
                        key={brand}
                        className="flex h-14 md:h-16 items-center justify-center rounded-md border border-zinc-200 bg-white px-2 md:px-3"
                      >
                        {logo ? (
                          <div className="relative h-6 md:h-8 w-full">
                            <Image
                              src={logo}
                              alt={brand}
                              fill
                              sizes="120px"
                              className="object-contain grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                            />
                          </div>
                        ) : (
                          <span className="text-center text-[10px] md:text-xs font-semibold uppercase tracking-wide leading-tight text-zinc-500">
                            {brand}
                          </span>
                        )}
                      </div>
                    );
                  })}

                </div>

              </div>
            </Reveal>
          ))}

        </div>

        {/* Bottom band — charcoal + a single orange accent, not a gradient fill */}

        <Reveal delay={0.2}>
          <div className="mt-12 md:mt-16 rounded-lg bg-zinc-900 p-6 md:p-10">

            <div className="grid lg:grid-cols-2 items-center gap-6 md:gap-10">

              <div>
                <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-orange-400">
                  50+ Trusted Brands
                </span>

                <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                  Can&apos;t Find Your Preferred Brand?
                </h3>

                <p className="mt-3 text-sm md:text-base leading-6 md:leading-7 text-zinc-400">
                  We regularly stock products from India&apos;s leading
                  manufacturers. If you don&apos;t find the brand
                  you&apos;re looking for, contact us and our team will
                  help you source the right product.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:justify-end">

                <a
                  href="https://wa.me/919811076503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-orange-600 px-6 py-3 md:px-8 md:py-3.5 text-center font-semibold text-white transition-colors duration-200 hover:bg-orange-700"
                >
                  WhatsApp Us
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 md:px-8 md:py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-zinc-900"
                >
                  Contact Store
                  <ArrowRight size={18} />
                </a>

              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
