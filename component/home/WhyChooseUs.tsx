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

import Reveal from "../common/Reveal";

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
    <section className="bg-zinc-900 py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Single flowing intro — combines what were previously two
            separate headings/badges into one coherent statement */}

        <div className="max-w-3xl">

          <span className="block text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Trusted Across Ghaziabad
          </span>

          <span className="mt-2 block text-xs md:text-sm font-semibold uppercase tracking-widest text-orange-400">
            Why Choose Yash Traders?
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Building Long-Term Trust Through Quality Products &amp; Honest Service
          </h2>

          <p className="mt-5 text-base md:text-lg leading-7 md:leading-8 text-zinc-400">
            Trusted by builders, contractors, architects and businesses for
            genuine products, competitive pricing and dependable service.
          </p>

        </div>

        {/* Features — a single unified list, not eight separate cards */}

        <Reveal delay={0.1}>
          <div className="mt-10 md:mt-16 pt-10 md:pt-14 border-t border-white/10 grid sm:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-8 md:gap-y-10">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="flex items-start gap-4">
                  <Icon
                    size={22}
                    className="mt-0.5 shrink-0 text-orange-400"
                  />

                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-1.5 text-sm md:text-base leading-6 md:leading-7 text-zinc-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </Reveal>

        {/* Closing statement + CTA — part of the same composition */}

        <Reveal delay={0.2}>
          <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-white/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-8">

            <p className="text-base md:text-lg leading-7 text-zinc-300 max-w-xl">
              Whether you&apos;re constructing a home, renovating a property
              or managing a commercial project, Yash Traders is your
              one-stop destination for quality building materials from
              India&apos;s most trusted brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 shrink-0">

              <a
                href="#products"
                className="rounded-md bg-orange-600 px-6 py-3 md:px-8 md:py-3.5 text-center font-semibold text-white transition-colors duration-200 hover:bg-orange-700"
              >
                Browse Products
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 md:px-8 md:py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-zinc-900"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
