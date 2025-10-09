"use client";

import React, { useMemo, useRef } from "react";

export default function ContactSection() {
  const widgetRef = useRef<HTMLDivElement | null>(null);

  const logos = useMemo(
    () => ["OpenAI", "n8n", "Supabase", "Vapi", "ElevenLabs"],
    []
  );

  function scrollToWidget() {
    if (widgetRef.current) {
      widgetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
              onClick={scrollToWidget}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#FF7A00] to-[#00E676] text-white transition-all duration-500 hover:shadow-xl hover:shadow-omniv-primary/20"
            >
              Get My Free Pilot →
            </button>
            <button
              onClick={scrollToWidget}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold border border-omniv text-white hover:border-omniv-primary hover:bg-omniv-card transition-all duration-500"
            >
              Schedule a Call
            </button>
          </div>
        </div>

        {/* RIGHT: Calendly Inline Widget */}
        <div>
          <div
            ref={widgetRef}
            className="relative rounded-2xl bg-omniv-card/70 border border-omniv p-0 shadow-[0_10px_40px_rgba(0,0,0,0.25)] overflow-hidden"
          >
            <iframe
              title="Book with UNITZERO"
              src="https://calendly.com/hilalaziz-unitzero/30min/?hide_gdpr_banner=1&background_color=0b0b0b&text_color=ffffff&primary_color=00E676"
              className="w-full"
              style={{ height: 700 }}
              frameBorder={0}
              allowTransparency
            />
          </div>
        </div>
      </div>
    </section>
  );
}
