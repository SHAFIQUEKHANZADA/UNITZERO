import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unitzero.tech"),
  title: {
    default: "UNITZERO",
    template: "%s | UNITZERO",
  },
  description:
    "Transform your business with cutting-edge AI solutions. We deliver specialized intelligence that drives innovation, efficiency, and growth across all industries.",
  keywords: [
    "UNITZERO",
    "AI Solutions",
    "Artificial Intelligence",
    "Machine Learning",
    "Business Automation",
    "AI Consulting",
    // Vapi-focused
    "Vapi voice agent","Vapi AI platform","Vapi voice assistant","Vapi conversational AI","Vapi voice bot","Vapi API integration","Vapi AI phone agent","Vapi automation platform","Vapi voice technology","Vapi AI solution","Vapi customer service agent","Vapi appointment scheduling","Vapi sales automation","Vapi phone support system","Vapi lead qualification bot","Vapi outbound calling","Vapi AI receptionist","Vapi call center automation","Vapi voice assistant for business","Vapi automated phone calls","Vapi API documentation","Vapi integration guide","Vapi voice AI SDK","Vapi webhook setup","Vapi developer platform","Vapi API tutorial","build with Vapi","Vapi custom voice agent","Vapi voice flow builder","Vapi speech synthesis","Vapi vs competitors","Vapi alternative solutions","Vapi pricing plans","Vapi features comparison","best Vapi use cases","Vapi review","Vapi benefits","why choose Vapi","Vapi vs traditional phone systems","Vapi ROI","Vapi for healthcare","Vapi for e-commerce","Vapi for real estate","Vapi for restaurants","Vapi for insurance","Vapi for finance","Vapi enterprise solutions","Vapi small business tools","Vapi startup voice AI","Vapi implementation services",
    // Retell-focused
    "Retell AI voice agent","Retell AI platform","Retell voice assistant","Retell conversational AI","Retell voice bot","Retell API integration","Retell AI phone agent","Retell automation platform","Retell voice technology","Retell AI solution","Retell customer service agent","Retell appointment scheduling","Retell sales automation","Retell phone support system","Retell lead qualification bot","Retell outbound calling","Retell AI receptionist","Retell call center automation","Retell voice assistant for business","Retell automated phone calls","Retell API documentation","Retell integration guide","Retell voice AI SDK","Retell webhook setup","Retell developer platform","Retell API tutorial","build with Retell","Retell custom voice agent","Retell voice flow builder","Retell speech synthesis","Retell vs competitors","Retell alternative solutions","Retell pricing plans","Retell features comparison","best Retell use cases","Retell AI review","Retell benefits","why choose Retell","Retell vs traditional phone systems","Retell ROI","Retell for healthcare","Retell for e-commerce","Retell for real estate","Retell for restaurants","Retell for insurance","Retell for finance","Retell enterprise solutions","Retell small business tools","Retell startup voice AI","Retell implementation services",
    // Chatbot
    "AI chatbot software","chatbot for website","conversational AI chatbot","intelligent chatbot solution","customer service chatbot","automated chatbot platform","AI-powered chatbot","business chatbot software","chatbot automation tool","live chat AI bot","chatbot for customer support","AI chatbot builder","website chatbot integration","chatbot for lead generation","sales chatbot automation","chatbot API platform","custom chatbot development","enterprise chatbot solution","ecommerce chatbot","chatbot for small business","WhatsApp chatbot integration","Facebook Messenger chatbot","Instagram chatbot automation","SMS chatbot service","multichannel chatbot platform","chatbot with natural language processing","AI chatbot for appointment booking","chatbot analytics dashboard","chatbot training platform","no-code chatbot builder","chatbot for FAQ automation","multilingual chatbot solution","chatbot integration services","chatbot for healthcare","chatbot for real estate","chatbot for banking","chatbot for education","chatbot for hospitality","chatbot for retail","24/7 AI chatbot service","chatbot with CRM integration","chatbot analytics and reporting","conversational chatbot platform","chatbot personalization engine","chatbot for order tracking","chatbot lead qualification","chatbot feedback collection","chatbot for insurance","chatbot workflow automation","AI chatbot pricing comparison",
    // AI automation
    "AI automation platform","business process automation AI","AI workflow automation","intelligent automation software","AI-powered automation tools","enterprise AI automation","automated AI solutions","AI automation for businesses","machine learning automation","AI task automation","AI automation software","robotic process automation AI","AI automation services","intelligent process automation","AI-driven automation platform","end-to-end AI automation","AI automation tools","cognitive automation AI","AI automation solutions","hyperautomation platform","AI customer service automation","AI sales automation","AI marketing automation","AI email automation","AI data automation","AI document automation","AI reporting automation","AI scheduling automation","AI invoice automation","AI lead automation","AI workflow optimization","AI automation for small business","AI automation for enterprises","AI automation integration","AI automation API","no-code AI automation","AI automation builder","conversational AI automation","AI automation for HR","AI automation for finance","AI automation for healthcare","AI automation for retail","AI automation for logistics","AI automation for manufacturing","AI automation ROI","AI automation implementation","AI automation consulting","AI automation best practices","AI process mining automation","AI automation case studies",
    // LangChain
    "LangChain framework","LangChain Python library","LangChain AI development","LangChain tutorial","LangChain documentation","LangChain for LLM applications","LangChain integration","LangChain agents","LangChain chains","LangChain prompt templates","LangChain vector stores","LangChain embeddings","LangChain memory management","LangChain retrieval","LangChain document loaders","LangChain chatbot development","LangChain OpenAI integration","LangChain GPT integration","LangChain use cases","LangChain examples","LangChain vs LlamaIndex","LangChain RAG implementation","LangChain question answering","LangChain text splitting","LangChain semantic search","LangChain API wrapper","LangChain custom chains","LangChain callback handlers","LangChain output parsers","LangChain tool integration","LangChain conversational AI","LangChain LLM wrapper","LangChain for enterprise","LangChain deployment","LangChain best practices","LangChain data processing","LangChain prompt engineering","LangChain context management","LangChain streaming responses","LangChain JavaScript SDK","LangChain TypeScript","LangChain Pinecone integration","LangChain Chroma integration","LangChain FAISS integration","LangChain SQL chains","LangChain CSV loaders","LangChain PDF processing","LangChain token management","LangChain evaluation framework","LangChain production deployment",
    // AI automation in CRM
    "AI automation for CRM","CRM AI automation platform","AI-powered CRM automation","intelligent CRM automation","AI CRM workflow automation","automated CRM processes","AI for CRM optimization","CRM automation software","AI-driven CRM solutions","CRM task automation AI","AI sales automation CRM","AI lead management CRM","automated CRM data entry","AI CRM integration tools","predictive AI for CRM","AI customer insights CRM","automated CRM follow-ups","AI email automation CRM","CRM lead scoring AI","AI chatbot CRM integration","automated CRM reporting","AI pipeline management CRM","CRM automation best practices","AI for Salesforce automation","AI for HubSpot automation","AI for Zoho CRM automation","AI for Microsoft Dynamics CRM","AI customer segmentation CRM","automated CRM lead nurturing","AI sentiment analysis CRM","CRM predictive analytics AI","automated CRM appointment scheduling","AI deal intelligence CRM","CRM automation for small business","enterprise CRM AI automation","AI customer journey automation","automated CRM contact management","AI opportunity scoring CRM","CRM AI automation tools","automated sales pipeline CRM","AI forecasting for CRM","CRM automation with machine learning","AI-powered CRM analytics","automated CRM task management","AI recommendation engine CRM","CRM automation ROI","AI data enrichment CRM","automated CRM notifications","AI churn prediction CRM","CRM automation implementation services",
    // Database + automation
    "database automation software","automated database management","database workflow automation","AI database automation","database process automation","automated database backup","database task automation","intelligent database automation","database automation tools","automated database monitoring","database migration automation","automated database deployment","database automation platform","SQL automation tools","database query automation","automated database updates","database sync automation","automated database maintenance","database replication automation","automated database testing","database ETL automation","automated data pipeline","database integration automation","automated database scaling","database backup automation solutions","automated database recovery","database performance automation","automated database optimization","database security automation","automated database auditing","NoSQL database automation","PostgreSQL automation tools","MySQL automation software","MongoDB automation platform","database CI/CD automation","automated database provisioning","database orchestration automation","automated data synchronization","database change automation","automated schema management","database reporting automation","automated data warehousing","database cleanup automation","automated data validation","database automation best practices","cloud database automation","automated database archiving","database automation for DevOps","automated database compliance","database automation ROI"
  ],
  authors: [{ name: "UNITZERO" }],
  creator: "UNITZERO",
  publisher: "UNITZERO",
  openGraph: {
    title: "UNITZERO",
    siteName: "UNITZERO",
    description:
      "Transform your business with cutting-edge AI solutions. We deliver specialized intelligence that drives innovation, efficiency, and growth across all industries.",
    url: "https://unitzero.tech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "UNITZERO AI Automation and Voice Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNITZERO",
    description:
      "Transform your business with cutting-edge AI solutions. We deliver specialized intelligence that drives innovation, efficiency, and growth across all industries.",
    creator: "@UNITZERO",
    site: "@UNITZERO",
    images: [
      "/images/hero.png",
    ],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-S19LWF2FB9"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S19LWF2FB9');
          `}
        </Script>

        {/* ✅ Organization Schema (helps Google display UNITZERO in uppercase) */}
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "UNITZERO",
            url: "https://www.unitzero.tech",
            logo: "https://www.unitzero.tech/_next/image?url=%2Fimages%2Funitzero.png&w=256&q=75",
            sameAs: [
              "https://www.linkedin.com/company/unitzero-pvtltd/",
              "https://www.instagram.com/unitzero",
              "https://twitter.com/unitzero",
            ],
          })}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
      >
        {/* ✅ WebSite JSON-LD with SearchAction and knowsAbout */}
        <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "UNITZERO",
            url: "https://unitzero.tech",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://unitzero.tech/?q={search_term_string}",
              },
              queryInput: "required name=search_term_string",
            },
            knowsAbout: [
              // Representative subset to keep structured data concise
              "AI automation platform","AI chatbot software","Vapi voice agent","Retell AI voice agent",
              "LangChain framework","RAG implementation","CRM AI automation","database automation software",
              "voice assistant for business","chatbot for lead generation","no-code AI automation",
            ],
          })}
        </Script>
        {/* ✅ Tidio chat widget */}
        <Script
          src="//code.tidio.co/nfyyb1bm0hrktj1gh8rhmcyklpvz1t1a.js"
          strategy="afterInteractive"
        />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
