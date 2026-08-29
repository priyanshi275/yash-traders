import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Package } from "lucide-react";

import { categoryStructure } from "@/data/categoryStructure";
import { products } from "@/data/products";

type Props = {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function SubcategoryPage({
  params,
}: Props) {
  const { category, subcategory } = await params;

  /* =========================
     FIND MAIN CATEGORY
  ========================= */

  const currentCategory =
    categoryStructure[
      category as keyof typeof categoryStructure
    ];

  if (!currentCategory) {
    notFound();
  }

  /* =========================
     FIND SUBCATEGORY
  ========================= */

  const subCategoryEntry = Object.entries(
    currentCategory.subCategories
  ).find(
    ([name]) => slugify(name) === subcategory
  );

  if (!subCategoryEntry) {
    notFound();
  }

  const [subCategoryName, productNames] =
    subCategoryEntry;

  /* =========================
     FIND PRODUCTS
  ========================= */

  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  /*
    Match the products from categoryStructure
    with the actual products in products.ts.

    Brand names are removed only for matching.
    They are NOT displayed on the website.
  */

  const matchedProducts = categoryProducts.filter(
    (product) => {
      const cleanProductName =
        product.name
          .replace(
            new RegExp(
              `^${product.brand}\\s+`,
              "i"
            ),
            ""
          )
          .trim();

      return productNames.some(
        (name) =>
          name.toLowerCase() ===
            cleanProductName.toLowerCase() ||
          name.toLowerCase() ===
            product.name.toLowerCase()
      );
    }
  );

  return (
    <main>

      {/* =========================
          HERO
      ========================= */}

      <section className="bg-zinc-950 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <Link
            href={`/products/${category}`}
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to {currentCategory.title}
          </Link>

          <div className="mt-8">

            <p className="text-orange-400 font-semibold uppercase tracking-wider">
              {currentCategory.title}
            </p>

            <h1 className="mt-3 text-5xl md:text-6xl font-bold">
              {subCategoryName}
            </h1>

            <p className="mt-5 max-w-3xl text-lg text-zinc-300 leading-8">
              Explore our range of{" "}
              {subCategoryName.toLowerCase()} products
              available at Yash Traders.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold">
              <Package size={20} />

              {matchedProducts.length} Products Available
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          PRODUCTS
      ========================= */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12">

            <p className="text-orange-600 font-semibold">
              Product Range
            </p>

            <h2 className="mt-2 text-4xl font-bold text-zinc-900">
              {subCategoryName}
            </h2>

            <p className="mt-3 text-zinc-600">
              Explore the products available in this category.
            </p>

          </div>


          {/* =========================
              PRODUCTS FOUND
          ========================= */}

          {matchedProducts.length > 0 ? (

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {matchedProducts.map((product) => {

                const displayName =
                  product.name.replace(
                    new RegExp(
                      `^${product.brand}\\s+`,
                      "i"
                    ),
                    ""
                  );

                return (

                  <div
                    key={product.id}
                    className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >

                    {/* Product Icon */}

                    <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">

                      <Package size={28} />

                    </div>


                    {/* Product Name */}

                    <h3 className="mt-6 text-xl font-bold text-zinc-900">

                      {displayName}

                    </h3>


                    {/* Description */}

                    <p className="mt-3 text-sm text-zinc-600 leading-6">

                      {product.description}

                    </p>


                    {/* Availability */}

                    <div className="mt-5">

                      <span
                        className={`text-sm font-semibold ${
                          product.available
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {product.available
                          ? "Available"
                          : "Currently Unavailable"}
                      </span>

                    </div>

                  </div>

                );
              })}

            </div>

          ) : (

            /* =========================
               FALLBACK
            ========================= */

            <div className="bg-white border border-zinc-200 rounded-3xl p-10 text-center">

              <Package
                size={48}
                className="mx-auto text-orange-500"
              />

              <h3 className="mt-5 text-2xl font-bold text-zinc-900">
                Products Coming Soon
              </h3>

              <p className="mt-3 max-w-xl mx-auto text-zinc-600">
                We are currently updating our online
                catalogue for this category. Please
                contact Yash Traders for product
                availability and pricing.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-4">

                <a
                  href="https://wa.me/919811076503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-xl font-semibold transition"
                >
                  WhatsApp Us
                </a>

                <a
                  href="tel:+919811076503"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold transition"
                >
                  Call Now
                </a>

              </div>

            </div>

          )}

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="bg-orange-500 py-16">

        <div className="max-w-4xl mx-auto px-6 text-center text-white">

          <h2 className="text-4xl font-bold">
            Looking for a specific product?
          </h2>

          <p className="mt-4 text-orange-100 text-lg leading-7">
            Contact Yash Traders for product availability,
            latest pricing and bulk requirements.
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