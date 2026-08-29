import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yash Traders",
    short_name: "Yash Traders",

    description:
      "Trusted Hardware, Plumbing, Electrical, Paints and Building Material Store in Ghaziabad since 2009.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#ea580c",

    orientation: "portrait",

    lang: "en-IN",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}