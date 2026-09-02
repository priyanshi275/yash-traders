import type { MetadataRoute } from "next";
import { products } from "@/data/products";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yashtraders.in";

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Category pages
  const categories = [...new Set(products.map((p) => p.category))];

  categories.forEach((category) => {
    routes.push({
      url: `${baseUrl}/products/${slugify(category)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // Subcategory pages
  const subcategories = new Set<string>();

  products.forEach((product) => {
    subcategories.add(
      `${product.category}/${slugify(product.subCategory)}`
    );
  });

  subcategories.forEach((path) => {
    routes.push({
      url: `${baseUrl}/products/${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    });
  });

  // Product detail pages
  products.forEach((product) => {
    routes.push({
      url: `${baseUrl}/products/${slugify(product.category)}/${slugify(
        product.subCategory
      )}/${slugify(product.name)}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return routes;
}