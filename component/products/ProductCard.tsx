import Link from "next/link";
import Badge from "../ui/Badge";
import { MessageCircle, ArrowRight } from "lucide-react";

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

export default function ProductCard({ product }: Props) {
  const slug = product.name
    .toLowerCase()
    .replace(/\s+/g, "-");

  const whatsappMessage = encodeURIComponent(
`Hello Yash Traders,

I am interested in:

Product: ${product.name}
Brand: ${product.brand}

Please share the latest price and availability.

Thank You.`
  );

  return (
    <div className="group bg-white border border-zinc-200 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7 flex flex-col h-full">

      {/* Header */}

      <div className="flex items-start justify-between gap-4">

        <div>

          <span className="inline-flex items-center rounded-full border border-orange-300 bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
            {product.subCategory}
          </span>

          <h3 className="mt-4 text-2xl font-bold text-zinc-900 leading-tight">
            {product.name}
          </h3>

        </div>

        {product.featured && (
          <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white whitespace-nowrap">
            Featured
          </span>
        )}

      </div>

      {/* Description */}

      <p className="mt-5 h-20 overflow-hidden text-zinc-700 leading-7 line-clamp-3">
        {product.description}
      </p>

      {/* Product Info */}

      <div className="mt-6 space-y-3 border-t border-b border-zinc-200 py-5">

        <div className="flex justify-between">

          <span className="font-semibold text-zinc-800">
            Brand
          </span>

          <span className="text-zinc-700">
            {product.brand}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="font-semibold text-zinc-800">
            Availability
          </span>

          <Badge color={product.available ? "green" : "orange"}>
            {product.available ? "In Stock" : "Unavailable"}
          </Badge>

        </div>

      </div>

      {/* Tags */}

      <div className="mt-5 flex flex-wrap gap-2">

        {product.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700"
          >
            {tag}
          </span>
        ))}

      </div>

      {/* Buttons */}

      <div className="mt-auto pt-8 grid grid-cols-2 gap-3">

        <Link
          href={`/products/${product.category}/${slug}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-3 font-semibold text-white transition hover:bg-orange-700"
        >
          Details
          <ArrowRight size={18} />
        </Link>

        <a
          href={`https://wa.me/919811076503?text=${whatsappMessage}`}
          target="_blank"
          className="flex items-center justify-center gap-2 rounded-xl border border-green-600 bg-green-50 py-3 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

      </div>

    </div>
  );
}