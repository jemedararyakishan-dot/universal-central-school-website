"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showErpNotice, setShowErpNotice] = useState(false);

  return (
    <footer
      id="footer"
      className="border-t border-[#D4A853]/20 bg-[#060E20] px-4 sm:px-6 md:px-8 pb-8 pt-14 sm:pt-18 md:pt-20 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          {/* Brand & Introduction */}
          <div className="sm:col-span-2">
            <div className="relative mb-5 sm:mb-6 h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-2xl bg-white shadow-md">
              <Image
                src="/ucs-logo.png"
                alt="Universal Central School crest"
                fill
                sizes="64px"
                className="object-contain p-1"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
              Universal Central School
            </h3>

            <p className="mt-2.5 sm:mt-3 max-w-sm text-xs sm:text-sm leading-5 sm:leading-6 text-white/60">
              Guiding young learners from Nursery to Grade VII since 1994. Built on clarity, care, character, and foundational excellence.
            </p>

            {/* Social Links */}
            <div className="mt-6 sm:mt-7 flex items-center gap-3">
              <a
                href="https://www.instagram.com/universal_central_school/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Universal Central School on Instagram"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition duration-300 hover:border-[#D4A853] hover:bg-[#D4A853] hover:text-[#060E20] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@universalcentralschoolmbnr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Universal Central School on YouTube"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition duration-300 hover:border-[#D4A853] hover:bg-[#D4A853] hover:text-[#060E20] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.4 3.7-6.4 3.7Z" />
                </svg>
              </a>

              <span className="text-xs text-white/40 pl-2">Mahabubnagar, Telangana</span>
            </div>
          </div>

          {/* Navigation Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#DFB76C]">
              Quick Links
            </p>

            <nav className="mt-4 sm:mt-5 space-y-2.5 text-xs sm:text-sm text-white/65">
              <Link href="/" className="block hover:text-[#DFB76C] transition-colors">
                Home
              </Link>
              <Link href="/about" className="block hover:text-[#DFB76C] transition-colors">
                About Us
              </Link>
              <Link href="/academics" className="block hover:text-[#DFB76C] transition-colors">
                Academics
              </Link>
              <Link href="/student-life" className="block hover:text-[#DFB76C] transition-colors">
                Student Life & Campus
              </Link>
              <Link href="/achievements" className="block hover:text-[#DFB76C] transition-colors">
                Achievements
              </Link>
              <Link href="/gallery" className="block hover:text-[#DFB76C] transition-colors">
                Gallery
              </Link>
              <Link href="/admissions" className="block hover:text-[#DFB76C] transition-colors">
                Admissions
              </Link>
              <Link href="/contact" className="block hover:text-[#DFB76C] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Details & Campus Branches */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#DFB76C]">
              Campuses & Contact
            </p>

            <div className="mt-4 sm:mt-5 space-y-3 text-xs sm:text-sm text-white/65">
              <div>
                <p className="font-medium text-white/90">Branch 1:</p>
                <p className="text-white/60">Mettugadda, Mahabubnagar</p>
              </div>

              <div>
                <p className="font-medium text-white/90">Branch 2:</p>
                <p className="text-white/60">Sri Ramakrishna Colony, Yenugonda</p>
              </div>

              <div className="pt-1 space-y-1">
                <p className="text-white/90 font-medium">Telephone:</p>
                <a
                  href="tel:+919848228013"
                  className="block text-[#DFB76C] hover:underline"
                >
                  +91 9848228013
                </a>
                <a
                  href="tel:+917842383082"
                  className="block text-[#DFB76C] hover:underline"
                >
                  +91 7842383082
                </a>
              </div>

              <div className="pt-1">
                <p className="text-white/90 font-medium">Email:</p>
                <a
                  href="mailto:info@universalcentralschool.in"
                  className="text-white/70 hover:text-[#DFB76C] transition-colors break-all"
                >
                  info@universalcentralschool.in
                </a>
              </div>

              <div className="pt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowErpNotice(!showErpNotice)}
                  className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-[#DFB76C] transition-colors font-medium text-left"
                >
                  <span>Parent Portal / ERP</span>
                  <span className="text-[10px]">↗</span>
                </button>
                {showErpNotice && (
                  <div className="mt-2 p-2.5 rounded-lg border border-[#D4A853]/30 bg-white/5 text-[11px] text-white/70 leading-relaxed">
                    The external ERP login will be connected to the school administration server. Contact the school office for current portal credentials.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>© {currentYear} Universal Central School. All rights reserved.</p>
          <p className="text-[11px] text-white/30">Nursery to Grade VII · English Medium · Est. 1994</p>
        </div>
      </div>
    </footer>
  );
}
