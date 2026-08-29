import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center px-6">

      <div className="max-w-3xl text-center">

        <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-orange-100">

          <Search
            size={48}
            className="text-orange-600"
          />

        </div>

        <h1 className="mt-10 text-8xl font-extrabold text-orange-600">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-zinc-900">
          Oops! Page Not Found
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-600">

          The page you're looking for doesn't exist,
          may have been moved or the URL might be incorrect.

        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <Link
            href="/#products"
            className="inline-flex items-center gap-2 rounded-xl border border-orange-600 px-8 py-4 font-semibold text-orange-600 transition hover:bg-orange-600 hover:text-white"
          >
            <ArrowLeft size={20} />
            Browse Products
          </Link>

        </div>

        <div className="mt-16 rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg">

          <h3 className="text-2xl font-bold text-zinc-900">
            Need Help?
          </h3>

          <p className="mt-4 text-zinc-600">

            Contact Yash Traders for hardware,
            plumbing, electrical, sanitaryware,
            paints and building materials.

          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="tel:+919811076503"
              className="rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700 transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919811076503"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition"
            >
              💬 WhatsApp
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}