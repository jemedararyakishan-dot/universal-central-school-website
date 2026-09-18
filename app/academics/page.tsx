import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Academics | Universal Central School",
  description:
    "Explore the academic philosophy and curriculum framework of Universal Central School, Mahabubnagar. Foundational learning from Nursery to Grade VII in English Medium.",
};

const STAGES = [
  {
    stage: "Stage 01",
    name: "Pre-Primary Wing",
    grades: "Nursery · LKG · UKG",
    focus: "Wonder, Sensory Development & Early Language",
    description:
      "The earliest years are about fostering natural curiosity and building confidence in a warm, welcoming setting. We introduce foundational phonetics, tactile motor skills, number play, and expressive storytelling.",
    highlights: [
      "Activity-based phonics and early vocabulary",
      "Play-led sensory and fine motor coordination",
      "Number rhymes and early spatial awareness",
      "Joyful routines that build social confidence",
    ],
  },
  {
    stage: "Stage 02",
    name: "Primary Wing",
    grades: "Classes 1 to 5",
    focus: "Conceptual Clarity, Reading Fluency & Numeracy",
    description:
      "As children advance, the focus transitions to conceptual understanding across core subjects. Classrooms encourage active questions, structured handwriting, bilingual proficiency, and daily mathematical problem-solving.",
    highlights: [
      "Core literacy, reading comprehension and expressive writing",
      "Mathematical fundamentals, number sense and mental calculations",
      "Environmental studies and hands-on science observations",
      "Language study in English, Hindi, and regional languages",
    ],
  },
  {
    stage: "Stage 03",
    name: "Upper Primary Wing",
    grades: "Classes 6 & 7",
    focus: "Critical Inquiry, Scientific Method & Articulation",
    description:
      "In Grades 6 and 7, students develop analytical thinking, structured presentation skills, and scientific inquiry. They are encouraged to articulate ideas clearly and connect academic knowledge to real-world observation.",
    highlights: [
      "Experimental science with laboratory demonstrations",
      "Algebraic thinking, geometry and logical reasoning",
      "Student presentations and project exhibitions",
      "Preparation for regional talent and Olympiad examinations",
    ],
  },
];

