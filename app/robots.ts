import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://yashtraders.in/sitemap.xml",

    host: "https://yashtraders.in",
  };
}