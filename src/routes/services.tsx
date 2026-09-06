import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sun,
  Building2,
  Flame,
  Wrench,
  BatteryCharging,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShieldAlert,
  Layers,
  FileCheck2,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/SectionLabel";
import { TurnkeyProcess, solarSteps } from "@/components/TurnkeyProcess";
import { FaqSection } from "@/components/FaqSection";
import { SavingsCtaSection } from "@/components/SavingsCtaSection";

import photovoltaic from "@/assets/photovoltaic.jpg";
import thermal from "@/assets/thermal.jpg";
import servicesImg from "@/assets/services.jpg";
import heroRoof from "@/assets/hero-roof.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Solar Services & Installation Process — Solario" },
      {
        name: "description",
        content:
          "Explore Solario's turnkey residential rooftop solar, commercial EPC, solar thermal systems, and comprehensive O&M preventive care with our 5-step installation process.",
      },
      { property: "og:title", content: "Solar Services & Installation Process — Solario" },
      {
        property: "og:description",
        content:
          "From 3D shadow analysis to DISCOM net-metering liaisoning and 24/7 telemetry monitoring.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ServicesPage,
});

const serviceList = [
  {
    id: "residential",
    icon: Sun,
    image: heroRoof,
    tag: "Residential Solutions",
    title: "Rooftop Solar Systems",
    description:
      "Transform your home into an independent clean energy generator. Cut electricity bills by up to 90% while capitalizing on government subsidies.",
    features: [
      "Eligible for PM Surya Ghar Muft Bijli Yojana (Up to ₹78,000 subsidy)",
      "High-efficiency Mono-PERC / TOPCon half-cut bifacial modules",
      "Seamless net-metering integration to sell surplus units back to grid",
      "Robust elevated mounting structures engineered for high wind loads",
    ],
    cta: "Calculate Home Savings",
    ctaLink: "/calculator",
  },
  {
    id: "commercial",
    icon: Building2,
    image: servicesImg,
    tag: "Commercial & Industrial",
    title: "C&I Solar EPC & Carports",
    description:
      "Drastically reduce operational overheads for factories, warehouses, hospitals, and educational campuses with tailored utility-scale solar installations.",
    features: [
      "CAPEX (direct ownership) & OPEX (zero-capex PPA) financing models",
      "Avail 40% accelerated tax depreciation benefits in Year 1",
      "Custom industrial sheds, tin-roof clamps, and elevated solar carports",
      "European smart string inverters with integrated rapid shutdown safety",
    ],
    cta: "Request Industrial Audit",
    ctaLink: "/contact",
  },
  {
    id: "thermal",
    icon: Flame,
    image: thermal,
    tag: "Thermal Engineering",
    title: "Solar Thermal & Water Heating",
    description:
      "High-efficiency solar water heating systems for commercial kitchens, hotels, process industries, and multi-story residential apartments.",
    features: [
      "Pressurized evacuated tube (ETC) and flat plate collector (FPC) systems",
      "Up to 80% reduction in commercial water heating fuel expenses",
      "Food-grade stainless steel storage tanks with polyurethane insulation",
      "Hybrid electric and biomass backup integration for cloudy seasons",
    ],
    cta: "Inquire About Thermal",
    ctaLink: "/contact",
  },
  {
    id: "om",
    icon: Wrench,
    image: photovoltaic,
    tag: "Asset Care",
    title: "Operations & Maintenance (O&M)",
    description:
      "Maximize the performance ratio (PR) and longevity of your solar power plant with scheduled preventive health audits and diagnostic testing.",
    features: [
      "High-resolution aerial drone thermography to identify cell hotspots",
      "Automated robotic and demineralized pressurized panel washing",
      "IV curve tracing, string open-circuit voltage, and insulation audits",
      "24/7 cloud telemetry alerting and rapid on-site dispatch within 4 hours",
    ],
    cta: "Book Maintenance Audit",
    ctaLink: "/contact",
  },
  {
    id: "bess",
    icon: BatteryCharging,
    image: servicesImg,
    tag: "Energy Storage",
    title: "Battery Energy Storage (BESS)",
    description:
      "Intelligent hybrid solar solutions paired with lithium-ion storage to safeguard your critical operations against power cuts and peak tariff surges.",
    features: [
      "Lithium Iron Phosphate (LiFePO4) chemistry with 6,000+ lifecycle guarantee",
      "Millisecond automatic transfer switch (ATS) for zero-interruption backup",
      "Peak-shaving and time-of-day (TOD) tariff optimization software",
      "Safe modular scalability from 5 kWh residential to 500 kWh industrial",
    ],
    cta: "Explore Storage Options",
    ctaLink: "/contact",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Site Survey & 3D Shadow Modeling",
    description:
      "Our surveyors visit your property with drone mapping and digital sensors to analyze structural load, sun trajectory, azimuth angle, and seasonal shadow obstacles.",
  },
  {
    step: "02",
    title: "Custom Engineering & ROI Blueprint",
    description:
      "We generate a detailed CAD architectural layout, monthly unit generation forecasts, bill savings projections, and a transparent financial payback blueprint.",
  },
  {
    step: "03",
    title: "DISCOM Liaisoning & Subsidy Filing",
    description:
      "Our team completes all regulatory paperwork with state electricity boards, CEIG electrical approvals, net-metering sanctions, and direct subsidy registration.",
  },
  {
    step: "04",
    title: "Certified Installation in 48-72h",
    description:
      "Licensed technicians install aluminum anodized mounting structures, DC cabling with conduit protection, surge arrestors, chemical earthing, and Tier-1 panels.",
  },
  {
    step: "05",
    title: "Grid Sync, Telemetry & App Handover",
    description:
      "Following final DISCOM bi-directional meter testing, we sync your power plant to the grid and configure real-time monitoring on your mobile phone.",
  },
];

