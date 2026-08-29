import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Package,
  Phone,
} from "lucide-react";

import { categoryStructure } from "@/data/categoryStructure";

type Props = {
  params: Promise<{
    category: string;
    subcategory: string;
    product: string;
  }>;
};

type SubCategoryMap = Record<string, string[]>;

/* =========================
   Helpers
========================= */

function createSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* =========================
   Product Finder
========================= */

function getProduct(
  categorySlug: string,
  subcategorySlug: string,
  productSlug: string
) {
  const currentCategory =
    categoryStructure[
      categorySlug as keyof typeof categoryStructure
    ];

  if (!currentCategory) {
    return null;
  }

  const subCategories =
    currentCategory.subCategories as SubCategoryMap;

  const matchedSubcategory = Object.keys(subCategories).find(
    (name: string) => createSlug(name) === subcategorySlug
  );

  if (!matchedSubcategory) {
    return null;
  }

  const productNames =
    subCategories[matchedSubcategory];

  if (!productNames) {
    return null;
  }

  const productName = productNames.find(
    (name: string) => createSlug(name) === productSlug
  );

  if (!productName) {
    return null;
  }

  return {
    currentCategory,
    matchedSubcategory,
    productName,
    productNames,
  };
}

/* =========================
   SEO
========================= */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const {
    category,
    subcategory,
    product,
  } = await params;

  const result = getProduct(
    category,
    subcategory,
    product
  );

  if (!result) {
    return {
      title: "Product Not Found | Yash Traders",
      description:
        "The requested product could not be found at Yash Traders.",
    };
  }

  return {
    title: `${result.productName} | Yash Traders`,

    description:
      `${result.productName} available at Yash Traders, Ghaziabad. ` +
      `Contact us for latest price, availability and bulk orders.`,

    keywords: [
      result.productName,
      result.matchedSubcategory,
      result.currentCategory.title,
      "Yash Traders",
      "Hardware Store Ghaziabad",
      "Building Materials Ghaziabad",
    ],

    alternates: {
      canonical: `https://yashtraders.in/products/${category}/${subcategory}/${product}`,
    },

    openGraph: {
      title: `${result.productName} | Yash Traders`,
      description:
        `${result.productName} available at Yash Traders, Ghaziabad.`,
      type: "website",
      siteName: "Yash Traders",
    },
  };
}

/* =========================
   Page
========================= */

