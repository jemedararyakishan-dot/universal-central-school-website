import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "Student Life & Campus | Universal Central School",
  description:
    "Discover student life, co-curricular activities, karate, dance, sports, and campus facilities at Universal Central School, Mahabubnagar.",
};

const CO_CURRICULARS = [
  {
    title: "Karate & Self-Discipline",
    tag: "Martial Arts",
    description:
      "Karate training instills self-discipline, mental focus, resilience, and physical fitness. Students learn structured kata routines, building posture, alertness, and confidence.",
    benefits: ["Mental focus & concentration", "Physical balance and agility", "Self-defense & personal discipline"],
  },
  {
    title: "Classical & Cultural Dance",
    tag: "Creative Expression",
    description:
      "Dance forms allow students to explore rhythmic movement, graceful coordination, and Indian cultural heritage. Group rehearsals build teamwork and eliminate stage fear.",
    benefits: ["Rhythmic poise and posture", "Confidence in front of audiences", "Celebration of cultural heritage"],
  },
  {
    title: "Sports & Physical Play",
    tag: "Athletics & Games",
    description:
      "Healthy bodies nurture active minds. Daily physical exercises, assembly drills, team games, and annual athletic meets encourage fair play, stamina, and camaraderie.",
    benefits: ["Motor skill development", "Team spirit & sportsmanship", "Healthy daily energy habits"],
  },
  {
    title: "Cultural Events & Balotsavam",
    tag: "Showcase & Arts",
    description:
      "UCS students regularly participate in regional cultural celebrations, poetry recitations (Padyam Bhavam), Telugu storytelling (Katha Rachana), and group song ensembles.",
    benefits: ["Artistic self-expression", "Language appreciation", "State & district festival participation"],
  },
];

const CAMPUS_FACILITIES = [
  {
    title: "Computer Lab",
    subtitle: "Practical Digital Foundations",
    description:
      "A dedicated, teacher-guided computer learning environment where students practice fundamental computing, keyboard skills, logic building, and software literacy.",
    specs: "Dedicated Computer Facility · Supervised Sessions",
    hasRealImage: false,
  },
  {
    title: "Science Laboratory",
    subtitle: "Observation & Hands-on Experiments",
    description:
      "A safe, practical space equipped for basic scientific demonstrations, specimens, charts, and models that make textbook concepts tangible and real.",
    specs: "Practical Science Lab · Demonstration Tables",
    hasRealImage: false,
  },
  {
    title: "Playground & Assembly Courtyard",
    subtitle: "Outdoor Activity & Drills",
    description:
      "Spacious open-air grounds for morning school assembly, physical education drills, sports matches, karate sessions, and active recess play.",
    specs: "Open Play Grounds · Assembly Grounds",
    hasRealImage: false,
  },
  {
    title: "Safe & Secure Campuses",
    subtitle: "Mettugadda & Sri Ramakrishna Colony",
    description:
      "Two welcoming locations in Mahabubnagar providing well-ventilated classrooms, round-the-clock CCTV surveillance, clean drinking water, and caring supervision.",
    specs: "Two Branch Locations · CCTV Monitored",
    hasRealImage: true,
  },
];

