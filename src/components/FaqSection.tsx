import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

const defaultFaqs: FaqItem[] = [
  {
    q: "How does solar generate electricity during cloudy or monsoon days?",
    a: "Solar panels do not require direct, scorching sunlight to generate power; they absorb diffused ultraviolet and infrared light through clouds. While generation may drop to 30%-50% during heavy rainstorms, your on-grid system seamlessly balances electricity from the DISCOM grid without interruption.",
  },
  {
    q: "What is net-metering and how does it reduce my power bills?",
    a: "A bi-directional net-meter replaces your traditional utility meter. It records both the electricity you draw from the grid and the excess solar units you feed into it during daytime. At month end, you are billed only for the 'net' consumption. Surplus credits roll over to subsequent billing cycles.",
  },
  {
    q: "How much government subsidy can I receive under PM Surya Ghar Yojana?",
    a: "Under the PM Surya Ghar Muft Bijli Yojana, residential homeowners are eligible for ₹30,000 per kW for the first 2 kW (total ₹60,000), plus an additional ₹18,000 for the 3rd kW, capping at a maximum direct bank transfer subsidy of ₹78,000 for systems 3 kW and larger.",
  },
  {
    q: "Will installing solar panels damage my roof or cause water leakage?",
    a: "No. Our certified structural engineers use chemical anchoring with UV-resistant EPDM rubber gaskets and non-penetrative mounting clamps specifically tailored for tin sheds, RCC flat roofs, and tiled terraces. We preserve your roof's waterproofing integrity completely.",
  },
  {
    q: "What maintenance is required and what is the expected lifespan?",
    a: "Solar panels have no moving parts and boast a 25-year linear performance warranty. General maintenance is simple: wash the panel glass every 10–14 days to remove dust. Our smart monitoring app also alerts you if cleaning is needed due to reduced generation.",
  },
];

interface FaqSectionProps {
  badgeLabel?: string;
  titleMain?: string;
  titleHighlight?: string;
  description?: string;
  faqs?: FaqItem[];
  className?: string;
}

export function FaqSection({
  badgeLabel = "Frequently asked questions",
  titleMain = "Frequently asked",
  titleHighlight = "questions",
  description = "Clear answers to the most common queries about solar panels, net-metering, government subsidies, and maintenance.",
  faqs = defaultFaqs,
  className = "",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`w-full bg-white dark:bg-neutral-900 py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 text-left">
            {/* Theme Pill Tag */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3.5 py-1.5 text-xs font-semibold text-brand-deep">
              <span>{badgeLabel}</span>
            </div>

            {/* Title with Theme Accent Color */}
            <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
              {titleMain}
              <br />
              <span className="text-brand">
                {titleHighlight}
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md">
              {description}
            </p>
          </div>

          {/* Right Column: Borderless Accordion Stack */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`rounded-lg transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-brand-soft/60 dark:bg-neutral-800/90"
                      : "bg-neutral-100/80 dark:bg-neutral-850 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="group flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-sm sm:text-base text-neutral-900 dark:text-white pr-4 leading-snug group-hover:text-brand transition-colors">
                      {faq.q}
                    </span>
                    
                    {/* Theme Circle Arrow Button */}
                    <span
                      className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 ${
                        isOpen
                          ? "bg-brand-deep text-brand-foreground rotate-180 shadow-sm"
                          : "bg-brand text-brand-foreground hover:bg-brand-deep shadow-xs"
                      }`}
                    >
                      <ChevronDown className="h-5 w-5 stroke-[2.5]" />
                    </span>
                  </button>

                  {/* Answer Collapsible Area */}
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 animate-in fade-in duration-200">
                      <p className="pt-3 border-t border-brand/10 dark:border-neutral-700/60">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
