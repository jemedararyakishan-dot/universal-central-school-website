import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#252344]">

      {/* ================= NAVIGATION ================= */}
      <nav className="relative z-50 w-full bg-[#252344]">
        <div className="mx-auto flex max-w-7xl items-start justify-between px-6 lg:px-10">

          {/* LOGO — separate white plaque */}
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

          {/* NAVIGATION */}
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
              href="#campus"
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
              className="rounded-full bg-[#252344] px-6 py-3 text-white shadow-lg transition hover:bg-[#3d3765]"
            >
              Enquire Now
            </a>

          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden">

        {/* FULL SCHOOL PHOTOGRAPH */}
        <Image
          src="/school.png"
          alt="Universal Central School campus"
          fill
          priority
          sizes="100vw"
          className="scale-[1.02] object-cover object-center"
        />

        {/* TEXT-SIDE GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171633]/75 via-[#171633]/30 to-transparent" />

        {/* HERO CONTENT */}
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

        {/* SMALL GRADE LABEL */}
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

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">

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


          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[#e4c477]">
              Explore
            </p>

            <div className="flex flex-col gap-3 text-white/65">

              <a href="#about" className="hover:text-white">
                About
              </a>

              <a href="#academics" className="hover:text-white">
                Academics
              </a>

              <a href="#life" className="hover:text-white">
                Student Life
              </a>

              <a href="#admissions" className="hover:text-white">
                Admissions
              </a>

            </div>

          </div>


          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[#e4c477]">
              Contact
            </p>

            <p className="leading-7 text-white/65">
              Mahabubnagar, Telangana
              <br />
              Universal Central School
            </p>

            <button className="mt-6 rounded-full border border-white/20 px-5 py-3 text-sm hover:bg-white hover:text-[#171633]">
              Parent Login
            </button>

          </div>

        </div>


        <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/35">
          © {new Date().getFullYear()} Universal Central School. All rights reserved.
        </div>

      </footer>

    </main>
  );
}