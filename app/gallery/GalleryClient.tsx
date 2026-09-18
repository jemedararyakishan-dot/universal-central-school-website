"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

type GalleryCategory = "all" | "campus" | "activities" | "achievements";

interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  src?: string;
  placeholderSpecs?: string;
  placeholderSubtitle?: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "campus-main",
    title: "Universal Central School Campus",
    category: "campus",
    src: "/school.png",
    caption: "Campus building and grounds in Mahabubnagar, welcoming learners from Nursery to Grade VII.",
  },
  {
    id: "classroom-learning",
    title: "Interactive Classroom Session",
    category: "campus",
    src: "/classroom.jpeg",
    caption: "Engaged students during active classroom instruction and collaborative group study.",
  },
  {
    id: "student-activity",
    title: "Co-Curricular & Student Life",
    category: "activities",
    src: "/activity.jpeg",
    caption: "Students actively participating in a school activity session.",
  },
  {
    id: "skk-olympiad",
    title: "State 1st Prize — SKK International Olympiad",
    category: "achievements",
    src: "/achievements/skk-olympiad.jpg",
    caption: "Pranav (Class 3) and V. Chetan (Class 5) celebrating their State 1st Prize in the SKK Olympiad 2023.",
  },
  {
    id: "abacus-championship",
    title: "Abacus Championship Winners",
    category: "achievements",
    src: "/achievements/abacus-championship.jpg",
    caption: "R. Abhijith (1st, Seniors), Naren (2nd), and Gouthami Lasya (3rd, Juniors) at the Abacus Championship.",
  },
  {
    id: "bharat-ko-jano",
    title: "2nd Prize — Bharat Ko Jano Quiz",
    category: "achievements",
    src: "/achievements/bharat-ko-jano-quiz.jpg",
    caption: "Vishwa Chaitanya & Varshini (Class 7) capturing 2nd Prize in the Bharat Ko Jano Quiz contest.",
  },
  {
    id: "ramanujan-maths",
    title: "District Winner — Ramanujan Maths Talent Test",
    category: "achievements",
    src: "/achievements/ramanujan-math-test.jpg",
    caption: "Sahithi (Class 5) securing District 3rd Prize in the Srinivasa Ramanujan Maths Talent Test.",
  },
  {
    id: "balotsavam-showcase-1",
    title: "Pillalamari Balotsavam Cultural Ensemble",
    category: "achievements",
    src: "/achievements/pillalamari-balotsavam-1.jpg",
    caption: "Students presenting in Telugu Katha Rachana, Padyam Bhavam, and Group Song & Dance at Pillalamari Balotsavam.",
  },
  {
    id: "balotsavam-showcase-2",
    title: "Pillalamari Balotsavam Stage Presentation",
    category: "achievements",
    src: "/achievements/pillalamari-balotsavam-2.jpg",
    caption: "Cultural performance showcase celebrating Telugu literary recitation and team choreography.",
  },
  {
    id: "annual-day-placeholder",
    title: "Annual Day & Cultural Celebrations",
    category: "activities",
    placeholderSpecs: "16:9 Landscape · Archive Collection",
    placeholderSubtitle: "Official stage photographs from the upcoming Annual Day festival",
    caption: "Annual cultural day celebrations featuring student dance and drama showcases (Incoming Archive).",
  },
  {
    id: "science-exhibition-placeholder",
    title: "Science & Project Exhibition",
    category: "campus",
    placeholderSpecs: "4:3 Ratio · Lab & Project Models",
    placeholderSubtitle: "Photographs of student models and demonstrations during the annual science day",
    caption: "Student science and math exhibitions demonstrating working physical models (Incoming Archive).",
  },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeTab === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <main className="overflow-hidden bg-[var(--ucs-bg-page)] text-[var(--ucs-text-primary)] transition-colors duration-300">
      <Navbar />

      {/* =========================================================
          HERO — VISUAL ARCHIVE
      ========================================================= */}
      <section className="relative min-h-[65svh] sm:min-h-[75svh] overflow-hidden bg-[var(--ucs-bg-hero)] pt-24 sm:pt-32 transition-colors duration-300">
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
                Visual Archive · Moments & Milestones
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[5.5rem] font-semibold leading-[1] sm:leading-[0.95] tracking-[-0.05em] text-[var(--ucs-text-primary)]">
              Moments from
              <br />
              <span className="bg-gradient-to-r from-[var(--ucs-heading-gradient-from)] via-[var(--ucs-heading-gradient-via)] to-[var(--ucs-heading-gradient-to)] bg-clip-text text-transparent">
                school life.
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-[var(--ucs-text-secondary)]">
              Explore authentic photographs capturing daily classroom interactions, student achievements, campus environments, and co-curricular programs at Universal Central School.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 bg-gradient-to-t from-[var(--ucs-bg-page)] to-transparent" />
      </section>

      {/* =========================================================
          GALLERY GRID SECTION
      ========================================================= */}
      <section className="relative bg-[var(--ucs-bg-page)] px-4 sm:px-6 md:px-8 py-12 sm:py-16 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 pb-8 border-b border-[var(--ucs-border-subtle)]">
            {[
              { label: "All Photographs", value: "all" as GalleryCategory },
              { label: "Campus & Classrooms", value: "campus" as GalleryCategory },
              { label: "Activities & Student Life", value: "activities" as GalleryCategory },
              { label: "Student Achievements", value: "achievements" as GalleryCategory },
            ].map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ucs-gold)] ${
                  activeTab === tab.value
                    ? "bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] font-bold text-[#0B1733] shadow-md"
                    : "border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] text-[var(--ucs-text-secondary)] hover:border-[var(--ucs-gold)] hover:text-[var(--ucs-gold-text)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid of Actual Images and Clear Placeholders */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => {
              if (item.src) {
                return (
                  <div
                    key={item.id}
                    onClick={() => setLightboxImage(item)}
                    className="group relative cursor-pointer overflow-hidden rounded-[1.75rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] shadow-sm transition duration-500 hover:-translate-y-1.5 hover:border-[var(--ucs-gold)] hover:shadow-xl"
                  >
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060E20]/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition duration-300" />
                      <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white/80 backdrop-blur-md transition group-hover:scale-110 group-hover:bg-[var(--ucs-gold)] group-hover:text-[#0B1733]">
                        <span className="text-sm">⤢</span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ucs-gold-text)]">
                        {item.category.toUpperCase()}
                      </p>
                      <h3 className="mt-1 text-base sm:text-lg font-semibold text-[var(--ucs-text-primary)]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-[var(--ucs-text-muted)] line-clamp-2">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                );
              }

              // Explicit Placeholder for items being assembled from school records
              return (
                <div
                  key={item.id}
                  className="rounded-[1.75rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-4 shadow-sm"
                >
                  <PhotoPlaceholder
                    title={item.title}
                    subtitle={item.placeholderSubtitle}
                    specs={item.placeholderSpecs}
                    theme="auto"
                    className="min-h-[220px]"
                  />
                  <div className="mt-3 px-1">
                    <p className="text-xs text-[var(--ucs-text-muted)]">{item.caption}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          LIGHTBOX MODAL
      ========================================================= */}
      {lightboxImage && lightboxImage.src && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-950 p-2 sm:p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              aria-label="Close photo preview"
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black transition"
            >
              ✕
            </button>

            <div className="relative h-[60vh] sm:h-[70vh] w-full">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                sizes="95vw"
                className="object-contain"
              />
            </div>

            <div className="p-4 border-t border-white/10 mt-2 text-white">
              <h3 className="text-lg font-semibold text-white">{lightboxImage.title}</h3>
              <p className="mt-1 text-xs sm:text-sm text-white/70">{lightboxImage.caption}</p>
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
                  Campus Experience
                </p>
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                  See our campus in person.
                </h2>
                <p className="mt-4 max-w-xl text-sm sm:text-base text-white/70">
                  Photographs are only a glimpse. We invite parents and guardians to visit Universal Central School to see our classrooms and meet our faculty.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-bold text-[#0B1733] shadow-[0_10px_30px_rgba(212,168,83,0.35)] transition duration-300 hover:-translate-y-0.5 text-center"
                >
                  Schedule a Visit →
                </Link>
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#D4A853]/40 text-center"
                >
                  Admissions Details
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
