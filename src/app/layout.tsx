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
  },
  twitter: {
    card: "summary_large_image",
    title: "UNITZERO",
    description:
      "Transform your business with cutting-edge AI solutions. We deliver specialized intelligence that drives innovation, efficiency, and growth across all industries.",
    creator: "@UNITZERO",
    site: "@UNITZERO",
  },
  alternates: {
    canonical: "/",
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
