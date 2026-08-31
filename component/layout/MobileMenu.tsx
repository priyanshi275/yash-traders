"use client";

import { useEffect, useRef } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { X, Phone, MessageCircle } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeItem: string;
  onNavigate: (
    e: ReactMouseEvent<HTMLAnchorElement>,
    href: string,
    name: string
  ) => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  navItems,
  activeItem,
  onNavigate,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  /* =========================
     Lock background scroll
     (compensates for scrollbar
     width to avoid layout shift)
  ========================= */

  useEffect(() => {
    if (!isOpen) return;

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";

    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  /* =========================
     Move focus into the panel
     when it opens
  ========================= */

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  /* =========================
     Escape to close + simple
     focus trap while open
  ========================= */

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[10000] lg:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
    >
      {/* Backdrop */}

      <div
        onClick={onClose}
        aria-hidden="true"
        className={`absolute inset-0 bg-zinc-900/50 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}

      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between px-6 h-20 border-b border-zinc-200 shrink-0">

          <span className="text-lg font-bold text-zinc-900">
            Menu
          </span>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl text-zinc-700 transition-colors duration-200 hover:bg-orange-100 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            <X size={24} />
          </button>

        </div>

        {/* Nav Links */}

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1.5">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => onNavigate(e, item.href, item.name)}
                  aria-current={
                    activeItem === item.name ? "page" : undefined
                  }
                  className={`flex items-center min-h-[52px] px-5 rounded-xl text-lg font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ${
                    activeItem === item.name
                      ? "bg-orange-600 text-white shadow-md"
                      : "text-zinc-800 hover:bg-orange-50 hover:text-orange-700"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Buttons */}

        <div className="border-t border-zinc-200 p-4 space-y-3 shrink-0">

          <a
            href="tel:+919811076503"
            className="flex items-center justify-center gap-3 min-h-[52px] rounded-xl border-2 border-orange-600 font-semibold text-orange-700 transition-colors duration-200 hover:bg-orange-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            <Phone size={20} />
            Call Now
          </a>

          <a
            href="https://wa.me/919811076503"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 min-h-[52px] rounded-xl bg-green-600 font-semibold text-white transition-colors duration-200 hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>

        </div>

      </div>

    </div>
  );
}
