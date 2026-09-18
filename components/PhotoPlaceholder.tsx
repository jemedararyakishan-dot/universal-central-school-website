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
}

/**
 * Reusable PhotoPlaceholder component
 * Designed for the UCS 3D aesthetic: dark editorial frames, warm gold accents,
 * clear instructions for the school administration, and seamless transition to <Image>
 * when final photographs are collected.
 */
export default function PhotoPlaceholder({
  title,
  subtitle,
  specs,
  className = "min-h-[300px]",
  src,
  alt,
  priority = false,
}: PhotoPlaceholderProps) {

  // If a real photograph has been supplied, render it seamlessly
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-[2rem] border border-white/20 bg-[#060E20] shadow-2xl ${className}`}>
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

  // Otherwise, render a premium dark editorial placeholder frame
  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/15 bg-[#08142C]/90 p-6 text-white shadow-2xl backdrop-blur-xl transition duration-500 hover:border-[#D4A853]/40 ${className}`}
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#D4A853]/15 blur-3xl transition duration-700 group-hover:scale-125" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#1D4ED8]/10 blur-3xl transition duration-700 group-hover:scale-125" />

      {/* Subtle blueprint / archival grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top bar: Badge & Aperture Icon */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D4A853]/40 bg-[#D4A853]/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#DFB76C]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D4A853]" />
          Photo Needed
        </span>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition group-hover:border-[#D4A853]/40 group-hover:text-[#DFB76C]">
          {/* Camera / Aperture Icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
      </div>

      {/* Center visual framing lines */}
      <div className="relative z-10 my-8 flex flex-col items-center justify-center text-center">
        <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.02]">
          <span className="text-xs uppercase tracking-widest text-white/30 font-mono">+</span>
        </div>
        <p className="text-base font-semibold tracking-tight text-white md:text-lg">
          {title}
        </p>
        {subtitle && (
          <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-white/50">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom bar: Specifications guidance */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-[11px] text-white/40">
        <span className="font-mono tracking-wider uppercase">
          {specs || "High resolution required"}
        </span>
        <span className="text-[10px] uppercase tracking-widest text-[#DFB76C]/70">
          UCS Archive
        </span>
      </div>
    </div>
  );
}
