import Image from "next/image";

interface PhotoPlaceholderProps {
  /** The primary label for the required photo, e.g. "Principal Portrait" */
  title: string;
  /** Additional guidance or context for staff collecting the photo */
  subtitle?: string;
  /** Aspect ratio class or styling recommendation, e.g. "4:5 Portrait" */
  specs?: string;
  /** Tailwind aspect ratio class or custom styling, defaults to "aspect-[4/3]" or "h-full w-full" */
  className?: string;
  /** If a real image is already available, pass its src path here to render the real image */
  src?: string;
  /** Alt text for the real image if provided */
  alt?: string;
  /** High priority for above-the-fold images */
  priority?: boolean;
  /** Visual theme: "auto" adapts to current theme, "dark" forces dark blueprint, "light" forces light frame */
  theme?: "auto" | "dark" | "light";
}

/**
 * Reusable PhotoPlaceholder component
 * Fully integrated into the UCS centralized design token system.
 */
export default function PhotoPlaceholder({
  title,
  subtitle,
  specs,
  className = "min-h-[300px]",
  src,
  alt,
  priority = false,
  theme = "auto",
}: PhotoPlaceholderProps) {

  // If a real photograph has been supplied, render it seamlessly
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-[2rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] shadow-2xl ${className}`}>
        <Image
          src={src}
          alt={alt || title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060E20]/80 via-transparent to-transparent" />
      </div>
    );
  }

  // If theme is specifically forced to dark or light, use explicit styles; otherwise use dynamic CSS variables
  if (theme === "dark") {
    return (
      <div
        className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-white/15 bg-[#08142C]/90 p-4 sm:p-6 text-white shadow-2xl backdrop-blur-xl transition duration-500 hover:border-[#D4A853]/40 ${className}`}
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#D4A853]/15 blur-3xl transition duration-700 group-hover:scale-125" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#1D4ED8]/10 blur-3xl transition duration-700 group-hover:scale-125" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#D4A853]/40 bg-[#D4A853]/10 px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#DFB76C]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Photo Needed
          </span>
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition group-hover:border-[#D4A853]/40 group-hover:text-[#DFB76C]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
        </div>
        <div className="relative z-10 my-4 sm:my-8 flex flex-col items-center justify-center text-center">
          <div className="relative mb-2.5 sm:mb-3 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.02] text-white/30 font-mono">
            <span className="text-xs uppercase tracking-widest">+</span>
          </div>
          <p className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-white">{title}</p>
          {subtitle && <p className="mt-1 sm:mt-1.5 max-w-xs text-[11px] sm:text-xs leading-relaxed text-white/50">{subtitle}</p>}
        </div>
        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 sm:pt-4 text-[10px] sm:text-[11px] text-white/40">
          <span className="font-mono tracking-wider uppercase truncate max-w-[65%]">{specs || "High resolution required"}</span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#DFB76C]/70 shrink-0">UCS Archive</span>
        </div>
      </div>
    );
  }

  // Adaptive placeholder (responds to CSS tokens)
  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-4 sm:p-6 text-[var(--ucs-text-primary)] shadow-xl transition-all duration-500 hover:border-[var(--ucs-gold)] ${className}`}
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--ucs-glow-gold)] blur-3xl transition duration-700 group-hover:scale-125" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[var(--ucs-glow-blue)] blur-3xl transition duration-700 group-hover:scale-125" />

      {/* Subtle blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[var(--ucs-grid-opacity)]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ucs-grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--ucs-grid-color) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top bar: Badge & Aperture Icon */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[var(--ucs-gold-badge-border)] bg-[var(--ucs-gold-badge-bg)] px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[var(--ucs-gold-text)]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--ucs-green)]" />
          Photo Needed
        </span>

        <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[var(--ucs-border)] bg-[var(--ucs-toggle-bg)] text-[var(--ucs-text-muted)] transition group-hover:border-[var(--ucs-gold)] group-hover:text-[var(--ucs-gold-text)]">
          {/* Camera / Aperture Icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
      </div>

      {/* Center visual framing */}
      <div className="relative z-10 my-4 sm:my-8 flex flex-col items-center justify-center text-center">
        <div className="relative mb-2.5 sm:mb-3 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-dashed border-[var(--ucs-border)] bg-[var(--ucs-toggle-bg)] text-[var(--ucs-text-muted)] font-mono">
          <span className="text-xs uppercase tracking-widest">+</span>
        </div>
        <p className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-[var(--ucs-text-primary)]">
          {title}
        </p>
        {subtitle && (
          <p className="mt-1 sm:mt-1.5 max-w-xs text-[11px] sm:text-xs leading-relaxed text-[var(--ucs-text-muted)]">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom bar: Specifications guidance */}
      <div className="relative z-10 flex items-center justify-between border-t border-[var(--ucs-border-subtle)] pt-3 sm:pt-4 text-[10px] sm:text-[11px] text-[var(--ucs-text-subtle)]">
        <span className="font-mono tracking-wider uppercase truncate max-w-[65%]">
          {specs || "High resolution required"}
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[var(--ucs-gold-text)] shrink-0">
          UCS Archive
        </span>
      </div>
    </div>
  );
}
