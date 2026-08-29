export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[680px] md:min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/image/hero/hero.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[680px] md:min-h-screen flex items-center px-5 sm:px-6 lg:px-8 pt-24 pb-14 md:pt-28 md:pb-20">

        <div className="max-w-3xl w-full">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/20 backdrop-blur-md px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-semibold text-orange-200">
            🏆 Trusted Building Solutions Partner • Since 2009
          </div>

          {/* Heading */}
          <h1 className="mt-6 md:mt-8 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-white">

            Everything You Need

            <span className="block mt-2 md:mt-4 text-orange-400">

              Your One-Stop

              <br />

              Building Solution

            </span>

          </h1>

          {/* Description */}
          <p className="mt-5 md:mt-8 max-w-2xl text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-gray-200">

            From premium hardware, plumbing and electrical supplies to
            sanitaryware, paints, power tools and construction essentials,
            Yash Traders has been your trusted one-stop building solutions
            partner in Ghaziabad since 2009.

          </p>

          {/* Category Pills */}
          <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3">

            {[
              "Hardware",
              "Plumbing",
              "Electrical",
              "Paints",
              "Sanitaryware",
            ].map((item) => (

              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium text-white"
              >
                {item}
              </span>

            ))}

          </div>

          {/* Buttons */}
          <div className="mt-7 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-5">

            <a
              href="#products"
              className="rounded-xl bg-orange-500 hover:bg-orange-600 px-7 py-3.5 md:px-8 md:py-4 text-center font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explore Products
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white bg-white/10 backdrop-blur-sm px-7 py-3.5 md:px-8 md:py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Contact Us
            </a>

          </div>

          {/* Stats */}
          <div className="mt-9 md:mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl">

            <div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400">
                17+
              </h2>

              <p className="mt-1 md:mt-2 text-xs sm:text-sm md:text-base text-gray-300">
                Years of Trust
              </p>

            </div>

            <div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400">
                50+
              </h2>

              <p className="mt-1 md:mt-2 text-xs sm:text-sm md:text-base text-gray-300">
                Premium Brands
              </p>

            </div>

            <div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400">
                1000+
              </h2>

              <p className="mt-1 md:mt-2 text-xs sm:text-sm md:text-base text-gray-300">
                Happy Customers
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 z-20">

        <div className="w-7 h-12 rounded-full border-2 border-white flex justify-center">

          <div className="w-1.5 h-3 rounded-full bg-white mt-2 animate-bounce"></div>

        </div>

      </div>

    </section>
  );
}