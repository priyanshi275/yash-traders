import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yashtraders.in"),

  title: {
    default:
      "Yash Traders | Hardware & Building Materials Store in Ghaziabad",
    template: "%s | Yash Traders",
  },

  description:
    "Yash Traders is a trusted hardware, plumbing, electrical, sanitaryware, paints and building materials store in Ghaziabad serving homeowners, builders and contractors since 2009.",

  keywords: [
    "Hardware Store Ghaziabad",
    "Building Materials Ghaziabad",
    "Hardware Shop",
    "Yash Traders",
    "Godrej Locks",
    "Bosch Tools",
    "Jaquar",
    "Astral Pipes",
    "Havells",
    "Electrical Shop",
    "Paint Store",
    "Sanitaryware",
    "Construction Materials",
    "Building Material Supplier",
    "Door Fittings",
    "Power Tools",
  ],

  authors: [
    {
      name: "Yash Traders",
    },
  ],

  creator: "Yash Traders",

  publisher: "Yash Traders",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: "https://yashtraders.in",

    siteName: "Yash Traders",

    title:
      "Yash Traders | Hardware & Building Materials Store",

    description:
      "Trusted hardware, plumbing, sanitaryware, electrical products, paints and building materials store in Ghaziabad since 2009.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yash Traders Hardware Store",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Yash Traders",

    description:
      "Trusted Hardware & Building Material Store in Ghaziabad.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "Business",
};

export const viewport: Viewport = {
  themeColor: "#ea580c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>

        {/* Local Business SEO */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "HardwareStore",

              name: "Yash Traders",

              image:
                "https://yashtraders.in/og-image.jpg",

              url: "https://yashtraders.in",

              telephone: "+91-9811076503",

              email: "uttam.mcmtc@gmail.com",

              priceRange: "₹₹",

              address: {
                "@type": "PostalAddress",

                streetAddress:
                  "No. 22, Block F, Hapur Road, Jagdish Nagar, Patel Nagar I",

                addressLocality: "Ghaziabad",

                addressRegion: "Uttar Pradesh",

                postalCode: "201001",

                addressCountry: "IN",
              },

              geo: {
                "@type": "GeoCoordinates",

                latitude: "28.6712057",

                longitude: "77.4241661",
              },

              openingHoursSpecification: [
                {
                  "@type":
                    "OpeningHoursSpecification",

                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],

                  opens: "10:00",

                  closes: "21:00",
                },
              ],

              areaServed: [
                "Ghaziabad",
                "Raj Nagar Extension",
                "Patel Nagar",
                "Vijay Nagar",
                "Crossings Republik",
                "Noida",
                "Delhi NCR",
              ],

              paymentAccepted: [
                "Cash",
                "UPI",
                "Credit Card",
                "Debit Card",
                "Bank Transfer",
              ],

              currenciesAccepted: "INR",

              description:
                "Yash Traders is a trusted hardware, plumbing, electrical, paints, sanitaryware and building materials store serving homeowners, builders and contractors in Ghaziabad since 2009.",
            }),
          }}
        />

        {children}

      </body>
    </html>
  );
}