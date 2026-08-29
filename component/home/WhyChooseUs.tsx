import {
  ShieldCheck,
  IndianRupee,
  Package,
  Users,
  Building2,
  BadgeCheck,
  MapPin,
  Headphones,
  ArrowRight,
} from "lucide-react";

import SectionHeader from "../common/SectionHeader";

const features = [
  {
    icon: BadgeCheck,
    title: "Serving Since 2009",
    description:
      "Over 17 years of experience supplying premium hardware and building materials across Ghaziabad.",
  },
  {
    icon: Package,
    title: "50+ Trusted Brands",
    description:
      "Authorized dealer of India's leading brands including Godrej, Bosch, Havells, Jaquar, Astral, Berger and many more.",
  },
  {
    icon: ShieldCheck,
    title: "100% Genuine Products",
    description:
      "Every product is sourced directly from trusted manufacturers to ensure authenticity and quality.",
  },
  {
    icon: Building2,
    title: "Builders & Contractors",
    description:
      "Preferred supplier for builders, contractors, architects and commercial construction projects.",
  },
  {
    icon: IndianRupee,
    title: "Competitive Pricing",
    description:
      "Best market prices with complete transparency for retail and bulk purchases.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description:
      "Our experienced team helps customers select the right products for every project.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Conveniently located at Patel Nagar, Ghaziabad for quick and easy accessibility.",
  },
  {
    icon: Headphones,
    title: "Reliable Support",
    description:
      "Fast assistance for quotations, product enquiries, bulk orders and after-sales support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Section Header */}

        <SectionHeader
          title="Why Choose Yash Traders?"
          subtitle="Trusted by builders, contractors, architects and businesses for genuine products, competitive pricing and dependable service."
        />

        {/* =========================
            FEATURES
        ========================= */}

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-8 mt-10 md:mt-16">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl md:rounded-3xl bg-white border border-zinc-200 p-4 md:p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >

                {/* Icon */}

                <div className="flex h-11 w-11 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl bg-orange-100 group-hover:bg-orange-600 transition-colors">

                  <Icon
                    size={23}
                    className="text-orange-600 group-hover:text-white transition-colors md:w-[30px] md:h-[30px]"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-4 md:mt-7 text-lg md:text-2xl font-bold text-zinc-900">

                  {feature.title}

                </h3>

                {/* Description */}

                <p className="mt-2 md:mt-4 text-sm md:text-base leading-6 md:leading-8 text-zinc-700">

                  {feature.description}

                </p>

              </div>
            );
          })}

        </div>


        {/* =========================
            BOTTOM CTA
        ========================= */}

        <div className="mt-10 md:mt-20 rounded-2xl md:rounded-[32px] overflow-hidden bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">

          <div className="grid lg:grid-cols-2 gap-7 md:gap-10 items-center p-5 md:p-12">

            {/* CTA Content */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-semibold text-orange-300">

                ⭐ Trusted Across Ghaziabad

              </span>

              <h2 className="mt-4 md:mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">

                Building Long-Term Trust Through
                Quality Products & Honest Service

              </h2>

              <p className="mt-3 md:mt-6 text-sm md:text-lg leading-6 md:leading-8 text-zinc-300">

                Whether you're constructing a home,
                renovating a property or managing a
                commercial project, Yash Traders is your
                one-stop destination for quality building
                materials from India's most trusted brands.

              </p>

            </div>


            {/* CTA Buttons */}

            <div className="flex flex-col sm:flex-row lg:justify-end gap-3 md:gap-5">

              <a
                href="#products"
                className="rounded-xl bg-orange-600 hover:bg-orange-700 px-6 py-3 md:px-8 md:py-4 text-center font-semibold text-white transition"
              >
                Browse Products
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white px-6 py-3 md:px-8 md:py-4 font-semibold text-white hover:bg-white hover:text-zinc-900 transition"
              >
                Contact Us

                <ArrowRight size={18} />

              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}