import { Check, Star, Zap } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$260",
    blurb:
      "For small businesses who just want to capture and respond to leads.",
    features: [ 
      "Website Chatbot (FAQ + Lead capture + Ticket creation)",
      "Confirmation Emails + Notifications (Slack/WhatsApp/Email)",
      "Knowledge Base support (up to 4 MB docs)",
    ],
    cta: "Launch Starter",
  },
  {
    name: "Growth",
    price: "$350",
    badge: "Most Popular",
    blurb:
      "For service businesses that can’t afford missed calls or untracked leads.",
    features: [
      "Everything in Starter, plus:",
      "AI Voice Receptionist (answer & transfer calls, Slack alerts)",
      "AI Ticketing Workflow (auto-create/assign issues)",
      "AI Follow-up Sequences (email/text drip campaigns)",
    ],
    cta: "Start Scaling",
  },
  {
    name: "Pro",
    price: "$500",
    blurb:
      "For scaling teams who need full automation and lead management.",
    features: [
      "Everything in Growth, plus:",
      "Mini CRM + Lead Tracker (centralized dashboard, real-time status)",
      "Multi-Channel Lead Capture Hub (chat, calls, email, socials → one place)",
      "Contract Automation (send, track, confirm contracts)",
      "Real-Time Lead Qualification Bot (auto-screens prospects)",
    ],
    cta: "Go Pro",
  },
];

export default function Pricing() {
  return (
    <section className="bg-omniv-dark text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-24 left-0 w-[28rem] h-[28rem] bg-omniv-primary rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-0 w-[28rem] h-[28rem] bg-omniv-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-omniv-card/60 border border-omniv-primary/30 rounded-full">
            <Zap className="w-4 h-4 text-omniv-primary" />
            <span className="text-sm text-omniv-primary">Transparent pricing that scales with you</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Simple Plans. Real Outcomes.
          </h2>
          <p className="mt-3 text-omniv-muted max-w-2xl mx-auto">
            No hidden fees. Predictable pricing for automation that drives growth and operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <div key={tier.name} className={`relative group ${idx === 1 ? "ring-1 rounded-2xl ring-omniv-primary/40 z-10" : "z-10"}`}>
              {/* Badge sits on wrapper so it's never clipped by inner card */}
              {tier.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-2 rounded-full bg-omniv-primary/20 border border-omniv-primary/40 text-omniv-primary text-xs font-semibold px-3 py-1 z-20">
                  <Star className="w-3 h-3" /> {tier.badge}
                </div>
              )}

              {/* Inner card holds visuals and is clipped to avoid overflow on hover effects */}
              <div className="relative rounded-2xl z-10 border p-8 bg-omniv-card/80 border-omniv hover:border-omniv-primary/60 transition-colors flex flex-col min-h-[620px] overflow-hidden">
                {/* interactive glow background (kept inside card) */}
                <div
                  className={`pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0 ${
                    idx === 1
                      ? "bg-gradient-to-br from-omniv-primary/20 to-omniv-secondary/20"
                      : "bg-gradient-to-br from-omniv-primary/10 to-transparent"
                  }`}
                />
                {/* sweep highlight kept inside and clipped */}
                <div className="pointer-events-none absolute top-0 -left-24 h-[140%] w-24 rotate-12 bg-white/5 group-hover:left-[110%] transition-all duration-[1200ms] ease-out z-0" />

                <div className="mb-6 relative z-10">
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-4xl font-extrabold">{tier.price}</span>
                    <span className="text-omniv-muted text-sm">/month</span>
                  </div>
                  <p className="text-omniv-muted mt-2 text-sm">{tier.blurb}</p>
                </div>

                <ul className="space-y-3 flex-1 relative z-10">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-omniv-dark/70 border border-omniv p-1">
                        <Check className="w-3.5 h-3.5 text-omniv-primary" />
                      </div>
                      <span className="text-sm text-omniv-muted">{f}</span>
                    </li>
                  ))}
                </ul>

                <button className={`mt-8 w-full px-5 py-3 rounded-xl font-semibold transition-all duration-500 cursor-pointer relative z-10 ${
                  idx === 1
                    ? "bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] text-white hover:shadow-xl hover:shadow-omniv-primary/20"
                    : "border border-omniv text-white hover:border-transparent hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#00d4aa] hover:text-white hover:shadow-xl hover:shadow-omniv-primary/20"
                }`}>
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


