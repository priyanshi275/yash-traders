"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import {
  Phone,
  MessageCircle,
  Store,
  Menu,
} from "lucide-react";

import MobileMenu from "./MobileMenu";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  /* =========================
     Navbar background/shadow
     on scroll (lightweight)
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================
     Active section detection
     via IntersectionObserver
  ========================= */

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.substring(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;

          const matched = navItems.find(
            (item) => item.href.substring(1) === id
          );

          if (matched) {
            setActive(matched.name);
          }
        }
      },
      {
        // Accounts for the fixed navbar height and keeps the
        // "active" detection zone within the upper part of the viewport.
        rootMargin: "-110px 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  };

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

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: position,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const handleMobileNavigation = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string,
    name: string
  ) => {
    handleNavigation(e, href, name);
    closeMobileMenu();
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-300 motion-reduce:transition-none ${
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

                <div className="absolute inset-0 rounded-2xl bg-orange-400 blur-xl opacity-30 animate-pulse motion-reduce:animate-none" />

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
                      aria-current={
                        active === item.name ? "page" : undefined
                      }
                      className={`inline-flex items-center px-5 py-3 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ${
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
                className="flex items-center gap-2 rounded-xl border border-orange-600 px-5 py-3 font-semibold text-orange-700 transition-all duration-200 hover:bg-orange-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                <Phone size={18} />
                Call
              </a>

              <a
                href="https://wa.me/919811076503"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition-all duration-200 hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

            </div>

            {/* MOBILE MENU TOGGLE */}

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 text-zinc-800 transition-colors duration-200 hover:bg-orange-100 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              <Menu size={24} />
            </button>

          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navItems={navItems}
        activeItem={active}
        onNavigate={handleMobileNavigation}
      />
    </>
  );
}
