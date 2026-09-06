import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#FAF9F5] border-t border-slate-200/90 py-14 text-navy">
      {/* Light Masked Solar Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-multiply filter contrast-125 brightness-110"
          style={{
            backgroundImage: `url('/footer-bg.jpg')`,
            maskImage:
              "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
          }}
        />
        {/* Solar Warmth Light Accent */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(242, 183, 5, 0.18) 0%, rgba(250, 249, 245, 0) 70%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#F3F1EA]/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="inline-flex items-center transition-transform hover:scale-105"
          >
            <img
              src="/logo.png"
              alt="Vishvas Green Energy"
              className="h-20 sm:h-28 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.12em] text-navy/80 font-semibold">
          {["Photovoltaic Systems", "Solar Thermal", "Energy Consulting", "Battery Storage"].map(
            (item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
                {item}
              </span>
            )
          )}
        </div>

        <div className="mt-8 border-t border-navy/15" />

        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 gap-y-4 text-sm text-navy/90 font-semibold">
          <Link to="/" className="transition-colors hover:text-green">
            Home
          </Link>
          <Link to="/about" className="transition-colors hover:text-green">
            About Us
          </Link>
          <Link to="/services" className="transition-colors hover:text-green">
            Services
          </Link>
          <Link to="/calculator" className="transition-colors hover:text-green">
            Savings Calculator
          </Link>
          <Link to="/contact" className="transition-colors hover:text-green">
            Contact Us
          </Link>
        </nav>

        <div className="mt-8 flex items-center justify-center gap-3">
          {[
            { Icon: Facebook, label: "Facebook" },
            { Icon: Twitter, label: "Twitter" },
            { Icon: Instagram, label: "Instagram" },
            { Icon: Linkedin, label: "LinkedIn" },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-md bg-navy/10 text-navy transition-all duration-200 hover:bg-green hover:text-white shadow-sm"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-navy/70 font-medium">
          <a href="#" className="hover:text-navy transition-colors">
            Terms &amp; Conditions
          </a>
          <span className="text-navy/30">|</span>
          <a href="#" className="hover:text-navy transition-colors">
            Privacy Policy
          </a>
          <span className="text-navy/30">|</span>
          <a href="#" className="hover:text-navy transition-colors">
            Disclosures
          </a>
        </div>

        <p className="mt-3 text-center text-xs text-navy/70 font-medium">
          © {new Date().getFullYear()} Vishvas Green Energy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
