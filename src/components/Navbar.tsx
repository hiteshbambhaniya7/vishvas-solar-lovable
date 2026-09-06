import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Calculator, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface NavbarProps {
  variant?: "brand" | "surface";
  activePath?: string;
  ctaText?: string;
  ctaTo?: string;
}

const middleNavItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
];

const allNavItems = [
  ...middleNavItems,
  { label: "Solar Calculator", to: "/calculator" },
  { label: "Contact Us", to: "/contact" },
];

export function Navbar({
  variant = "surface",
  activePath,
  ctaText = "Contact Us",
  ctaTo = "/contact",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-mobile-menu-open", "true");
    } else {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-mobile-menu-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-mobile-menu-open");
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 py-3 md:py-4"
            : isScrolled
            ? "bg-white/85 dark:bg-background/85 backdrop-blur-xl border-b border-black/[0.04] dark:border-white/[0.08] shadow-xs py-2 md:py-2.5"
            : "bg-transparent py-4 md:py-5"
        }`}
      >
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <Link to="/" className="flex items-center gap-2 group z-10">
              <img
                src="/logo.png"
                alt="Vishvas Green Energy"
                className={`w-auto object-contain transition-all duration-300 ease-in-out group-hover:scale-[1.02] ${
                  mobileMenuOpen || !isScrolled
                    ? "h-13 sm:h-16 md:h-20"
                    : "h-9 sm:h-10 md:h-12"
                }`}
              />
            </Link>

            {/* Middle Group: Home, About Us, Services (Centered on Screen with reduced padding) */}
            <nav className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2 bg-slate-100/90 dark:bg-secondary/80 p-1 rounded-full border border-black/[0.04] shadow-xs backdrop-blur-md z-10">
              {middleNavItems.map((item) => {
                const isActive = activePath === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`relative rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? "text-brand"
                        : "text-muted-foreground hover:text-foreground hover:bg-slate-200/50"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-white dark:bg-background shadow-xs transition-all duration-300 animate-in fade-in zoom-in-95 -z-0" />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Group: Round Icon-Only Buttons for Calculator & Contact Us */}
            <div className="flex items-center gap-2 sm:gap-2.5 z-10">
              {/* Round Solar Calculator Icon Button */}
              <Link
                to="/calculator"
                title="Solar Calculator"
                aria-label="Solar Calculator"
                className={`group hidden sm:flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-all duration-300 active:scale-90 ${
                  activePath === "/calculator"
                    ? "bg-amber-500 text-white shadow-sm ring-2 ring-amber-300/60"
                    : "bg-amber-50 dark:bg-amber-950/40 text-amber-700 hover:bg-amber-500 hover:text-white border border-amber-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                <Calculator className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              </Link>

              {/* Round Contact Us Icon Button */}
              <Link
                to={ctaTo}
                title="Contact Us"
                aria-label="Contact Us"
                className={`group hidden sm:flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-all duration-300 active:scale-90 bg-brand text-brand-foreground shadow-xs hover:bg-green-dark hover:shadow-md hover:-translate-y-0.5 ${
                  activePath === ctaTo ? "ring-2 ring-brand/50" : ""
                }`}
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl md:hidden text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-7 w-7 text-brand stroke-[2.5]" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu Overlay (Rendered outside <header> so backdrop-blur does not contain it) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9900] bg-white dark:bg-slate-950 text-foreground flex flex-col justify-between pt-24 pb-8 px-6 sm:px-8 md:hidden animate-in fade-in duration-200 h-screen w-screen overflow-y-auto">
          {/* Main Content Area (Centered Navigation & Sub-links) */}
          <div className="flex-1 flex flex-col items-center justify-center py-6 my-auto">
            {/* Primary Navigation Links (excluding Contact Us link) */}
            <nav className="flex flex-col items-center gap-6 sm:gap-7 text-center">
              {allNavItems
                .filter((item) => item.to !== "/contact")
                .map((item) => {
                  const isActive = activePath === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg sm:text-xl font-extrabold uppercase tracking-[0.2em] transition-colors ${
                        isActive
                          ? "text-brand"
                          : "text-slate-900 dark:text-slate-100 hover:text-brand"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
            </nav>

            {/* Primary CTA Button with Icon-Only Vibrating Phone Button */}
            <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3 text-center w-full max-w-xs sm:max-w-sm">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 rounded-full btn-shade-brand py-3.5 text-center text-xs font-bold uppercase tracking-widest text-brand-foreground shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                Get Free Site Survey
              </Link>

              {/* Icon-Only Vibrating Phone Call Button */}
              <a
                href="tel:+91258789457"
                aria-label="Call Us: +91 258 789 457"
                title="Call +91 258 789 457"
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-md transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Phone className="h-5 w-5 text-amber-400 animate-phone-ring" />
              </a>
            </div>
          </div>

          {/* Bottom Social Media Icons */}
          <div className="flex items-center justify-center gap-6 pt-4 pb-2 text-slate-700 dark:text-slate-300">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-brand transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-brand transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-brand transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-brand transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}

      {/* Invisible spacer div so content flow starts below fixed header */}
      <div className="h-20 sm:h-24 md:h-28" aria-hidden="true" />
    </>
  );
}
