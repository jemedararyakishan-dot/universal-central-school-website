import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#252344]">

      {/* ================= NAVIGATION ================= */}
      <nav className="relative z-50 w-full bg-[#252344]">
        <div className="mx-auto flex max-w-7xl items-start justify-between px-6 lg:px-10">

          {/* LOGO */}
          <a
            href="/"
            className="flex h-[110px] w-[105px] items-center justify-center rounded-b-md bg-white p-3 shadow-xl"
          >
            <Image
              src="/ucs-logo.png"
              alt="Universal Central School"
              width={90}
              height={90}
              className="h-full w-full object-contain"
              priority
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 pt-7 text-sm font-medium text-white lg:flex">

            <a
              href="#about"
              className="transition hover:text-[#e4c477]"
            >
              About
            </a>

            <a
              href="#academics"
              className="transition hover:text-[#e4c477]"
            >
              Academics
            </a>

            <a
              href="#life"
              className="transition hover:text-[#e4c477]"
            >
              Student Life
            </a>

            <a
              href="#life"
              className="transition hover:text-[#e4c477]"
            >
              Campus
            </a>

            <a
              href="#admissions"
              className="transition hover:text-[#e4c477]"
            >
              Admissions
            </a>

            <a
              href="#contact"
              className="rounded-full bg-[#e4c477] px-6 py-3 font-medium text-[#252344] shadow-lg transition hover:bg-white"
            >
              Enquire Now
            </a>

          </div>


          {/* MOBILE MENU */}
          <details className="relative mt-6 lg:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">
              Menu
            </summary>

            <div className="absolute right-0 mt-3 w-52 rounded-xl bg-white p-3 text-[#252344] shadow-2xl">

              <a
                href="#about"
                className="block rounded-lg px-4 py-3 text-sm hover:bg-[#f7f4ed]"
              >
                About
              </a>

              <a
                href="#academics"
                className="block rounded-lg px-4 py-3 text-sm hover:bg-[#f7f4ed]"
              >
                Academics
              </a>

              <a
                href="#life"
                className="block rounded-lg px-4 py-3 text-sm hover:bg-[#f7f4ed]"
              >
                Student Life
              </a>

              <a
                href="#life"
                className="block rounded-lg px-4 py-3 text-sm hover:bg-[#f7f4ed]"
              >
                Campus
              </a>

              <a
                href="#admissions"
                className="block rounded-lg px-4 py-3 text-sm hover:bg-[#f7f4ed]"
              >
                Admissions
              </a>

              <a
                href="#contact"
                className="mt-2 block rounded-lg bg-[#252344] px-4 py-3 text-center text-sm font-medium text-white"
              >
                Enquire Now
              </a>

            </div>
          </details>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden">

        <Image
          src="/school.png"
          alt="Universal Central School campus"
          fill
          priority
          sizes="100vw"
          className="scale-[1.02] object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#171633]/75 via-[#171633]/30 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 lg:px-10 lg:pb-24">

          <div className="max-w-4xl text-white">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-[#e4c477]">
              Established 1994 · Mahabubnagar
            </p>

            <h1 className="text-6xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-9xl">
              Where
              <br />
              <span className="text-[#e4c477]">foundations</span>
              <br />
              begin.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/85 lg:text-xl">
              Universal Central School is a place where children build strong
              academic foundations, discover their abilities, and grow with
              confidence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#about"
                className="rounded-full bg-[#e4c477] px-7 py-4 font-medium text-[#252344] transition hover:bg-white"
              >
                Discover UCS
              </a>

              <a
                href="#admissions"
                className="rounded-full border border-white/50 bg-white/5 px-7 py-4 font-medium text-white backdrop-blur-sm transition hover:bg-white hover:text-[#252344]"
              >
                Admissions
              </a>

            </div>

          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-10 hidden text-xs uppercase tracking-[0.25em] text-white/70 lg:block">
          Nursery — Grade 7
        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}
      <section id="about" className="px-6 py-28 lg:px-10 lg:py-40">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#b58a32]">
              About Universal Central School
            </p>

            <h2 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight lg:text-6xl">
              Education that begins with strong foundations.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#55536a]">
              Since 1994, Universal Central School has been providing children
              with a strong foundation for their academic and personal growth.
              From the early years through upper primary, our focus is on
              developing curious, capable and confident learners.
            </p>

            <a
              href="#academics"
              className="mt-8 inline-flex items-center gap-3 font-medium text-[#252344]"
            >
              Explore our approach
              <span className="text-[#b58a32]">→</span>
            </a>
          </div>

        </div>
      </section>


      {/* ================= ACADEMICS ================= */}
      <section
        id="academics"
        className="bg-[#252344] px-6 py-28 text-white lg:px-10 lg:py-36"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#e4c477]">
              Academics
            </p>

            <h2 className="text-5xl font-semibold leading-tight tracking-tight lg:text-7xl">
              Every stage matters.
            </h2>

            <p className="mt-7 text-lg leading-8 text-white/65">
              Our academic journey grows with the child—from the first years
              of learning to the confidence developed through upper primary.
            </p>
          </div>


          <div className="mt-20 grid gap-6 lg:grid-cols-3">

            <div className="border-t border-white/20 pt-7">
              <p className="text-sm uppercase tracking-[0.2em] text-[#e4c477]">
                01
              </p>

              <h3 className="mt-5 text-3xl font-medium">
                Pre-Primary
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Nursery · LKG · UKG
              </p>
            </div>


            <div className="border-t border-white/20 pt-7">
              <p className="text-sm uppercase tracking-[0.2em] text-[#e4c477]">
                02
              </p>

              <h3 className="mt-5 text-3xl font-medium">
                Primary
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Grades 1 — 5
              </p>
            </div>


            <div className="border-t border-white/20 pt-7">
              <p className="text-sm uppercase tracking-[0.2em] text-[#e4c477]">
                03
              </p>

              <h3 className="mt-5 text-3xl font-medium">
                Upper Primary
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Grades 6 — 7
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= CLASSROOM ================= */}
      <section className="px-6 py-28 lg:px-10 lg:py-36">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">

            <Image
              src="/classroom.jpeg"
              alt="Students learning in a Universal Central School classroom"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition duration-700 hover:scale-105"
            />

          </div>

          <div>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#b58a32]">
              Inside the classroom
            </p>

            <h2 className="text-4xl font-semibold leading-tight lg:text-5xl">
              Learning is more than what is written in a textbook.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#55536a]">
              We want students to understand, question, participate and
              develop the confidence to apply what they learn.
            </p>

          </div>

        </div>
      </section>


      {/* ================= STUDENT LIFE ================= */}
      <section id="life" className="px-6 pb-28 lg:px-10 lg:pb-40">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#b58a32]">
                Beyond the classroom
              </p>

              <h2 className="text-5xl font-semibold tracking-tight lg:text-6xl">
                Growing in every direction.
              </h2>

            </div>

            <p className="max-w-md text-lg leading-7 text-[#55536a]">
              Education extends beyond academics through activities that help
              children discover confidence, discipline and creativity.
            </p>

          </div>


          <div className="relative aspect-[16/8] overflow-hidden rounded-sm">

            <Image
              src="/activity.jpeg"
              alt="Students participating in activities at Universal Central School"
              fill
              sizes="(max-width: 1024px) 100vw, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-8 lg:p-12">

              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium uppercase tracking-[0.2em] text-white">
                <span>Sports</span>
                <span>Dance</span>
                <span>Karate</span>
                <span>Activities</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= ADMISSIONS ================= */}
      <section
        id="admissions"
        className="bg-[#e8dfc9] px-6 py-28 lg:px-10 lg:py-36"
      >

        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#b58a32]">
            Admissions
          </p>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

            <h2 className="text-5xl font-semibold leading-tight tracking-tight lg:text-7xl">
              Begin your child's journey at UCS.
            </h2>

            <div>

              <p className="text-lg leading-8 text-[#55536a]">
                Thinking about Universal Central School for your child?
                Get in touch with us to learn more about our school and the
                admission process.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-block rounded-full bg-[#252344] px-8 py-4 font-medium text-white transition hover:bg-[#3d3765]"
              >
                Start an Enquiry
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer
        id="contact"
        className="bg-[#171633] px-6 py-16 text-white lg:px-10"
      >

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-4">

          {/* BRAND */}
          <div>

            <Image
              src="/ucs-logo.png"
              alt="Universal Central School"
              width={100}
              height={100}
              className="h-24 w-24 object-contain"
            />

            <p className="mt-5 max-w-sm leading-7 text-white/55">
              Universal Central School
              <br />
              Nursery — Grade 7
            </p>

          </div>


          {/* EXPLORE */}
          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[#e4c477]">
              Explore
            </p>

            <div className="flex flex-col gap-3 text-white/65">

              <a
                href="#about"
                className="transition hover:text-white"
              >
                About
              </a>

              <a
                href="#academics"
                className="transition hover:text-white"
              >
                Academics
              </a>

              <a
                href="#life"
                className="transition hover:text-white"
              >
                Student Life
              </a>

              <a
                href="#admissions"
                className="transition hover:text-white"
              >
                Admissions
              </a>

            </div>

          </div>


          {/* CONTACT */}
          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[#e4c477]">
              Contact
            </p>

            <p className="leading-7 text-white/65">
              Mahabubnagar, Telangana
              <br />
              Universal Central School
            </p>

            {/* Replace # with the official ERP URL when available */}
            <a
              href="#"
              className="mt-6 inline-block rounded-full border border-white/20 px-5 py-3 text-sm transition hover:bg-white hover:text-[#171633]"
            >
              Parent Login
            </a>

          </div>


          {/* SOCIALS */}
          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[#e4c477]">
              Connect
            </p>

            <div className="flex items-center gap-3">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/universal_central_school/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Universal Central School on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-[#171633]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>


              {/* YOUTUBE */}
              <a
                href="https://www.youtube.com/@universalcentralschoolmbnr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Universal Central School on YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-[#171633]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8Z" />
                  <path
                    d="m9.75 15.5 5.5-3.5-5.5-3.5v7Z"
                    fill="#171633"
                  />
                </svg>
              </a>

            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/40">
              Follow Universal Central School for school activities,
              celebrations and updates.
            </p>

          </div>

        </div>


        {/* BOTTOM FOOTER */}
        <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/35 lg:flex-row lg:items-center lg:justify-between">

          <p>
            © {new Date().getFullYear()} Universal Central School. All rights reserved.
          </p>

          <p>
            Mahabubnagar, Telangana
          </p>

        </div>

      </footer>

    </main>
  );
}