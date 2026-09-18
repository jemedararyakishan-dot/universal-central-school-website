"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ACHIEVEMENTS, AchievementItem } from "@/data/achievements";

type CategoryFilter = "all" | "olympiad" | "mathematics" | "cultural" | "quiz";

const CATEGORIES: { label: string; value: CategoryFilter }[] = [
  { label: "All Achievements", value: "all" },
  { label: "Olympiads & Academic", value: "olympiad" },
  { label: "Mathematics & Abacus", value: "mathematics" },
  { label: "Cultural & Literary", value: "cultural" },
  { label: "Quiz & General Knowledge", value: "quiz" },
];

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredAchievements =
    activeCategory === "all"
      ? ACHIEVEMENTS
      : ACHIEVEMENTS.filter((item) => item.category === activeCategory);

  return (
    <main className="overflow-hidden bg-[var(--ucs-bg-page)] text-[var(--ucs-text-primary)] transition-colors duration-300">
      <Navbar />

      {/* =========================================================
          HERO — ACHIEVEMENTS ARCHIVE
      ========================================================= */}
      <section className="relative min-h-[70svh] sm:min-h-[80svh] overflow-hidden bg-[var(--ucs-bg-hero)] pt-24 sm:pt-32 transition-colors duration-300">
        <div className="pointer-events-none absolute -left-40 top-16 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-[var(--ucs-glow-blue)] blur-[100px] sm:blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-[var(--ucs-glow-gold)] blur-[120px] sm:blur-[140px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[var(--ucs-grid-opacity)]"
          style={{
            backgroundImage:
              "linear-gradient(var(--ucs-grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--ucs-grid-color) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 sm:mb-6 inline-flex items-center gap-2.5 rounded-full border border-[var(--ucs-gold-badge-border)] bg-[var(--ucs-gold-badge-bg)] px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--ucs-green)]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ucs-gold-text-contrast)]">
                Excellence & Effort · Source Archive
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[5.5rem] font-semibold leading-[1] sm:leading-[0.95] tracking-[-0.05em] text-[var(--ucs-text-primary)]">
              Celebrating
              <br />
              <span className="bg-gradient-to-r from-[var(--ucs-heading-gradient-from)] via-[var(--ucs-heading-gradient-via)] to-[var(--ucs-heading-gradient-to)] bg-clip-text text-transparent">
                student milestones.
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-[var(--ucs-text-secondary)]">
              From state-level Olympiads and mathematics competitions to regional cultural showcases, our students represent Universal Central School with intellectual curiosity, discipline, and pride.
            </p>

            {/* Metric Highlights */}
            <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-[var(--ucs-border)] pt-6 sm:pt-8">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[var(--ucs-gold-text)]">State 1st</p>
                <p className="text-[10px] sm:text-xs text-[var(--ucs-text-muted)] mt-1">SKK Olympiad</p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[var(--ucs-text-primary)]">Top 3</p>
                <p className="text-[10px] sm:text-xs text-[var(--ucs-text-muted)] mt-1">Abacus Champions</p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[var(--ucs-text-primary)]">Dist. 3rd</p>
                <p className="text-[10px] sm:text-xs text-[var(--ucs-text-muted)] mt-1">Ramanujan Maths</p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[var(--ucs-gold-text)]">Showcase</p>
                <p className="text-[10px] sm:text-xs text-[var(--ucs-text-muted)] mt-1">Balotsavam Arts</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 bg-gradient-to-t from-[var(--ucs-bg-page)] to-transparent" />
      </section>

      {/* =========================================================
          SECTION 01: FILTER TABS & ARCHIVE LIST
      ========================================================= */}
      <section className="relative bg-[var(--ucs-bg-page)] px-4 sm:px-6 md:px-8 py-12 sm:py-16 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-8 border-b border-[var(--ucs-border-subtle)]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ucs-gold)] ${
                  activeCategory === cat.value
                    ? "bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] font-bold text-[#0B1733] shadow-md"
                    : "border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] text-[var(--ucs-text-secondary)] hover:border-[var(--ucs-gold)] hover:text-[var(--ucs-gold-text)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Archive Notice */}
          <div className="my-6 rounded-2xl border border-[var(--ucs-gold-badge-border)] bg-[var(--ucs-gold-badge-bg)] p-4 text-xs leading-relaxed text-[var(--ucs-gold-text-contrast)] flex items-start gap-3">
            <span className="text-base leading-none">ℹ️</span>
            <div>
              <p className="font-semibold">Official School Achievement Archive</p>
              <p className="mt-0.5 opacity-90">
                Verified from official records and event certificates. Where exact academic years are pending final registrar confirmation, they are explicitly designated as unverified.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {filteredAchievements.map((item: AchievementItem) => (
              <article
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] shadow-sm transition duration-500 hover:border-[var(--ucs-gold)] hover:shadow-xl"
              >
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                  {item.images.length > 0 ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-105 cursor-pointer"
                        onClick={() => setSelectedImage(item.images[0])}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060E20]/90 via-[#060E20]/30 to-transparent" />
                    </div>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-800 text-xs text-white/50">
                      Photo Archive in Processing
                    </div>
                  )}

                  {/* Badges on image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="rounded-full border border-white/20 bg-[#0B1B3D]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      {item.event}
                    </span>

                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium backdrop-blur-md ${
                        item.isYearVerified
                          ? "border border-emerald-500/40 bg-emerald-950/80 text-emerald-300"
                          : "border border-amber-500/40 bg-amber-950/80 text-amber-300"
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-widest text-[#DFB76C] font-semibold">
                      {item.achievement}
                    </p>
                    <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Students List */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {item.students.map((st, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-toggle-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--ucs-text-primary)]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--ucs-gold)]" />
                          <span>{st.name}</span>
                          <span className="text-[10px] font-normal text-[var(--ucs-text-muted)]">
                            ({st.class})
                          </span>
                          {st.prize && (
                            <span className="text-[10px] text-[var(--ucs-gold-text)] font-bold">
                              · {st.prize}
                            </span>
                          )}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed text-[var(--ucs-text-secondary)]">
                      {item.context}
                    </p>
                  </div>

                  {/* Extra images if multiple exist */}
                  {item.images.length > 1 && (
                    <div className="mt-6 pt-4 border-t border-[var(--ucs-border-subtle)]">
                      <p className="text-[11px] font-medium text-[var(--ucs-text-muted)] mb-2">
                        Event Photographs ({item.images.length})
                      </p>
                      <div className="flex gap-2">
                        {item.images.map((img, imgIdx) => (
                          <button
                            key={imgIdx}
                            type="button"
                            onClick={() => setSelectedImage(img)}
                            className="relative h-14 w-20 overflow-hidden rounded-lg border border-[var(--ucs-border)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ucs-gold)] hover:opacity-80 transition"
                          >
                            <Image
                              src={img}
                              alt={`${item.title} photo ${imgIdx + 1}`}
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          IMAGE LIGHTBOX MODAL
      ========================================================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full overflow-hidden rounded-2xl border border-white/20 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image modal"
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition"
            >
              ✕
            </button>
            <div className="relative h-[65vh] sm:h-[75vh] w-full">
              <Image
                src={selectedImage}
                alt="Achievement view"
                fill
                sizes="90vw"
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[var(--ucs-admissions-outer-bg)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-[#D4A853]/30 bg-gradient-to-br from-[#0B1B3D] via-[#0D214D] to-[#071228] p-6 sm:p-10 md:p-14 shadow-2xl">
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#DFB76C]">
                  Academic Culture
                </p>
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                  Where students are encouraged
                  <br />
                  to achieve with humility.
                </h2>
                <p className="mt-4 max-w-xl text-sm sm:text-base text-white/70">
                  Every achievement is a stepping stone. Learn how Universal Central School nurtures curiosity and dedication from the early grades.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  href="/academics"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#D4A853]/40 text-center"
                >
                  Explore Academics
                </Link>
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-bold text-[#0B1733] shadow-[0_10px_30px_rgba(212,168,83,0.35)] transition duration-300 hover:-translate-y-0.5 text-center"
                >
                  Admissions Enquiry →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