export default async function ProductPage({
  params,
}: Props) {
  const {
    category,
    subcategory,
    product,
  } = await params;

  const result = getProduct(
    category,
    subcategory,
    product
  );

  if (!result) {
    notFound();
  }

  const {
    currentCategory,
    matchedSubcategory,
    productName,
    productNames,
  } = result;

  /* =========================
     Related Products
  ========================= */

  const relatedProducts = productNames
    .filter(
      (name: string) => name !== productName
    )
    .slice(0, 4);

  /* =========================
     WhatsApp Message
  ========================= */

  const whatsappMessage = encodeURIComponent(
    `Hello Yash Traders,

I am interested in:

Product: ${productName}

Category: ${currentCategory.title}

Subcategory: ${matchedSubcategory}

Please share:

• Latest Price
• Availability
• Product Details

Thank You.`
  );

  return (
    <main className="min-h-screen bg-zinc-50">

      {/* =========================
          BREADCRUMB
      ========================= */}

      <section className="max-w-7xl mx-auto px-6 pt-10">

        <div className="flex flex-wrap items-center gap-2 text-sm">

          <Link
            href="/"
            className="text-zinc-500 hover:text-orange-600 transition"
          >
            Home
          </Link>

          <span className="text-zinc-400">
            /
          </span>

          <Link
            href={`/products/${category}`}
            className="text-zinc-500 hover:text-orange-600 transition"
          >
            {currentCategory.title}
          </Link>

          <span className="text-zinc-400">
            /
          </span>

          <Link
            href={`/products/${category}/${subcategory}`}
            className="text-zinc-500 hover:text-orange-600 transition"
          >
            {matchedSubcategory}
          </Link>

        </div>

        <Link
          href={`/products/${category}/${subcategory}`}
          className="mt-6 inline-flex items-center gap-2 text-orange-700 font-semibold hover:text-orange-800 transition"
        >
          <ArrowLeft size={18} />
          Back to {matchedSubcategory}
        </Link>

      </section>

      {/* =========================
          PRODUCT SECTION
      ========================= */}

      <section className="py-12">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* =========================
                PRODUCT INFORMATION
            ========================= */}

            <div className="lg:col-span-2">

              <div className="bg-white rounded-3xl border border-zinc-200 shadow-lg p-8 md:p-10">

                {/* Category */}

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">

                    <Package size={30} />

                  </div>

                  <div>

                    <p className="text-sm font-semibold text-orange-600">
                      {matchedSubcategory}
                    </p>

                    <p className="text-sm text-zinc-500">
                      Yash Traders
                    </p>

                  </div>

                </div>

                {/* Product Name */}

                <h1 className="mt-8 text-4xl md:text-5xl font-bold text-zinc-900">
                  {productName}
                </h1>

                {/* Description */}

                <p className="mt-6 text-lg text-zinc-600 leading-8">
                  Quality {productName.toLowerCase()} available at
                  Yash Traders. Contact us for product availability,
                  pricing and bulk requirements.
                </p>

                {/* Features */}

                <div className="mt-10 grid sm:grid-cols-2 gap-5">

                  {[
                    "100% Genuine Products",
                    "Competitive Pricing",
                    "GST Billing Available",
                    "Bulk Orders Accepted",
                  ].map((feature: string) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2
                        size={22}
                        className="text-orange-500 shrink-0"
                      />

                      <span className="font-medium text-zinc-700">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* =========================
                CONTACT CARD
            ========================= */}

            <div>

              <div className="bg-white rounded-3xl border border-zinc-200 shadow-xl p-8 lg:sticky lg:top-28">

                <h2 className="text-2xl font-bold text-zinc-900">
                  Interested in this product?
                </h2>

                <p className="mt-4 text-zinc-600 leading-7">
                  Contact Yash Traders for the latest price,
                  availability and product details.
                </p>

                {/* Buttons */}

                <div className="mt-8 space-y-4">

                  <a
                    href={`https://wa.me/919811076503?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition"
                  >

                    <MessageCircle size={21} />

                    Enquire on WhatsApp

                  </a>

                  <a
                    href="tel:+919811076503"
                    className="flex items-center justify-center gap-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition"
                  >

                    <Phone size={21} />

                    Call Yash Traders

                  </a>

                </div>

                {/* Product Details */}

                <div className="mt-8 rounded-2xl bg-orange-50 p-5">

                  <p className="text-sm text-zinc-500">
                    Category
                  </p>

                  <p className="mt-1 font-semibold text-zinc-900">
                    {currentCategory.title}
                  </p>

                  <p className="mt-4 text-sm text-zinc-500">
                    Subcategory
                  </p>

                  <p className="mt-1 font-semibold text-zinc-900">
                    {matchedSubcategory}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          RELATED PRODUCTS
      ========================= */}

      {relatedProducts.length > 0 && (

        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="mb-8">

              <h2 className="text-3xl font-bold text-zinc-900">
                More {matchedSubcategory}
              </h2>

              <p className="mt-2 text-zinc-600">
                Explore other products in this category.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {relatedProducts.map(
                (relatedProduct: string) => (

                  <Link
                    key={relatedProduct}
                    href={`/products/${category}/${subcategory}/${createSlug(
                      relatedProduct
                    )}`}
                    className="group bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >

                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">

                      <Package size={24} />

                    </div>

                    <h3 className="mt-5 font-bold text-lg text-zinc-900 group-hover:text-orange-600 transition">

                      {relatedProduct}

                    </h3>

                    <div className="mt-4 flex items-center text-orange-600 font-semibold text-sm">

                      View Product

                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />

                    </div>

                  </Link>

                )
              )}

            </div>

          </div>

        </section>

      )}

      {/* =========================
          BOTTOM CTA
      ========================= */}

      <section className="bg-orange-500 py-16">

        <div className="max-w-4xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl md:text-4xl font-bold">
            Need Help With Your Requirement?
          </h2>

          <p className="mt-4 text-orange-100 text-lg leading-8">
            Contact Yash Traders for pricing, availability and
            bulk orders.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href={`https://wa.me/919811076503?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-7 py-4 rounded-xl font-semibold transition"
            >

              <MessageCircle size={20} />

              WhatsApp Us

            </a>

            <a
              href="tel:+919811076503"
              className="flex items-center gap-2 bg-white text-orange-600 hover:bg-zinc-100 px-7 py-4 rounded-xl font-semibold transition"
            >

              <Phone size={20} />

              Call Now

            </a>

          </div>

        </div>

      </section>

    </main>
  );
}