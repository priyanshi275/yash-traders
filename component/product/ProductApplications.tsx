import {
  Home,
  Building2,
  Hammer,
  Wrench,
} from "lucide-react";

const applications = [
  {
    icon: Home,
    title: "Residential Projects",
    description:
      "Suitable for homes, apartments and residential buildings.",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description:
      "Ideal for offices, shops and commercial spaces.",
  },
  {
    icon: Hammer,
    title: "Builders & Contractors",
    description:
      "Trusted by builders, contractors and construction professionals.",
  },
  {
    icon: Wrench,
    title: "Renovation & Repairs",
    description:
      "Perfect for renovation, maintenance and repair work.",
  },
];

export default function ProductApplications() {
  return (
    <section className="mt-12">

      <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Recommended Applications
        </h2>

        <p className="mt-2 text-gray-700">
          This product is suitable for the following applications.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {applications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 p-6 hover:border-orange-400 hover:shadow-lg transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">

                  <Icon
                    size={28}
                    className="text-orange-600"
                  />

                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-700 leading-7">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}