import {
  BadgeCheck,
  Building2,
  MessageCircle,
  Phone,
  Store,
  Truck,
} from "lucide-react";

interface Props {
  whatsappMessage: string;
}

export default function ProductSidebar({
  whatsappMessage,
}: Props) {
  return (
    <div className="lg:sticky lg:top-28">

      <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">

        {/* Header */}

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-center">

          <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center mx-auto shadow-lg">

            <Store
              size={42}
              className="text-orange-600"
            />

          </div>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Yash Traders
          </h2>

          <p className="mt-2 text-orange-100">
            Trusted Since 2009
          </p>

        </div>

        {/* Features */}

        <div className="p-8">

          <h3 className="text-xl font-bold text-gray-900">
            Why Choose Us?
          </h3>

          <div className="mt-6 space-y-5">

            <div className="flex items-center gap-4">

              <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">

                <BadgeCheck
                  size={22}
                  className="text-green-600"
                />

              </div>

              <div>

                <p className="font-semibold text-gray-900">
                  Genuine Products
                </p>

                <p className="text-sm text-gray-600">
                  100% Original Brands
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center">

                <Building2
                  size={22}
                  className="text-orange-600"
                />

              </div>

              <div>

                <p className="font-semibold text-gray-900">
                  GST Billing
                </p>

                <p className="text-sm text-gray-600">
                  Invoice Available
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">

                <Truck
                  size={22}
                  className="text-blue-600"
                />

              </div>

              <div>

                <p className="font-semibold text-gray-900">
                  Bulk Orders
                </p>

                <p className="text-sm text-gray-600">
                  Wholesale Supply
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">

                <BadgeCheck
                  size={22}
                  className="text-purple-600"
                />

              </div>

              <div>

                <p className="font-semibold text-gray-900">
                  50+ Brands
                </p>

                <p className="text-sm text-gray-600">
                  Trusted Manufacturers
                </p>

              </div>

            </div>

          </div>

          {/* CTA */}

          <div className="grid gap-4 mt-10">

            <a
              href={`https://wa.me/919811076503?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-green-600 hover:bg-green-700 text-white py-4 font-semibold transition-all duration-300"
            >
              <MessageCircle size={20} />
              WhatsApp Enquiry
            </a>

            <a
              href="tel:+919811076503"
              className="flex items-center justify-center gap-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white py-4 font-semibold transition-all duration-300"
            >
              <Phone size={20} />
              Call Now
            </a>

          </div>

          {/* Bottom Card */}

          <div className="mt-8 rounded-2xl bg-orange-50 border border-orange-200 p-5">

            <h4 className="font-bold text-gray-900">
              Need Assistance?
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Our team will help you choose the right
              hardware, plumbing, electrical and
              construction products for your project.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}