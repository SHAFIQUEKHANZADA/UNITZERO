import { MessageSquare, PhoneCall, Inbox, FileText, Bell, BookOpen, Ticket, Share2, Repeat, Gauge } from "lucide-react";

const items = [
  {
    title: "AI Website Chatbot",
    icon: MessageSquare,
    what:
      "24/7 assistant that handles FAQs, books appointments, and captures leads while you work.",
    who:
      "Owners who can’t staff support but don’t want to miss potential customers.",
    problem:
      "Visitors leave when they can’t get instant answers—leading to lost deals.",
    special:
      "Remembers context, creates support tickets, and maintains long conversations.",
  },
  {
    title: "AI Voice Receptionist",
    icon: PhoneCall,
    what:
      "Answers calls, qualifies leads, handles FAQs, and transfers important calls with a natural voice.",
    who:
      "Clinics, firms, contractors—anyone who can’t afford to miss calls.",
    problem:
      "Missed calls cost thousands; prospects go to competitors.",
    special:
      "Slack/Teams alerts, learns your business specifics, and responds with the right tone.",
  },
  {
    title: "Mini CRM + Lead Tracker",
    icon: Inbox,
    what:
      "Lightweight CRM that auto-captures leads from chat and calls with real-time status.",
    who:
      "Growing teams that need organization without enterprise complexity.",
    problem:
      "Leads fall through cracks when tracked in spreadsheets or memory.",
    special:
      "Pre-integrated with chat/voice, clean UI, real-time updates.",
  },
  {
    title: "Contract Automation",
    icon: FileText,
    what:
      "Generates contracts, sends for e-sign, and tracks completion automatically.",
    who:
      "Agencies, real estate, freelancers—anyone slowed by paperwork.",
    problem:
      "Back-and-forth kills momentum; deals take weeks instead of days.",
    special:
      "Connects to CRM and posts status to Slack for a smooth client experience.",
  },
  {
    title: "Confirmation Email & Notification Engine",
    icon: Bell,
    what:
      "Sends branded confirmations instantly and alerts your team via Slack/WhatsApp.",
    who:
      "Any online lead-gen business that values professional first touch.",
    problem:
      "Leads assume you’re not paying attention without immediate acknowledgement.",
    special:
      "Custom templates, delivery tracking, multiple channels.",
  },
  {
    title: "Knowledge Base AI Support",
    icon: BookOpen,
    what:
      "Upload docs (up to 4MB) so AI answers customer and internal questions instantly.",
    who:
      "SaaS, agencies, schools, and teams answering the same questions repeatedly.",
    problem:
      "Teams burn time on repeat answers; customers wait for simple info.",
    special:
      "Works via chat and voice, remembers context, escalates complex issues.",
  },
  {
    title: "AI Ticketing Workflow",
    icon: Ticket,
    what:
      "Every inquiry becomes a tracked ticket—auto-assigned and monitored to resolution.",
    who:
      "Service-heavy businesses that can’t lose track of customer issues.",
    problem:
      "Problems get buried in emails/chats and go unresolved.",
    special:
      "Unified inbox across channels with clear ownership.",
  },
  {
    title: "Multi-Channel Lead Capture Hub",
    icon: Share2,
    what:
      "Central dashboard for leads from chat, calls, email, and socials in one place.",
    who:
      "SMBs running multiple campaigns with scattered leads.",
    problem:
      "Prospects get lost across platforms that don’t connect.",
    special:
      "Fast deployment and plug-in integrations with popular tools.",
  },
  {
    title: "AI Follow-Up Sequences",
    icon: Repeat,
    what:
      "Personalized email/text drips that reference prior conversations until conversion.",
    who:
      "Agency and high-touch sales teams where persistence wins deals.",
    problem:
      "Manual follow-ups are forgotten; good prospects slip away.",
    special:
      "Context-aware messaging based on chat/voice history.",
  },
  {
    title: "Real-Time Lead Qualification Bot",
    icon: Gauge,
    what:
      "Asks smart questions on budget, timeline, and fit—only serious leads reach sales.",
    who:
      "B2B, agencies, high-ticket services protecting sales time.",
    problem:
      "Reps waste time on unqualified prospects while real ones wait.",
    special:
      "Cross-channel scoring and CRM profiles before human contact.",
  },
];

export default function Solutions() {
  return (
    <section className="bg-omniv-dark text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 left-10 w-[22rem] h-[22rem] bg-omniv-primary rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-10 w-[22rem] h-[22rem] bg-omniv-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">How Our Solutions Work Together</h2>
          <p className="mt-3 text-omniv-muted max-w-3xl mx-auto">
            Start with basic automation at $260, add voice and knowledge at $350, then scale to full automation at $500.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map(({ title, icon: Icon, what, who, problem, special }) => (
            <div key={title} className="rounded-2xl border border-omniv bg-omniv-card/80 p-6 hover:border-omniv-primary/60 transition-all">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-omniv-dark/70 border border-omniv">
                  <Icon className="w-5 h-5 text-omniv-primary" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <p className="text-white"><span className="text-omniv-muted">What it does:</span> {what}</p>
                <p className="text-white"><span className="text-omniv-muted">Who needs this:</span> {who}</p>
                <p className="text-white"><span className="text-omniv-muted">The problem it solves:</span> {problem}</p>
                <p className="text-white"><span className="text-omniv-muted">What makes it special:</span> {special}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


