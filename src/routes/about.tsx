import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Award,
  Zap,
  CheckCircle2,
  Users,
  ArrowRight,
  TrendingUp,
  Clock,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/SectionLabel";

import whySolar from "@/assets/why-solar.jpg";
import services from "@/assets/services.jpg";
import heroAbout from "@/assets/hero-about.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Solario Solar Energy Solutions" },
      {
        name: "description",
        content:
          "Learn about Solario's mission, engineering heritage, certified installation teams, and commitment to delivering reliable, cost-effective solar power systems.",
      },
      { property: "og:title", content: "About Us — Solario Solar Energy Solutions" },
      {
        property: "og:description",
        content:
          "Pioneering clean energy transitions with over 18.5 MW installed solar capacity, certified engineers, and 25-year performance warranties.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  {
    year: "2018",
    title: "Foundation & Inception",
    description: "Started with a focused mission: simplify solar adoption for residential homeowners.",
  },
  {
    year: "2020",
    title: "100th Rooftop Milestone",
    description: "Expanded our certified crew across the state, achieving 100 on-grid installations.",
  },
  {
    year: "2022",
    title: "C&I Megawatt Scale",
    description: "Commissioned our first multi-megawatt industrial solar park and factory setups.",
  },
  {
    year: "2024",
    title: "National Subsidy Partner",
    description: "Empanelled under PM Surya Ghar Muft Bijli Yojana, accelerating subsidy delivery.",
  },
  {
    year: "Present",
    title: "18.5+ MW & Smart O&M",
    description: "Integrating smart telemetry and drone thermography for peak operational efficiency.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Engineering Precision",
    description:
      "Every array is modeled using 3D shadow mapping and wind-load calculations to ensure 25+ years of trouble-free generation.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description:
      "We source exclusively from Tier-1 BloombergNEF rated manufacturers and European micro-inverters for highest yield.",
  },
  {
    icon: TrendingUp,
    title: "Transparent Economics",
    description:
      "No hidden costs or vague estimations. We provide exact payback forecasts, subsidy calculations, and net-metering assistance.",
  },
  {
    icon: Users,
    title: "Lifetime Client Care",
    description:
      "Our dedicated O&M engineers monitor live telemetry 24/7 to guarantee your system operates at peak performance ratio.",
  },
];