export default function StudentLifePage() {
  return (
    <main className="overflow-hidden bg-[var(--ucs-bg-page)] text-[var(--ucs-text-primary)] transition-colors duration-300">
      <Navbar />

      {/* =========================================================
          HERO — STUDENT LIFE & CAMPUS
      ========================================================= */}
      <section className="relative min-h-[75svh] sm:min-h-[85svh] overflow-hidden bg-[var(--ucs-bg-hero)] pt-24 sm:pt-32 transition-colors duration-300">
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
                Student Life · Campus · Facilities
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[5.5rem] font-semibold leading-[1] sm:leading-[0.95] tracking-[-0.05em] text-[var(--ucs-text-primary)]">
              More ways
              <br />
              <span className="bg-gradient-to-r from-[var(--ucs-heading-gradient-from)] via-[var(--ucs-heading-gradient-via)] to-[var(--ucs-heading-gradient-to)] bg-clip-text text-transparent">
                to discover & grow.
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-[var(--ucs-text-secondary)]">
              A child’s formative education is shaped just as much by movement, expression, and camaraderie as it is by books. Through karate, dance, sports, cultural festivals, and welcoming campus facilities, life at UCS is vibrant and well-rounded.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#activities"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-[#0B1733] shadow-[0_8px_25px_rgba(212,168,83,0.3)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,168,83,0.45)] text-center"
              >
                Explore Co-Curriculars ↓
              </a>

              <a
                href="#facilities"
                className="inline-flex items-center justify-center rounded-full border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-[var(--ucs-text-primary)] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[var(--ucs-gold)] text-center"
              >
                Campus Facilities →
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 bg-gradient-to-t from-[var(--ucs-bg-page)] to-transparent" />
      </section>

      {/* =========================================================
          SECTION 01: CO-CURRICULAR ACTIVITIES (Movement & Arts)
      ========================================================= */}
      <section id="activities" className="relative bg-[var(--ucs-bg-page)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
                01 / Movement & Expression
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.05em] text-[var(--ucs-text-primary)]">
                Building confidence through
                <br />
                <span className="text-[var(--ucs-heading-gradient-via)]">movement and art.</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--ucs-text-secondary)]">
              Discipline and creativity reinforce each other. Our activity program provides regular weekly instruction in physical fitness, martial discipline, and cultural performing arts.
            </p>
          </div>

          {/* Feature Showcase Banner */}
          <div className="mt-12 sm:mt-16 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border-2 border-[var(--ucs-3d-photo-border)] bg-[var(--ucs-3d-photo-frame)] p-2 shadow-xl">
            <div className="relative h-[260px] sm:h-[360px] md:h-[460px] w-full overflow-hidden rounded-[1.65rem] sm:rounded-[2.15rem]">
              <Image
                src="/activity.jpeg"
                alt="Universal Central School students engaged in a school activity"
                fill
                sizes="(max-width: 1024px) 100vw, 85vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060E20]/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
                <span className="rounded-full border border-[#D4A853]/40 bg-[#0B1B3D]/80 px-3.5 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#DFB76C] backdrop-blur-md">
                  Active Learning Community
                </span>
                <p className="mt-3 text-xl sm:text-3xl font-medium text-white max-w-2xl">
                  Where practice builds poise, and every stage gives children a voice.
                </p>
              </div>
            </div>
          </div>

          {/* Activity Cards Grid */}
          <div className="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2">
            {CO_CURRICULARS.map((item, i) => (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between rounded-[2rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-6 sm:p-8 shadow-sm transition duration-500 hover:-translate-y-1.5 hover:border-[var(--ucs-gold)] hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex rounded-full border border-[var(--ucs-gold-badge-border)] bg-[var(--ucs-gold-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--ucs-gold-text)]">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono text-[var(--ucs-text-subtle)]">0{i + 1}</span>
                  </div>

                  <h3 className="mt-5 text-2xl sm:text-3xl font-semibold text-[var(--ucs-text-primary)]">
                    {item.title}
                  </h3>

                  <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[var(--ucs-text-secondary)]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[var(--ucs-border-subtle)]">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ucs-text-muted)] mb-2.5">
                    Developmental Benefits
                  </p>
                  <ul className="space-y-1.5">
                    {item.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[var(--ucs-text-secondary)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--ucs-gold)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 02: CAMPUS & FACILITIES (Practical & Verified)
      ========================================================= */}
      <section id="facilities" className="relative bg-[var(--ucs-bg-section-alt)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
              02 / Campus Environment
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.05em] text-[var(--ucs-text-primary)]">
              Spaces designed for
              <br />
              <span className="text-[var(--ucs-heading-gradient-via)]">safety and growth.</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[var(--ucs-text-secondary)]">
              Our campus infrastructure focuses on providing comfortable, clean, and safe facilities where children can learn and interact with peace of mind.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2">
            {CAMPUS_FACILITIES.map((fac) => {
              if (fac.hasRealImage) {
                return (
                  <div
                    key={fac.title}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-6 sm:p-8 shadow-md transition duration-500 hover:border-[var(--ucs-gold)]"
                  >
                    <div>
                      <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        Campus Location
                      </span>

                      <h3 className="mt-4 text-2xl font-semibold text-[var(--ucs-text-primary)]">
                        {fac.title}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-[var(--ucs-gold-text)] mt-1">
                        {fac.subtitle}
                      </p>

                      <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[var(--ucs-text-secondary)]">
                        {fac.description}
                      </p>
                    </div>

                    <div className="mt-6 relative h-48 sm:h-56 w-full overflow-hidden rounded-2xl border border-[var(--ucs-border)]">
                      <Image
                        src="/school.png"
                        alt="Universal Central School campus grounds"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 text-white">
                        <p className="text-xs font-semibold">Mahabubnagar, Telangana</p>
                        <p className="text-[10px] text-white/70">Mettugadda & Sri Ramakrishna Colony</p>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={fac.title}
                  className="group relative flex flex-col justify-between rounded-[2rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-6 sm:p-8 shadow-md transition duration-500 hover:border-[var(--ucs-gold)] hover:shadow-xl"
                >
                  <div>
                    <span className="inline-flex rounded-full border border-[var(--ucs-gold-badge-border)] bg-[var(--ucs-gold-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--ucs-gold-text)]">
                      UCS Facility
                    </span>

                    <h3 className="mt-4 text-2xl font-semibold text-[var(--ucs-text-primary)]">
                      {fac.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[var(--ucs-gold-text)] mt-1">
                      {fac.subtitle}
                    </p>

                    <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[var(--ucs-text-secondary)]">
                      {fac.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <PhotoPlaceholder
                      title={`PHOTO NEEDED — ${fac.title}`}
                      subtitle={`Facility photograph of ${fac.title.toLowerCase()} in operation`}
                      specs={fac.specs}
                      theme="auto"
                      className="min-h-[190px] sm:min-h-[220px]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 03: CTA
      ========================================================= */}
      <section className="bg-[var(--ucs-admissions-outer-bg)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-[#D4A853]/30 bg-gradient-to-br from-[#0B1B3D] via-[#0D214D] to-[#071228] p-6 sm:p-10 md:p-14 lg:p-18 shadow-2xl">
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#DFB76C]">
                  Admissions
                </p>
                <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
                  Experience school life
                  <br />
                  firsthand.
                </h2>
                <p className="mt-4 max-w-xl text-sm sm:text-base text-white/70">
                  Visit our branches in Mahabubnagar to explore our classrooms, playground, and learning atmosphere.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-[#0B1733] shadow-[0_10px_30px_rgba(212,168,83,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(212,168,83,0.5)] text-center"
                >
                  Admissions Process →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#D4A853]/40 text-center"
                >
                  Contact School Office
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
