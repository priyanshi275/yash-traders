"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Filter,
  RotateCcw,
} from "lucide-react";

import ProductCard from "../products/ProductCard";

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
  products: Product[];
}

export default function ProductFilter({
  products,
}: Props) {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [subCategory, setSubCategory] =
    useState("All");

  const brands = useMemo(
    () => [
      "All",
      ...new Set(
        products
          .map((p) => p.brand)
          .sort()
      ),
    ],
    [products]
  );

  const subCategories = useMemo(
    () => [
      "All",
      ...new Set(
        products
          .map((p) => p.subCategory)
          .sort()
      ),
    ],
    [products]
  );

  const filteredProducts = products.filter(
    (product) => {
      const query = search.toLowerCase();

      const matchesBrand =
        brand === "All" ||
        product.brand === brand;

      const matchesSubCategory =
        subCategory === "All" ||
        product.subCategory === subCategory;

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(query) ||
        product.brand
          .toLowerCase()
          .includes(query) ||
        product.subCategory
          .toLowerCase()
          .includes(query) ||
        product.description
          .toLowerCase()
          .includes(query) ||
        product.tags.some((tag) =>
          tag
            .toLowerCase()
            .includes(query)
        );

      return (
        matchesBrand &&
        matchesSubCategory &&
        matchesSearch
      );
    }
  );

  return (
    <>
      {/* Filters */}

      <div className="bg-white border border-zinc-200 rounded-3xl shadow-sm p-8 mb-10">

        <div className="flex items-center gap-3 mb-8">

          <Filter
            className="text-orange-700"
            size={26}
          />

          <h2 className="text-3xl font-bold text-zinc-900">
            Filter Products
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-5">

          {/* Search */}

          <div className="relative">

            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-xl border border-zinc-300 bg-white py-4 pl-12 pr-4 text-zinc-900 placeholder:text-zinc-500 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
            />

          </div>

          {/* Brand */}

          <select
            value={brand}
            onChange={(e) =>
              setBrand(e.target.value)
            }
            className="rounded-xl border border-zinc-300 bg-white px-4 py-4 text-zinc-900 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
          >
            {brands.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

          {/* Sub Category */}

          <select
            value={subCategory}
            onChange={(e) =>
              setSubCategory(
                e.target.value
              )
            }
            className="rounded-xl border border-zinc-300 bg-white px-4 py-4 text-zinc-900 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
          >
            {subCategories.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>

            <h3 className="text-2xl font-bold text-zinc-900">
              {filteredProducts.length} Products
            </h3>

            <p className="text-zinc-700 mt-1">
              Matching your filters
            </p>

          </div>

          {(search ||
            brand !== "All" ||
            subCategory !== "All") && (

            <button
              onClick={() => {
                setSearch("");
                setBrand("All");
                setSubCategory("All");
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-600 px-6 py-3 font-semibold text-orange-700 transition hover:bg-orange-600 hover:text-white"
            >
              <RotateCcw size={18} />
              Clear Filters
            </button>

          )}

        </div>

      </div>

      {/* Products */}

      {filteredProducts.length === 0 ? (

        <div className="rounded-3xl border border-zinc-200 bg-white p-16 text-center shadow-sm">

          <h2 className="text-4xl font-bold text-zinc-900">
            No Products Found
          </h2>

          <p className="mt-4 text-lg text-zinc-700">
            Try changing the search term or
            selecting a different brand or
            sub category.
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )}

        </div>

      )}
    </>
  );
}