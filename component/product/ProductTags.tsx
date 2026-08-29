interface Props {
  tags: string[];
}

export default function ProductTags({
  tags,
}: Props) {
  if (!tags || tags.length === 0) return null;

  return (
    <section className="mt-12">

      <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Product Tags
        </h2>

        <p className="mt-2 text-gray-700">
          Popular keywords related to this product.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">

          {tags.map((tag) => (

            <span
              key={tag}
              className="px-5 py-2 rounded-full bg-orange-100 border border-orange-300 text-orange-700 font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300"
            >
              {tag}
            </span>

          ))}

        </div>

      </div>

    </section>
  );
}