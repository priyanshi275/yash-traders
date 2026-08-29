"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import {
  Phone,
  MessageCircle,
  Store,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Brands", href: "#brands" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      let current = "Home";

      navItems.forEach((item) => {
        const id = item.href.substring(1);
        const section = document.getElementById(id);

        if (section) {
          const top =
            section.getBoundingClientRect().top +
            window.scrollY -
            150;

          if (window.scrollY >= top) {
            current = item.name;
          }
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string,
    name: string
  ) => {
    e.preventDefault();

    setActive(name);

    const id = href.substring(1);
    const section = document.getElementById(id);

    if (!section) {
      console.log("Section not found:", id);
      return;
    }

    const navbarHeight = 80;

    const position =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-zinc-200"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}

          <a
            href="#home"
            onClick={(e) =>
              handleNavigation(e, "#home", "Home")
            }
            className="group flex items-center gap-3"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-orange-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              
              <div className="absolute inset-0 rounded-2xl bg-orange-400 blur-xl opacity-30 animate-pulse" />

              <Store
                size={28}
                className="relative z-10 md:w-[30px] md:h-[30px]"
              />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-zinc-900 leading-tight">
                Yash Traders
              </h1>

              <p className="text-xs md:text-sm font-medium text-zinc-600">
                Hardware • Plumbing • Electrical
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}

          <div className="hidden lg:block">
            <ul className="flex items-center gap-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) =>
                      handleNavigation(
                        e,
                        item.href,
                        item.name
                      )
                    }
                    className={`inline-flex items-center px-5 py-3 rounded-xl font-semibold transition-all duration-200 ${
                      active === item.name
                        ? "bg-orange-600 text-white shadow-lg"
                        : "text-zinc-800 hover:bg-orange-100 hover:text-orange-700"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* DESKTOP BUTTONS */}

          <div className="hidden lg:flex items-center gap-3">

            <a
              href="tel:+919811076503"
              className="flex items-center gap-2 rounded-xl border border-orange-600 px-5 py-3 font-semibold text-orange-700 transition-all duration-200 hover:bg-orange-600 hover:text-white"
            >
              <Phone size={18} />
              Call
            </a>

            <a
              href="https://wa.me/919811076503"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition-all duration-200 hover:bg-green-700"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

          </div>

        </div>
      </div>
    </nav>
  );
}