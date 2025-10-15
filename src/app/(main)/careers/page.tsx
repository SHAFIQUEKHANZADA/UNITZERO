import type { Metadata } from "next"
import CareersClient, { Role } from "./CareersClient"

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers at UNITZERO: build AI automation, chatbots, voice agents, and enterprise AI.",
  alternates: { canonical: "/careers" },
  robots: { index: true, follow: true },
}

const roles: Role[] = [
  {
    id: "ai-automation-engineer",
    title: "AI Automation Engineer",
    type: "Full‑time · Remote/Hybrid",
    location: "Karachi, PK / Austin, TX",
    category: "engineering",
    experience: "3-5 years",
    salary: "$80K - $120K",
    blurb: "Ship end‑to‑end AI assistants and RPA workflows. You'll prototype, evaluate, and deploy automations that save clients hours each week.",
    bullets: [
      "Strong Python/TypeScript and API integration skills",
      "Hands-on with LLMs (OpenAI, local models), vector stores, LangChain/LangGraph",
      "Experience building chat/voice bots or document automations",
      "Knowledge of RPA tools and workflow automation",
      "Experience with cloud platforms (AWS, Azure, GCP)"
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in software development",
      "Experience with AI/ML frameworks and tools",
      "Strong problem-solving and analytical skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Remote work flexibility",
      "Learning and development budget",
      "Health insurance and wellness programs"
    ],
    applyHref: "/apply/ai-automation-engineer",
  },
  {
    id: "fullstack-nextjs",
    title: "Full‑stack Developer (Next.js)",
    type: "Full‑time · Remote/Hybrid",
    location: "Karachi, PK / Remote",
    category: "engineering",
    experience: "2-4 years",
    salary: "$70K - $100K",
    blurb: "Own UIs for dashboards, pilots, and client portals. Build fast, accessible products in Next.js and Tailwind.",
    bullets: [
      "Next.js + React + Tailwind expertise",
      "REST/GraphQL, auth, and state management",
      "Charts, tables, and clean UX for non‑technical users",
      "Experience with TypeScript and modern JavaScript",
      "Understanding of responsive design principles"
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "2+ years of experience in frontend development",
      "Strong understanding of web technologies",
      "Experience with modern frontend frameworks"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Remote work flexibility",
      "Learning and development budget",
      "Health insurance and wellness programs"
    ],
    applyHref: "/apply/fullstack-nextjs",
  },
  {
    id: "client-success",
    title: "Client Success Manager",
    type: "Full‑time · Remote",
    location: "Remote (US time overlap preferred)",
    category: "business",
    experience: "3-5 years",
    salary: "$60K - $90K",
    blurb: "Translate business pain points into automation wins. Drive adoption, training, and measurable ROI for each account.",
    bullets: [
      "Great communication and project coordination",
      "Comfort with analytics dashboards and KPIs",
      "Bonus: domain knowledge in Legal, Finance, or Healthcare",
      "Experience with CRM systems and customer success tools",
      "Strong presentation and training skills"
    ],
    requirements: [
      "Bachelor's degree in Business or related field",
      "3+ years of experience in customer success or account management",
      "Experience with SaaS products and enterprise clients",
      "Strong analytical and problem-solving skills"
    ],
    benefits: [
      "Competitive salary and commission structure",
      "Remote work flexibility",
      "Learning and development budget",
      "Health insurance and wellness programs"
    ],
    applyHref: "/apply/client-success",
  },
  {
    id: "solutions-consultant",
    title: "AI Solutions Consultant (Legal / Finance / Healthcare)",
    type: "Contract or Full‑time · Remote",
    location: "Remote / Texas",
    category: "consulting",
    experience: "5-8 years",
    salary: "$90K - $140K",
    blurb: "Scope pilots, design workflows, and validate success metrics with stakeholders in regulated domains.",
    bullets: [
      "Consulting mindset and clear discovery documentation",
      "Hands-on with data mapping and compliance constraints",
      "Ability to run a 1‑week pilot and present outcomes",
      "Deep understanding of industry regulations and compliance",
      "Experience with enterprise sales and solution design"
    ],
    requirements: [
      "Bachelor's degree in relevant field",
      "5+ years of experience in consulting or solutions architecture",
      "Domain expertise in Legal, Finance, or Healthcare",
      "Strong presentation and stakeholder management skills"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Remote work flexibility",
      "Learning and development budget",
      "Health insurance and wellness programs"
    ],
    applyHref: "/apply/solutions-consultant",
  },
  {
    id: "pilot-manager",
    title: "Operations & Pilot Manager",
    type: "Full‑time · On‑site/Hybrid",
    location: "Karachi, PK",
    category: "operations",
    experience: "3-5 years",
    salary: "$50K - $80K",
    blurb: "Orchestrate 1‑week discovery/pilots, track deliverables, and ensure seamless handoff to scale phase.",
    bullets: [
      "Strong ops discipline; Notion/Jira hygiene",
      "Process mapping, QA, and documentation",
      "Comfort running client standups and retros",
      "Experience with project management methodologies",
      "Strong organizational and communication skills"
    ],
    requirements: [
      "Bachelor's degree in Business or related field",
      "3+ years of experience in operations or project management",
      "Experience with project management tools",
      "Strong organizational and communication skills"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Hybrid work flexibility",
      "Learning and development budget",
      "Health insurance and wellness programs"
    ],
    applyHref: "/apply/pilot-manager",
  },
]

export default function CareersPage() {
  return <CareersClient roles={roles} />
}
