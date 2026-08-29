import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Store,
  BadgeCheck,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Brands", href: "#brands" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const categories = [
  "Hardware",
  "Plumbing",
  "Electrical",
  "Paints",
  "Power Tools",
  "Door Fittings",
  "Adhesives",
  "Sanitaryware",
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">

      {/* =========================
          TOP CTA
      ========================= */}

      <div className="border-b border-zinc-800">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-8 md:py-14">

          <div className="rounded-2xl md:rounded-[32px] bg-gradient-to-r from-orange-600 to-orange-500 p-5 md:p-10 lg:p-14">

            <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">

              {/* CTA Content */}

              <div>

                <span className="inline-flex rounded-full bg-white/20 px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-semibold">
                  Ready to Start Your Project?
                </span>

                <h2 className="mt-4 md:mt-6 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">

                  Let's Build Something
                  Great Together.

                </h2>

                <p className="mt-3 md:mt-5 text-sm md:text-lg leading-6 md:leading-8 text-orange-100">

                  Whether you're building a home,
                  renovating a property or buying in
                  bulk, we're ready to help you choose
                  the right products.

                </p>

              </div>


              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:justify-end">

                <a
                  href="https://wa.me/919811076503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-6 py-3 md:px-8 md:py-4 text-center text-sm md:text-base font-semibold text-green-600 transition hover:bg-zinc-100"
                >
                  WhatsApp Us
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold text-white transition hover:bg-white hover:text-orange-600"
                >
                  Visit Store

                  <ArrowRight size={18} />

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          MAIN FOOTER
      ========================= */}

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 md:py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-14">


          {/* =========================
              COMPANY
          ========================= */}

          <div>

            <div className="flex items-center gap-3 md:gap-4">

              <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-3xl bg-orange-600">

                <Store
                  size={26}
                  className="md:w-[34px] md:h-[34px]"
                />

              </div>

              <div>

                <h2 className="text-xl md:text-3xl font-bold">
                  Yash Traders
                </h2>

                <p className="text-xs md:text-base text-zinc-400">
                  Serving Since 2009
                </p>

              </div>

            </div>

            <p className="mt-5 md:mt-8 text-sm md:text-base leading-6 md:leading-8 text-zinc-400">

              Your trusted destination for hardware,
              plumbing, electrical, sanitaryware,
              paints, tools and building materials
              in Ghaziabad.

            </p>

            <div className="mt-5 md:mt-8 space-y-3">

              {[
                "100% Genuine Products",
                "GST Billing Available",
                "Bulk Orders Accepted",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-2 md:gap-3"
                >

                  <BadgeCheck
                    size={17}
                    className="text-green-500 shrink-0"
                  />

                  <span className="text-sm md:text-base text-zinc-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* =========================
              QUICK LINKS
          ========================= */}

          <div>

            <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-8">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:space-y-4 md:gap-0">

              {quickLinks.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm md:text-base text-zinc-400 transition hover:text-orange-400"
                >
                  {item.name}
                </Link>

              ))}

            </div>

          </div>


          {/* =========================
              CATEGORIES
          ========================= */}

          <div>

            <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-8">
              Categories
            </h3>

            <div className="grid grid-cols-2 gap-2.5 md:grid-cols-1 md:gap-0 md:space-y-4">

              {categories.map((item) => (

                <p
                  key={item}
                  className="text-sm md:text-base text-zinc-400"
                >
                  {item}
                </p>

              ))}

            </div>

          </div>


          {/* =========================
              CONTACT
          ========================= */}

          <div>

            <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-8">
              Contact
            </h3>

            <div className="space-y-4 md:space-y-6">

              {/* Phone */}

              <div className="flex gap-3 md:gap-4">

                <Phone
                  size={19}
                  className="text-orange-500 mt-1 shrink-0"
                />

                <a
                  href="tel:+919811076503"
                  className="text-sm md:text-base text-zinc-400 hover:text-orange-400"
                >
                  +91 98110 76503
                </a>

              </div>


              {/* Email */}

              <div className="flex gap-3 md:gap-4">

                <Mail
                  size={19}
                  className="text-orange-500 mt-1 shrink-0"
                />

                <a
                  href="mailto:uttam.mcmtc@gmail.com"
                  className="text-sm md:text-base text-zinc-400 hover:text-orange-400 break-all"
                >
                  uttam.mcmtc@gmail.com
                </a>

              </div>


              {/* Address */}

              <div className="flex gap-3 md:gap-4">

                <MapPin
                  size={19}
                  className="text-orange-500 mt-1 shrink-0"
                />

                <p className="text-sm md:text-base text-zinc-400 leading-6 md:leading-7">

                  Patel Nagar I,
                  <br />
                  Hapur Road,
                  <br />
                  Ghaziabad,
                  <br />
                  Uttar Pradesh – 201001

                </p>

              </div>


              {/* Hours */}

              <div className="flex gap-3 md:gap-4">

                <Clock
                  size={19}
                  className="text-orange-500 mt-1 shrink-0"
                />

                <p className="text-sm md:text-base text-zinc-400">

                  Open Daily
                  <br />
                  10:00 AM – 9:00 PM

                </p>

              </div>

            </div>


            {/* Contact Buttons */}

            <div className="grid grid-cols-2 gap-2.5 md:gap-3 mt-6 md:mt-10">

              <a
                href="tel:+919811076503"
                className="flex items-center justify-center gap-1.5 md:gap-2 rounded-xl bg-orange-600 py-2.5 md:py-3 text-sm md:text-base font-semibold transition hover:bg-orange-700"
              >

                <Phone size={17} />

                Call

              </a>

              <a
                href="https://wa.me/919811076503"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 md:gap-2 rounded-xl bg-green-600 py-2.5 md:py-3 text-sm md:text-base font-semibold transition hover:bg-green-700"
              >

                <MessageCircle size={17} />

                WhatsApp

              </a>

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          BOTTOM
      ========================= */}

      <div className="border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 md:py-6 flex flex-col lg:flex-row items-center justify-between gap-2 md:gap-4">

          <p className="text-xs md:text-sm text-zinc-500 text-center lg:text-left">

            © {new Date().getFullYear()} Yash Traders. All Rights Reserved.

          </p>

          <p className="text-xs md:text-sm text-zinc-500 text-center">

            Designed with ❤️ for Yash Traders

          </p>

        </div>

      </div>

    </footer>
  );
}