const team = [
  {
    img: team1,
    name: "Jacob Jones",
    role: "Lead Systems Architect & Installer",
    bio: "Over 12 years of hands-on EPC project delivery specializing in multi-tier rooftop mounting.",
  },
  {
    img: team2,
    name: "Marcus Vale",
    role: "Chief Site Surveyor & Electrical Engineer",
    bio: "Certified electrical inspector with expertise in DISCOM net-metering and CEIG compliance.",
  },
  {
    img: team3,
    name: "Owen Reyes",
    role: "Senior Telemetry & O&M Specialist",
    bio: "Passionate about thermographic diagnostics, smart inverters, and battery storage optimization.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-background pb-4 pt-2 sm:pt-3 text-foreground">
        <div className="relative z-10 mx-auto w-full max-w-[1536px] px-3 sm:px-5 lg:px-6">
          <Navbar variant="surface" activePath="/about" />

          {/* Hero Banner Card (Reference Image Style) */}
          <div className="relative mt-0 overflow-hidden rounded-2xl border border-black/5 shadow-xl min-h-[440px] md:min-h-[480px] lg:min-h-[520px] flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 pt-24 sm:pt-28 md:pt-32">
            {/* Background Image & Overlay */}
            <img
              src={heroAbout}
              alt="Solar energy engineering team on commercial rooftop"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/40 md:bg-gradient-to-r md:from-slate-950/90 md:via-slate-950/70 md:to-slate-950/40" />

            {/* Top Tag Badge */}
            <div className="relative z-10 self-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/20 shadow-sm">
                <span>Pioneering Clean Power</span>
              </div>
            </div>

            {/* Bottom Content Grid */}
            <div className="relative z-10 mt-12 grid gap-8 lg:grid-cols-12 lg:items-end">
              {/* Left Column: Headline */}
              <div className="lg:col-span-7">
                <h1 className="font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-sm">
                  Powering A<br />
                  Cleaner Future
                </h1>
              </div>

              {/* Right Column: Paragraph + White Pill Button */}
              <div className="lg:col-span-5 flex flex-col justify-end space-y-6">
                <p className="text-sm sm:text-base leading-relaxed text-white/90 font-normal max-w-md">
                  At Vishvas Green Energy, we bridge cutting-edge photovoltaic engineering with turnkey execution.
                  From residential homes to megawatt-scale industrial complexes, we empower consumers to
                  generate clean, abundant solar power.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/calculator"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-navy transition-all duration-300 hover:bg-slate-100 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
                  >
                    <span>Estimate Your Savings</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-brand" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                  >
                    <span>Book Site Survey</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Strip */}
      <section className="border-b border-border bg-surface py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="border-l-2 border-brand pl-4">
              <div className="font-display text-3xl font-black text-foreground sm:text-4xl">
                18.5+ <span className="text-brand">MW</span>
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Installed Capacity
              </div>
            </div>
            <div className="border-l-2 border-brand pl-4">
              <div className="font-display text-3xl font-black text-foreground sm:text-4xl">
                500+
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Turnkey Installations
              </div>
            </div>
            <div className="border-l-2 border-brand pl-4">
              <div className="font-display text-3xl font-black text-foreground sm:text-4xl">
                ₹14.2+ <span className="text-brand">Cr</span>
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Customer Savings
              </div>
            </div>
            <div className="border-l-2 border-brand pl-4">
              <div className="font-display text-3xl font-black text-foreground sm:text-4xl">
                22.5k <span className="text-brand">Tons</span>
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                CO₂ Offset To Date
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Narrative */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Engineered for <span className="text-brand">Longevity</span> &amp; Maximum Yield
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Founded by passionate clean tech engineers, Solario was created to eliminate the
              friction, confusing jargon, and poor workmanship often found in the solar industry.
              We believe a solar installation is a 25-year financial asset, and every component
              must be designed to withstand extreme weather while delivering optimal generation.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              From our digital 3D shadow analysis to dedicated DISCOM net-metering liaisoning, our
              in-house teams handle every single step. You receive a fully commissioned,
              grid-synchronized power plant with continuous monitoring on your smartphone.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-secondary p-4">
                <CheckCircle2 className="h-5 w-5 text-brand" />
                <h4 className="mt-2 font-display text-sm font-bold">100% In-House Team</h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  Zero third-party subcontractors; quality controlled directly.
                </p>
              </div>
              <div className="rounded-lg bg-secondary p-4">
                <Award className="h-5 w-5 text-brand" />
                <h4 className="mt-2 font-display text-sm font-bold">DISCOM Empanelled</h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  Fully authorized for instant net metering and direct subsidies.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-md shadow-lg">
              <img
                src={whySolar}
                alt="Solar field at sunset with engineers inspecting solar arrays"
                width={1024}
                height={640}
                className="h-[420px] w-full object-cover rounded-md"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-lg bg-gradient-to-r from-navy-dark via-navy to-green-dark p-6 text-white shadow-2xl border border-white/20 backdrop-blur-md sm:block max-w-xs z-10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 border border-white/20 text-gold-light">
                  <Zap className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-lg font-bold text-white">25-Year Warranty</div>
                  <div className="text-xs text-white/80">Guaranteed linear power yield</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <SectionLabel>Core Values</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Principles That <span className="text-brand">Drive</span> Our Work
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              We stand behind every watt generated with strict adherence to electrical safety and
              customer satisfaction.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-lg border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/50 hover:shadow-md"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-soft text-brand-deep transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Roadmap / Milestones */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <SectionLabel>Our Journey</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Milestones in <span className="text-brand">Clean Energy</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            From humble beginnings to an industry leader in solar EPC engineering across India.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-border" />
          <div className="space-y-8 lg:space-y-12">
            {milestones.map((m, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={m.year}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full lg:w-1/2 p-2">
                    <div
                      className={`rounded-lg border border-border bg-surface p-6 shadow-sm transition-all hover:border-brand/40 ${
                        isEven ? "lg:ml-8" : "lg:mr-8"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-display text-xl font-black text-brand">{m.year}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        <h3 className="font-display text-base font-bold">{m.title}</h3>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {m.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 h-8 w-8 items-center justify-center rounded-full bg-brand text-brand-foreground shadow">
                    <Clock className="h-4 w-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Team */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <SectionLabel>Our Experts</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Certified Solar <span className="text-brand">Engineers</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Our qualified team has overseen hundreds of safe, high-yielding solar rooftop and
            ground-mount installations.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {team.map(({ img, name, role, bio }) => (
              <figure
                key={name}
                className="group relative overflow-hidden rounded-lg border border-border bg-background shadow-sm text-left transition-all hover:shadow-md"
              >
                <div className="relative h-72 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={img}
                    alt={`${name}, ${role} at Solario`}
                    width={640}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="block font-display text-lg font-bold text-white">{name}</span>
                    <span className="block text-xs font-medium text-brand-soft">{role}</span>
                  </div>
                </div>
                <figcaption className="p-5">
                  <p className="text-xs leading-relaxed text-muted-foreground">{bio}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-navy-dark via-navy to-green-dark py-16 text-white border-t border-b border-white/10 shadow-2xl">
        {/* Ambient Wave Accents */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-light/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl text-white">
            Ready To Convert Sunlight Into Savings?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cream/90 font-normal">
            Use our interactive calculator to see how much you can save with PM Surya Ghar
            subsidies, or request a free site engineering audit today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/calculator"
              className="group inline-flex items-center justify-center rounded-full btn-shade-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-navy transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md hover:shadow-2xl"
            >
              Calculate Your Savings
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 backdrop-blur-xs px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-navy hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
            >
              Contact Our Engineers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
