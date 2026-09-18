"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Student Life", href: "/student-life" },
  { label: "Achievements", href: "/achievements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-8 transition-all duration-300">
      <nav
        aria-label="Primary Navigation"
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-[var(--ucs-border-navbar)] bg-[var(--ucs-bg-navbar)] px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-[var(--ucs-shadow-sm)] backdrop-blur-xl transition-all duration-300 md:px-6 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        {/* Logo & School Identity */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ucs-gold)] rounded-xl"
          aria-label="Universal Central School — Home"
        >
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-xl border border-[var(--ucs-border)] bg-white shadow-sm">
            <Image
              src="/ucs-logo.png"
              alt="Universal Central School logo"
              fill
              sizes="48px"
              priority
              className="object-contain p-1"
            />
          </div>

          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[var(--ucs-text-primary)]">
              <span className="sm:hidden">UCS</span>
              <span className="hidden sm:inline">UNIVERSAL CENTRAL SCHOOL</span>
            </p>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[var(--ucs-gold-text)] font-medium">
              Since 1994
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 xl:gap-2 text-sm font-medium text-[var(--ucs-text-secondary)] lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-2.5 py-1.5 rounded-lg transition-colors duration-200 hover:text-[var(--ucs-gold-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ucs-gold)] ${
                  active
                    ? "font-semibold text-[var(--ucs-text-primary)]"
                    : "text-[var(--ucs-text-secondary)]"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-[var(--ucs-gold)]" />
                )}
              </Link>
            );
          })}

          <div className="flex items-center gap-3 border-l border-[var(--ucs-border)] pl-4 ml-1">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Enquire Now CTA */}
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-4 py-2 text-xs font-bold text-[#0B1733] shadow-[0_4px_16px_rgba(212,168,83,0.3)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(212,168,83,0.45)] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]"
            >
              Enquire Now
            </Link>
          </div>
        </div>

        {/* Mobile Action Controls: Theme Toggle & Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-toggle-bg)] text-[var(--ucs-text-primary)] transition hover:border-[var(--ucs-gold)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ucs-gold)] active:scale-95"
          >
            {isOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop & Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute right-3 top-20 sm:right-4 w-64 max-w-[calc(100vw-1.5rem)] rounded-2xl border border-[var(--ucs-border-menu)] bg-[var(--ucs-bg-menu)] p-3 shadow-2xl backdrop-blur-xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-[var(--ucs-toggle-bg)] font-semibold text-[var(--ucs-gold-text)]"
                        : "text-[var(--ucs-text-secondary)] hover:bg-[var(--ucs-toggle-bg)] hover:text-[var(--ucs-gold-text)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="my-2 border-t border-[var(--ucs-border)] pt-2">
                <Link
                  href="/admissions"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-4 py-2.5 text-center text-xs font-bold text-[#0B1733] shadow-md transition hover:brightness-105"
                >
                  Enquire Now →
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
