import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

interface Product {
  id: number;
  category: string;
  subCategory: string;
  brand: string;
  name: string;
  available: boolean;
}

interface Props {
  products: Product[];
}

export default function RelatedProducts({
  products,
}: Props) {
  if (products.length === 0) return null;

  return (
    <section className="mt-20">

      <div className="flex items-center justify-between mb-10">

        <div>

          <h2 className="text-4xl font-bold text-gray-900">
            Related Products
          </h2>

          <p className="mt-2 text-gray-700">
            Explore more products from the same category.
          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {products.map((product) => {

          const slug = product.name
            .toLowerCase()
            .replace(/\s+/g, "-");

          return (

            <Link
              key={product.id}
              href={`/products/${product.category}/${slug}`}
              className="group bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <span className="inline-flex rounded-full bg-orange-100 border border-orange-300 px-4 py-2 text-sm font-semibold text-orange-700">
                {product.subCategory}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-gray-900 leading-snug group-hover:text-orange-600 transition-colors">
                {product.name}
              </h3>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between items-center">

                  <span className="text-gray-600">
                    Brand
                  </span>

                  <span className="font-semibold text-gray-900">
                    {product.brand}
                  </span>

                </div>

                <div className="flex justify-between items-center">

                  <span className="text-gray-600">
                    Status
                  </span>

                  <span className="inline-flex items-center gap-2 text-green-600 font-semibold">

                    <BadgeCheck size={16} />

                    Available

                  </span>

                </div>

              </div>

              <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-5">

                <span className="font-semibold text-orange-600">
                  View Product
                </span>

                <ArrowRight
                  size={20}
                  className="text-orange-600 group-hover:translate-x-1 transition-transform"
                />

              </div>

            </Link>

          );
        })}

      </div>

    </section>
  );
}