const faqs = [
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

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-background pb-4 pt-2 sm:pt-3 text-foreground">
        <div className="relative z-10 mx-auto w-full max-w-[1536px] px-3 sm:px-5 lg:px-6">
          <Navbar variant="surface" activePath="/services" />

          {/* Hero Banner Card (Reference Image Style) */}
          <div className="relative mt-0 overflow-hidden rounded-2xl border border-black/5 shadow-xl min-h-[440px] md:min-h-[480px] lg:min-h-[520px] flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 pt-24 sm:pt-28 md:pt-32">
            {/* Background Image & Overlay */}
            <img
              src={servicesImg}
              alt="Turnkey solar engineering and installation"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/40 md:bg-gradient-to-r md:from-slate-950/90 md:via-slate-950/70 md:to-slate-950/40" />

            {/* Top Tag Badge */}
            <div className="relative z-10 self-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/20 shadow-sm">
                <span>Turnkey Solar Engineering</span>
              </div>
            </div>

            {/* Bottom Content Grid */}
            <div className="relative z-10 mt-12 grid gap-8 lg:grid-cols-12 lg:items-end">
              {/* Left Column: Headline */}
              <div className="lg:col-span-7">
                <h1 className="font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-sm">
                  Precision Solar<br />
                  Services
                </h1>
              </div>

              {/* Right Column: Paragraph + White Pill Button */}
              <div className="lg:col-span-5 flex flex-col justify-end space-y-6">
                <p className="text-sm sm:text-base leading-relaxed text-white/90 font-normal max-w-md">
                  From residential rooftop systems backed by government subsidies to multi-megawatt
                  industrial EPC projects, we deliver end-to-end clean energy installations with guaranteed
                  performance.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/calculator"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-navy transition-all duration-300 hover:bg-slate-100 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
                  >
                    <span>Calculate Requirements</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-brand" />
                  </Link>
                  <a
                    href="#process"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                  >
                    <span>View 5-Step Process</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Deep Dive Grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <SectionLabel>What We Deliver</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Core Solar <span className="text-brand">Capabilities</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Custom-engineered solutions designed for residential homes, industrial factories, and commercial enterprises.
          </p>
        </div>

        <div className="mt-16 space-y-12 sm:space-y-16">
          {serviceList.map((service, index) => {
            const isReversed = index % 2 !== 0;
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className={`grid items-stretch overflow-hidden rounded-lg bg-surface border-0 shadow-lg lg:grid-cols-2 ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div
                  className={`flex flex-col justify-center p-6 sm:p-10 lg:p-12 ${
                    isReversed ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-soft text-brand-deep">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs font-medium sm:text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      to={service.ctaLink}
                      className="group inline-flex items-center gap-2 rounded-full btn-shade-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-foreground transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md hover:shadow-lg hover:shadow-brand/30"
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                <div
                  className={`relative min-h-[280px] sm:min-h-[340px] lg:min-h-full w-full overflow-hidden rounded-md ${
                    isReversed ? "lg:col-start-1" : ""
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105 rounded-md"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 5-Step Process Overview - Borderless minimal reference design */}
      <div id="process" className="bg-white dark:bg-neutral-900 py-6">
        <TurnkeyProcess label="Workflow" title="Our 5-Step" subtitle="Turnkey Process" steps={solarSteps} />

        <div className="mx-auto max-w-6xl px-6 pb-12">
          <div className="rounded-lg bg-brand-soft p-6 text-center sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 text-left">
              <div>
                <h4 className="font-display text-lg font-bold text-brand-deep">
                  Need an Immediate Engineering Feasibility Audit?
                </h4>
                <p className="text-xs text-brand-deep/80 sm:text-sm">
                  Our certified site surveyors can inspect your rooftop within 48 hours.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex rounded-full btn-shade-navy px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-foreground transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md hover:shadow-lg hover:shadow-navy/30"
              >
                Schedule Site Inspection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive FAQ Accordion matching reference design */}
      <FaqSection
        badgeLabel="Frequently asked questions"
        titleMain="Frequently asked"
        titleHighlight="questions"
        description="Clear answers to the most common queries about solar panels, net-metering, government subsidies, and maintenance."
        faqs={faqs}
      />

      {/* Bottom Savings CTA */}
      <SavingsCtaSection />

      <Footer />
    </div>
  );
}
