interface Product {
  category: string;
  subCategory: string;
  brand: string;
  available: boolean;
}

interface Props {
  product: Product;
}

const specs = (product: Product) => [
  {
    title: "Brand",
    value: product.brand,
  },
  {
    title: "Category",
    value: product.category
      .replace("-", " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()),
  },
  {
    title: "Sub Category",
    value: product.subCategory,
  },
  {
    title: "Availability",
    value: product.available ? "In Stock" : "Out of Stock",
    highlight: product.available,
  },
  {
    title: "GST Billing",
    value: "Available",
  },
  {
    title: "Bulk Orders",
    value: "Accepted",
  },
];

export default function ProductSpecifications({
  product,
}: Props) {
  return (
    <section className="mt-12">

      <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">

        <div className="px-8 py-6 border-b border-gray-200">

          <h2 className="text-3xl font-bold text-gray-900">
            Product Specifications
          </h2>

          <p className="mt-2 text-gray-600">
            Basic information about this product.
          </p>

        </div>

        <div>

          {specs(product).map((item, index) => (

            <div
              key={item.title}
              className={`grid grid-cols-2 px-8 py-5 ${
                index !== specs(product).length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >

              <span className="font-semibold text-gray-800">
                {item.title}
              </span>

              <span
                className={`text-right font-medium ${
                  item.highlight
                    ? "text-green-600"
                    : "text-gray-700"
                }`}
              >
                {item.value}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}