import Reveal from "../common/Reveal";
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
    <section className="bg-white py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Bespoke, left-aligned section intro */}

        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">
            Who We Serve
          </h2>

          <p className="mt-4 text-base md:text-lg leading-7 text-zinc-600">
            Trusted by professionals, businesses and customers across
            Ghaziabad for quality products and dependable service.
          </p>
        </div>

        {/* Editorial index — large numerals, minimal decoration,
            reads as a directory rather than six identical cards */}

        <div className="mt-10 md:mt-16 grid sm:grid-cols-2 border-t border-zinc-200">

          {customers.map((customer, index) => {
            const Icon = customer.icon;
            const isRightCol = index % 2 === 1;
            const isLastRow = index >= customers.length - 2;
            const isLastItem = index === customers.length - 1;

            return (
              <Reveal
                key={customer.title}
                delay={Math.min(index * 0.07, 0.3)}
              >
                <div
                  className={`flex items-start gap-4 md:gap-6 py-7 md:py-9 border-zinc-200 ${
                    isRightCol ? "sm:pl-8 md:pl-10 sm:border-l" : "sm:pr-8 md:pr-10"
                  } ${!isLastItem ? "border-b" : ""} ${
                    isLastRow ? "sm:border-b-0" : ""
                  }`}
                >

                  <span className="text-4xl md:text-6xl font-extrabold text-zinc-200 leading-none shrink-0 w-14 md:w-20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="flex items-center gap-2">
                      <Icon size={19} className="text-orange-500" />
                      <h3 className="text-lg md:text-xl font-bold text-zinc-900">
                        {customer.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm md:text-base leading-6 md:leading-7 text-zinc-600 max-w-sm">
                      {customer.description}
                    </p>
                  </div>

                </div>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}
