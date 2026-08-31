import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Reveal from "../common/Reveal";

const categories = [
  {
    title: "Hardware & Door Fittings",
    slug: "hardware",
    description:
      "Locks, door fittings, kitchen and wardrobe hardware.",
  },
  {
    title: "Bathroom Fittings",
    slug: "bathroom-fittings",
    description:
      "Pipes, fittings, bathroom fixtures and essential products.",
  },
  {
    title: "Adhesives",
    slug: "adhesives",
    description:
      "Adhesives, bonding products and construction solutions.",
  },
  {
    title: "Tools & Machinery",
    slug: "tools",
    description:
      "Hand tools and power tools for construction and workshop use.",
  },
  {
    title: "Electrical",
    slug: "electrical",
    description:
      "Switches, sockets, lighting, wires and electrical protection.",
  },
  {
    title: "Paints",
    slug: "paints",
    description:
      "Enamel, wall paints, emulsion, distemper and painting essentials.",
  },
];

/*
  Explicit slug -> verified image mapping.
  Deliberately NOT derived automatically from the slug string, since the
  actual filenames on disk (public/image/hero/categories/) don't all match
  the category slugs 1:1 — e.g. "bathroom-fittings" maps to the existing
  "bathroom-accessories.jpg" file, not a "bathroom-fittings.jpg" file,
  which does not exist.
*/
const categoryImages: Record<string, string> = {
  hardware: "/image/hero/categories/hardware.jpg",
  "bathroom-fittings": "/image/hero/categories/bathroom-accessories.jpg",
  adhesives: "/image/hero/categories/adhesives.jpg",
  tools: "/image/hero/categories/tools.jpg",
  electrical: "/image/hero/categories/electrical.jpg",
  paints: "/image/hero/categories/paints.jpg",
};

export default function Categories() {
  const [featured, ...rest] = categories;
  const featuredImage = categoryImages[featured.slug];

  return (
    <section id = "products" className="bg-white py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Bespoke, left-aligned section intro (not the shared centered header) */}

        <div className="max-w-2xl">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-orange-600">
            Our Product Range
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">
            Our Product Categories
          </h2>

          <p className="mt-4 text-base md:text-lg leading-7 text-zinc-600">
            Explore our range of quality products for homes, commercial
            projects and construction requirements.
          </p>
        </div>

        {/* Showroom-style layout: Hardware is the visual anchor (our
            founding, primary line) shown larger; the remaining five
            categories are equally available and simply shown at a
            more compact size alongside it. */}

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">

          {/* Featured: Hardware */}

          <Reveal>
            <Link
              href={`/products/${featured.slug}`}
              className="group relative flex flex-col justify-end overflow-hidden rounded-lg border border-zinc-200 h-72 sm:h-80 md:h-[380px] lg:h-full lg:min-h-[460px] lg:col-span-3"
            >

              {featuredImage && (
                <Image
                  src={featuredImage}
                  alt={`${featured.title} at Yash Traders`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="relative z-10 p-6 md:p-9">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  {featured.title}
                </h3>

                <p className="mt-2 max-w-md text-sm md:text-base leading-6 text-white/80">
                  {featured.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm md:text-base font-semibold text-white">
                  Explore Category
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>

            </Link>
          </Reveal>

          {/* Remaining categories — equally in-stock, shown at a
              supporting scale */}

          <div className="lg:col-span-2 grid grid-cols-2 gap-4 md:gap-6">

            {rest.map((category, index) => {
              const imageSrc = categoryImages[category.slug];
              const isLastOdd =
                index === rest.length - 1 && rest.length % 2 === 1;

              return (
                <Reveal
                  key={category.slug}
                  delay={Math.min(0.08 + index * 0.06, 0.3)}
                >
                  <Link
                    href={`/products/${category.slug}`}
                    className={`group relative flex flex-col justify-end overflow-hidden rounded-lg border border-zinc-200 h-36 sm:h-40 md:h-44 ${
                      isLastOdd ? "col-span-2" : ""
                    }`}
                  >

                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        alt={`${category.title} at Yash Traders`}
                        fill
                        sizes="(max-width: 640px) 50vw, 20vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <span className="relative z-10 p-3 md:p-4 text-sm md:text-base font-bold text-white">
                      {category.title}
                    </span>

                  </Link>
                </Reveal>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
