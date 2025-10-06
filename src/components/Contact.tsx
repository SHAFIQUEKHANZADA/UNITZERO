"use client";

import React, { useMemo, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const logos = useMemo(
    () => ["OpenAI", "n8n", "Supabase", "Vapi", "ElevenLabs"],
    []
  );

  function scrollToForm() {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const newErrors: { name?: string; email?: string } = {};
    if (!name) newErrors.name = "Required";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Valid email required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;

    setSubmitting(true);
    const data = Object.fromEntries(new FormData(form).entries());
    // Replace with real integration later (Supabase, n8n, etc.)
    // eslint-disable-next-line no-console
    console.log("Contact submission:", data);
    setTimeout(() => {
      setSubmitting(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      form.reset();
    }, 600);
  }

  return (
    <section className="bg-[#0b0b0b] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT: Copy + Proof */}
        <div className="space-y-8">
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Book Your Free AI Automation Pilot
            </h1>
            <p className="text-omniv-muted text-lg">
              Tell us about your business, and we’ll show how AI can save you 10+ hours weekly — starting with a free proof-of-concept.
            </p>
            <ul className="space-y-3 text-omniv-muted">
              <li className="flex items-start gap-3">
                <span className="text-xl">⚙</span>
                <span>Custom-built voice, chat, and workflow automations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🚀</span>
                <span>Delivered fast — first pilot ready in 48 hours.</span>
              </li>
            </ul>
          </div>

          <div className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full bg-omniv-card/60 border border-omniv/60 w-fit">
            <span className="text-white">Trusted by 50+ businesses worldwide.</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 opacity-80">
            {logos.map((brand) => (
              <span
                key={brand}
                className="text-xs md:text-sm tracking-wide px-3 py-1 rounded-md border border-omniv text-omniv-muted"
              >
                {brand}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#FF7A00] to-[#00E676] text-white transition-all duration-500 hover:shadow-xl hover:shadow-omniv-primary/20"
            >
              Get My Free Pilot →
            </button>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold border border-omniv text-white hover:border-omniv-primary hover:bg-omniv-card transition-all duration-500"
            >
              Schedule a Call
            </button>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div>
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="relative rounded-2xl bg-omniv-card/70 border border-omniv p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-200 mb-1">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  required
                  className={`w-full rounded-lg bg-omniv-input border ${errors.name ? "border-red-500" : "border-omniv-border"} px-4 py-3 text-white placeholder:text-omniv-muted`}
                  placeholder="John Carter"
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-200 mb-1">Work Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={`w-full rounded-lg bg-omniv-input border ${errors.email ? "border-red-500" : "border-omniv-border"} px-4 py-3 text-white placeholder:text-omniv-muted`}
                  placeholder="you@company.com"
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-gray-200 mb-1">Company / Business Type</label>
                <input id="company" name="company" className="w-full rounded-lg bg-omniv-input border border-omniv-border px-4 py-3 text-white placeholder:text-omniv-muted" placeholder="Acme Inc — Agency" />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm text-gray-200 mb-1">Website (optional)</label>
                <input id="website" name="website" className="w-full rounded-lg bg-omniv-input border border-omniv-border px-4 py-3 text-white placeholder:text-omniv-muted" placeholder="https://example.com" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="service" className="block text-sm text-gray-200 mb-1">What do you want to automate?</label>
                <select id="service" name="service" className="w-full rounded-lg bg-omniv-card border border-omniv px-4 py-3 text-white focus:outline-none focus:border-omniv-primary transition-colors">
                  <option>AI Website Chatbot</option>
                  <option>AI Voice Receptionist</option>
                  <option>Mini CRM + Lead Tracker</option>
                  <option>Contract Automation</option>
                  <option>Confirmation Email & Notification Engine</option>
                  <option>AI Ticketing Workflow</option>
                  <option>Multi-Channel Lead Capture Hub</option>
                  <option>AI Follow-Up Sequences</option>
                  <option>Real-Time Lead Qualification Bot</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="workflow" className="block text-sm text-gray-200 mb-1">Describe your current workflow</label>
                <textarea
                  id="workflow"
                  name="workflow"
                  rows={4}
                  className="w-full rounded-lg bg-omniv-input border border-omniv-border px-4 py-3 text-white placeholder:text-omniv-muted"
                  placeholder="e.g. We handle leads manually and want AI to respond faster."
                />
              </div>

              <div className="md:col-span-2">
                <span className="block text-sm text-gray-200 mb-2">How soon do you want to start?</span>
                <div className="flex flex-wrap gap-4">
                  {[
                    { id: "start_week", label: "This Week" },
                    { id: "start_month", label: "This Month" },
                    { id: "start_exploring", label: "Just Exploring" },
                  ].map((opt) => (
                    <label key={opt.id} className="inline-flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="start" value={opt.label} className="accent-omniv-primary" />
                      <span className="text-sm text-gray-200">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="contact" className="block text-sm text-gray-200 mb-1">Preferred Contact Method</label>
                <select id="contact" name="contact" className="w-full rounded-lg bg-omniv-card border border-omniv px-4 py-3 text-white focus:outline-none focus:border-omniv-primary transition-colors">
                  <option>Email</option>
                  <option>Call</option>
                </select>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#FF7A00] to-[#00E676] text-white transition-all duration-500 hover:shadow-xl hover:shadow-omniv-primary/20 disabled:opacity-70"
              >
                Get My Free Pilot →
              </button>
              <span className="text-xs text-omniv-muted">We respect your privacy — your data is never shared.</span>
            </div>

            {showToast && (
              <div className="absolute -top-3 right-3 translate-y-[-100%] bg-omniv-card/80 border border-omniv rounded-lg px-3 py-2 text-sm shadow-lg">
                ✅ Thank you! Our team will reach out within 12 hours.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
