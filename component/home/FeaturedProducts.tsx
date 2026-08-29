import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-gray-900">
            Featured Products
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Explore some of our most popular products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >

              <div className="relative h-60">

                <Image
                  src={`/image/hero/categories/${product.category}.jpg`}
                  alt={product.name}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-6">

                <span className="text-sm text-orange-600 font-semibold uppercase">
                  {product.category}
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  {product.name}
                </h3>

                <p className="mt-3 text-gray-600">
                  {product.description}
                </p>

                <Link
                  href={`/products/${product.category}/${product.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                  View Details →
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}