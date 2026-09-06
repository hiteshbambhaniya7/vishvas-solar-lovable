import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useId } from "react";
import {
  Zap,
  TrendingDown,
  Award,
  Leaf,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Solar Savings & Subsidy Calculator — Solario" },
      {
        name: "description",
        content:
          "Calculate your recommended rooftop solar system size, monthly electricity bill savings, PM Surya Ghar government subsidies, and payback period in seconds.",
      },
      { property: "og:title", content: "Solar Savings & Subsidy Calculator — Solario" },
      {
        property: "og:description",
        content:
          "Instant formula-based solar estimation tool. Check system size, cost, subsidy, and 25-year lifetime financial gain.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CalculatorPage,
});

function CalculatorPage() {
  const navigate = useNavigate();

  // State
  const [consumerType, setConsumerType] = useState<"residential" | "commercial">("residential");
  const [monthlyBill, setMonthlyBill] = useState<number>(6000);
  const [roofArea, setRoofArea] = useState<number>(800);

  const billInputId = useId();
  const roofInputId = useId();

  // Mathematical Parameters
  const isResidential = consumerType === "residential";
  const tariff = isResidential ? 8.0 : 9.5; // ₹ per unit (kWh)
  const costPerKw = isResidential ? 55000 : 48000; // Benchmark cost per kW

  // Consumption
  const monthlyConsumptionUnits = Math.round(monthlyBill / tariff);

  // System Sizing (120 units per kW/month; 100 sq.ft required per kW)
  const consumptionBasedSize = monthlyConsumptionUnits / 120;
  const areaBasedMaxCap = roofArea / 100;

  // Recommended size is constrained by roof or consumption, clamped at minimum 1 kW
  const rawSize = Math.min(consumptionBasedSize, areaBasedMaxCap);
  const recommendedSize = Math.max(1, Math.round(rawSize * 10) / 10);

  const requiredRoofArea = Math.round(recommendedSize * 100);
  const isRoofConstrained = areaBasedMaxCap < consumptionBasedSize;

  // Generation
  const monthlyGeneration = Math.round(recommendedSize * 120);
  const annualGeneration = monthlyGeneration * 12;

  // Financials
  const monthlySavings = Math.round(Math.min(monthlyConsumptionUnits, monthlyGeneration) * tariff);
  const annualSavings = monthlySavings * 12;

  const grossSystemCost = Math.round(recommendedSize * costPerKw);

  // Subsidy Calculation (PM Surya Ghar for residential)
  let subsidy = 0;
  if (isResidential) {
    if (recommendedSize <= 2) {
      subsidy = Math.round(recommendedSize * 30000);
    } else {
      // 2kW * 30,000 + 18,000, capped at 78,000
      subsidy = 78000;
    }
  }

  const netCost = Math.max(0, grossSystemCost - subsidy);
  const paybackYears = annualSavings > 0 ? (netCost / annualSavings).toFixed(1) : "0.0";
  const lifetimeSavings = Math.max(0, annualSavings * 25 - netCost);

  // Environmental
  const co2OffsetTons = ((annualGeneration * 0.82) / 1000).toFixed(1);
  const treesEquivalent = Math.round(annualGeneration * 0.04);

  const handleBookSurvey = () => {
    navigate({
      to: "/contact",
      search: {
        type: consumerType,
        bill: monthlyBill.toString(),
        size: recommendedSize.toString(),
        savings: annualSavings.toString(),
        cost: netCost.toString(),
      } as any,
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-background pb-20 pt-2 text-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <Navbar variant="surface" activePath="/calculator" />

          <div className="mt-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-deep px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground">
              <span>Instant Client-Side Estimator</span>
            </div>

            <h1 className="mt-6 font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Solar Savings<br />
              Calculator
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Estimate your ideal solar power plant capacity, immediate monthly electricity bill
              savings, PM Surya Ghar subsidy eligibility, and 25-year return on investment.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Interactive Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 -mt-10">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Controls Column (Left) */}
          <div className="rounded-lg border border-border bg-surface p-6 shadow-md sm:p-8 lg:col-span-6">
            <div className="flex items-center justify-between pb-6 border-b border-border">
              <div>
                <h2 className="font-display text-xl font-bold">1. Select Property Type</h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Different tariffs and government subsidy structures apply.
                </p>
              </div>
            </div>

            {/* Category Toggle */}
            <div className="mt-6 grid grid-cols-2 gap-3 rounded-full bg-secondary p-1.5">
              <button
                type="button"
                onClick={() => setConsumerType("residential")}
                className={`flex items-center justify-center gap-2 rounded-full py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isResidential
                    ? "bg-brand text-brand-foreground shadow-sm scale-[1.01]"
                    : "text-muted-foreground hover:text-foreground hover:bg-slate-200/60 active:scale-95"
                }`}
              >
                <span>Residential</span>
                <span className="rounded-full bg-brand-deep/30 px-2 py-0.5 text-[10px] text-white">
                  Subsidy
                </span>
              </button>
              <button
                type="button"
                onClick={() => setConsumerType("commercial")}
                className={`flex items-center justify-center gap-2 rounded-full py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  !isResidential
                    ? "bg-brand text-brand-foreground shadow-sm scale-[1.01]"
                    : "text-muted-foreground hover:text-foreground hover:bg-slate-200/60 active:scale-95"
                }`}
              >
                <span>Commercial / Industrial</span>
              </button>
            </div>

            {/* Monthly Bill Slider */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={billInputId}
                  className="font-display text-sm font-bold text-foreground"
                >
                  Monthly Electricity Bill (₹)
                </label>
                <div className="flex items-center rounded-lg border border-border bg-background px-3 py-1 text-sm font-bold text-brand">
                  <span>₹</span>
                  <input
                    id={billInputId}
                    type="number"
                    min={1000}
                    max={150000}
                    step={500}
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value) || 0)}
                    className="w-24 bg-transparent text-right font-display text-sm font-bold outline-none"
                  />
                </div>
              </div>

              <input
                type="range"
                min={1500}
                max={100000}
                step={500}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-secondary accent-brand"
                aria-label="Monthly electricity bill in rupees"
              />

              <div className="mt-2 flex justify-between text-[11px] font-semibold text-muted-foreground">
                <span>₹1,500</span>
                <span>₹50,000</span>
                <span>₹1,00,000+</span>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Estimated average consumption: ~<strong>{monthlyConsumptionUnits} kWh/month</strong>
              </p>
            </div>

            {/* Available Roof Area Slider */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={roofInputId}
                  className="font-display text-sm font-bold text-foreground"
                >
                  Available Shadow-Free Rooftop Area (Sq. Ft.)
                </label>
                <div className="flex items-center rounded-lg border border-border bg-background px-3 py-1 text-sm font-bold text-brand">
                  <input
                    id={roofInputId}
                    type="number"
                    min={100}
                    max={20000}
                    step={50}
                    value={roofArea}
                    onChange={(e) => setRoofArea(Number(e.target.value) || 0)}
                    className="w-20 bg-transparent text-right font-display text-sm font-bold outline-none"
                  />
                  <span className="ml-1 text-xs text-muted-foreground">sq.ft</span>
                </div>
              </div>

              <input
                type="range"
                min={100}
                max={5000}
                step={50}
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-secondary accent-brand"
                aria-label="Available rooftop area in square feet"
              />

              <div className="mt-2 flex justify-between text-[11px] font-semibold text-muted-foreground">
                <span>100 sq.ft</span>
                <span>2,500 sq.ft</span>
                <span>5,000+ sq.ft</span>
              </div>

              {isRoofConstrained && (
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-gold-soft p-3 text-xs text-navy border border-gold/30">
                  <AlertCircle className="h-4 w-4 shrink-0 text-gold-dark" />
                  <span>
                    Your rooftop area ({roofArea} sq.ft) limits system size to {recommendedSize} kW.
                    A full offset would require ~{Math.round(consumptionBasedSize * 100)} sq.ft.
                  </span>
                </div>
              )}
            </div>

            {/* Quick Benefits Note */}
            <div className="mt-8 rounded-lg bg-secondary/80 p-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 font-bold text-foreground mb-1">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <span>Our Engineering Guarantee</span>
              </div>
              All estimates adhere to MNRE solar irradiation models for India. Net meter approval &amp;
              subsidy filing are managed 100% by our certified liaisoning officers.
            </div>
          </div>

          {/* Results Summary Column (Right) */}
          <div className="space-y-6 lg:col-span-6">
            {/* Primary Recommendation Card */}
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-r from-navy-dark via-navy to-green-dark p-6 text-white shadow-xl sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                  Recommended System Capacity
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white border border-white/20 backdrop-blur-sm">
                  Optimal Match
                </span>
              </div>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-5xl font-black text-white sm:text-6xl">
                  {recommendedSize}
                </span>
                <span className="font-display text-2xl font-extrabold text-brand-soft">kW System</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/15 pt-5 text-left">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-white/75">
                    Monthly Generation
                  </div>
                  <div className="mt-1 font-display text-xl font-bold text-white">
                    ~{monthlyGeneration} <span className="text-xs font-normal text-white/80">units</span>
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-white/75">
                    Roof Area Required
                  </div>
                  <div className="mt-1 font-display text-xl font-bold text-white">
                    ~{requiredRoofArea} <span className="text-xs font-normal text-white/80">sq.ft</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Overview Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-surface p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Monthly Bill Savings
                  </span>
                  <TrendingDown className="h-4 w-4 text-brand" />
                </div>
                <div className="mt-3 font-display text-2xl font-black text-foreground">
                  ₹{monthlySavings.toLocaleString("en-IN")}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Annual: <strong>₹{annualSavings.toLocaleString("en-IN")} / year</strong>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Simple Payback
                  </span>
                  <Zap className="h-4 w-4 text-brand" />
                </div>
                <div className="mt-3 font-display text-2xl font-black text-foreground">
                  {paybackYears} <span className="text-sm font-normal text-muted-foreground">Years</span>
                </div>
                <div className="mt-1 text-xs text-brand font-semibold">
                  Free power for next 20+ years
                </div>
              </div>
            </div>

            {/* Investment & Subsidy Breakdown Table */}
            <div className="rounded-lg border border-border bg-surface p-6 shadow-sm">
              <h3 className="font-display text-base font-bold pb-3 border-b border-border">
                Financial Breakdown
              </h3>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Gross Benchmark System Cost:</span>
                  <span className="font-semibold text-foreground">
                    ₹{grossSystemCost.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex items-center justify-between text-brand font-medium">
                  <span className="flex items-center gap-1.5">
                    <span>Government Subsidy (PM Surya Ghar):</span>
                    <HelpCircle className="h-3.5 w-3.5" />
                  </span>
                  <span>- ₹{subsidy.toLocaleString("en-IN")}</span>
                </div>

                <div className="border-t border-border pt-3 flex items-center justify-between text-base font-bold">
                  <span>Estimated Net Investment:</span>
                  <span className="font-display text-xl font-black text-brand">
                    ₹{netCost.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
                  <span>Estimated 25-Year Lifetime Gain:</span>
                  <span className="font-semibold text-brand">
                    +₹{lifetimeSavings.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            {/* Environmental Impact Widget */}
            <div className="flex items-center justify-between rounded-lg bg-brand-soft border border-brand/20 p-4 text-brand-deep">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <Leaf className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider">
                    Green Environmental Impact
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Offsets <strong>{co2OffsetTons} Tons CO₂/yr</strong> • Equivalent to planting{" "}
                    <strong>{treesEquivalent} trees</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Lead Handoff CTA */}
            <button
              type="button"
              onClick={handleBookSurvey}
              className="group flex w-full items-center justify-center gap-2 rounded-full btn-shade-brand py-4 text-xs font-bold uppercase tracking-wider text-brand-foreground shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand/30 active:scale-95 cursor-pointer"
            >
              <span>Lock in This Estimate — Book Free Survey</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <p className="text-center text-[11px] text-muted-foreground">
              Direct transfer of your calculation numbers to our survey booking team. Zero obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Subsidy Policy Explanation */}
      <section className="bg-surface py-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <SectionLabel>Government Subsidies</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight">
              Understanding <span className="text-brand">PM Surya Ghar</span> Benefits
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              The Government of India provides direct DBT subsidies to residential homeowners
              installing grid-connected solar power systems.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="font-display text-2xl font-black text-brand">₹30,000</div>
              <h4 className="mt-2 font-display text-sm font-bold">1 kW Residential System</h4>
              <p className="mt-1 text-xs text-muted-foreground">
                Ideal for small 1-2 BHK apartments or homes with monthly bills below ₹2,000.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="font-display text-2xl font-black text-brand">₹60,000</div>
              <h4 className="mt-2 font-display text-sm font-bold">2 kW Residential System</h4>
              <p className="mt-1 text-xs text-muted-foreground">
                Great for 2-3 BHK homes with multiple fans, lighting, and moderate refrigerator usage.
              </p>
            </div>
            <div className="rounded-lg border border-brand bg-brand-soft/40 p-6">
              <div className="font-display text-2xl font-black text-brand-deep">₹78,000</div>
              <h4 className="mt-2 font-display text-sm font-bold text-brand-deep">3 kW+ System (Maximum)</h4>
              <p className="mt-1 text-xs text-brand-deep/80">
                Highest subsidy tier for residences with ACs and high daytime consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
