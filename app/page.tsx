import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F7F6F2] text-[#0B1B3D]">

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <nav className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/15 bg-[#0B1B3D]/85 px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-[0_8px_32px_rgba(3,10,25,0.4)] backdrop-blur-xl md:px-6">

          <a href="#" className="flex items-center gap-2.5 sm:gap-3">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-xl bg-white">
              <Image
                src="/ucs-logo.png"
                alt="Universal Central School logo"
                fill
                sizes="48px"
                className="object-contain p-1"
              />
            </div>

            <div className="block">
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-white">
                <span className="sm:hidden">UCS</span>
                <span className="hidden sm:inline">UNIVERSAL CENTRAL SCHOOL</span>
              </p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#DFB76C]">
                Since 1994
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm text-white/80 lg:flex">
            <a href="#about" className="transition hover:text-[#DFB76C]">About</a>
            <a href="#academics" className="transition hover:text-[#DFB76C]">Academics</a>
            <a href="#life" className="transition hover:text-[#DFB76C]">Student Life</a>
            <a href="#campus" className="transition hover:text-[#DFB76C]">Campus</a>
            <a href="#admissions" className="transition hover:text-[#DFB76C]">Admissions</a>

            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-5 py-2.5 font-semibold text-[#0B1733] shadow-[0_4px_16px_rgba(212,168,83,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(212,168,83,0.5)]"
            >
              Enquire Now
            </a>
          </div>

          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-xl bg-white/10 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white transition hover:bg-white/15">
              Menu
            </summary>

            <div className="absolute right-0 mt-3 w-56 max-w-[calc(100vw-2rem)] rounded-2xl border border-[#D4A853]/20 bg-[#0B1B3D]/95 p-3 shadow-2xl backdrop-blur-xl">
              {["About", "Academics", "Student Life", "Campus", "Admissions"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item === "Student Life" ? "life" : item.toLowerCase()}`}
                    className="block rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-[#DFB76C]"
                  >
                    {item}
                  </a>
                )
              )}

              <a
                href="#contact"
                className="mt-2 block rounded-xl bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-4 py-3 text-center text-sm font-semibold text-[#0B1733] shadow-md"
              >
                Enquire Now
              </a>
            </div>
          </details>
        </div>
      </nav>

      {/* =========================================================
          HERO — 3D EXPERIMENT
      ========================================================= */}
      <section className="relative min-h-[100svh] overflow-hidden bg-[#0B1B3D] pt-20 sm:pt-24">

        {/* Ambient lighting */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-[#1D4ED8]/15 blur-[100px] sm:blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-[#D4A853]/15 blur-[100px] sm:blur-[140px]" />

        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-10 sm:gap-12 px-4 sm:px-6 py-12 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

          {/* LEFT */}
          <div className="relative z-20 max-w-2xl">

            <div className="mb-5 sm:mb-7 inline-flex items-center gap-2.5 sm:gap-3 rounded-full border border-[#D4A853]/30 bg-[#D4A853]/10 px-3.5 py-1.5 sm:px-4 sm:py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4A853]" />
              <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#DFB76C]">
                Established 1994
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-semibold leading-[0.95] sm:leading-[0.9] tracking-[-0.06em] text-white">
              Where
              <br />
              <span className="bg-gradient-to-r from-white via-[#F5E6C4] to-[#D4A853] bg-clip-text text-transparent">
                foundations
              </span>
              <br />
              begin.
            </h1>

            <p className="mt-6 sm:mt-8 max-w-lg text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-white/70">
              A place where curiosity becomes confidence, classrooms become
              experiences, and every child begins building their future.
            </p>

            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#about"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-7 py-3.5 sm:py-4 text-sm font-bold text-[#0B1733] shadow-[0_8px_25px_rgba(212,168,83,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(212,168,83,0.45)]"
              >
                Discover UCS
                <span className="ml-3 inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#admissions"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 sm:py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-[#D4A853]/40"
              >
                Admissions
              </a>
            </div>

            <div className="mt-8 sm:mt-12 flex items-center justify-between sm:justify-start sm:gap-10 border-t border-white/10 pt-6 sm:pt-8 sm:border-0 sm:p-0">
              <div>
                <p className="text-xl sm:text-3xl font-semibold text-white">30+</p>
                <p className="mt-1 text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#DFB76C]/70">
                  Years
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-3xl font-semibold text-white">1800+</p>
                <p className="mt-1 text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#DFB76C]/70">
                  Students
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-3xl font-semibold text-white whitespace-nowrap">Nursery–VII</p>
                <p className="mt-1 text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#DFB76C]/70">
                  Learning
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — 3D STACK */}
          <div className="relative mx-auto h-[380px] sm:h-[460px] md:h-[520px] w-full max-w-[580px] lg:max-w-[620px] [perspective:1400px]">

            {/* Floating number */}
            <div className="absolute right-2 sm:right-5 top-0 z-30 animate-[float_5s_ease-in-out_infinite] rounded-2xl border border-white/15 bg-[#0B1B3D]/80 px-4 py-3 sm:px-5 sm:py-4 shadow-2xl backdrop-blur-xl">
              <p className="text-2xl sm:text-3xl font-semibold text-white">1994</p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#DFB76C]">
                The beginning
              </p>
            </div>

            {/* Main image */}
            <div className="absolute left-[3%] sm:left-[5%] top-[8%] sm:top-[10%] h-[280px] sm:h-[340px] md:h-[390px] w-[88%] sm:w-[82%] rotate-[-3deg] sm:rotate-[-5deg] transform-gpu overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.45)] transition duration-700 hover:rotate-0 hover:scale-[1.02] [transform-style:preserve-3d]">

              <Image
                src="/school.png"
                alt="Universal Central School campus"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#060E20]/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#DFB76C]/80">
                  Universal Central School
                </p>
                <p className="mt-1.5 sm:mt-2 text-xl sm:text-2xl font-medium text-white">
                  Growing with purpose.
                </p>
              </div>
            </div>

            {/* Floating glass card */}
            <div className="absolute bottom-3 sm:bottom-8 right-1 sm:right-0 z-20 w-44 sm:w-52 animate-[float_6s_ease-in-out_infinite] rounded-2xl sm:rounded-3xl border border-white/15 bg-[#0B1B3D]/80 p-3.5 sm:p-5 shadow-2xl backdrop-blur-xl [transform:translateZ(80px)]">

              <div className="mb-3 sm:mb-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-[#0B1B3D] bg-[#D4A853]" />
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-[#0B1B3D] bg-white" />
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-[#0B1B3D] bg-[#1E3A8A]" />
                </div>

                <span className="text-xs font-semibold text-[#DFB76C]">UCS</span>
              </div>

              <p className="text-base sm:text-lg font-medium text-white">
                More than a classroom.
              </p>

              <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs leading-4 sm:leading-5 text-white/60">
                Learning through academics, activities and experiences.
              </p>
            </div>

            {/* 3D gold orb */}
            <div className="pointer-events-none absolute bottom-12 sm:bottom-24 left-0 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 animate-[float_4s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle_at_30%_25%,#FFF3D1,#D4A853_35%,#6B4E14_100%)] shadow-[0_25px_70px_rgba(212,168,83,.35)] [transform:translateZ(120px)]" />

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-40 bg-gradient-to-t from-[#F7F6F2] to-transparent" />
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section id="about" className="relative bg-[#F7F6F2] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B7428]">
                01 / Our story
              </p>

              <h2 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1] sm:leading-[0.95] tracking-[-0.05em] text-[#0B1B3D]">
                Built on
                <br />
                <span className="text-[#1A3674]">foundations.</span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-xl sm:text-2xl md:text-3xl leading-relaxed text-[#0B1B3D]/80">
                Since 1994, Universal Central School has focused on giving
                children a strong beginning — academically, personally and
                socially.
              </p>

              <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-[#0B1B3D]/60">
                Our approach combines a structured academic environment with
                opportunities for students to explore creativity, sport,
                culture, communication and leadership.
              </p>

              <div className="mt-8 sm:mt-10 h-px w-full bg-[#0B1B3D]/10" />

              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:flex sm:gap-12">
                <div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B1B3D]">1994</p>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#0B1B3D]/50">
                    School founded
                  </p>
                </div>

                <div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B1B3D]">1800+</p>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#0B1B3D]/50">
                    Students
                  </p>
                </div>

                <div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B1B3D]">VII</p>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#0B1B3D]/50">
                    Highest grade
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          ACADEMICS
      ========================================================= */}
      <section id="academics" className="relative overflow-hidden bg-white px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28">

        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#1A3674]/5 blur-[100px]" />
        <div className="pointer-events-none absolute -left-32 bottom-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#D4A853]/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B7428]">
              02 / Academics
            </p>

            <h2 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight sm:leading-none tracking-[-0.05em] text-[#0B1B3D]">
              Learning that
              <br />
              <span className="text-[#1A3674]">goes deeper.</span>
            </h2>
          </div>

          <div className="mt-10 sm:mt-16 md:mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

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
                className="group relative min-h-[280px] sm:min-h-[320px] overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-[#0B1B3D]/10 bg-[#F7F6F2] p-6 sm:p-8 transition duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 hover:border-[#D4A853]/40 hover:shadow-2xl"
              >
                <span className="text-sm font-semibold text-[#9B7428]">
                  {item.number}
                </span>

                <div className="absolute right-[-30px] top-[-30px] h-32 w-32 rounded-full border border-[#D4A853]/20 transition duration-700 group-hover:scale-150" />

                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#0B1B3D]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 sm:mt-4 text-xs sm:text-sm leading-5 sm:leading-6 text-[#0B1B3D]/60">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          CLASSROOM — DEPTH CARD
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0B1B3D] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">

          <div className="relative h-[300px] sm:h-[400px] md:h-[480px] [perspective:1200px]">

            <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] shadow-2xl transition duration-700 hover:rotate-y-2">
              <Image
                src="/classroom.jpeg"
                alt="Students learning in a Universal Central School classroom"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/90 via-[#0B1B3D]/20 to-transparent" />
            </div>

            {/* floating label */}
            <div className="absolute -bottom-5 sm:-bottom-7 right-2 sm:right-6 md:right-8 rounded-2xl sm:rounded-3xl border border-[#D4A853]/30 bg-[#060E20]/85 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
              <p className="text-3xl sm:text-4xl font-semibold text-[#DFB76C]">01</p>
              <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/50">
                Classroom
              </p>
            </div>

          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#DFB76C]">
              The classroom
            </p>

            <h2 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1] sm:leading-[0.95] tracking-[-0.05em] text-white">
              Where ideas
              <br />
              <span className="text-white/45">take shape.</span>
            </h2>

            <p className="mt-6 sm:mt-8 max-w-xl text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-white/65">
              Every classroom is a starting point — a space for questions,
              conversations, discovery and the development of strong
              fundamentals.
            </p>

            <a
              href="#contact"
              className="mt-8 sm:mt-10 inline-flex items-center justify-center rounded-full border border-[#D4A853]/40 bg-[#D4A853]/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-[#D4A853] hover:text-[#0B1733] hover:border-[#D4A853]"
            >
              Explore UCS
              <span className="ml-4">↗</span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================
          STUDENT LIFE
      ========================================================= */}
      <section id="life" className="relative bg-[#F7F6F2] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 sm:gap-8 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B7428]">
                03 / Beyond the classroom
              </p>

              <h2 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.05em] text-[#0B1B3D]">
                More ways
                <br />
                <span className="text-[#1A3674]">to grow.</span>
              </h2>
            </div>

            <p className="max-w-md text-xs sm:text-sm leading-5 sm:leading-6 text-[#0B1B3D]/60">
              Dance. Karate. Sports. Cultural activities. Projects.
              Experiences that allow students to discover interests and build
              confidence beyond academics.
            </p>

          </div>

          <div className="mt-10 sm:mt-16 grid gap-5 md:grid-cols-5">

            <div className="group relative h-[280px] sm:h-[360px] md:h-[460px] overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] md:col-span-3">
              <Image
                src="/activity.jpeg"
                alt="Students participating in a school activity"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#060E20]/85 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#DFB76C]/80">
                  Student life
                </p>
                <p className="mt-1.5 sm:mt-2 text-2xl sm:text-3xl font-medium text-white">
                  Discover. Participate. Grow.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:col-span-2 sm:grid-cols-2 md:grid-cols-1">

              <div className="group relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-white/10 bg-[#0B1B3D] p-6 sm:p-8 shadow-xl transition duration-500 hover:-translate-y-2 hover:border-[#D4A853]/30">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10 transition duration-700 group-hover:scale-125" />

                <p className="text-xs uppercase tracking-[0.25em] text-[#DFB76C]/75">
                  Movement
                </p>

                <h3 className="mt-10 sm:mt-16 md:mt-20 text-2xl sm:text-3xl font-semibold text-white">
                  Dance & Karate
                </h3>

                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-white/50">
                  Discipline, expression and confidence through activity.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-[#FFF0C2]/20 bg-gradient-to-br from-[#D4A853] via-[#C99C3D] to-[#B38328] p-6 sm:p-8 shadow-xl transition duration-500 hover:-translate-y-2">

                <p className="text-xs uppercase tracking-[0.25em] text-[#0A1733]/60 font-semibold">
                  Exploration
                </p>

                <h3 className="mt-10 sm:mt-16 md:mt-20 text-2xl sm:text-3xl font-semibold text-[#0A1733]">
                  Projects & Culture
                </h3>

                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-[#0A1733]/75 font-medium">
                  Opportunities to create, present and participate.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          BIG BRAND MOMENT
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-[#D4A853]/20 bg-[#081530] px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32">

        <div className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(212,168,83,0.6) 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#1D4ED8]/15 blur-[120px] sm:blur-[140px]" />

        <div className="relative mx-auto max-w-7xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#DFB76C]">
            Universal Central School
          </p>

          <h2 className="mt-6 sm:mt-8 text-[22vw] font-black leading-[0.7] tracking-[-0.09em] bg-gradient-to-b from-white via-[#EAEFF8] to-[#92A7CC] bg-clip-text text-transparent drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] md:text-[15rem]">
            UCS
          </h2>

          <p className="mx-auto mt-10 sm:mt-14 md:mt-16 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-[#C4D1E8]">
            A school is more than a building. It is the beginning of a
            student&apos;s relationship with learning, confidence and possibility.
          </p>

        </div>
      </section>

      {/* =========================================================
          ADMISSIONS
      ========================================================= */}
      <section id="admissions" className="bg-[#F7F6F2] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-[#D4A853]/25 bg-gradient-to-br from-[#0B1B3D] via-[#0D214D] to-[#071228] p-6 sm:p-10 md:p-14 lg:p-20 shadow-2xl">

            <div className="relative z-10 grid gap-8 sm:gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#DFB76C]">
                  Admissions
                </p>

                <h2 className="mt-4 sm:mt-5 max-w-3xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1] sm:leading-[0.95] tracking-[-0.05em] text-white">
                  Give your child
                  <br />
                  a strong beginning.
                </h2>

                <p className="mt-5 sm:mt-7 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-white/65">
                  Get in touch with Universal Central School to learn more
                  about admissions, the school and the learning environment.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-8 py-3.5 sm:py-4 text-sm font-bold text-[#0B1733] shadow-[0_10px_30px_rgba(212,168,83,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,168,83,0.5)] w-full sm:w-auto"
              >
                Enquire Now
                <span className="ml-4">→</span>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT / FOOTER
      ========================================================= */}
      <footer id="contact" className="border-t border-[#D4A853]/20 bg-[#060E20] px-4 sm:px-6 md:px-8 pb-8 pt-14 sm:pt-18 md:pt-20 text-white">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">

            <div className="sm:col-span-2">

              <div className="relative mb-5 sm:mb-6 h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/ucs-logo.png"
                  alt="Universal Central School logo"
                  fill
                  sizes="80px"
                  className="object-contain p-1"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold">
                Universal Central School
              </h3>

              <p className="mt-2.5 sm:mt-3 max-w-sm text-xs sm:text-sm leading-5 sm:leading-6 text-white/50">
                Building strong foundations for young minds since 1994.
              </p>

              <div className="mt-6 sm:mt-7 flex gap-3">

                <a
                  href="https://www.instagram.com/universal_central_school/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-[#D4A853] hover:bg-[#D4A853] hover:text-[#060E20]"
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
                  className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-[#D4A853] hover:bg-[#D4A853] hover:text-[#060E20]"
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.4 3.7-6.4 3.7Z"/>
                  </svg>
                </a>

              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Explore
              </p>

              <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-white/60">
                <a href="#about" className="block hover:text-[#DFB76C] transition-colors">About Us</a>
                <a href="#academics" className="block hover:text-[#DFB76C] transition-colors">Academics</a>
                <a href="#life" className="block hover:text-[#DFB76C] transition-colors">Student Life</a>
                <a href="#admissions" className="block hover:text-[#DFB76C] transition-colors">Admissions</a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Contact
              </p>

              <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-white/60">
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

          <div className="mt-12 sm:mt-16 border-t border-white/10 pt-6 text-xs text-white/30">
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
