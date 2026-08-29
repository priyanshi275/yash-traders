import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yashtraders.in";

  // Homepage
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

  // Category Pages
  const categories = [...new Set(products.map((p) => p.category))];

  categories.forEach((category) => {
    routes.push({
      url: `${baseUrl}/products/${category}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // Product Pages
  products.forEach((product) => {
    const slug = product.name
      .toLowerCase()
      .replace(/\s+/g, "-");

    routes.push({
      url: `${baseUrl}/products/${product.category}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return routes;
}