"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    branch: "Either Branch",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden bg-[var(--ucs-bg-page)] text-[var(--ucs-text-primary)] transition-colors duration-300">
      <Navbar />

      {/* =========================================================
          HERO — CONTACT
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
                Connect With Us · Mahabubnagar
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[5.5rem] font-semibold leading-[1] sm:leading-[0.95] tracking-[-0.05em] text-[var(--ucs-text-primary)]">
              Get in touch
              <br />
              <span className="bg-gradient-to-r from-[var(--ucs-heading-gradient-from)] via-[var(--ucs-heading-gradient-via)] to-[var(--ucs-heading-gradient-to)] bg-clip-text text-transparent">
                with our school.
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-[var(--ucs-text-secondary)]">
              Whether you are seeking admissions information, wishing to schedule a campus tour, or have queries for our administrative team, we welcome your communication.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#contact-details"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-[#0B1733] shadow-[0_8px_25px_rgba(212,168,83,0.3)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,168,83,0.45)] text-center"
              >
                Campus Addresses & Numbers ↓
              </a>

              <a
                href="#message-form"
                className="inline-flex items-center justify-center rounded-full border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-[var(--ucs-text-primary)] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[var(--ucs-gold)] text-center"
              >
                Send a Message →
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 bg-gradient-to-t from-[var(--ucs-bg-page)] to-transparent" />
      </section>

      {/* =========================================================
          SECTION 01: CAMPUS BRANCHES & DIRECT CONTACT CHANNELS
      ========================================================= */}
      <section id="contact-details" className="relative bg-[var(--ucs-bg-page)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
              01 / Our Campuses
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.05em] text-[var(--ucs-text-primary)]">
              Two branches serving
              <br />
              <span className="text-[var(--ucs-heading-gradient-via)]">Mahabubnagar.</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[var(--ucs-text-secondary)]">
              Universal Central School operates two dedicated branch locations in Mahabubnagar, Telangana.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Branch 1 */}
            <div className="rounded-[2rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-6 sm:p-8 shadow-sm transition duration-500 hover:border-[var(--ucs-gold)] hover:shadow-xl">
              <span className="inline-flex rounded-full border border-[var(--ucs-gold-badge-border)] bg-[var(--ucs-gold-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--ucs-gold-text)]">
                Branch Location 01
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--ucs-text-primary)]">
                Mettugadda Branch
              </h3>
              <p className="mt-2 text-sm text-[var(--ucs-text-secondary)] leading-relaxed">
                Universal Central School, Mettugadda, Mahabubnagar, Telangana, India.
              </p>
              <div className="mt-6 pt-5 border-t border-[var(--ucs-border-subtle)] text-xs text-[var(--ucs-text-muted)]">
                Classes: Nursery to Grade VII · English Medium
              </div>
            </div>

            {/* Branch 2 */}
            <div className="rounded-[2rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-6 sm:p-8 shadow-sm transition duration-500 hover:border-[var(--ucs-gold)] hover:shadow-xl">
              <span className="inline-flex rounded-full border border-[var(--ucs-gold-badge-border)] bg-[var(--ucs-gold-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--ucs-gold-text)]">
                Branch Location 02
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--ucs-text-primary)]">
                Sri Ramakrishna Colony
              </h3>
              <p className="mt-2 text-sm text-[var(--ucs-text-secondary)] leading-relaxed">
                Universal Central School, Sri Ramakrishna Colony, Yenugonda, Mahabubnagar, Telangana, India.
              </p>
              <div className="mt-6 pt-5 border-t border-[var(--ucs-border-subtle)] text-xs text-[var(--ucs-text-muted)]">
                Classes: Nursery to Grade VII · English Medium
              </div>
            </div>

            {/* Direct Channels */}
            <div className="rounded-[2rem] border border-[#D4A853]/30 bg-gradient-to-br from-[#0B1B3D] via-[#0D214D] to-[#071228] p-6 sm:p-8 text-white shadow-xl">
              <span className="rounded-full border border-[#D4A853]/40 bg-[#D4A853]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#DFB76C]">
                Official Inquiries
              </span>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                Contact Channels
              </h3>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#DFB76C]">Telephone</p>
                  <a href="tel:+919848228013" className="block text-white font-medium hover:text-[#DFB76C] transition">
                    +91 9848228013
                  </a>
                  <a href="tel:+917842383082" className="block text-white font-medium hover:text-[#DFB76C] transition">
                    +91 7842383082
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#DFB76C]">Email Address</p>
                  <a href="mailto:info@universalcentralschool.in" className="text-white/80 hover:text-[#DFB76C] transition break-all">
                    info@universalcentralschool.in
                  </a>
                </div>

                <div className="pt-2">
                  <p className="text-xs uppercase tracking-wider text-[#DFB76C] mb-2">Social Channels</p>
                  <div className="flex gap-2">
                    <a
                      href="https://www.instagram.com/universal_central_school/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white hover:border-[#DFB76C] hover:text-[#DFB76C]"
                    >
                      <span>Instagram</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@universalcentralschoolmbnr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white hover:border-[#DFB76C] hover:text-[#DFB76C]"
                    >
                      <span>YouTube</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 02: MESSAGE FORM & DIRECTIONS
      ========================================================= */}
      <section id="message-form" className="relative overflow-hidden bg-[var(--ucs-bg-section-alt)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Form */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
                02 / Written Inquiries
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--ucs-text-primary)]">
                Send a message to our desk.
              </h2>
              <p className="mt-3 text-sm text-[var(--ucs-text-secondary)]">
                Have general questions regarding student records, school visit appointments, or academic life? Drop us a message below.
              </p>

              <div className="mt-8 rounded-[2rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-6 sm:p-8 shadow-xl">
                {submitted ? (
                  <div className="py-10 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                      <span className="text-2xl">✓</span>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--ucs-text-primary)]">
                      Message Received
                    </h3>
                    <p className="mt-2 text-sm text-[var(--ucs-text-secondary)] max-w-sm mx-auto">
                      Thank you for contacting Universal Central School. Our school office will review your inquiry and connect back with you soon.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-full border border-[var(--ucs-border)] bg-[var(--ucs-toggle-bg)] px-6 py-2 text-xs font-semibold text-[var(--ucs-text-primary)]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ucs-text-primary)] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-page)] px-4 py-3 text-sm text-[var(--ucs-text-primary)] focus:border-[var(--ucs-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--ucs-gold)]"
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ucs-text-primary)] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 Mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-page)] px-4 py-3 text-sm text-[var(--ucs-text-primary)] focus:border-[var(--ucs-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--ucs-gold)]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ucs-text-primary)] mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-page)] px-4 py-3 text-sm text-[var(--ucs-text-primary)] focus:border-[var(--ucs-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--ucs-gold)]"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ucs-text-primary)] mb-2">
                          Inquiry Topic
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-page)] px-4 py-3 text-sm text-[var(--ucs-text-primary)] focus:border-[var(--ucs-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--ucs-gold)]"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Campus Visit Request">Campus Visit Request</option>
                          <option value="Academic Question">Academic Question</option>
                          <option value="Administrative Assistance">Administrative Assistance</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ucs-text-primary)] mb-2">
                          Branch of Interest
                        </label>
                        <select
                          value={formData.branch}
                          onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                          className="w-full rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-page)] px-4 py-3 text-sm text-[var(--ucs-text-primary)] focus:border-[var(--ucs-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--ucs-gold)]"
                        >
                          <option value="Either Branch">Either Branch</option>
                          <option value="Mettugadda">Mettugadda Branch</option>
                          <option value="Sri Ramakrishna Colony">Sri Ramakrishna Colony (Yenugonda)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ucs-text-primary)] mb-2">
                        Message / Query *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please write your inquiry here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-page)] px-4 py-3 text-sm text-[var(--ucs-text-primary)] focus:border-[var(--ucs-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--ucs-gold)]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] px-8 py-3.5 text-xs sm:text-sm font-bold text-[#0B1733] shadow-md transition duration-300 hover:-translate-y-0.5"
                    >
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Directions & Office Guidance */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ucs-gold-text)]">
                03 / Visiting Guidelines
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ucs-text-primary)]">
                Visiting Our School
              </h2>

              <div className="rounded-[2rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-6 sm:p-8 space-y-5">
                <div>
                  <h4 className="text-sm font-bold text-[var(--ucs-text-primary)]">Campus Walk-ins</h4>
                  <p className="mt-1 text-xs text-[var(--ucs-text-muted)] leading-relaxed">
                    Parents and guardians wishing to visit during regular operational hours are invited to check in at the main gate reception of either the Mettugadda or Sri Ramakrishna Colony campus.
                  </p>
                </div>

                <div className="border-t border-[var(--ucs-border-subtle)] pt-4">
                  <h4 className="text-sm font-bold text-[var(--ucs-text-primary)]">Directions & Navigation</h4>
                  <p className="mt-1 text-xs text-[var(--ucs-text-muted)] leading-relaxed">
                    Universal Central School is centrally located in Mahabubnagar with convenient access from main town thoroughfares.
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://www.google.com/maps/search/Universal+Central+School+Mahabubnagar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[var(--ucs-gold-badge-border)] bg-[var(--ucs-gold-badge-bg)] px-4 py-2 text-xs font-semibold text-[var(--ucs-gold-text)] hover:brightness-105 transition"
                    >
                      <span>Open in Google Maps</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>

                <div className="border-t border-[var(--ucs-border-subtle)] pt-4">
                  <h4 className="text-sm font-bold text-[var(--ucs-text-primary)]">Parent Portal Access</h4>
                  <p className="mt-1 text-xs text-[var(--ucs-text-muted)] leading-relaxed">
                    Enrolled families requiring help with the school ERP or communication app can contact the school front office for credential resets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
