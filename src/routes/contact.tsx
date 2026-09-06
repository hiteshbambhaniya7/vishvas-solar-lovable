import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState, useId } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Calculator,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/SectionLabel";
import videoHouse from "@/assets/video-house.jpg";

interface ContactSearchParams {
  type?: string;
  bill?: string;
  size?: string;
  savings?: string;
  cost?: string;
}

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearchParams => {
    return {
      type: search?.type ? String(search.type) : undefined,
      bill: search?.bill ? String(search.bill) : undefined,
      size: search?.size ? String(search.size) : undefined,
      savings: search?.savings ? String(search.savings) : undefined,
      cost: search?.cost ? String(search.cost) : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Contact Us & Book Free Site Survey — Solario" },
      {
        name: "description",
        content:
          "Connect with Solario's certified solar EPC engineers. Schedule a shadow-free rooftop survey, consult on subsidies, or visit our headquarters in Gujarat.",
      },
      { property: "og:title", content: "Contact Us & Book Free Site Survey — Solario" },
      {
        property: "og:description",
        content:
          "Fast response within 2 hours. Free 3D shadow survey, subsidy liaisoning, and turnkey quote.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

import { useEffect } from "react";

function ContactPage() {
  const searchParams = Route.useSearch();
  const [urlParams, setUrlParams] = useState<Record<string, string>>({});

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const cityId = useId();
  const typeId = useId();
  const sizeId = useId();
  const messageId = useId();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sp = new URLSearchParams(window.location.search);
      const parsed: Record<string, string> = {};
      sp.forEach((val, key) => {
        parsed[key] = val;
      });
      setUrlParams(parsed);

      const effSize = searchParams.size || parsed.size;
      const effSavings = searchParams.savings || parsed.savings;
      const effType = searchParams.type || parsed.type;

      if (effSize || effSavings) {
        setFormData((prev) => ({
          ...prev,
          propertyType: effType === "commercial" ? "commercial" : "residential",
          systemSize: effSize ? `${effSize} kW` : prev.systemSize,
          message: effSavings
            ? `Interested in the estimated ${effSize || ""} kW system with ~₹${Number(effSavings).toLocaleString("en-IN")}/yr bill savings.`
            : prev.message,
        }));
      }
    }
  }, [searchParams.size, searchParams.savings, searchParams.type]);

  const effectiveSize = searchParams.size || urlParams.size;
  const effectiveSavings = searchParams.savings || urlParams.savings;
  const effectiveType = searchParams.type || urlParams.type;

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    propertyType: searchParams.type === "commercial" ? "commercial" : "residential",
    systemSize: searchParams.size ? `${searchParams.size} kW` : "",
    message: searchParams.savings
      ? `Interested in the estimated ${searchParams.size || ""} kW system with ~₹${Number(searchParams.savings).toLocaleString("en-IN")}/yr bill savings.`
      : "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  // Validation
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (at least 2 characters).";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/[\s-+]/g, "");
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Please enter your city or district.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setReferenceId(`SOL-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      city: "",
      propertyType: "residential",
      systemSize: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-background pb-4 pt-2 sm:pt-3 text-foreground">
        <div className="relative z-10 mx-auto w-full max-w-[1536px] px-3 sm:px-5 lg:px-6">
          <Navbar variant="surface" activePath="/contact" />

          {/* Hero Banner Card (Reference Image Style) */}
          <div className="relative mt-0 overflow-hidden rounded-2xl border border-black/5 shadow-xl min-h-[440px] md:min-h-[480px] lg:min-h-[520px] flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 pt-24 sm:pt-28 md:pt-32">
            {/* Background Image & Overlay */}
            <img
              src={videoHouse}
              alt="Modern solar consultation and engineering"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/40 md:bg-gradient-to-r md:from-slate-950/90 md:via-slate-950/70 md:to-slate-950/40" />

            {/* Top Tag Badge */}
            <div className="relative z-10 self-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/20 shadow-sm">
                <span>Dedicated Consultation Team</span>
              </div>
            </div>

            {/* Bottom Content Grid */}
            <div className="relative z-10 mt-12 grid gap-8 lg:grid-cols-12 lg:items-end">
              {/* Left Column: Headline */}
              <div className="lg:col-span-7">
                <h1 className="font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-sm">
                  Connect With<br />
                  Our Engineers
                </h1>
              </div>

              {/* Right Column: Paragraph + White Pill Button */}
              <div className="lg:col-span-5 flex flex-col justify-end space-y-6">
                <p className="text-sm sm:text-base leading-relaxed text-white/90 font-normal max-w-md">
                  Have questions about solar installation, subsidy paperwork, or technical requirements?
                  Schedule a free 3D shadow site survey or contact our engineers directly.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#contact-form"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-navy transition-all duration-300 hover:bg-slate-100 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
                  >
                    <span>Book Site Survey</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-brand" />
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call Engineers</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-6xl px-6 py-16 -mt-10">
        {/* Imported Calculator Banner */}
        {effectiveSize && (
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-brand bg-brand-soft p-5 text-brand-deep shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Estimate Data Imported From Calculator
                </span>
                <p className="text-sm font-semibold">
                  Recommended System: <strong>{effectiveSize} kW</strong> (
                  {effectiveType || "Residential"}) • Estimated Annual Savings:{" "}
                  <strong>₹{Number(effectiveSavings || 0).toLocaleString("en-IN")}/yr</strong>
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand">
              <CheckCircle2 className="h-4 w-4" />
              <span>Pre-filled in form below</span>
            </span>
          </div>
        )}

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Contact Form Column (Left) */}
          <div className="rounded-lg border border-border bg-surface p-6 shadow-md sm:p-10 lg:col-span-7">
            {isSubmitted ? (
              <div className="py-10 text-center animate-in fade-in duration-300">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
                  Site Survey Request Received!
                </h3>
                <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Our certified solar engineer will
                  call you within <strong>2 business hours</strong> to coordinate your shadow-free site
                  visit.
                </p>

                <div className="mx-auto mt-6 max-w-xs rounded-lg bg-secondary p-4 text-left text-xs">
                  <div className="flex justify-between py-1 border-b border-border">
                    <span className="text-muted-foreground">Booking Reference:</span>
                    <span className="font-bold text-foreground font-mono">{referenceId}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border">
                    <span className="text-muted-foreground">Phone Number:</span>
                    <span className="font-bold text-foreground">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">City:</span>
                    <span className="font-bold text-foreground">{formData.city}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex rounded-full btn-shade-brand px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-foreground shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="pb-6 border-b border-border">
                  <h2 className="font-display text-2xl font-bold">Book Free Site Survey</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    No obligations. Includes 3D shadow analysis, generation projection, and subsidy
                    filing check.
                  </p>
                </div>

                <div className="mt-6 space-y-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor={nameId}
                      className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id={nameId}
                      type="text"
                      placeholder="e.g. Ramesh Patel"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? "name-error" : undefined}
                      className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors ${
                        errors.fullName
                          ? "border-destructive bg-destructive/5"
                          : "border-border bg-background focus:border-brand"
                      }`}
                    />
                    {errors.fullName && (
                      <p id="name-error" className="mt-1 text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor={phoneId}
                        className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5"
                      >
                        Phone Number <span className="text-destructive">*</span>
                      </label>
                      <input
                        id={phoneId}
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors ${
                          errors.phone
                            ? "border-destructive bg-destructive/5"
                            : "border-border bg-background focus:border-brand"
                        }`}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor={emailId}
                        className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5"
                      >
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <input
                        id={emailId}
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors ${
                          errors.email
                            ? "border-destructive bg-destructive/5"
                            : "border-border bg-background focus:border-brand"
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* City & Property Type */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor={cityId}
                        className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5"
                      >
                        City / District <span className="text-destructive">*</span>
                      </label>
                      <input
                        id={cityId}
                        type="text"
                        placeholder="e.g. Ahmedabad, Gujarat"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        aria-invalid={Boolean(errors.city)}
                        aria-describedby={errors.city ? "city-error" : undefined}
                        className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors ${
                          errors.city
                            ? "border-destructive bg-destructive/5"
                            : "border-border bg-background focus:border-brand"
                        }`}
                      />
                      {errors.city && (
                        <p id="city-error" className="mt-1 text-xs text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.city}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor={typeId}
                        className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5"
                      >
                        Property Type
                      </label>
                      <select
                        id={typeId}
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
                      >
                        <option value="residential">Residential Rooftop</option>
                        <option value="commercial">Commercial / Office</option>
                        <option value="industrial">Industrial Factory / Mill</option>
                        <option value="agricultural">Agricultural / Solar Pump</option>
                      </select>
                    </div>
                  </div>

                  {/* Estimated Capacity */}
                  <div>
                    <label
                      htmlFor={sizeId}
                      className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5"
                    >
                      Desired System Size or Roof Area (Optional)
                    </label>
                    <input
                      id={sizeId}
                      type="text"
                      placeholder="e.g. 5 kW or 800 sq.ft roof"
                      value={formData.systemSize}
                      onChange={(e) => setFormData({ ...formData, systemSize: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
                    />
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label
                      htmlFor={messageId}
                      className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5"
                    >
                      Additional Details / Requirements (Optional)
                    </label>
                    <textarea
                      id={messageId}
                      rows={3}
                      placeholder="Any specific questions regarding roof type, battery storage, or net-metering..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex w-full items-center justify-center gap-2 rounded-full btn-shade-brand py-4 text-xs font-bold uppercase tracking-wider text-brand-foreground shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand/30 active:scale-95 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Confirm Site Survey Request</span>
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-center text-[11px] text-muted-foreground flex items-center justify-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-brand" />
                      <span>Your contact information is strictly confidential and protected.</span>
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details & Direct Channels Column (Right) */}
          <div className="space-y-6 lg:col-span-5">
            {/* Direct Cards */}
            <div className="rounded-lg border border-border bg-surface p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold pb-3 border-b border-border">
                Headquarters &amp; Direct Channels
              </h3>

              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-deep">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Call Our Engineers
                    </span>
                    <a
                      href="tel:+91258789457"
                      className="font-display text-base font-bold text-foreground hover:text-brand"
                    >
                      +91 258 789 457
                    </a>
                    <span className="block text-xs text-muted-foreground">+91 98765 43210 (Toll Free)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-deep">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Email Inquiries
                    </span>
                    <a
                      href="mailto:hello@solario-solar.com"
                      className="font-medium text-foreground hover:text-brand"
                    >
                      hello@solario-solar.com
                    </a>
                    <span className="block text-xs text-muted-foreground">
                      support@solario-solar.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-deep">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Office Location
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Solario Clean Energy Park, Highway Tech Corridor, Gujarat 380054, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-deep">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Working Hours
                    </span>
                    <p className="text-xs text-muted-foreground">
                      Mon – Sat: 9:00 AM – 7:00 PM <br />
                      Sunday: Site Inspections by Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Responsive Embed */}
            <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
              <div className="p-4 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Our Engineering Center
                </span>
              </div>
              <div className="h-52 w-full bg-secondary">
                <iframe
                  title="Solario Headquarters Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117498.4237190013!2d72.48202568444738!3d23.030006764516104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Quick Emergency / 24/7 Hotline */}
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-navy-dark via-navy to-green-dark p-6 text-white shadow-xl border border-white/15">
              <h4 className="font-display text-base font-bold text-white">Existing Solar Plant Support?</h4>
              <p className="mt-1 text-xs text-white/85 leading-relaxed">
                If your existing inverter has an error code or you need urgent grid synchronization
                assistance, reach our 24/7 technical hotline.
              </p>
              <a
                href="tel:+91258789457"
                className="group mt-4 inline-flex items-center gap-2 rounded-full btn-shade-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-navy transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md hover:shadow-xl"
              >
                <span>24/7 O&amp;M Hotline</span>
                <ArrowRight className="h-3.5 w-3.5 text-navy stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