const CORE_AREAS = [
  {
    title: "Mathematics & Reasoning",
    desc: "From fundamental arithmetic to algebraic problem-solving, students cultivate analytical thinking, speed, and mental agility.",
    icon: (
      <svg className="h-6 w-6 text-[#DFB76C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 7h6m0 10H9m6-5H9M4 19h16a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    title: "Science & Exploration",
    desc: "Nurturing the spirit of observation and discovery through physical phenomena, life science, and classroom experiments.",
    icon: (
      <svg className="h-6 w-6 text-[#DFB76C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "English & Communication",
    desc: "Developing clear verbal articulation, grammar, phonetics, reading fluency, and thoughtful written expression.",
    icon: (
      <svg className="h-6 w-6 text-[#DFB76C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Language & Literature",
    desc: "Bilingual language foundations in Hindi and Telugu that foster cultural understanding and linguistic versatility.",
    icon: (
      <svg className="h-6 w-6 text-[#DFB76C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    title: "Social Studies & Civics",
    desc: "Learning history, geography, communities, and civic responsibility to understand our heritage and the world around us.",
    icon: (
      <svg className="h-6 w-6 text-[#DFB76C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Digital & Computer Literacy",
    desc: "Early familiarity with computers, logical thinking, digital tools, and practical lab assignments.",
    icon: (
      <svg className="h-6 w-6 text-[#DFB76C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function AcademicsPage() {
  return (
    <main className="overflow-hidden bg-[var(--ucs-bg-page)] text-[var(--ucs-text-primary)] transition-colors duration-300">
      <Navbar />

      {/* =========================================================
          HERO — ACADEMIC EXCELLENCE
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
                Curriculum & Learning Continuum
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[5.5rem] font-semibold leading-[1] sm:leading-[0.95] tracking-[-0.05em] text-[var(--ucs-text-primary)]">
              Learning built on
              <br />
              <span className="bg-gradient-to-r from-[var(--ucs-heading-gradient-from)] via-[var(--ucs-heading-gradient-via)] to-[var(--ucs-heading-gradient-to)] bg-clip-text text-transparent">
                clarity & curiosity.
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-[var(--ucs-text-secondary)]">
              At Universal Central School, learning is not confined to rote memorization. We provide a structured English Medium framework from Nursery to Grade VII that equips students with deep conceptual clarity, analytical courage, and articulate expression.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#stages"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-[#0B1733] shadow-[0_8px_25px_rgba(212,168,83,0.3)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,168,83,0.45)] text-center"
              >
                Explore Learning Stages ↓
              </a>

              <Link
                href="/admissions"
                className="inline-flex items-center justify-center rounded-full border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-[var(--ucs-text-primary)] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[var(--ucs-gold)] text-center"
              >
                Admission Guidance →
              </Link>
            </div>

            {/* Metrics */}
            <div className="mt-10 sm:mt-14 flex items-center justify-between sm:justify-start sm:gap-12 border-t border-[var(--ucs-border)] pt-6 sm:pt-8 sm:border-0 sm:p-0">
              <div>
                <p className="text-xl sm:text-3xl font-semibold text-[var(--ucs-text-primary)]">Nursery–VII</p>
                <p className="mt-1 text-[9px] sm:text-xs uppercase tracking-wider text-[var(--ucs-gold-text)]">
                  Grades Offered
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-3xl font-semibold text-[var(--ucs-text-primary)]">English</p>
                <p className="mt-1 text-[9px] sm:text-xs uppercase tracking-wider text-[var(--ucs-gold-text)]">
                  Medium of Study
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-3xl font-semibold text-[var(--ucs-text-primary)]">30+ Years</p>
                <p className="mt-1 text-[9px] sm:text-xs uppercase tracking-wider text-[var(--ucs-gold-text)]">
                  Academic Legacy
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 bg-gradient-to-t from-[var(--ucs-bg-page)] to-transparent" />
      </section>

      {/* =========================================================
          SECTION 01: LEARNING STAGES (Pre-Primary, Primary, Upper Primary)
      ========================================================= */}
      <section id="stages" className="relative bg-[var(--ucs-bg-page)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
              01 / The Academic Journey
            </p>
            <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.05em] text-[var(--ucs-text-primary)]">
              Structured stages for
              <br />
              <span className="text-[var(--ucs-heading-gradient-via)]">every age of growth.</span>
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-[var(--ucs-text-secondary)]">
              Each child grows uniquely. Our curriculum is partitioned into deliberate developmental wings to ensure age-appropriate progression from playful sensory discovery to disciplined analytical thought.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 space-y-8 sm:space-y-12">
            {STAGES.map((st) => (
              <div
                key={st.stage}
                className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-6 sm:p-10 md:p-12 shadow-sm transition duration-500 hover:border-[var(--ucs-gold)] hover:shadow-xl"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                  <div className="lg:col-span-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--ucs-gold-badge-border)] bg-[var(--ucs-gold-badge-bg)] px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--ucs-gold-text)]">
                      {st.stage} · {st.grades}
                    </div>

                    <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--ucs-text-primary)]">
                      {st.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-wider text-[var(--ucs-gold-text-contrast)]">
                      {st.focus}
                    </p>

                    <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-[var(--ucs-text-secondary)]">
                      {st.description}
                    </p>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="rounded-2xl border border-[var(--ucs-border-subtle)] bg-[var(--ucs-bg-card-depth)] p-5 sm:p-7">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ucs-text-muted)]">
                        Key Learning Dimensions
                      </p>

                      <ul className="mt-4 space-y-3">
                        {st.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--ucs-text-secondary)]">
                            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--ucs-gold-badge-bg)] text-[var(--ucs-gold-text)] font-bold text-[10px]">
                              ✓
                            </span>
                            <span className="leading-5">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 02: CORE LEARNING AREAS (GRID)
      ========================================================= */}
      <section className="relative overflow-hidden bg-[var(--ucs-bg-section-alt)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
              02 / Core Learning Areas
            </p>
            <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.05em] text-[var(--ucs-text-primary)]">
              A balanced, grounded
              <br />
              <span className="text-[var(--ucs-heading-gradient-via)]">foundation.</span>
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[var(--ucs-text-secondary)]">
              We focus on building rock-solid foundations in traditional disciplines while introducing digital competencies early.
            </p>
          </div>

          <div className="mt-10 sm:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_AREAS.map((area, i) => (
              <div
                key={area.title}
                className="group relative flex flex-col justify-between rounded-[1.75rem] sm:rounded-[2rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-6 sm:p-8 shadow-sm transition duration-500 hover:-translate-y-1.5 hover:border-[var(--ucs-gold)] hover:shadow-xl"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--ucs-border)] bg-[var(--ucs-toggle-bg)] shadow-sm">
                    {area.icon}
                  </div>

                  <h3 className="mt-5 text-xl sm:text-2xl font-semibold text-[var(--ucs-text-primary)]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-6 text-[var(--ucs-text-muted)]">
                    {area.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--ucs-border-subtle)] text-[11px] font-semibold text-[var(--ucs-gold-text)] flex items-center justify-between">
                  <span>Foundational Focus</span>
                  <span>0{i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 03: HOW WE LEARN — PROJECTS & PRESENTATIONS
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#081530] px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28 text-white">
        <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#D4A853]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-[#1D4ED8]/15 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#DFB76C]">
                03 / Beyond The Chalkboard
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
                Projects, presentation, & mathematical culture.
              </h2>
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-white/75">
                Students understand ideas deepest when they actively demonstrate, build, and explain them. Throughout the academic term, Universal Central School weaves practical assignments, abacus mental arithmetic, science exhibits, and spoken presentations directly into the learning rhythm.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-md">
                  <h4 className="text-base font-semibold text-[#DFB76C]">Exhibitions & Science Demonstrations</h4>
                  <p className="mt-1 text-xs sm:text-sm text-white/65">
                    Students collaborate on physical working models, charts, and science demonstrations that cultivate curiosity.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-md">
                  <h4 className="text-base font-semibold text-[#DFB76C]">Public Speaking & Recitation</h4>
                  <p className="mt-1 text-xs sm:text-sm text-white/65">
                    Daily morning assembly talks, poetry recitations (Padyam Bhavam), and storytelling build articulate, confident voices.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-md">
                  <h4 className="text-base font-semibold text-[#DFB76C]">Mathematical Rigor & Olympiad Support</h4>
                  <p className="mt-1 text-xs sm:text-sm text-white/65">
                    Encouraging participation in state competitions like the Ramanujan Maths Talent Test and SKK Olympiad to instill a love for numbers.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[320px] sm:h-[420px] md:h-[480px] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border-2 border-white/15 bg-white/5 p-2 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-[1.65rem] sm:rounded-[2.15rem]">
                <Image
                  src="/classroom.jpeg"
                  alt="Universal Central School classroom learning atmosphere"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060E20]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="rounded-full border border-[#D4A853]/40 bg-[#0B1B3D]/80 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#DFB76C] backdrop-blur-md">
                    Classroom Culture
                  </span>
                  <p className="mt-2 text-xl sm:text-2xl font-medium text-white">
                    Where curious questions turn into lifelong clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 04: CALL TO ACTION
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
                  Give your child
                  <br />
                  a strong beginning.
                </h2>
                <p className="mt-4 max-w-xl text-sm sm:text-base text-white/70">
                  Admissions are open for Nursery through Grade VII. Connect with our admissions counselors to learn more about the school curriculum and environment.
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
                  Visit Our Campus
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
