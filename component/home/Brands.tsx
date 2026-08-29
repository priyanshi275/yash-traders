import {
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

import SectionHeader from "../common/SectionHeader";

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

export default function Brands() {
  return (
    <section id = "brands" className="bg-zinc-50 py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Section Header */}

        <SectionHeader
          title="Trusted Brands We Deal In"
          subtitle="We proudly supply products from India's leading hardware, plumbing, sanitaryware, electrical and construction brands."
        />

        {/* =========================
            BRAND CATEGORIES
        ========================= */}

        <div className="grid lg:grid-cols-2 gap-3 md:gap-8 mt-10 md:mt-16">

          {brandCategories.map((category) => (

            <div
              key={category.title}
              className="group rounded-2xl md:rounded-3xl border border-zinc-200 bg-white p-4 md:p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              {/* Category Header */}

              <div className="flex items-center justify-between gap-3">

                <h3 className="text-lg md:text-2xl font-bold text-zinc-900">
                  {category.title}
                </h3>

                <span className="shrink-0 rounded-full bg-orange-100 px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-orange-700">
                  {category.brands.length} Brands
                </span>

              </div>

              {/* Brands */}

              <div className="mt-4 md:mt-8 flex flex-wrap gap-2 md:gap-3">

                {category.brands.map((brand) => (

                  <span
                    key={brand}
                    className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-orange-700 transition-all duration-300 hover:bg-orange-600 hover:text-white"
                  >
                    {brand}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* =========================
            BOTTOM CTA
        ========================= */}

        <div className="mt-10 md:mt-20 overflow-hidden rounded-2xl md:rounded-[32px] bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400">

          <div className="grid lg:grid-cols-2 items-center gap-6 md:gap-10 p-5 md:p-12">

            {/* CTA Content */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-white">

                <BadgeCheck size={16} />

                50+ Trusted Brands

              </div>

              <h2 className="mt-4 md:mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">

                Can't Find Your Preferred Brand?

              </h2>

              <p className="mt-3 md:mt-5 text-sm md:text-lg leading-6 md:leading-8 text-orange-100">

                We regularly stock products from India's
                leading manufacturers. If you don't find the
                brand you're looking for, contact us and our
                team will help you source the right product.

              </p>

            </div>

            {/* CTA Buttons */}

            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 lg:justify-end">

              <a
                href="https://wa.me/919811076503"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-6 py-3 md:px-8 md:py-4 text-center font-semibold text-orange-600 transition hover:bg-zinc-100"
              >
                WhatsApp Us
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white px-6 py-3 md:px-8 md:py-4 font-semibold text-white transition hover:bg-white hover:text-orange-600"
              >
                Contact Store

                <ArrowRight size={18} />

              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}