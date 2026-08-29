import Link from "next/link";
import {
  ArrowRight,
  Hammer,
  Wrench,
  Zap,
  PaintBucket,
  Droplets,
  Package,
} from "lucide-react";

import SectionHeader from "../common/SectionHeader";

const categories = [
  {
    title: "Hardware & Door Fittings",
    slug: "hardware",
    description:
      "Locks, door fittings, kitchen and wardrobe hardware.",
    icon: Hammer,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Bathroom Fittings",
    slug: "bathroom-fittings",
    description:
      "Pipes, fittings, bathroom fixtures and essential products.",
    icon: Droplets,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Adhesives",
    slug: "adhesives",
    description:
      "Adhesives, bonding products and construction solutions.",
    icon: Package,
    color: "bg-rose-100 text-rose-600",
  },
  {
    title: "Tools & Machinery",
    slug: "tools",
    description:
      "Hand tools and power tools for construction and workshop use.",
    icon: Wrench,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Electrical",
    slug: "electrical",
    description:
      "Switches, sockets, lighting, wires and electrical protection.",
    icon: Zap,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Paints",
    slug: "paints",
    description:
      "Enamel, wall paints, emulsion, distemper and painting essentials.",
    icon: PaintBucket,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function Categories() {
  return (
    <section id = "products" className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Section Header */}

        <SectionHeader
          title="Our Product Categories"
          subtitle="Explore our range of quality products for homes, commercial projects and construction requirements."
        />

        {/* Categories */}

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 mt-10 md:mt-14">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group bg-white rounded-2xl md:rounded-3xl border border-zinc-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-5 md:p-8"
              >

                {/* Top Row */}

                <div className="flex items-center justify-between">

                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center ${category.color}`}
                  >
                    <Icon
                      size={26}
                      className="md:hidden"
                    />

                    <Icon
                      size={34}
                      className="hidden md:block"
                    />
                  </div>

                  {/* Arrow */}

                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-orange-500 group-hover:text-white transition">

                    <ArrowRight
                      size={17}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />

                  </div>

                </div>

                {/* Title */}

                <h3 className="mt-5 md:mt-8 text-xl md:text-2xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                  {category.title}
                </h3>

                {/* Description */}

                <p className="mt-2 md:mt-4 text-sm md:text-base text-zinc-600 leading-6 md:leading-7">
                  {category.description}
                </p>

                {/* Explore */}

                <div className="mt-5 md:mt-8 flex items-center font-semibold text-sm md:text-base text-orange-600 group-hover:text-orange-700">

                  Explore Category

                  <ArrowRight
                    size={17}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />

                </div>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}