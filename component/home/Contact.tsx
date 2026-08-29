import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  BadgeCheck,
  Building2,
  Navigation,
} from "lucide-react";

import SectionHeader from "../common/SectionHeader";

const contactItems = [
  {
    icon: MapPin,
    title: "Store Address",
    content: (
      <>
        No. 22, Block F
        <br />
        Hapur Road, Jagdish Nagar
        <br />
        Patel Nagar I
        <br />
        Ghaziabad, Uttar Pradesh - 201001
      </>
    ),
  },
  {
    icon: Phone,
    title: "Phone",
    content: <span>+91 98110 76503</span>,
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <a
        href="mailto:uttam.mcmtc@gmail.com"
        className="hover:text-orange-600 transition-colors break-all"
      >
        uttam.mcmtc@gmail.com
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: (
      <>
        Monday - Sunday
        <br />
        10:00 AM – 9:00 PM
      </>
    ),
  },
  {
    icon: BadgeCheck,
    title: "GST Number",
    content: <span>09ADMPT0800G1ZK</span>,
  },
  {
    icon: Building2,
    title: "Business Type",
    content: (
      <>
        Retail Hardware &
        <br />
        Building Material Store
      </>
    ),
  },
];

export default function Contact() {
  return (
    <section id = "contact" className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <SectionHeader
          title="Visit Our Store"
          subtitle="We're here to help builders, contractors, architects and businesses find the right products at the right price."
        />

        {/* =========================
            MAIN CONTENT
        ========================= */}

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 mt-10 md:mt-14">

          {/* =========================
              CONTACT INFORMATION
          ========================= */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-6">

            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-3 md:gap-5 rounded-2xl md:rounded-3xl border border-zinc-200 bg-white p-4 md:p-7 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >

                  {/* Icon */}

                  <div className="flex h-11 w-11 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-xl md:rounded-2xl bg-orange-100">

                    <Icon
                      size={22}
                      className="text-orange-600 md:w-7 md:h-7"
                    />

                  </div>

                  {/* Information */}

                  <div className="min-w-0">

                    <h3 className="text-base md:text-xl font-bold text-zinc-900">
                      {item.title}
                    </h3>

                    <div className="mt-1.5 md:mt-3 text-sm md:text-base leading-6 md:leading-8 text-zinc-700">
                      {item.content}
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

          {/* =========================
              RIGHT SIDE
          ========================= */}

          <div className="overflow-hidden rounded-2xl md:rounded-[32px] shadow-xl">

            {/* =========================
                CTA
            ========================= */}

            <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-5 md:p-10 text-white">

              <h2 className="text-2xl md:text-4xl font-bold">
                Need Expert Guidance?
              </h2>

              <p className="mt-3 md:mt-6 text-sm md:text-lg leading-6 md:leading-8 text-orange-100">
                Whether you're building a new home,
                renovating your property or purchasing
                in bulk, our experienced team is ready
                to help you choose the right products.
              </p>

              {/* Buttons */}

              <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-10">

                <a
                  href="https://wa.me/919811076503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white py-3 md:py-4 text-sm md:text-base font-semibold text-green-600 hover:bg-zinc-100 transition"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

                <a
                  href="tel:+919811076503"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white py-3 md:py-4 text-sm md:text-base font-semibold text-white hover:bg-white hover:text-orange-600 transition"
                >
                  <Phone size={18} />
                  Call Now
                </a>

              </div>

            </div>

            {/* =========================
                GOOGLE MAP
            ========================= */}

            <iframe
              src="https://www.google.com/maps?q=No+22+Block+F+Hapur+Road+Jagdish+Nagar+Patel+Nagar+Ghaziabad+201001&output=embed"
              width="100%"
              height="280"
              loading="lazy"
              className="border-0 md:h-[350px]"
              title="Yash Traders Location"
            ></iframe>

            {/* =========================
                DIRECTIONS
            ========================= */}

            <div className="bg-white p-4 md:p-8">

              <a
                href="https://maps.google.com/?q=No+22+Block+F+Hapur+Road+Jagdish+Nagar+Patel+Nagar+Ghaziabad+201001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 md:gap-3 rounded-xl bg-orange-600 py-3 md:py-4 text-sm md:text-base font-semibold text-white hover:bg-orange-700 transition"
              >
                <Navigation size={19} />
                Get Directions
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}