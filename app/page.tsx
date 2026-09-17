import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f7f5f0] text-[#252344]">

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/20 bg-[#252344]/90 px-4 py-3 shadow-2xl backdrop-blur-xl md:px-6">

          <a href="#" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white">
              <Image
                src="/ucs-logo.png"
                alt="Universal Central School logo"
                fill
                sizes="48px"
                className="object-contain p-1"
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-wide text-white">
                UNIVERSAL CENTRAL SCHOOL
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                Since 1994
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm text-white/80 lg:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#academics" className="transition hover:text-white">Academics</a>
            <a href="#life" className="transition hover:text-white">Student Life</a>
            <a href="#campus" className="transition hover:text-white">Campus</a>
            <a href="#admissions" className="transition hover:text-white">Admissions</a>

            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2.5 font-semibold text-[#252344] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Enquire Now
            </a>
          </div>

          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-xl bg-white/10 px-4 py-2 text-sm text-white">
              Menu
            </summary>

            <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-white/10 bg-[#252344] p-3 shadow-2xl">
              {["About", "Academics", "Student Life", "Campus", "Admissions"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item === "Student Life" ? "life" : item.toLowerCase()}`}
                    className="block rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    {item}
                  </a>
                )
              )}

              <a
                href="#contact"
                className="mt-2 block rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#252344]"
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
      <section className="relative min-h-screen overflow-hidden bg-[#252344] pt-24">

        {/* Ambient lighting */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#6d5dfc]/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[#d6b36a]/15 blur-[140px]" />

        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">

          {/* LEFT */}
          <div className="relative z-20 max-w-2xl">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#d6b36a]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                Established 1994
              </span>
            </div>

            <h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl lg:text-[7rem]">
              Where
              <br />
              <span className="bg-gradient-to-r from-white via-white to-[#d6b36a] bg-clip-text text-transparent">
                foundations
              </span>
              <br />
              begin.
            </h1>

            <p className="mt-8 max-w-lg text-base leading-7 text-white/60 md:text-lg">
              A place where curiosity becomes confidence, classrooms become
              experiences, and every child begins building their future.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#about"
                className="group rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#252344] transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Discover UCS
                <span className="ml-3 inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#admissions"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Admissions
              </a>
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <p className="text-3xl font-semibold text-white">30+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/40">
                  Years
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-white">1800+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/40">
                  Students
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-white">Nursery–VII</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/40">
                  Learning
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — 3D STACK */}
          <div className="relative mx-auto h-[520px] w-full max-w-[620px] [perspective:1400px]">

            {/* Floating number */}
            <div className="absolute right-5 top-0 z-30 animate-[float_5s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-2xl backdrop-blur-xl">
              <p className="text-3xl font-semibold text-white">1994</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                The beginning
              </p>
            </div>

            {/* Main image */}
            <div className="absolute left-[5%] top-[10%] h-[390px] w-[82%] rotate-[-5deg] transform-gpu overflow-hidden rounded-[2rem] border border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.45)] transition duration-700 hover:rotate-0 hover:scale-[1.02] [transform-style:preserve-3d]">

              <Image
                src="/school.png"
                alt="Universal Central School campus"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17162f]/70 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Universal Central School
                </p>
                <p className="mt-2 text-2xl font-medium text-white">
                  Growing with purpose.
                </p>
              </div>
            </div>

            {/* Floating glass card */}
            <div className="absolute bottom-8 right-0 z-20 w-52 animate-[float_6s_ease-in-out_infinite] rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl [transform:translateZ(80px)]">

              <div className="mb-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-[#252344] bg-[#d6b36a]" />
                  <div className="h-8 w-8 rounded-full border-2 border-[#252344] bg-white" />
                  <div className="h-8 w-8 rounded-full border-2 border-[#252344] bg-[#8178ff]" />
                </div>

                <span className="text-xs text-white/40">UCS</span>
              </div>

              <p className="text-lg font-medium text-white">
                More than a classroom.
              </p>

              <p className="mt-2 text-xs leading-5 text-white/50">
                Learning through academics, activities and experiences.
              </p>
            </div>

            {/* 3D gold orb */}
            <div className="absolute bottom-24 left-0 h-24 w-24 animate-[float_4s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle_at_30%_25%,#fff5c7,#d6b36a_35%,#70582b_100%)] shadow-[0_25px_70px_rgba(214,179,106,.35)] [transform:translateZ(120px)]" />

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f7f5f0] to-transparent" />
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section id="about" className="relative bg-[#f7f5f0] px-6 py-28 md:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8178ff]">
                01 / Our story
              </p>

              <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                Built on
                <br />
                <span className="text-[#8178ff]">foundations.</span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-2xl leading-relaxed text-[#252344]/75 md:text-3xl">
                Since 1994, Universal Central School has focused on giving
                children a strong beginning — academically, personally and
                socially.
              </p>

              <p className="mt-8 max-w-2xl leading-7 text-[#252344]/50">
                Our approach combines a structured academic environment with
                opportunities for students to explore creativity, sport,
                culture, communication and leadership.
              </p>

              <div className="mt-10 h-px w-full bg-[#252344]/10" />

              <div className="mt-8 flex flex-wrap gap-12">
                <div>
                  <p className="text-4xl font-semibold">1994</p>
                  <p className="mt-2 text-sm text-[#252344]/40">
                    School founded
                  </p>
                </div>

                <div>
                  <p className="text-4xl font-semibold">1800+</p>
                  <p className="mt-2 text-sm text-[#252344]/40">
                    Students
                  </p>
                </div>

                <div>
                  <p className="text-4xl font-semibold">VII</p>
                  <p className="mt-2 text-sm text-[#252344]/40">
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
      <section id="academics" className="relative overflow-hidden bg-white px-6 py-28 md:px-8">

        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#8178ff]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8178ff]">
              02 / Academics
            </p>

            <h2 className="mt-5 text-5xl font-semibold leading-none tracking-[-0.05em] md:text-7xl">
              Learning that
              <br />
              <span className="text-[#8178ff]">goes deeper.</span>
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
                className="group relative min-h-[330px] overflow-hidden rounded-[2rem] border border-[#252344]/10 bg-[#f7f5f0] p-8 transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <span className="text-sm font-semibold text-[#8178ff]">
                  {item.number}
                </span>

                <div className="absolute right-[-30px] top-[-30px] h-32 w-32 rounded-full border border-[#8178ff]/10 transition duration-700 group-hover:scale-150" />

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#252344]/50">
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
      <section className="relative overflow-hidden bg-[#252344] px-6 py-28 md:px-8">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div className="relative h-[480px] [perspective:1200px]">

            <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-2xl transition duration-700 hover:rotate-y-2">
              <Image
                src="/classroom.jpeg"
                alt="Students learning in a Universal Central School classroom"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#252344]/80 to-transparent" />
            </div>

            {/* floating label */}
            <div className="absolute -bottom-7 -right-5 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:right-8">
              <p className="text-4xl font-semibold text-white">01</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/40">
                Classroom
              </p>
            </div>

          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d6b36a]">
              The classroom
            </p>

            <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
              Where ideas
              <br />
              <span className="text-white/40">take shape.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/50">
              Every classroom is a starting point — a space for questions,
              conversations, discovery and the development of strong
              fundamentals.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#252344]"
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
      <section id="life" className="relative bg-[#f7f5f0] px-6 py-28 md:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8178ff]">
                03 / Beyond the classroom
              </p>

              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
                More ways
                <br />
                <span className="text-[#8178ff]">to grow.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#252344]/50">
              Dance. Karate. Sports. Cultural activities. Projects.
              Experiences that allow students to discover interests and build
              confidence beyond academics.
            </p>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-5">

            <div className="group relative h-[460px] overflow-hidden rounded-[2rem] md:col-span-3">
              <Image
                src="/activity.jpeg"
                alt="Students participating in a school activity"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#252344]/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                  Student life
                </p>
                <p className="mt-2 text-3xl font-medium text-white">
                  Discover. Participate. Grow.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:col-span-2">

              <div className="group relative overflow-hidden rounded-[2rem] bg-[#252344] p-8 transition duration-500 hover:-translate-y-2">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10 transition duration-700 group-hover:scale-125" />

                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Movement
                </p>

                <h3 className="mt-20 text-3xl font-semibold text-white">
                  Dance & Karate
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Discipline, expression and confidence through activity.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-[2rem] bg-[#d6b36a] p-8 transition duration-500 hover:-translate-y-2">

                <p className="text-xs uppercase tracking-[0.25em] text-[#252344]/50">
                  Exploration
                </p>

                <h3 className="mt-20 text-3xl font-semibold text-[#252344]">
                  Projects & Culture
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#252344]/50">
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
      <section className="relative overflow-hidden bg-[#8178ff] px-6 py-32 md:px-8">

        <div className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, white 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />

        <div className="relative mx-auto max-w-7xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
            Universal Central School
          </p>

          <h2 className="mt-8 text-[22vw] font-black leading-[0.7] tracking-[-0.09em] text-white md:text-[15rem]">
            UCS
          </h2>

          <p className="mx-auto mt-16 max-w-2xl text-lg leading-8 text-white/70">
            A school is more than a building. It is the beginning of a
            student's relationship with learning, confidence and possibility.
          </p>

        </div>
      </section>

      {/* =========================================================
          ADMISSIONS
      ========================================================= */}
      <section id="admissions" className="bg-[#f7f5f0] px-6 py-28 md:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[2.5rem] bg-[#252344] p-8 md:p-14 lg:p-20">

            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d6b36a]">
                  Admissions
                </p>

                <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
                  Give your child
                  <br />
                  a strong beginning.
                </h2>

                <p className="mt-7 max-w-xl leading-7 text-white/50">
                  Get in touch with Universal Central School to learn more
                  about admissions, the school and the learning environment.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#252344] transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
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
      <footer id="contact" className="bg-[#17162f] px-6 pb-8 pt-20 text-white md:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-4">

            <div className="md:col-span-2">

              <div className="relative mb-6 h-20 w-20 overflow-hidden rounded-2xl bg-white">
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

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                Building strong foundations for young minds since 1994.
              </p>

              <div className="mt-7 flex gap-3">

                <a
                  href="https://www.instagram.com/universal_central_school/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-[#17162f]"
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
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-[#17162f]"
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.4 3.7-6.4 3.7Z"/>
                  </svg>
                </a>

              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                Explore
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/60">
                <a href="#about" className="block hover:text-white">About Us</a>
                <a href="#academics" className="block hover:text-white">Academics</a>
                <a href="#life" className="block hover:text-white">Student Life</a>
                <a href="#admissions" className="block hover:text-white">Admissions</a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                Contact
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/60">
                <p>Mahabubnagar, Telangana</p>
                <p>Universal Central School</p>

                <a
                  href="#"
                  className="block text-white hover:text-[#d6b36a]"
                >
                  Parent Login ↗
                </a>
              </div>
            </div>

          </div>

          <div className="mt-16 border-t border-white/10 pt-6 text-xs text-white/25">
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