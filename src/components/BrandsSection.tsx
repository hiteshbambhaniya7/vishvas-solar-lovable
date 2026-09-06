import React from "react";

interface Brand {
  id: string;
  name: string;
  subtitle?: string;
  logo: React.ReactNode;
}

const brands: Brand[] = [
  {
    id: "adani-solar",
    name: "ADANI SOLAR",
    subtitle: "Tier-1 PV Modules",
    logo: (
      <svg className="h-10 sm:h-12 w-auto fill-current" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Adani geometric mark */}
        <path d="M12 28 C12 16, 24 10, 36 14 C30 20, 24 24, 12 28 Z" fill="#0B2D5C" />
        <path d="M14 12 C24 8, 38 14, 38 28 C28 26, 20 20, 14 12 Z" fill="#2E8B27" />
        <circle cx="24" cy="18" r="3" fill="#F2B705" />
        <text x="46" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="15" letterSpacing="1" fill="currentColor">ADANI</text>
        <text x="46" y="33" fontFamily="sans-serif" fontWeight="600" fontSize="8" letterSpacing="1.5" fill="#2E8B27">SOLAR</text>
      </svg>
    ),
  },
  {
    id: "waaree",
    name: "WAAREE",
    subtitle: "One With The Sun",
    logo: (
      <svg className="h-10 sm:h-12 w-auto fill-current" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="20" r="10" stroke="#0B2D5C" strokeWidth="3" fill="none" />
        <path d="M18 10 L18 30 M10 20 L26 20 M12 14 L24 26 M12 26 L24 14" stroke="#F2B705" strokeWidth="2" strokeLinecap="round" />
        <text x="36" y="25" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="1.5" fill="currentColor">WAAREE</text>
        <text x="36" y="34" fontFamily="sans-serif" fontWeight="600" fontSize="7" letterSpacing="1" fill="#4A5A6E">ENERGIES</text>
      </svg>
    ),
  },
  {
    id: "tata-solar",
    name: "TATA POWER SOLAR",
    subtitle: "Trust of Tata",
    logo: (
      <svg className="h-10 sm:h-12 w-auto fill-current" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="22" height="20" rx="3" fill="#0B2D5C" />
        <path d="M12 15 H26 M19 15 V25" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        <text x="38" y="23" fontFamily="sans-serif" fontWeight="900" fontSize="14" letterSpacing="1" fill="currentColor">TATA POWER</text>
        <text x="38" y="33" fontFamily="sans-serif" fontWeight="700" fontSize="8" letterSpacing="2" fill="#2E8B27">SOLAR</text>
      </svg>
    ),
  },
  {
    id: "vikram-solar",
    name: "VIKRAM SOLAR",
    subtitle: "Green Tomorrow",
    logo: (
      <svg className="h-10 sm:h-12 w-auto fill-current" viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 28 L20 10 L30 28 Z" fill="#2E8B27" />
        <path d="M16 28 L20 18 L24 28 Z" fill="#F2B705" />
        <text x="36" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="14" letterSpacing="1.2" fill="currentColor">VIKRAM</text>
        <text x="36" y="33" fontFamily="sans-serif" fontWeight="600" fontSize="8" letterSpacing="1.8" fill="#0B2D5C">SOLAR</text>
      </svg>
    ),
  },
  {
    id: "havells",
    name: "HAVELLS",
    subtitle: "Solar Solutions",
    logo: (
      <svg className="h-10 sm:h-12 w-auto fill-current" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="20" height="20" rx="4" fill="#0B2D5C" />
        <path d="M13 14 V26 M23 14 V26 M13 20 H23" stroke="#F2B705" strokeWidth="2.5" strokeLinecap="round" />
        <text x="34" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="15" letterSpacing="1" fill="currentColor">HAVELLS</text>
        <text x="34" y="33" fontFamily="sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="1.5" fill="#2E8B27">SOLAR</text>
      </svg>
    ),
  },
  {
    id: "sungrow",
    name: "SUNGROW",
    subtitle: "Clean Power For All",
    logo: (
      <svg className="h-10 sm:h-12 w-auto fill-current" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="20" r="10" fill="#F2B705" opacity="0.2" />
        <path d="M10 24 C14 14, 22 14, 26 24 C22 20, 14 20, 10 24 Z" fill="#2E8B27" />
        <path d="M12 16 C16 22, 24 22, 28 16 C24 18, 16 18, 12 16 Z" fill="#0B2D5C" />
        <text x="34" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="15" letterSpacing="1.2" fill="currentColor">SUNGROW</text>
        <text x="34" y="33" fontFamily="sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="1" fill="#4A5A6E">INVERTERS</text>
      </svg>
    ),
  },
  {
    id: "solis",
    name: "SOLIS",
    subtitle: "Global Solar Inverters",
    logo: (
      <svg className="h-10 sm:h-12 w-auto fill-current" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 20 C8 14, 14 10, 20 10 C26 10, 32 14, 32 20 C32 26, 26 30, 20 30 C14 30, 8 26, 8 20 Z" stroke="#0B2D5C" strokeWidth="2.5" fill="none" />
        <path d="M14 20 C14 16, 26 16, 26 20 C26 24, 14 24, 14 20 Z" stroke="#F2B705" strokeWidth="2" fill="none" />
        <text x="38" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="1.5" fill="currentColor">solis</text>
        <text x="38" y="33" fontFamily="sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="1" fill="#2E8B27">TECHNOLOGY</text>
      </svg>
    ),
  },
  {
    id: "growatt",
    name: "GROWATT",
    subtitle: "Smart Energy Storage",
    logo: (
      <svg className="h-10 sm:h-12 w-auto fill-current" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10 L28 20 L18 30 L8 20 Z" fill="#2E8B27" />
        <circle cx="18" cy="20" r="4" fill="#F2B705" />
        <text x="34" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="15" letterSpacing="1" fill="currentColor">Growatt</text>
        <text x="34" y="33" fontFamily="sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="1" fill="#0B2D5C">SMART ENERGY</text>
      </svg>
    ),
  },
  {
    id: "microtek",
    name: "MICROTEK",
    subtitle: "Solar Power Systems",
    logo: (
      <svg className="h-10 sm:h-12 w-auto fill-current" viewBox="0 0 165 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="11" width="20" height="18" rx="2" fill="#0B2D5C" />
        <path d="M12 16 L18 24 L24 16" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="34" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="14" letterSpacing="1" fill="currentColor">MICROTEK</text>
        <text x="34" y="33" fontFamily="sans-serif" fontWeight="700" fontSize="8" letterSpacing="1.5" fill="#2E8B27">SOLAR</text>
      </svg>
    ),
  },
  {
    id: "loom-solar",
    name: "LOOM SOLAR",
    subtitle: "Mono PERC Innovators",
    logo: (
      <svg className="h-10 sm:h-12 w-auto fill-current" viewBox="0 0 165 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="20" height="20" rx="3" fill="#2E8B27" />
        <path d="M11 10 V30 M18 10 V30 M25 10 V30 M8 16 H28 M8 24 H28" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" />
        <text x="34" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="14" letterSpacing="1" fill="currentColor">LOOM SOLAR</text>
        <text x="34" y="33" fontFamily="sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="1" fill="#F2B705">PREMIUM PANELS</text>
      </svg>
    ),
  },
  {
    id: "canadian-solar",
    name: "CANADIAN SOLAR",
    subtitle: "Make The Difference",
    logo: (
      <svg className="h-10 sm:h-12 w-auto fill-current" viewBox="0 0 185 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10 L22 17 L29 17 L23 21 L25 28 L18 23 L11 28 L13 21 L7 17 L14 17 Z" fill="#0B2D5C" />
        <text x="34" y="23" fontFamily="sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.8" fill="currentColor">CANADIAN</text>
        <text x="34" y="33" fontFamily="sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="1.5" fill="#2E8B27">SOLAR</text>
      </svg>
    ),
  },
  {
    id: "polycab",
    name: "POLYCAB",
    subtitle: "Solar Cables & Gear",
    logo: (
      <svg className="h-10 sm:h-12 w-auto fill-current" viewBox="0 0 155 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="20" r="10" fill="#0B2D5C" />
        <path d="M14 20 L22 20 M18 14 L18 26" stroke="#F2B705" strokeWidth="2.5" strokeLinecap="round" />
        <text x="34" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="15" letterSpacing="1" fill="currentColor">POLYCAB</text>
        <text x="34" y="33" fontFamily="sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="1" fill="#4A5A6E">SOLAR GEAR</text>
      </svg>
    ),
  },
];

export function BrandsSection() {
  // Duplicate array to achieve seamless infinite marquee loop
  const marqueeBrands = [...brands, ...brands];

  return (
    <section 
      aria-label="Authorized Brand Partners"
      className="relative overflow-hidden border-y border-border/60 bg-white dark:bg-navy-dark py-8 sm:py-10 backdrop-blur-xs transition-colors duration-300"
    >
      {/* Left and Right Fade Gradient Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-navy-dark dark:via-navy-dark/80" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-navy-dark dark:via-navy-dark/80" />

      {/* Marquee Track Container */}
      <div className="group relative flex overflow-hidden select-none">
        <div className="flex shrink-0 min-w-full items-center justify-around gap-12 sm:gap-16 lg:gap-24 animate-marquee py-2">
          {marqueeBrands.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="flex items-center gap-3 grayscale opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105 cursor-pointer text-navy dark:text-cream"
              title={brand.name}
            >
              <div className="flex h-12 sm:h-14 items-center justify-center">
                {brand.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
