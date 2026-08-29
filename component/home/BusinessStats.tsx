import SectionTitle from "../ui/SectionTitle";
import {
  CalendarDays,
  Building2,
  Package,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: CalendarDays,
    number: "17+",
    title: "Years of Experience",
    description: "Serving customers since 2009",
  },
  {
    icon: Building2,
    number: "50+",
    title: "Trusted Brands",
    description: "Leading national & international brands",
  },
  {
    icon: Package,
    number: "11+",
    title: "Product Categories",
    description: "Everything for construction & interiors",
  },
  {
    icon: BadgeCheck,
    number: "GST",
    title: "Billing Available",
    description: "Professional & transparent billing",
  },
];

export default function BusinessStats() {
  return (
    <section className="bg-orange-50/60 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Section Header */}

        <SectionTitle
          title="Trusted Since 2009"
          subtitle="Serving builders, contractors and businesses with trusted products."
        />

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 mt-6 md:mt-12">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 text-center shadow-md md:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                {/* Icon */}

                <div className="w-10 h-10 md:w-16 md:h-16 mx-auto rounded-xl md:rounded-full bg-orange-100 flex items-center justify-center">

                  <Icon
                    className="text-orange-500"
                    size={21}
                  />

                </div>

                {/* Number */}

                <h3 className="mt-3 md:mt-6 text-2xl md:text-4xl font-bold text-gray-900">
                  {item.number}
                </h3>

                {/* Title */}

                <h4 className="mt-1 md:mt-2 text-sm md:text-xl font-semibold text-gray-800">
                  {item.title}
                </h4>

                {/* Description */}

                <p className="mt-1.5 md:mt-3 text-[11px] md:text-sm text-gray-600 leading-4 md:leading-6">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}