"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import React from "react";

type Testimonial = {
  quote: string;
  metric?: { label: string; value: string };
  name: string;
  title: string;
  avatar?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "UNITZERO helped us automate our qualification workflow. We now convert 40% more demos without adding headcount.",
    metric: { label: "higher conversion rate", value: "40%" },
    name: "Michael Rodriguez",
    title: "Managing Partner, Associates Law",
    avatar: "/images/aihero.webp",
  },
  {
    quote:
      "Our support requests are handled automatically. The team finally focuses on outcomes instead of inbox triage.",
    metric: { label: "hours saved monthly", value: "50+" },
    name: "Dr. Jennifer Park",
    title: "Medical Director, Park Family Medicine",
    avatar: "/images/health.jpg",
  },
  {
    quote:
      "What sets UNITZERO apart is revenue-first automation. Content, outreach, and analytics now run in sync.",
    metric: { label: "lead growth in 60 days", value: "3x" },
    name: "Sarah Chen",
    title: "Founder & CEO, Skyline Real Estate",
    avatar: "/images/retail.jpg",
  },
  {
    quote:
      "Skeptical at first, but the demo sold me. The lead filters cut tire‑kickers and our estimators only talk to serious buyers.",
    name: "A. Patel",
    title: "Ops Lead, NorthBuild",
    avatar: "/images/auto1.jpg",
  },
  {
    quote:
      "Knowledge base AI resolves 80% of repeated questions. We scaled onboarding without extra agents.",
    name: "Jordan Mills",
    title: "Head of Success, CloudWare",
    avatar: "/images/auto2.jpg",
  },
  {
    quote:
      "From missed calls to instant routing. The AI receptionist captured 3x more leads in 2 months.",
    name: "R. Gomez",
    title: "Owner, Prime Dental",
    avatar: "/images/auto3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-omniv-dark text-white py-20 relative overflow-hidden">
      {/* subtle gradient blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-20 -left-10 w-96 h-96 bg-omniv-primary blur-3xl rounded-full animate-pulse-glow" />
        <div className="absolute -bottom-24 -right-10 w-[28rem] h-[28rem] bg-omniv-secondary blur-[120px] rounded-full animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-omniv-card/60 border border-omniv-primary/30 rounded-full">
            <Star className="w-4 h-4 text-omniv-primary" />
            <span className="text-sm text-omniv-primary">What our clients say</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Trusted Results. Real Outcomes.
          </h2>
          <p className="mt-4 text-omniv-muted max-w-2xl mx-auto">
            Feedback from teams using specialized intelligence to move faster and grow smarter.
          </p>
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <article
              key={idx}
              className="relative group bg-omniv-card/80 border border-omniv rounded-2xl p-6 overflow-hidden hover:border-omniv-primary/60 transition-all duration-300"
            >
              {/* decorative */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-omniv-primary/15 to-omniv-secondary/15 blur-2xl group-hover:blur-xl transition-all" />

              <Quote className="w-8 h-8 text-omniv-primary/70" />
              <p className="mt-4 text-omniv-muted leading-relaxed">
                {t.quote}
              </p>

              {t.metric && (
                <div className="mt-5 inline-flex items-center gap-2 text-xs px-3 py-2 rounded-full bg-omniv-dark/60 border border-omniv">
                  <span className="text-white font-semibold">{t.metric.value}</span>
                  <span className="text-omniv-muted">{t.metric.label}</span>
                </div>
              )}

              <div className="mt-6 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-omniv">
                  <Image
                    src={t.avatar || "/images/hero.png"}
                    alt={t.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-omniv-muted">{t.title}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow { 0%,100%{opacity:.25;transform:scale(1)}50%{opacity:.4;transform:scale(1.04)} }
        .animate-pulse-glow{ animation: pulse-glow 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

