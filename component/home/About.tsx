import {
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";

import SectionHeader from "../common/SectionHeader";

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
  {
    icon: Store,
    title: "Since",
    value: "2009",
  },
  {
    icon: Award,
    title: "Brands",
    value: "50+",
  },
  {
    icon: Users,
    title: "Customers",
    value: "1000+",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    value: "100%",
  },
];

export default function About() {
  return (
    <section id = "about" className="bg-orange-50/60 py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Section Header */}

        <SectionHeader
          title="About Yash Traders"
          subtitle="Delivering trusted hardware and building material solutions for homes, businesses and construction projects since 2009."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-10 md:mt-16">

          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div>

            {/* Badge */}

            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-semibold text-orange-700">

              <BadgeCheck size={17} />

              Trusted Since 2009

            </span>

            {/* Heading */}

            <h2 className="mt-5 md:mt-8 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-zinc-900">

              Your Reliable Partner for

              <span className="block text-orange-600 mt-1 md:mt-2">
                Hardware & Building Materials
              </span>

            </h2>

            {/* Description */}

            <p className="mt-5 md:mt-8 text-base md:text-lg leading-7 md:leading-8 text-zinc-700">

              Established in <strong>2009</strong>, Yash Traders has earned
              the trust of builders, contractors, architects and interior
              designers by supplying genuine products from India's leading
              brands.

            </p>

            <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-zinc-700">

              From hardware and plumbing supplies to sanitaryware,
              electrical materials, paints, power tools and construction
              accessories, we provide quality products, expert guidance
              and competitive pricing under one roof.

            </p>

            {/* Features */}

            <div className="grid grid-cols-2 gap-2.5 md:gap-5 mt-7 md:mt-10">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-2 md:gap-3 rounded-lg md:rounded-xl border border-zinc-200 bg-white p-2.5 md:p-4 shadow-sm"
                >

                  <CheckCircle2
                    size={18}
                    className="text-green-600 flex-shrink-0 md:w-[22px] md:h-[22px]"
                  />

                  <span className="text-xs md:text-base font-medium text-zinc-800 leading-5">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* =========================
              RIGHT CONTENT
          ========================= */}

          <div className="rounded-2xl md:rounded-[32px] border border-zinc-200 bg-white p-5 md:p-10 shadow-xl">

            {/* Heading */}

            <div className="flex items-center gap-3">

              <Building2
                size={26}
                className="text-orange-600 md:w-8 md:h-8"
              />

              <h3 className="text-xl md:text-3xl font-bold text-zinc-900">
                Yash Traders at a Glance
              </h3>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-3 md:gap-6 mt-6 md:mt-10">

              {stats.map((item) => {
                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="group rounded-xl md:rounded-3xl border border-zinc-200 bg-zinc-50 p-4 md:p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-orange-600 hover:text-white"
                  >

                    <div className="flex justify-center">

                      <div className="flex h-11 w-11 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl bg-orange-100 group-hover:bg-white">

                        <Icon
                          size={22}
                          className="text-orange-600 md:w-[30px] md:h-[30px]"
                        />

                      </div>

                    </div>

                    <h4 className="mt-3 md:mt-6 text-2xl md:text-4xl font-extrabold">
                      {item.value}
                    </h4>

                    <p className="mt-1 md:mt-2 text-sm md:text-base font-semibold">
                      {item.title}
                    </p>

                  </div>

                );
              })}

            </div>

            {/* Trust Message */}

            <div className="mt-5 md:mt-10 rounded-xl md:rounded-3xl bg-gradient-to-r from-orange-600 to-orange-500 p-5 md:p-8 text-white">

              <h4 className="text-lg md:text-2xl font-bold">
                Why Customers Trust Us
              </h4>

              <p className="mt-2 md:mt-4 text-sm md:text-base leading-6 md:leading-8 text-orange-100">

                For over 17 years, Yash Traders has built long-term
                relationships through genuine products, reliable service,
                expert recommendations and competitive pricing.

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}