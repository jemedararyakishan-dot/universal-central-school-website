"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GRADES = [
  "Nursery",
  "LKG",
  "UKG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
];

const STEPS = [
  {
    step: "01",
    title: "Initial Enquiry",
    desc: "Connect with Universal Central School via our website enquiry form, by telephone, or by visiting our school offices directly.",
  },
  {
    step: "02",
    title: "Campus Interaction & Consultation",
    desc: "Meet our academic coordinators, learn about daily routines and curriculum, and tour our classrooms and campus spaces.",
  },
  {
    step: "03",
    title: "Document Verification",
    desc: "Submit foundational verification documents (e.g. birth certificate, transfer certificate if applicable) as advised by the school desk.",
  },
  {
    step: "04",
    title: "Admission Confirmation & Onboarding",
    desc: "Complete the formal registration procedures and receive orientation guidance for the upcoming school academic session.",
  },
];

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    grade: "Nursery",
    branch: "Mettugadda",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Admissions Enquiry",
          ...formData,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to record enquiry");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrorMsg("Unable to connect to school server right now. Please call our office directly at +91 9848228013.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="overflow-hidden bg-[var(--ucs-bg-page)] text-[var(--ucs-text-primary)] transition-colors duration-300">
      <Navbar />

      {/* =========================================================
          HERO — ADMISSIONS
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
                Admissions · Nursery to Grade VII
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[5.5rem] font-semibold leading-[1] sm:leading-[0.95] tracking-[-0.05em] text-[var(--ucs-text-primary)]">
              Give your child
              <br />
              <span className="bg-gradient-to-r from-[var(--ucs-heading-gradient-from)] via-[var(--ucs-heading-gradient-via)] to-[var(--ucs-heading-gradient-to)] bg-clip-text text-transparent">
                a strong beginning.
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-[var(--ucs-text-secondary)]">
              Choosing the right school for early childhood is a foundational decision. At Universal Central School, we welcome families into a warm, disciplined, and supportive environment dedicated to your child’s holistic growth.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#enquiry-form"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-[#0B1733] shadow-[0_8px_25px_rgba(212,168,83,0.3)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,168,83,0.45)] text-center"
              >
                Submit Admission Enquiry ↓
              </a>

              <a
                href="#process"
                className="inline-flex items-center justify-center rounded-full border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-[var(--ucs-text-primary)] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[var(--ucs-gold)] text-center"
              >
                Admission Steps →
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 bg-gradient-to-t from-[var(--ucs-bg-page)] to-transparent" />
      </section>

      {/* =========================================================
          SECTION 01: ADMISSION PROCESS (4 STEPS)
      ========================================================= */}
      <section id="process" className="relative bg-[var(--ucs-bg-page)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
              01 / The Admission Steps
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.05em] text-[var(--ucs-text-primary)]">
              A transparent, simple
              <br />
              <span className="text-[var(--ucs-heading-gradient-via)]">admissions journey.</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[var(--ucs-text-secondary)]">
              We ensure our enrollment process is respectful, clear, and focused on understanding your child’s educational background.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((st) => (
              <div
                key={st.step}
                className="group relative flex flex-col justify-between rounded-[2rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-6 sm:p-8 shadow-sm transition duration-500 hover:-translate-y-1.5 hover:border-[var(--ucs-gold)] hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[var(--ucs-gold-text)]">{st.step}</span>
                    <span className="h-2 w-2 rounded-full bg-[var(--ucs-gold)]" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[var(--ucs-text-primary)]">
                    {st.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--ucs-text-muted)]">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--ucs-border-subtle)] text-[10px] uppercase tracking-widest text-[var(--ucs-text-subtle)]">
                  Step {st.step} of 04
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 02: WHO CAN APPLY & CRITERIA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[var(--ucs-bg-section-alt)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
                02 / Class Offerings
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.05em] text-[var(--ucs-text-primary)]">
                Grades accepted across
                <br />
                <span className="text-[var(--ucs-heading-gradient-via)]">both branches.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-[var(--ucs-text-secondary)]">
                Universal Central School admits students from Nursery up to Grade VII across our two campuses in Mahabubnagar:
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 text-sm text-[var(--ucs-text-secondary)]">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--ucs-gold-badge-bg)] text-[var(--ucs-gold-text)] font-bold text-[10px]">
                    ✓
                  </span>
                  <span><strong>Pre-Primary:</strong> Nursery, Lower Kindergarten (LKG), Upper Kindergarten (UKG)</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[var(--ucs-text-secondary)]">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--ucs-gold-badge-bg)] text-[var(--ucs-gold-text)] font-bold text-[10px]">
                    ✓
                  </span>
                  <span><strong>Primary Grades:</strong> Classes 1, 2, 3, 4, and 5</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[var(--ucs-text-secondary)]">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--ucs-gold-badge-bg)] text-[var(--ucs-gold-text)] font-bold text-[10px]">
                    ✓
                  </span>
                  <span><strong>Upper Primary Grades:</strong> Classes 6 and 7</span>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-4 sm:p-6 text-xs text-[var(--ucs-text-muted)] leading-relaxed">
                <p className="font-semibold text-[var(--ucs-text-primary)] mb-1">Office Notice on Admissions Policy:</p>
                Exact fee structures, term calendars, and seat availability depend on class capacity and are provided directly by the school administrative office upon consultation.
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="rounded-[2.5rem] border border-[#D4A853]/30 bg-gradient-to-br from-[#0B1B3D] via-[#0D214D] to-[#071228] p-8 sm:p-12 text-white shadow-2xl">
              <span className="rounded-full border border-[#D4A853]/40 bg-[#D4A853]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#DFB76C]">
                Direct Office Inquiries
              </span>

              <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">
                Have questions before applying?
              </h3>

              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                Parents are welcome to call our administrative desk during working hours for immediate guidance.
              </p>

              <div className="mt-6 space-y-3 pt-6 border-t border-white/10 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#DFB76C]">Phone Assistance</p>
                  <a href="tel:+919848228013" className="block text-white font-medium hover:text-[#DFB76C] transition">
                    +91 9848228013
                  </a>
                  <a href="tel:+917842383082" className="block text-white font-medium hover:text-[#DFB76C] transition">
                    +91 7842383082
                  </a>
                </div>

                <div className="pt-2">
                  <p className="text-xs uppercase tracking-wider text-[#DFB76C]">Email Admissions</p>
                  <a href="mailto:info@universalcentralschool.in" className="text-white/80 hover:text-[#DFB76C] transition break-all">
                    info@universalcentralschool.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 03: ADMISSION ENQUIRY FORM
      ========================================================= */}
      <section id="enquiry-form" className="relative bg-[var(--ucs-bg-page)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-4xl">
          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
              03 / Connect with Our Office
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--ucs-text-primary)]">
              Admission Enquiry Form
            </h2>
            <p className="mt-3 text-sm text-[var(--ucs-text-secondary)]">
              Please share basic student and parent details. Our administration office will connect with you to discuss the next steps.
            </p>
          </div>

          <div className="mt-10 rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-6 sm:p-10 md:p-12 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--ucs-text-primary)]">
                  Enquiry Received
                </h3>
                <p className="mt-3 max-w-md mx-auto text-sm leading-relaxed text-[var(--ucs-text-secondary)]">
                  Thank you, <strong>{formData.parentName}</strong>. Your enquiry for <strong>{formData.studentName} ({formData.grade})</strong> has been recorded for the {formData.branch} branch. Our school office will contact you on <strong>{formData.phone}</strong> shortly.
                </p>
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        parentName: "",
                        studentName: "",
                        grade: "Nursery",
                        branch: "Mettugadda",
                        phone: "",
                        email: "",
                        message: "",
                      });
                    }}
                    className="rounded-full border border-[var(--ucs-border)] bg-[var(--ucs-toggle-bg)] px-6 py-2.5 text-xs font-semibold text-[var(--ucs-text-primary)] hover:border-[var(--ucs-gold)] transition"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ucs-text-primary)] mb-2">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-page)] px-4 py-3 text-sm text-[var(--ucs-text-primary)] placeholder-[var(--ucs-text-subtle)] focus:border-[var(--ucs-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--ucs-gold)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ucs-text-primary)] mb-2">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Kumar"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-page)] px-4 py-3 text-sm text-[var(--ucs-text-primary)] placeholder-[var(--ucs-text-subtle)] focus:border-[var(--ucs-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--ucs-gold)]"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ucs-text-primary)] mb-2">
                      Grade Applying For *
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-page)] px-4 py-3 text-sm text-[var(--ucs-text-primary)] focus:border-[var(--ucs-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--ucs-gold)]"
                    >
                      {GRADES.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ucs-text-primary)] mb-2">
                      Preferred Branch Location *
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-page)] px-4 py-3 text-sm text-[var(--ucs-text-primary)] focus:border-[var(--ucs-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--ucs-gold)]"
                    >
                      <option value="Mettugadda">Mettugadda Branch</option>
                      <option value="Sri Ramakrishna Colony">Sri Ramakrishna Colony (Yenugonda)</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ucs-text-primary)] mb-2">
                      Mobile / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-page)] px-4 py-3 text-sm text-[var(--ucs-text-primary)] placeholder-[var(--ucs-text-subtle)] focus:border-[var(--ucs-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--ucs-gold)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ucs-text-primary)] mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-page)] px-4 py-3 text-sm text-[var(--ucs-text-primary)] placeholder-[var(--ucs-text-subtle)] focus:border-[var(--ucs-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--ucs-gold)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ucs-text-primary)] mb-2">
                    Additional Information / Queries
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your child's interests or any specific questions for the school office..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-page)] px-4 py-3 text-sm text-[var(--ucs-text-primary)] placeholder-[var(--ucs-text-subtle)] focus:border-[var(--ucs-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--ucs-gold)]"
                  />
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-xs text-red-400">
                    {errorMsg}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-8 py-4 text-sm font-bold text-[#0B1733] shadow-[0_8px_25px_rgba(212,168,83,0.3)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,168,83,0.45)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting Enquiry..." : "Submit Admission Enquiry →"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
