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

        {/* Site-wide Campus Locations & Google Maps Directions */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 text-[#DFB76C] text-xs font-semibold uppercase tracking-[0.25em]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Campus Locations · Mahabubnagar</span>
              </div>
              <h4 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white">
                Visit Universal Central School
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-white/60 max-w-xl">
                Parents and visitors are welcome during regular operational hours. Open your preferred branch directly in Google Maps for live GPS navigation.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/Universal+Central+School+Mahabubnagar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start md:self-auto rounded-xl border border-[#D4A853]/40 bg-[#D4A853]/10 px-4 py-2.5 text-xs font-semibold text-[#DFB76C] hover:bg-[#D4A853] hover:text-[#060E20] transition-all duration-300"
            >
              <span>Explore All on Google Maps</span>
              <span className="text-[11px]">↗</span>
            </a>
          </div>

          {/* Dual Branch Location Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Campus 1: Mettugadda */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-[#D4A853]/60 hover:shadow-[0_8px_30px_rgba(212,168,83,0.12)]">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#D4A853]/20 text-[#DFB76C] text-xs font-bold">
                    01
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DFB76C]">
                      Branch Campus 01
                    </span>
                    <h5 className="text-base sm:text-lg font-bold text-white leading-tight">
                      Mettugadda Branch
                    </h5>
                  </div>
                </div>

                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-300 shrink-0">
                  Nursery – Class VII
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                Universal Central School, Mettugadda, Mahabubnagar, Telangana, India.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/10">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Universal+Central+School+Mettugadda+Mahabubnagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-4 py-2.5 text-xs font-bold text-[#060E20] shadow-sm transition-all duration-300 hover:scale-[1.02] hover:brightness-105 active:scale-[0.98]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  <span>Get Directions</span>
                  <span className="text-[10px]">↗</span>
                </a>

                <a
                  href="tel:+919848228013"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs font-medium text-white/85 hover:border-[#D4A853] hover:text-[#DFB76C] transition-all"
                >
                  <span>📞 +91 9848228013</span>
                </a>
              </div>
            </div>

            {/* Campus 2: Sri Ramakrishna Colony */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-[#D4A853]/60 hover:shadow-[0_8px_30px_rgba(212,168,83,0.12)]">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#D4A853]/20 text-[#DFB76C] text-xs font-bold">
                    02
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DFB76C]">
                      Branch Campus 02
                    </span>
                    <h5 className="text-base sm:text-lg font-bold text-white leading-tight">
                      Sri Ramakrishna Colony
                    </h5>
                  </div>
                </div>

                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-300 shrink-0">
                  Nursery – Class VII
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                Universal Central School, Sri Ramakrishna Colony, Yenugonda, Mahabubnagar, Telangana, India.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/10">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Universal+Central+School+Sri+Ramakrishna+Colony+Yenugonda+Mahabubnagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-4 py-2.5 text-xs font-bold text-[#060E20] shadow-sm transition-all duration-300 hover:scale-[1.02] hover:brightness-105 active:scale-[0.98]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  <span>Get Directions</span>
                  <span className="text-[10px]">↗</span>
                </a>

                <a
                  href="tel:+917842383082"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs font-medium text-white/85 hover:border-[#D4A853] hover:text-[#DFB76C] transition-all"
                >
                  <span>📞 +91 7842383082</span>
                </a>
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
