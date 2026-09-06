import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface SavingsCtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export function SavingsCtaSection({
  title = "Find Out How Much You Can Save Today",
  description = "Use our formula-based calculator for an instant, real-time estimate of system size, government subsidies, and monthly bill reductions.",
  buttonText = "Open Solar Calculator",
  buttonLink = "/calculator",
  className = "",
}: SavingsCtaSectionProps) {
  return (
    <section className={`relative z-0 py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto ${className}`}>
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-navy-dark via-navy to-green-dark px-6 py-14 sm:px-12 sm:py-16 text-center shadow-xl border border-white/10">
        {/* Background Fluid Wave 1 - Deep Navy Waves (Left Side) */}
        <svg
          className="absolute left-0 top-0 h-full w-full pointer-events-none opacity-70"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 -50 C 150 100, 120 400, -80 550 L -200 550 L -200 -50 Z"
            fill="url(#theme-navy-grad-1)"
          />
          <path
            d="M-50 -80 C 220 50, 180 380, -20 520 L -150 520 L -150 -80 Z"
            fill="url(#theme-navy-grad-2)"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="theme-navy-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#061D3D" />
              <stop offset="100%" stopColor="#0B2D5C" />
            </linearGradient>
            <linearGradient id="theme-navy-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B2D5C" />
              <stop offset="100%" stopColor="#14427E" />
            </linearGradient>
          </defs>
        </svg>

        {/* Background Fluid Wave 2 - Warm Solar Gold & Emerald Green Curves (Right Side) */}
        <svg
          className="absolute right-0 bottom-0 h-full w-full pointer-events-none opacity-50"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 650 550 C 750 280, 950 240, 1300 480 L 1300 550 Z"
            fill="url(#theme-gold-grad-1)"
          />
          <path
            d="M 780 550 C 880 340, 1080 310, 1300 500 L 1300 550 Z"
            fill="url(#theme-green-grad-2)"
            opacity="0.8"
          />
          <defs>
            <linearGradient id="theme-gold-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F2B705" />
              <stop offset="100%" stopColor="#2E8B27" />
            </linearGradient>
            <linearGradient id="theme-green-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E8B27" />
              <stop offset="100%" stopColor="#38A731" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient Theme Glows */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-light/20 rounded-full blur-3xl pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-cream/90 font-normal">
            {description}
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to={buttonLink}
              className="group inline-flex items-center gap-2 rounded-full btn-shade-white px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-navy transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-white/20"
            >
              <span>{buttonText}</span>
              <ChevronRight className="h-4 w-4 text-navy stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
