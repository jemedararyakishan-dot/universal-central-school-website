"use client";

import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`group relative flex h-10 w-10 sm:h-11 sm:w-11 min-h-[40px] min-w-[40px] shrink-0 items-center justify-center rounded-xl border border-[var(--ucs-toggle-border)] bg-[var(--ucs-toggle-bg)] text-[var(--ucs-toggle-icon)] shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[var(--ucs-gold)] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ucs-gold)] active:scale-95 ${className}`}
    >
      <span className="sr-only">
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </span>

      {/* Sun Icon (shown in Dark Mode to switch to Light) */}
      <svg
        className={`h-5 w-5 transition-all duration-300 ${
          isDark
            ? "rotate-0 scale-100 text-[#DFB76C]"
            : "-rotate-90 scale-0 opacity-0 absolute"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2v2m0 16v2m10-10h-2M4 10H2m15.364-7.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636"
        />
      </svg>

      {/* Moon Icon (shown in Light Mode to switch to Dark) */}
      <svg
        className={`h-5 w-5 transition-all duration-300 ${
          isDark
            ? "rotate-90 scale-0 opacity-0 absolute"
            : "rotate-0 scale-100 text-[#0B1B3D]"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
}
