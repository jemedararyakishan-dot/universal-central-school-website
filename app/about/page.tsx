import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Universal Central School",
  description:
    "Discover the history, ethos, and vision of Universal Central School (UCS) in Mahabubnagar, Telangana. Guiding young learners from Nursery to Grade VII since 1994.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[var(--ucs-bg-page)] text-[var(--ucs-text-primary)] transition-colors duration-300">
      {/* Shared Adaptive Navbar */}
      <Navbar />

      {/* =========================================================
          1. CINEMATIC ABOUT HERO — ADAPTIVE THEME
      ========================================================= */}
      <section className="relative min-h-[90svh] overflow-hidden bg-[var(--ucs-bg-hero)] pt-20 sm:pt-28 md:pt-32 transition-colors duration-300">
        {/* Ambient architectural lighting */}
        <div className="pointer-events-none absolute -left-40 top-16 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-[var(--ucs-glow-blue)] blur-[100px] sm:blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-[var(--ucs-glow-gold)] blur-[120px] sm:blur-[140px]" />

        {/* Subtle architectural grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[var(--ucs-grid-opacity)]"
          style={{
            backgroundImage:
              "linear-gradient(var(--ucs-grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--ucs-grid-color) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto grid min-h-[calc(90svh-5rem)] max-w-7xl items-center gap-10 sm:gap-12 px-4 sm:px-6 py-12 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          {/* Left Column: Heading & Mission */}
          <div className="relative z-20 max-w-2xl">
            <div className="mb-5 sm:mb-6 inline-flex items-center gap-2.5 sm:gap-3 rounded-full border border-[var(--ucs-gold-badge-border)] bg-[var(--ucs-gold-badge-bg)] px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--ucs-green)]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ucs-gold-text-contrast)]">
                Our Heritage & Purpose · Est. 1994
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[5.5rem] font-semibold leading-[1] sm:leading-[0.95] tracking-[-0.05em] text-[var(--ucs-text-primary)]">
              More than a school.
              <br />
              <span className="bg-gradient-to-r from-[var(--ucs-heading-gradient-from)] via-[var(--ucs-heading-gradient-via)] to-[var(--ucs-heading-gradient-to)] bg-clip-text text-transparent">
                A beginning.
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-[var(--ucs-text-secondary)]">
              Universal Central School was founded in 1994 with a clear and
              steadfast purpose: to give every child a strong foundation in their
              formative years. For over three decades in Mahabubnagar, we have
              nurtured young learners with clarity, care, and character.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#story"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-[#0B1733] shadow-[0_8px_25px_rgba(212,168,83,0.3)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,168,83,0.45)] text-center"
              >
                Read Our Story
                <span className="ml-3 transition group-hover:translate-x-1">
                  ↓
                </span>
              </a>

              <a
                href="#message"
                className="inline-flex items-center justify-center rounded-full border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-[var(--ucs-text-primary)] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[var(--ucs-gold)] text-center"
              >
                Principal’s Message
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-8 sm:mt-12 flex items-center justify-between sm:justify-start sm:gap-10 border-t border-[var(--ucs-border)] pt-6 sm:pt-8 sm:border-0 sm:p-0">
              <div>
                <p className="text-xl sm:text-3xl font-semibold text-[var(--ucs-text-primary)]">1994</p>
                <p className="mt-1 text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[var(--ucs-gold-text)]">
                  Founded
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-3xl font-semibold text-[var(--ucs-text-primary)]">30+</p>
                <p className="mt-1 text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[var(--ucs-gold-text)]">
                  Years of Trust
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-3xl font-semibold text-[var(--ucs-text-primary)] whitespace-nowrap">Nursery–VII</p>
                <p className="mt-1 text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[var(--ucs-gold-text)]">
                  Classes
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Perspective Hero Image Placeholder */}
          <div className="relative mx-auto h-[360px] sm:h-[420px] md:h-[480px] w-full max-w-[580px] [perspective:1400px]">
            {/* Floating Founded Year Badge */}
            <div className="absolute right-1 sm:right-3 top-1 sm:top-2 z-30 animate-[float_5s_ease-in-out_infinite] rounded-2xl border border-[var(--ucs-border)] bg-[var(--ucs-3d-anchor-bg)] px-3.5 py-2.5 sm:px-5 sm:py-4 shadow-[var(--ucs-shadow-lg)] backdrop-blur-xl">
              <p className="text-xl sm:text-2xl font-semibold text-[var(--ucs-3d-anchor-text)]">30+ Years</p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#DFB76C]">
                Educational Continuity
              </p>
            </div>

            {/* Primary Hero Placeholder Image */}
            <div className="absolute left-[3%] top-[8%] h-[260px] sm:h-[330px] md:h-[400px] w-[90%] rotate-[-3deg] transform-gpu overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border-2 border-[var(--ucs-3d-photo-border)] bg-[var(--ucs-3d-photo-frame)] p-1.5 shadow-[var(--ucs-shadow-hero)] transition duration-700 hover:rotate-0 hover:scale-[1.01] [transform-style:preserve-3d]">
              <PhotoPlaceholder
                title="PHOTO NEEDED — Campus Architecture & Grounds"
                subtitle="Wide horizontal landscape of the Universal Central School campus and building entrance"
                specs="16:10 Landscape · 4K / High Res"
                theme="auto"
                className="h-full w-full"
              />
            </div>

            {/* Floating Glass Highlight Card */}
            <div className="absolute -bottom-3 sm:-bottom-4 left-2 sm:left-4 z-20 w-48 sm:w-60 animate-[float_6s_ease-in-out_infinite] rounded-2xl sm:rounded-3xl border border-[var(--ucs-3d-glass-border)] bg-[var(--ucs-3d-glass-bg)] p-3.5 sm:p-5 shadow-[var(--ucs-shadow-md)] backdrop-blur-xl [transform:translateZ(80px)]">
              <div className="mb-1.5 sm:mb-2 flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#D4A853]" />
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--ucs-gold-text)]">
                  Mahabubnagar
                </p>
              </div>
              <p className="text-xs sm:text-sm font-medium text-[var(--ucs-3d-glass-text)]">
                A learning community built on trust and shared values.
              </p>
            </div>

            {/* Subtle Gold 3D Orb */}
            <div
              className="pointer-events-none absolute -bottom-4 sm:-bottom-8 right-3 sm:right-8 h-14 w-14 sm:h-20 sm:w-20 animate-[float_4s_ease-in-out_infinite] rounded-full [transform:translateZ(100px)]"
              style={{
                backgroundImage: "var(--ucs-3d-orb-gradient)",
                boxShadow: "0 20px 50px var(--ucs-3d-orb-shadow)",
              }}
            />
          </div>
        </div>

        {/* Bottom soft fade to canvas */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-t from-[var(--ucs-bg-page)] to-transparent" />
      </section>

      {/* =========================================================
          2. OUR STORY (Timeline: 1994 → Growth → Today)
      ========================================================= */}
      <section id="story" className="relative bg-[var(--ucs-bg-page)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
              01 / Our Story
            </p>
            <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] sm:leading-[1.05] tracking-[-0.05em] text-[var(--ucs-text-primary)]">
              Three decades of
              <br />
              <span className="text-[var(--ucs-heading-gradient-via)]">steadfast purpose.</span>
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-[var(--ucs-text-secondary)]">
              Universal Central School began in 1994 as an institution focused
              on the critical early years of childhood education. Over the past
              thirty years, the school has expanded with intentional care,
              staying faithful to its founding ideals.
            </p>
          </div>

          {/* Timeline Milestones */}
          <div className="mt-12 sm:mt-16 md:mt-20 space-y-10 sm:space-y-16">
            {/* Milestone 1: 1994 */}
            <div className="grid items-center gap-8 sm:gap-10 rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-6 sm:p-8 md:p-12 shadow-sm transition duration-500 hover:border-[#1A3674]/40 hover:shadow-xl lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#1A3674]/20 bg-[#1A3674]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1A3674] dark:text-[#92A7CC]">
                  Foundation Milestone
                </div>
                <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--ucs-text-primary)]">
                  1994: The Beginning
                </h3>
                <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-7 text-[var(--ucs-text-secondary)]">
                  Universal Central School was established in Mahabubnagar with a
                  foundational vision: that young children thrive when nurtured
                  in an environment of warmth, clear routine, and active
                  curiosity. The early focus was on establishing strong language,
                  mathematical fundamentals, and self-confidence.
                </p>
                <div className="mt-5 sm:mt-6 flex items-center gap-3 text-xs sm:text-sm text-[var(--ucs-text-muted)]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#1A3674] dark:bg-[#92A7CC]" />
                  <span>Foundational classes & values-first environment</span>
                </div>
              </div>

              <div>
                <PhotoPlaceholder
                  title="PHOTO NEEDED — UCS First Campus / Foundation Days (1994)"
                  subtitle="Archival photograph of the school's opening or original classroom setup"
                  specs="4:3 Ratio · Archival Scan / B&W or Color"
                  theme="auto"
                  className="min-h-[240px] sm:min-h-[280px]"
                />
              </div>
            </div>

            {/* Milestone 2: Growth & Co-Curriculars */}
            <div className="grid items-center gap-8 sm:gap-10 rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-6 sm:p-8 md:p-12 shadow-sm transition duration-500 hover:border-[var(--ucs-gold)] hover:shadow-xl lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <PhotoPlaceholder
                  title="PHOTO NEEDED — Growth Era: Early Sports & Cultural Events"
                  subtitle="Photograph showcasing early annual days, karate demonstrations, or dance performances"
                  specs="16:9 or 4:3 Ratio · Color Scan"
                  theme="auto"
                  className="min-h-[240px] sm:min-h-[280px]"
                />
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--ucs-gold-badge-border)] bg-[var(--ucs-gold-badge-bg)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--ucs-gold-text-contrast)]">
                  Expansion & Balance
                </div>
                <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--ucs-text-primary)]">
                  Expanding Beyond Textbooks
                </h3>
                <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-7 text-[var(--ucs-text-secondary)]">
                  As our student family grew, the curriculum expanded seamlessly
                  up to Grade VII. Understanding that childhood development
                  requires expression and physical health, UCS integrated karate,
                  classical dance, athletics, and cultural showcases directly
                  into the student journey.
                </p>
                <div className="mt-5 sm:mt-6 flex items-center gap-3 text-xs sm:text-sm text-[var(--ucs-text-muted)]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#D4A853]" />
                  <span>Academics paired with discipline, dance, and athletics</span>
                </div>
              </div>
            </div>

            {/* Milestone 3: Today (30+ Years) */}
            <div className="grid items-center gap-8 sm:gap-10 rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-6 sm:p-8 md:p-12 shadow-sm transition duration-500 hover:border-[#0B1B3D]/40 hover:shadow-xl lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--ucs-border)] bg-[var(--ucs-toggle-bg)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--ucs-text-primary)]">
                  Present Day
                </div>
                <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--ucs-text-primary)]">
                  A Community of 1,800+ Students
                </h3>
                <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-7 text-[var(--ucs-text-secondary)]">
                  Today, Universal Central School stands as a respected
                  cornerstone of education in Mahabubnagar. With more than 1,800
                  learners from Nursery to Grade VII, we continue to bridge
                  fundamental principles with engaging classroom experiences.
                </p>
                <div className="mt-5 sm:mt-6 flex items-center gap-3 text-xs sm:text-sm text-[var(--ucs-text-muted)]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#0B1B3D] dark:bg-white" />
                  <span>Nursery to Grade VII · 30+ Years of community service</span>
                </div>
              </div>

              <div>
                <PhotoPlaceholder
                  title="PHOTO NEEDED — Contemporary Campus Gathering"
                  subtitle="Photograph of the full school assembly, modern campus courtyard, or student group"
                  specs="16:9 Landscape · High Resolution"
                  theme="auto"
                  className="min-h-[240px] sm:min-h-[280px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. PRINCIPAL'S MESSAGE (SELECTIVE DEEP BLUE CONTRAST SECTION)
      ========================================================= */}
      <section id="message" className="relative overflow-hidden bg-[#0B1B3D] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 text-white">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#1D4ED8]/15 blur-[100px] sm:blur-[120px]" />
        <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#D4A853]/15 blur-[100px] sm:blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 sm:pb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#DFB76C]">
                02 / Leadership & Guidance
              </p>
              <h2 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                A Note from the Principal
              </h2>
            </div>

            {/* Clear administrative review notice badge */}
            <div className="inline-flex self-start sm:self-auto items-center gap-2 rounded-full border border-[#D4A853]/40 bg-[#D4A853]/10 px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-medium text-[#DFB76C]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#D4A853]" />
              <span>Draft message for administrative review</span>
            </div>
          </div>

          <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-12">
            {/* Left: Portrait Placeholder */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <PhotoPlaceholder
                  title="PHOTO NEEDED — Principal portrait"
                  subtitle="Formal professional portrait of the School Principal"
                  specs="4:5 Vertical Portrait · Studio / Campus Setting"
                  theme="dark"
                  className="min-h-[340px] sm:min-h-[400px] md:min-h-[460px]"
                />

                <div className="mt-3.5 sm:mt-4 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-4 text-center backdrop-blur-md">
                  <p className="text-xs sm:text-sm font-semibold tracking-wide text-white">
                    Principal
                  </p>
                  <p className="text-[11px] sm:text-xs text-white/50">
                    Universal Central School, Mahabubnagar
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Draft Educational Note */}
            <div className="rounded-[2rem] sm:rounded-[2.5rem] border border-[#D4A853]/25 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl lg:col-span-7 lg:p-12">
              <div className="text-3xl sm:text-4xl text-[#DFB76C] opacity-80">“</div>

              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed text-white/85">
                <p>
                  At Universal Central School, we believe that education in the
                  formative years is not merely about syllabus completion — it is
                  about building the bedrock upon which all future learning
                  stands.
                </p>

                <p>
                  From Nursery through Grade VII, children are naturally curious,
                  observant, and eager to discover the world. Our role as
                  educators and mentors is to channel that natural energy into
                  thoughtful inquiry, disciplined habits, and clear fundamentals.
                  When children are encouraged to ask questions and take pride in
                  their daily efforts, confidence becomes second nature.
                </p>

                <p>
                  Equally vital is character. Through daily school life —
                  whether in the classroom, on the sports ground, in karate
                  practice, or on the cultural stage — we emphasize kindness,
                  mutual respect, and resilience. We thank our parents for the
                  trust they have placed in Universal Central School over the
                  decades, and we remain dedicated to helping every child take
                  their first steps with courage and purpose.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 border-t border-white/10 pt-5 sm:pt-6">
                <p className="text-xs sm:text-sm font-semibold text-white">
                  Office of the Principal
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#DFB76C]">
                  Universal Central School
                </p>
                <p className="mt-2 text-[10px] sm:text-[11px] text-white/45 italic">
                  {"// Note for administration: This draft will be updated with the Principal’s approved text and signature."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. WHAT WE BELIEVE (Core Pillars — Adaptive)
      ========================================================= */}
      <section className="relative bg-[var(--ucs-bg-page)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
              03 / Our Core Beliefs
            </p>
            <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-[-0.05em] text-[var(--ucs-text-primary)]">
              Principles that guide
              <br />
              <span className="text-[var(--ucs-heading-gradient-via)]">every school day.</span>
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[var(--ucs-text-secondary)]">
              Our educational philosophy is designed to foster both intellect
              and character, ensuring every student develops strong roots and
              the confidence to grow.
            </p>
          </div>

          {/* Beliefs Grid */}
          <div className="mt-10 sm:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Strong Foundations",
                description:
                  "Mastery of literacy, numeracy, and scientific fundamentals in the formative early grades creates lasting academic confidence.",
              },
              {
                number: "02",
                title: "Curiosity & Inquiry",
                description:
                  "Children learn deeply when encouraged to ask questions, observe, and understand concepts rather than simply memorizing.",
              },
              {
                number: "03",
                title: "Character & Discipline",
                description:
                  "Self-discipline, polite conduct, and mutual respect are woven into everyday classroom life, routines, and assemblies.",
              },
              {
                number: "04",
                title: "Confidence & Expression",
                description:
                  "From classroom presentations to stage events, we help children articulate ideas clearly, listen actively, and speak with assurance.",
              },
              {
                number: "05",
                title: "Growth Beyond Academics",
                description:
                  "Dance, karate, athletics, and creative projects cultivate physical agility, mental resilience, teamwork, and healthy self-expression.",
              },
            ].map((pillar) => (
              <div
                key={pillar.number}
                className="group relative flex flex-col justify-between rounded-[1.75rem] sm:rounded-[2rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-6 sm:p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[var(--ucs-gold)] hover:shadow-xl"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ucs-gold-text)]">
                    Pillar {pillar.number}
                  </span>
                  <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-semibold text-[var(--ucs-text-primary)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-5 sm:leading-relaxed text-[var(--ucs-text-muted)]">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs font-semibold text-[var(--ucs-gold-text)] opacity-0 transition duration-300 group-hover:opacity-100">
                  <span>UCS Core Value</span>
                  <span>→</span>
                </div>
              </div>
            ))}

            {/* Sixth decorative card: Deep Navy contrast accent */}
            <div className="flex flex-col justify-between rounded-[1.75rem] sm:rounded-[2rem] border border-[#D4A853]/30 bg-gradient-to-br from-[#0B1B3D] to-[#071228] p-6 sm:p-8 text-white shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DFB76C]">
                  Our Commitment
                </span>
                <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-semibold text-white">
                  Nurturing Every Learner
                </h3>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-5 sm:leading-relaxed text-white/75">
                  Every child learns at their own pace. Our teachers maintain a
                  supportive, patient environment that celebrates effort and
                  continuous progress.
                </p>
              </div>

              <p className="mt-8 text-xs font-medium uppercase tracking-widest text-[#DFB76C]/80">
                Nursery to Grade VII
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. OUR JOURNEY / HISTORICAL GALLERY (SELECTIVE CONTRAST)
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-[#D4A853]/25 bg-[#060E20] px-6 py-28 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#DFB76C]">
                04 / Archival Collection
              </p>
              <h2 className="mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.05em]">
                Moments in our history.
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm leading-5 sm:leading-relaxed text-white/50">
              A curated photographic record of three decades of learning,
              community milestones, and student memories. Archival photographs
              are currently being collected from our records.
            </p>
          </div>

          {/* Archival Grid of PhotoPlaceholders */}
          <div className="mt-10 sm:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <PhotoPlaceholder
              title="PHOTO NEEDED — Old School Photograph"
              subtitle="Early archival photograph of students and the original school premises"
              specs="4:3 Ratio · Archival / B&W"
              theme="dark"
              className="min-h-[260px] sm:min-h-[320px] md:min-h-[360px]"
            />

            <PhotoPlaceholder
              title="PHOTO NEEDED — Early Campus"
              subtitle="The campus grounds and classroom blocks during the early foundation years"
              specs="4:3 Ratio · Historical"
              theme="dark"
              className="min-h-[260px] sm:min-h-[320px] md:min-h-[360px]"
            />

            <PhotoPlaceholder
              title="PHOTO NEEDED — Historical Milestone"
              subtitle="Early Annual Sports Day, celebration, or landmark school event"
              specs="4:3 Ratio · Event Photography"
              theme="dark"
              className="min-h-[260px] sm:min-h-[320px] md:min-h-[360px]"
            />

            <PhotoPlaceholder
              title="PHOTO NEEDED — Old Staff & Student Assembly"
              subtitle="Early faculty group photograph or morning school assembly in progress"
              specs="4:3 Ratio · Staff / Assembly"
              theme="dark"
              className="min-h-[260px] sm:min-h-[320px] md:min-h-[360px]"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          6. TODAY (Universal Central School Today)
      ========================================================= */}
      <section className="relative bg-[var(--ucs-bg-section-alt)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
                05 / Present Day
              </p>
              <h2 className="mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.05em] text-[var(--ucs-text-primary)]">
                Universal Central School
                <br />
                <span className="text-[var(--ucs-heading-gradient-via)]">today.</span>
              </h2>

              <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-[var(--ucs-text-secondary)]">
                Today, Universal Central School is a vibrant educational home
                for over 1,800 students in Mahabubnagar. We balance structured
                academic inquiry with vibrant opportunities in karate, dance,
                sports, and cultural programs.
              </p>

              <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 sm:gap-8 border-t border-[var(--ucs-border)] pt-6 sm:pt-8">
                <div>
                  <p className="text-2xl sm:text-3xl font-semibold text-[var(--ucs-text-primary)]">1,800+</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[var(--ucs-gold-text)]">
                    Enrolled Students
                  </p>
                </div>

                <div>
                  <p className="text-xl sm:text-3xl font-semibold text-[var(--ucs-text-primary)] whitespace-nowrap">Nursery–VII</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[var(--ucs-gold-text)]">
                    Grade Spectrum
                  </p>
                </div>

                <div>
                  <p className="text-xl sm:text-3xl font-semibold text-[var(--ucs-text-primary)]">30+</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[var(--ucs-gold-text)]">
                    Years of Educational Service
                  </p>
                </div>

                <div>
                  <p className="text-2xl sm:text-3xl font-semibold text-[var(--ucs-text-primary)]">Mahabubnagar</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[var(--ucs-gold-text)]">
                    Telangana, India
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Today Card using existing campus photo */}
            <div className="relative h-[280px] sm:h-[380px] md:h-[480px] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border-2 border-[var(--ucs-3d-photo-border)] bg-[var(--ucs-3d-photo-frame)] p-1.5 shadow-[var(--ucs-shadow-md)]">
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
                <Image
                  src="/school.png"
                  alt="Universal Central School campus today"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060E20]/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
                  <span className="rounded-full border border-[#D4A853]/40 bg-[#0B1B3D]/85 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#DFB76C] backdrop-blur-md">
                    Active Learning Community
                  </span>
                  <p className="mt-2 sm:mt-3 text-lg sm:text-2xl font-medium text-white">
                    Growing with purpose, every single day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. CALL TO ACTION (CTA — Adaptive Banner Card)
      ========================================================= */}
      <section className="bg-[var(--ucs-admissions-outer-bg)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-[#D4A853]/30 bg-gradient-to-br from-[#0B1B3D] via-[#0D214D] to-[#071228] p-6 sm:p-10 md:p-16 lg:p-20 shadow-2xl">
            {/* Ambient decorative glow */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-[#1D4ED8]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-[#D4A853]/20 blur-3xl" />

            <div className="relative z-10 grid gap-8 sm:gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#DFB76C]">
                  Admissions & Future
                </p>
                <h2 className="mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-[-0.05em] text-white">
                  Every journey begins
                  <br />
                  <span className="text-[#DFB76C]">somewhere.</span>
                </h2>
                <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base leading-6 sm:leading-relaxed text-white/70">
                  Give your child the gift of strong foundational learning,
                  healthy curiosity, and lifelong character at Universal
                  Central School.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  href="/academics"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#D4A853]/40 hover:bg-white/20 text-center"
                >
                  Explore Academics
                </Link>
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-bold text-[#0B1733] shadow-[0_10px_30px_rgba(212,168,83,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(212,168,83,0.5)] text-center"
                >
                  Admissions & Enquiry →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Footer */}
      <Footer />

      {/* =========================================================
          ANIMATIONS & ACCESSIBILITY
      ========================================================= */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          ::before,
          ::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}
