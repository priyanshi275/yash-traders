import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { categoryStructure } from "@/data/categoryStructure";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const currentCategory =
    categoryStructure[
      category as keyof typeof categoryStructure
    ];

  if (!currentCategory) {
    notFound();
  }

  const subCategories = Object.entries(
    currentCategory.subCategories
  );

  return (
    <main className="min-h-screen bg-zinc-50">

      {/* Hero */}

      <section className="bg-zinc-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold">
            {currentCategory.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-zinc-300 leading-8">
            Explore our range of {currentCategory.title.toLowerCase()}
            products and choose from the categories below.
          </p>

        </div>
      </section>

      {/* Sub Categories */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-end justify-between gap-6 mb-12">

            <div>
              <p className="text-orange-600 font-semibold">
                Product Range
              </p>

              <h2 className="mt-2 text-4xl font-bold text-zinc-900">
                Explore Categories
              </h2>

              <p className="mt-3 text-zinc-600">
                Select a category to view the available products.
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {subCategories.map(
              ([subCategory, productNames]) => (

                <Link
                  key={subCategory}
                  href={`/products/${category}/${subCategory
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`}
                  className="group bg-white border border-zinc-200 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="flex items-center justify-between">

                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-orange-600 transition">
                      {subCategory}
                    </h3>

                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition">
                      <ArrowRight size={18} />
                    </div>

                  </div>

                  <p className="mt-4 text-sm text-zinc-500">
                    {productNames.length > 0
                      ? `${productNames.length} products available`
                      : "View available products"}
                  </p>

                  {productNames.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">

                      {productNames
                        .slice(0, 4)
                        .map((product) => (

                          <span
                            key={product}
                            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                          >
                            {product}
                          </span>

                        ))}

                      {productNames.length > 4 && (
                        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                          +{productNames.length - 4} more
                        </span>
                      )}

                    </div>
                  )}

                  <div className="mt-6 text-orange-600 font-semibold text-sm">
                    View Products →
                  </div>

                </Link>

              )
            )}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-orange-500 py-16">

        <div className="max-w-4xl mx-auto px-6 text-center text-white">

          <h2 className="text-4xl font-bold">
            Looking for a specific product?
          </h2>

          <p className="mt-4 text-orange-100 text-lg">
            Contact Yash Traders for product availability,
            pricing and bulk requirements.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/919811076503"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-7 py-4 rounded-xl font-semibold transition"
            >
              WhatsApp Us
            </a>

            <a
              href="tel:+919811076503"
              className="bg-white text-orange-600 hover:bg-zinc-100 px-7 py-4 rounded-xl font-semibold transition"
            >
              Call Now
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}