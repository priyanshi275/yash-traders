import SectionTitle from "../ui/SectionTitle";
import {
  Compass,
  Building2,
  HardHat,
  PaintBucket,
  Wrench,
  Factory,
} from "lucide-react";

const customers = [
  {
    icon: Compass,
    title: "Architects",
    description:
      "Premium hardware, sanitaryware, electrical and building solutions to bring modern architectural designs to life.",
  },
  {
    icon: Building2,
    title: "Builders",
    description:
      "Trusted supplier of quality hardware, sanitaryware, electrical and plumbing materials for residential and commercial projects.",
  },
  {
    icon: HardHat,
    title: "Contractors",
    description:
      "Reliable bulk supply with genuine products from 50+ leading brands at competitive prices.",
  },
  {
    icon: PaintBucket,
    title: "Interior Designers",
    description:
      "Stylish fittings, decorative hardware, premium paints and modern bathroom solutions for elegant interiors.",
  },
  {
    icon: Wrench,
    title: "Plumbers & Electricians",
    description:
      "Professional-grade plumbing materials, electrical products, tools and accessories for everyday installations.",
  },
  {
    icon: Factory,
    title: "Commercial Projects",
    description:
      "Serving apartments, offices, schools, hospitals and industrial projects with dependable building solutions.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Section Header */}

        <SectionTitle
          title="Who We Serve"
          subtitle="Trusted by professionals, businesses and customers across Ghaziabad for quality products and dependable service."
        />

        {/* Customer Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-10 md:mt-14">

          {customers.map((customer) => {
            const Icon = customer.icon;

            return (
              <div
                key={customer.title}
                className="group bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-5 md:p-8"
              >

                {/* Icon */}

                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition">

                  <Icon
                    size={26}
                    className="md:hidden text-orange-600 group-hover:text-white transition"
                  />

                  <Icon
                    size={32}
                    className="hidden md:block text-orange-600 group-hover:text-white transition"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-4 md:mt-6 text-xl md:text-2xl font-bold text-gray-900">
                  {customer.title}
                </h3>

                {/* Description */}

                <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600 leading-6 md:leading-7">
                  {customer.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}