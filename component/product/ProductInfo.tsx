interface Product {
  id: number;
  category: string;
  subCategory: string;
  brand: string;
  name: string;
  description: string;
  available: boolean;
  featured: boolean;
  tags: string[];
}

interface Props {
  product: Product;
}

export default function ProductInfo({
  product,
}: Props) {
  return (
    <section>

      {/* Status */}

      <div className="flex flex-wrap gap-3">

        <span className="inline-flex items-center rounded-full bg-green-100 border border-green-300 px-5 py-2 text-green-700 font-semibold">
          ✓ In Stock
        </span>

        {product.featured && (

          <span className="inline-flex items-center rounded-full bg-orange-100 border border-orange-300 px-5 py-2 text-orange-700 font-semibold">
            ⭐ Featured Product
          </span>

        )}

      </div>

      {/* Title */}

      <h1 className="mt-6 text-5xl font-extrabold text-gray-900 leading-tight">
        {product.name}
      </h1>

      {/* Description */}

      <p className="mt-6 text-lg leading-8 text-gray-700">
        {product.description}
      </p>

      {/* Brand & Category */}

      <div className="mt-8 flex flex-wrap gap-3">

        <span className="rounded-full bg-blue-100 text-blue-700 border border-blue-300 px-5 py-2 font-semibold">
          {product.brand}
        </span>

        <span className="rounded-full bg-orange-100 text-orange-700 border border-orange-300 px-5 py-2 font-semibold">
          {product.subCategory}
        </span>

        <span className="rounded-full bg-gray-100 text-gray-700 border border-gray-300 px-5 py-2 font-semibold capitalize">
          {product.category}
        </span>

      </div>

      {/* Highlights */}

      <div className="mt-12 grid sm:grid-cols-3 gap-5">

        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">

          <h3 className="text-gray-500 text-sm font-medium">
            Brand
          </h3>

          <p className="mt-2 text-xl font-bold text-gray-900">
            {product.brand}
          </p>

        </div>

        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">

          <h3 className="text-gray-500 text-sm font-medium">
            Availability
          </h3>

          <p className="mt-2 text-xl font-bold text-green-600">
            In Stock
          </p>

        </div>

        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">

          <h3 className="text-gray-500 text-sm font-medium">
            GST Billing
          </h3>

          <p className="mt-2 text-xl font-bold text-gray-900">
            Available
          </p>

        </div>

      </div>

    </section>
  );
}