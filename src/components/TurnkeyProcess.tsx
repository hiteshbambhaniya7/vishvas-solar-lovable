import { useState } from "react";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const defaultSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Fair decision",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    step: "02",
    title: "Profitable proposition",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    step: "03",
    title: "100% result",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    step: "04",
    title: "Friendly atmosphere",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    step: "05",
    title: "Great experience",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const solarSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Site Survey & 3D Modeling",
    description:
      "Drone mapping and digital sensors to analyze structural load, sun trajectory, and shadow obstacles.",
  },
  {
    step: "02",
    title: "Engineering & ROI Blueprint",
    description:
      "Detailed CAD architectural layout, monthly generation forecasts, bill savings, and payback blueprint.",
  },
  {
    step: "03",
    title: "DISCOM & Subsidy Filing",
    description:
      "Complete regulatory paperwork with state electricity boards, CEIG approvals, and direct subsidy registration.",
  },
  {
    step: "04",
    title: "Certified 48h Installation",
    description:
      "Licensed technicians install anodized aluminum structures, DC cabling, surge arrestors, and Tier-1 solar panels.",
  },
  {
    step: "05",
    title: "Grid Sync & App Handover",
    description:
      "Bi-directional meter testing, grid synchronization, and real-time mobile app performance monitoring setup.",
  },
];

interface TurnkeyProcessProps {
  label?: string;
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  numberFontClass?: string;
  className?: string;
}

/**
 * Render text numbers with top half visible and bottom half hidden (clipped via overflow-hidden).
 * Wide white background design.
 */
function TextNumberHalf({
  step,
  isActive,
  numberFontClass = "font-number-outfit",
}: {
  step: string;
  isActive: boolean;
  numberFontClass?: string;
}) {
  const activeColorClass = "text-brand";
  const inactiveColorClass = "text-neutral-300 dark:text-neutral-700";
  const colorClass = isActive ? activeColorClass : inactiveColorClass;

  return (
    <div className="relative h-10 sm:h-12 lg:h-14 overflow-hidden select-none flex items-start">
      <span
        className={`${numberFontClass} font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter transition-colors duration-300 ${colorClass}`}
        style={{
          lineHeight: 0.85,
        }}
      >
        {step}
      </span>
    </div>
  );
}

export function TurnkeyProcess({
  label = "Minimal",
  title = "Why",
  subtitle = "choose us",
  steps = defaultSteps,
  numberFontClass = "font-number-outfit",
  className = "",
}: TurnkeyProcessProps) {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(1); // Step 02 active by default

  return (
    <section className={`w-full bg-white dark:bg-neutral-900 py-12 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header section top-left */}
        <div className="max-w-md text-left">
          <span className="text-xs sm:text-sm font-medium tracking-wide text-neutral-400 dark:text-neutral-500">
            {label}
          </span>
          <div className="mt-2 mb-6 h-[2px] w-7 bg-neutral-300 dark:bg-neutral-700" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
            {title}
            <br />
            {subtitle}
          </h2>
        </div>

        {/* 5 Steps horizontal grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {steps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <div
                key={step.step}
                onMouseEnter={() => setActiveStepIndex(idx)}
                className="group cursor-pointer flex flex-col justify-start text-left transition-all duration-200"
              >
                {/* Top half visible number with custom font & theme color */}
                <TextNumberHalf
                  step={step.step}
                  isActive={isActive}
                  numberFontClass={numberFontClass}
                />

                {/* Title */}
                <h3
                  className={`mt-4 text-xs sm:text-sm font-bold leading-snug transition-colors duration-200 ${
                    isActive
                      ? "text-neutral-900 dark:text-white"
                      : "text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900"
                  }`}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[11px] sm:text-xs leading-relaxed text-neutral-400 dark:text-neutral-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
