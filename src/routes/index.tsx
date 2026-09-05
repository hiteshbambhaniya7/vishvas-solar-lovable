import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Leaf,
  Recycle,
  Globe2,
  Play,
  CheckCircle2,
  ArrowUpRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

import heroRoof from "@/assets/hero-roof.jpg";
import whySolar from "@/assets/why-solar.jpg";
import videoHouse from "@/assets/video-house.jpg";
import photovoltaic from "@/assets/photovoltaic.jpg";
import thermal from "@/assets/thermal.jpg";
import services from "@/assets/services.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solario — Solar Power Systems for Home & Business" },
      {
        name: "description",
        content:
          "Solario designs and installs photovoltaic and solar thermal systems. Clean, renewable energy with free consultation and cost-cutting financing options.",
      },
      { property: "og:title", content: "Solario — Solar Power Systems for Home & Business" },
      {
        property: "og:description",
        content:
          "Harness clean energy with Solario: photovoltaic panels, solar thermal systems, and certified installation partners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = ["Home", "About Us", "Services", "Project", "Blog"];

const featureCards = [
  {
    icon: Recycle,
    title: "Clean & Renewable",
    text: "Solar power is endlessly renewable — the sun delivers more energy in an hour than the world uses in a year.",
  },
  {
    icon: Leaf,
    title: "Environment Friendly",
    text: "No emissions, no noise, no fuel. Every installed panel replaces power that would otherwise burn coal or gas.",
  },
  {
    icon: Globe2,
    title: "Sustainable Future",
    text: "Panels last decades with minimal upkeep, giving your home or business a stable and reliable energy future.",
  },
];

const tabs = ["Solar Panel", "Turbines", "Hydropower", "Commercial", "Residential"];

const team = [
  { img: team1, name: "Jacob Jones", role: "Lead Installer" },
  { img: team2, name: "Marcus Vale", role: "Site Surveyor" },
  { img: team3, name: "Owen Reyes", role: "Systems Engineer" },
];

const projects = [
  { img: project1, tag: "Wind & Solar", title: "Harnessing Clean Energy: A Solar Revolution" },
  { img: project2, tag: "Inspection", title: "Turbine Field Efficiency Audit" },
  { img: project3, tag: "Utility Scale", title: "Hillside Renewable Power Park" },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-deep">
      {children}
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <img
            src={heroRoof}
            alt="Solar panels installed on a tiled house roof"
            width={1280}
            height={960}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand/25" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Nav */}
          <header className="flex items-center justify-between py-6">
            <span className="font-display text-xl font-extrabold tracking-tight text-brand-foreground">
              Solario
            </span>
            <nav className="hidden items-center gap-7 md:flex">
              {navLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-xs font-semibold uppercase tracking-wider text-brand-foreground/85 transition-colors hover:text-brand-foreground"
                >
                  {l}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="rounded-full bg-brand-deep px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-brand-foreground transition-opacity hover:opacity-90"
            >
              Contact Us
            </a>
          </header>

          <div className="grid gap-10 pb-28 pt-10 lg:grid-cols-2 lg:pb-36 lg:pt-16">
            <div>
              <h1 className="font-display text-6xl font-black uppercase leading-[0.88] tracking-tight text-brand-foreground sm:text-7xl lg:text-8xl">
                Solar
                <br />
                Power
              </h1>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-brand-foreground/85">
                Renewable energy is the future of our planet. We design, install and maintain solar
                systems that unlock the full power of the sun for your home, and put your energy
                bill back in your control.
              </p>
              <div className="mt-10 flex items-center gap-4 rounded-full bg-brand-deep p-2 pr-6 sm:w-fit">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-foreground/15">
                  <Phone className="h-5 w-5 text-brand-foreground" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[11px] uppercase tracking-wider text-brand-foreground/70">
                    Have Questions? Call Us
                  </span>
                  <span className="block text-base font-bold text-brand-foreground">
                    +91 258 789 457
                  </span>
                </span>
              </div>
            </div>

            <div className="relative lg:hidden">
              <img
                src={heroRoof}
                alt="Solar panels installed on a tiled house roof"
                width={1280}
                height={960}
                className="h-64 w-full object-cover"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="pointer-events-none absolute bottom-24 left-1/2 hidden h-28 w-28 -translate-x-1/2 items-center justify-center rounded-full bg-brand-foreground text-center lg:flex">
            <span className="font-display text-[10px] font-extrabold uppercase leading-tight tracking-wider text-brand-deep">
              Go Better
              <br />
              Go Solar
            </span>
          </div>
        </div>
      </section>

      {/* Why Solar */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-surface p-7 shadow-sm">
            <h2 className="font-display text-3xl font-extrabold tracking-tight">
              Why <span className="text-brand underline decoration-2 underline-offset-4">Solar</span>{" "}
              Energy?
            </h2>
            <img
              src={whySolar}
              alt="Rows of solar panels in a green field"
              width={1024}
              height={640}
              loading="lazy"
              className="mt-6 h-48 w-full object-cover"
            />
          </div>
          <div className="rounded-lg bg-secondary p-7">
            <p className="text-sm leading-relaxed text-muted-foreground">
              We come to your solar website where we are doing solar energy's limitless potential
              and transformative impact on power. Join us to discover its benefits, technology, and
              possibilities — from the first site survey through commissioning and long-term
              monitoring of your system.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex rounded-full bg-brand-deep px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-brand-foreground transition-opacity hover:opacity-90"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {featureCards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-lg bg-surface p-7 shadow-sm">
              <Icon className="h-8 w-8 text-brand" strokeWidth={1.6} />
              <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-6 overflow-hidden ">
          <img
            src={videoHouse}
            alt="Modern home with rooftop solar panels lit at dusk"
            width={1280}
            height={720}
            loading="lazy"
            className="h-[340px] w-full object-cover"
          />
          <button
            type="button"
            className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-none bg-surface/90 transition-transform hover:scale-105"
            aria-label="Play project video"
          >
            <Play className="h-6 w-6 fill-brand-deep text-brand-deep" />
          </button>
        </div>
      </section>

      {/* How Solar Works */}
      <section className="mx-auto max-w-6xl px-6 pb-20 text-center">
        <SectionLabel>Solar System</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight">
          How <span className="text-brand underline decoration-2 underline-offset-4">Solar</span>{" "}
          Works
        </h2>
        <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
          <article className="overflow-hidden rounded-lg bg-brand p-6">
            <span className="inline-flex rounded-full bg-brand-foreground/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-foreground">
              Industrial Solution
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-brand-foreground">
              Photovoltaic Technology
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-foreground/85">
              Solar panels use photovoltaic cells to convert sunlight directly into electricity that
              powers your building and feeds surplus back to the grid.
            </p>
            <img
              src={photovoltaic}
              alt="Technician inspecting a photovoltaic panel array"
              width={768}
              height={768}
              loading="lazy"
              className="mt-6 h-56 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-lg bg-surface p-6 shadow-sm">
            <span className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-deep">
              Renewable Energy
            </span>
            <h3 className="mt-4 font-display text-xl font-bold">Solar Thermal Systems</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Thermal collectors capture the sun's heat to warm water and interiors, cutting heating
              costs across the whole year with almost no maintenance.
            </p>
            <img
              src={thermal}
              alt="Solar thermal collectors on a rooftop"
              width={768}
              height={768}
              loading="lazy"
              className="mt-6 h-56 w-full object-cover"
            />
          </article>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight">
            Our <span className="text-brand underline decoration-2 underline-offset-4">Solar</span>{" "}
            Services
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {tabs.map((t, i) => (
              <button
                key={t}
                type="button"
                className={
                  i === 0
                    ? "rounded-full bg-brand px-5 py-2 text-xs font-semibold text-brand-foreground"
                    : "rounded-full bg-secondary px-5 py-2 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-brand-soft"
                }
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-12 grid items-center gap-10 text-left lg:grid-cols-2">
            <img
              src={services}
              alt="Two solar engineers with a tablet in front of a panel field"
              width={1024}
              height={768}
              loading="lazy"
              className="h-80 w-full object-cover"
            />
            <div>
              <h3 className="font-display text-2xl font-extrabold leading-snug tracking-tight">
                Harnessing Clean Energy:
                <br />A Solar Revolution
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                From the first rooftop survey to grid connection, our certified crews handle every
                step. You get a system sized to your real consumption and a clear payback plan.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free Consultation Services",
                  "Friendly Installation Partners",
                  "Cost Cutting Financing Options",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="h-5 w-5 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <SectionLabel>Our Team</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight">
          Experienced{" "}
          <span className="text-brand underline decoration-2 underline-offset-4">Members</span>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {team.map(({ img, name, role }) => (
            <figure key={name} className="relative overflow-hidden rounded-lg bg-surface shadow-sm">
              <img
                src={img}
                alt={`${name}, ${role} at Solario`}
                width={640}
                height={768}
                loading="lazy"
                className="h-72 w-full object-cover"
              />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-md bg-surface/95 px-4 py-3 text-left">
                <span className="block font-display text-sm font-bold">{name}</span>
                <span className="block text-xs text-muted-foreground">{role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <SectionLabel>Latest Work</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight">
            Our Awesome{" "}
            <span className="text-brand underline decoration-2 underline-offset-4">Projects</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map(({ img, tag, title }) => (
              <article key={title} className="group relative overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt={title}
                  width={768}
                  height={896}
                  loading="lazy"
                  className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-md bg-brand p-4 text-left">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-foreground/75">
                    {tag}
                  </span>
                  <h3 className="mt-1 flex items-start gap-2 font-display text-sm font-bold leading-snug text-brand-foreground">
                    {title}
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight">
          Over 100+ <span className="text-brand">Company</span> Trust Us
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Homeowners, factories and municipalities rely on Solario to plan, install and maintain
          their renewable energy systems.
        </p>
        <a
          href="tel:+91258789457"
          className="mt-8 inline-flex rounded-full bg-brand px-7 py-3.5 text-[11px] font-bold uppercase tracking-wider text-brand-foreground transition-opacity hover:opacity-90"
        >
          Get a Free Consultation
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-brand-deep py-14 text-brand-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-center gap-3">
            <span className="block h-6 w-6 rounded-sm rounded-tr-xl bg-brand-foreground" aria-hidden />
            <span className="font-display text-2xl font-medium tracking-wide">SOLARIO</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.12em] text-brand-foreground/80">
            {["Photovoltaic Systems", "Solar Thermal", "Energy Consulting"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-brand-foreground/70" aria-hidden />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-brand-foreground/15" />

          <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-4 text-sm text-brand-foreground/90">
            {[
              { label: "Projects", href: "#projects" },
              { label: "Services", href: "#services" },
              { label: "About", href: "#why" },
              { label: "Team", href: "#team" },
              { label: "Contact us", href: "#contact" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-brand-foreground">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 flex items-center justify-center gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-foreground/10 text-brand-foreground transition-colors hover:bg-brand-foreground/20"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-brand-foreground/70">
            <a href="#" className="hover:text-brand-foreground">Terms &amp; Conditions</a>
            <span className="text-brand-foreground/30">|</span>
            <a href="#" className="hover:text-brand-foreground">Privacy Policy</a>
            <span className="text-brand-foreground/30">|</span>
            <a href="#" className="hover:text-brand-foreground">Disclosures</a>
          </div>

          <p className="mt-3 text-center text-xs text-brand-foreground/70">
            © {new Date().getFullYear()} Solario. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
