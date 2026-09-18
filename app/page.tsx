import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[var(--ucs-bg-page)] text-[var(--ucs-text-primary)] transition-colors duration-300">

      {/* =========================================================
          NAVBAR — ADAPTIVE THEME WITH POLISHED TOGGLE
      ========================================================= */}
      <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-[var(--ucs-border-navbar)] bg-[var(--ucs-bg-navbar)] px-4 py-3 shadow-[var(--ucs-shadow-sm)] backdrop-blur-xl transition-colors duration-300 md:px-6">

          <a href="#" className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[var(--ucs-border)] bg-white shadow-sm">
              <Image
                src="/ucs-logo.png"
                alt="Universal Central School logo"
                fill
                sizes="48px"
                className="object-contain p-1"
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-wide text-[var(--ucs-text-primary)]">
                UNIVERSAL CENTRAL SCHOOL
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--ucs-gold-text)]">
                Since 1994
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links & Action Group */}
          <div className="hidden items-center gap-6 text-sm font-medium text-[var(--ucs-text-secondary)] lg:flex">
            <a href="#about" className="transition hover:text-[var(--ucs-gold-text)]">About</a>
            <a href="#academics" className="transition hover:text-[var(--ucs-gold-text)]">Academics</a>
            <a href="#life" className="transition hover:text-[var(--ucs-gold-text)]">Student Life</a>
            <a href="#campus" className="transition hover:text-[var(--ucs-gold-text)]">Campus</a>
            <a href="#admissions" className="transition hover:text-[var(--ucs-gold-text)]">Admissions</a>

            <div className="flex items-center gap-3 border-l border-[var(--ucs-border)] pl-5">
              {/* Polished Theme Toggle */}
              <ThemeToggle />

              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-5 py-2.5 font-semibold text-[#0B1733] shadow-[0_4px_16px_rgba(212,168,83,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(212,168,83,0.45)]"
              >
                Enquire Now
              </a>
            </div>
          </div>

          {/* Mobile Action Group: Theme Toggle & Menu Drawer */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <ThemeToggle />

            <details className="relative">
              <summary className="cursor-pointer list-none rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-toggle-bg)] px-4 py-2 text-sm font-medium text-[var(--ucs-text-primary)] transition hover:border-[var(--ucs-gold)]">
                Menu
              </summary>

              <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-[var(--ucs-border-menu)] bg-[var(--ucs-bg-menu)] p-3 shadow-2xl backdrop-blur-xl transition-colors duration-300">
                {["About", "Academics", "Student Life", "Campus", "Admissions"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item === "Student Life" ? "life" : item.toLowerCase()}`}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-[var(--ucs-text-secondary)] hover:bg-[var(--ucs-toggle-bg)] hover:text-[var(--ucs-gold-text)]"
                    >
                      {item}
                    </a>
                  )
                )}

                <div className="my-2 border-t border-[var(--ucs-border)] pt-2">
                  <a
                    href="#contact"
                    className="block rounded-xl bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-4 py-3 text-center text-sm font-semibold text-[#0B1733] shadow-md"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </details>
          </div>
        </div>
      </nav>

      {/* =========================================================
          HERO — ADAPTIVE 3D COMPOSITION
      ========================================================= */}
      <section className="relative min-h-screen overflow-hidden bg-[var(--ucs-bg-hero)] pt-24 transition-colors duration-300">

        {/* Ambient architectural lighting */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[var(--ucs-glow-blue)] blur-[130px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[var(--ucs-glow-gold)] blur-[140px]" />

        {/* Blueprint / architectural grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[var(--ucs-grid-opacity)]"
          style={{
            backgroundImage:
              "linear-gradient(var(--ucs-grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--ucs-grid-color) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">

          {/* LEFT COLUMN */}
          <div className="relative z-20 max-w-2xl">

            {/* Established Badge with subtle green accent dot */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[var(--ucs-gold-badge-border)] bg-[var(--ucs-gold-badge-bg)] px-4 py-2 shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--ucs-green)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ucs-gold-text-contrast)]">
                Established 1994
              </span>
            </div>

            <h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.06em] text-[var(--ucs-text-primary)] sm:text-7xl lg:text-[7rem]">
              Where
              <br />
              <span className="bg-gradient-to-r from-[var(--ucs-heading-gradient-from)] via-[var(--ucs-heading-gradient-via)] to-[var(--ucs-heading-gradient-to)] bg-clip-text text-transparent">
                foundations
              </span>
              <br />
              begin.
            </h1>

            <p className="mt-8 max-w-lg text-base leading-7 text-[var(--ucs-text-secondary)] md:text-lg">
              A place where curiosity becomes confidence, classrooms become
              experiences, and every child begins building their future.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#about"
                className="group rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-7 py-4 text-sm font-bold text-[#0B1733] shadow-[0_8px_25px_rgba(212,168,83,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(212,168,83,0.45)]"
              >
                Discover UCS
                <span className="ml-3 inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#admissions"
                className="rounded-full border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] px-7 py-4 text-sm font-semibold text-[var(--ucs-text-primary)] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[var(--ucs-gold)]"
              >
                Admissions
              </a>
            </div>

            {/* Quick Metrics Row */}
            <div className="mt-12 flex gap-10">
              <div>
                <p className="text-3xl font-semibold text-[var(--ucs-text-primary)]">30+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[var(--ucs-gold-text)]">
                  Years
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-[var(--ucs-text-primary)]">1800+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[var(--ucs-gold-text)]">
                  Students
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-[var(--ucs-text-primary)]">Nursery–VII</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[var(--ucs-gold-text)]">
                  Learning
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — 3D PERSPECTIVE COMPOSITION */}
          <div className="relative mx-auto h-[520px] w-full max-w-[620px] [perspective:1400px]">

            {/* Floating anchor badge */}
            <div className="absolute right-5 top-0 z-30 animate-[float_5s_ease-in-out_infinite] rounded-2xl border border-[var(--ucs-border)] bg-[var(--ucs-3d-anchor-bg)] px-5 py-4 shadow-[var(--ucs-shadow-lg)] backdrop-blur-xl">
              <p className="text-3xl font-semibold text-[var(--ucs-3d-anchor-text)]">1994</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#DFB76C]">
                The beginning
              </p>
            </div>

            {/* Main school photograph */}
            <div className="absolute left-[5%] top-[10%] h-[390px] w-[82%] rotate-[-5deg] transform-gpu overflow-hidden rounded-[2rem] border-2 border-[var(--ucs-3d-photo-border)] bg-[var(--ucs-3d-photo-frame)] p-1.5 shadow-[var(--ucs-shadow-hero)] transition duration-700 hover:rotate-0 hover:scale-[1.02] [transform-style:preserve-3d]">
              <div className="relative h-full w-full overflow-hidden rounded-[1.65rem]">
                <Image
                  src="/school.png"
                  alt="Universal Central School campus"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#060E20]/80 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#DFB76C]">
                    Universal Central School
                  </p>
                  <p className="mt-2 text-2xl font-medium text-white">
                    Growing with purpose.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating glass card */}
            <div className="absolute bottom-8 right-0 z-20 w-52 animate-[float_6s_ease-in-out_infinite] rounded-3xl border border-[var(--ucs-3d-glass-border)] bg-[var(--ucs-3d-glass-bg)] p-5 shadow-[var(--ucs-shadow-md)] backdrop-blur-xl [transform:translateZ(80px)]">

              <div className="mb-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-[#D4A853]" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-[#0B1B3D]" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-[#1E3A8A]" />
                </div>

                <span className="text-xs font-semibold text-[var(--ucs-gold-text)]">UCS</span>
              </div>

              <p className="text-lg font-medium text-[var(--ucs-3d-glass-text)]">
                More than a classroom.
              </p>

              <p className="mt-2 text-xs leading-5 text-[var(--ucs-3d-glass-subtext)]">
                Learning through academics, activities and experiences.
              </p>
            </div>

            {/* 3D gold architectural sphere */}
            <div
              className="absolute bottom-24 left-0 h-24 w-24 animate-[float_4s_ease-in-out_infinite] rounded-full [transform:translateZ(120px)]"
              style={{
                backgroundImage: "var(--ucs-3d-orb-gradient)",
                boxShadow: "0 20px 50px var(--ucs-3d-orb-shadow)",
              }}
            />

          </div>
        </div>

        {/* Bottom subtle transition fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--ucs-bg-page)] to-transparent" />
      </section>

      {/* =========================================================
          SECTION 01: ABOUT
      ========================================================= */}
      <section id="about" className="relative bg-[var(--ucs-bg-page)] px-6 py-28 transition-colors duration-300 md:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
                01 / Our story
              </p>

              <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--ucs-text-primary)] md:text-7xl">
                Built on
                <br />
                <span className="text-[var(--ucs-heading-gradient-via)]">foundations.</span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-2xl leading-relaxed text-[var(--ucs-text-primary)]/85 md:text-3xl">
                Since 1994, Universal Central School has focused on giving
                children a strong beginning — academically, personally and
                socially.
              </p>

              <p className="mt-8 max-w-2xl leading-7 text-[var(--ucs-text-secondary)]">
                Our approach combines a structured academic environment with
                opportunities for students to explore creativity, sport,
                culture, communication and leadership.
              </p>

              <div className="mt-10 h-px w-full bg-[var(--ucs-border)]" />

              <div className="mt-8 flex flex-wrap gap-12">
                <div>
                  <p className="text-4xl font-semibold text-[var(--ucs-text-primary)]">1994</p>
                  <p className="mt-2 text-sm text-[var(--ucs-text-muted)]">
                    School founded
                  </p>
                </div>

                <div>
                  <p className="text-4xl font-semibold text-[var(--ucs-text-primary)]">1800+</p>
                  <p className="mt-2 text-sm text-[var(--ucs-text-muted)]">
                    Students
                  </p>
                </div>

                <div>
                  <p className="text-4xl font-semibold text-[var(--ucs-text-primary)]">VII</p>
                  <p className="mt-2 text-sm text-[var(--ucs-text-muted)]">
                    Highest grade
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 02: ACADEMICS
      ========================================================= */}
      <section id="academics" className="relative overflow-hidden bg-[var(--ucs-bg-section-alt)] px-6 py-28 transition-colors duration-300 md:px-8">

        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[var(--ucs-glow-blue)] blur-[100px]" />
        <div className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-[var(--ucs-glow-gold)] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
              02 / Academics
            </p>

            <h2 className="mt-5 text-5xl font-semibold leading-none tracking-[-0.05em] text-[var(--ucs-text-primary)] md:text-7xl">
              Learning that
              <br />
              <span className="text-[var(--ucs-heading-gradient-via)]">goes deeper.</span>
            </h2>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Strong foundations",
                text: "A structured academic environment designed to build clarity, confidence and strong fundamentals.",
              },
              {
                number: "02",
                title: "Curiosity first",
                text: "Students are encouraged to question, explore and understand rather than simply memorise.",
              },
              {
                number: "03",
                title: "Beyond textbooks",
                text: "Activities and experiences help students develop communication, creativity and confidence.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group relative min-h-[330px] overflow-hidden rounded-[2rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[var(--ucs-gold)] hover:shadow-xl"
              >
                <span className="text-sm font-semibold text-[var(--ucs-gold-text)]">
                  {item.number}
                </span>

                <div className="absolute right-[-30px] top-[-30px] h-32 w-32 rounded-full border border-[var(--ucs-gold-badge-border)] transition duration-700 group-hover:scale-150" />

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-semibold text-[var(--ucs-text-primary)]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[var(--ucs-text-muted)]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 03: CLASSROOM — ARCHITECTURAL DEPTH
      ========================================================= */}
      <section className="relative overflow-hidden bg-[var(--ucs-bg-page)] px-6 py-28 transition-colors duration-300 md:px-8">

        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[var(--ucs-glow-gold)] blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-[var(--ucs-glow-blue)] blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div className="relative h-[480px] [perspective:1200px]">

            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border-2 border-[var(--ucs-3d-photo-border)] bg-[var(--ucs-3d-photo-frame)] p-1.5 shadow-[var(--ucs-shadow-md)] transition duration-700 hover:rotate-y-2">
              <div className="relative h-full w-full overflow-hidden rounded-[1.65rem]">
                <Image
                  src="/classroom.jpeg"
                  alt="Students learning in a Universal Central School classroom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating focal badge */}
            <div className="absolute -bottom-7 -right-5 rounded-3xl border border-[var(--ucs-border)] bg-[var(--ucs-3d-anchor-bg)] p-6 shadow-2xl backdrop-blur-xl md:right-8">
              <p className="text-4xl font-semibold text-[#DFB76C]">01</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/70">
                Classroom
              </p>
            </div>

          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
              The classroom
            </p>

            <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--ucs-text-primary)] md:text-7xl">
              Where ideas
              <br />
              <span className="text-[var(--ucs-heading-gradient-via)]">take shape.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--ucs-text-secondary)]">
              Every classroom is a starting point — a space for questions,
              conversations, discovery and the development of strong
              fundamentals.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center rounded-full border border-[var(--ucs-gold-badge-border)] bg-[var(--ucs-gold-badge-bg)] px-7 py-3.5 text-sm font-bold text-[var(--ucs-text-primary)] transition hover:bg-[#D4A853] hover:text-[#0B1733] hover:border-[#D4A853]"
            >
              Explore UCS
              <span className="ml-4">↗</span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 04: STUDENT LIFE
      ========================================================= */}
      <section id="life" className="relative bg-[var(--ucs-bg-section-alt)] px-6 py-28 transition-colors duration-300 md:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
                03 / Beyond the classroom
              </p>

              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-[var(--ucs-text-primary)] md:text-7xl">
                More ways
                <br />
                <span className="text-[var(--ucs-heading-gradient-via)]">to grow.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--ucs-text-secondary)]">
              Dance. Karate. Sports. Cultural activities. Projects.
              Experiences that allow students to discover interests and build
              confidence beyond academics.
            </p>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-5">

            <div className="group relative h-[460px] overflow-hidden rounded-[2rem] border-2 border-[var(--ucs-3d-photo-border)] bg-[var(--ucs-3d-photo-frame)] p-1.5 shadow-xl md:col-span-3">
              <div className="relative h-full w-full overflow-hidden rounded-[1.65rem]">
                <Image
                  src="/activity.jpeg"
                  alt="Students participating in a school activity"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#060E20]/85 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#DFB76C]">
                    Student life
                  </p>
                  <p className="mt-2 text-3xl font-medium text-white">
                    Discover. Participate. Grow.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:col-span-2">

              {/* High contrast selective deep navy card */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1B3D] p-8 shadow-xl transition duration-500 hover:-translate-y-2 hover:border-[#D4A853]/30">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10 transition duration-700 group-hover:scale-125" />

                <p className="text-xs uppercase tracking-[0.25em] text-[#DFB76C]">
                  Movement
                </p>

                <h3 className="mt-20 text-3xl font-semibold text-white">
                  Dance & Karate
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Discipline, expression and confidence through activity.
                </p>
              </div>

              {/* Warm gold card */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-[#FFF0C2]/20 bg-gradient-to-br from-[#D4A853] via-[#C99C3D] to-[#B38328] p-8 shadow-xl transition duration-500 hover:-translate-y-2">

                <p className="text-xs uppercase tracking-[0.25em] text-[#0A1733]/60 font-semibold">
                  Exploration
                </p>

                <h3 className="mt-20 text-3xl font-semibold text-[#0A1733]">
                  Projects & Culture
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#0A1733]/75 font-medium">
                  Opportunities to create, present and participate.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 05: BIG BRAND MOMENT (DEEP NAVY CONTRAST ANCHOR)
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-[#D4A853]/25 bg-[#081530] px-6 py-32 md:px-8">

        <div className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(212,168,83,0.6) 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#1D4ED8]/15 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#DFB76C]">
            Universal Central School
          </p>

          <h2 className="mt-8 text-[22vw] font-black leading-[0.7] tracking-[-0.09em] bg-gradient-to-b from-white via-[#EAEFF8] to-[#92A7CC] bg-clip-text text-transparent drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] md:text-[15rem]">
            UCS
          </h2>

          <p className="mx-auto mt-16 max-w-2xl text-lg leading-8 text-[#C4D1E8]">
            A school is more than a building. It is the beginning of a
            student&apos;s relationship with learning, confidence and possibility.
          </p>

        </div>
      </section>

      {/* =========================================================
          SECTION 06: ADMISSIONS
      ========================================================= */}
      <section id="admissions" className="bg-[var(--ucs-admissions-outer-bg)] px-6 py-28 transition-colors duration-300 md:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#D4A853]/30 bg-gradient-to-br from-[#0B1B3D] via-[#0D214D] to-[#071228] p-8 shadow-2xl md:p-14 lg:p-20">

            <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#DFB76C]">
                  Admissions
                </p>

                <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
                  Give your child
                  <br />
                  a strong beginning.
                </h2>

                <p className="mt-7 max-w-xl leading-7 text-white/70">
                  Get in touch with Universal Central School to learn more
                  about admissions, the school and the learning environment.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-8 py-4 text-sm font-bold text-[#0B1733] shadow-[0_10px_30px_rgba(212,168,83,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,168,83,0.5)]"
              >
                Enquire Now
                <span className="ml-4">→</span>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 07: CONTACT / FOOTER (DEEP UCS BLUE ANCHOR)
      ========================================================= */}
      <footer id="contact" className="border-t border-[#D4A853]/20 bg-[#060E20] px-6 pb-8 pt-20 text-white md:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-4">

            <div className="md:col-span-2">

              <div className="relative mb-6 h-20 w-20 overflow-hidden rounded-2xl bg-white shadow-md">
                <Image
                  src="/ucs-logo.png"
                  alt="Universal Central School logo"
                  fill
                  sizes="80px"
                  className="object-contain p-1"
                />
              </div>

              <h3 className="text-2xl font-semibold">
                Universal Central School
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
                Building strong foundations for young minds since 1994.
              </p>

              <div className="mt-7 flex gap-3">

                <a
                  href="https://www.instagram.com/universal_central_school/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-[#D4A853] hover:bg-[#D4A853] hover:text-[#060E20]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@universalcentralschoolmbnr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-[#D4A853] hover:bg-[#D4A853] hover:text-[#060E20]"
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.4 3.7-6.4 3.7Z"/>
                  </svg>
                </a>

              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#DFB76C]">
                Explore
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/65">
                <a href="#about" className="block hover:text-[#DFB76C] transition-colors">About Us</a>
                <a href="#academics" className="block hover:text-[#DFB76C] transition-colors">Academics</a>
                <a href="#life" className="block hover:text-[#DFB76C] transition-colors">Student Life</a>
                <a href="#admissions" className="block hover:text-[#DFB76C] transition-colors">Admissions</a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#DFB76C]">
                Contact
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/65">
                <p>Mahabubnagar, Telangana</p>
                <p>Universal Central School</p>

                <a
                  href="#"
                  className="block text-white hover:text-[#DFB76C] transition-colors font-medium"
                >
                  Parent Login ↗
                </a>
              </div>
            </div>

          </div>

          <div className="mt-16 border-t border-white/10 pt-6 text-xs text-white/35">
            © {new Date().getFullYear()} Universal Central School. All rights reserved.
          </div>

        </div>
      </footer>

      {/* =========================================================
          ANIMATION ENGINE
      ========================================================= */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-18px);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

    </main>
  );
}
