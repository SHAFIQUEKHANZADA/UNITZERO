import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://unitzero.tech'),
  title: {
    default: 'UnitZero',
    template: '%s | UnitZero',
  },
  description:
    'Transform your business with cutting-edge AI solutions. We deliver specialized intelligence that drives innovation, efficiency, and growth across all industries.',
  keywords: ['UnitZero', 'AI Solutions', 'Artificial Intelligence', 'Machine Learning', 'Business Automation', 'AI Consulting'],
  authors: [{ name: 'UnitZero' }],
  creator: 'UnitZero',
  publisher: 'UnitZero',
  openGraph: {
    title: 'UnitZero',
    siteName: 'UnitZero',
    description:
      'Transform your business with cutting-edge AI solutions. We deliver specialized intelligence that drives innovation, efficiency, and growth across all industries.',
    url: 'https://unitzero.tech',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UnitZero',
    description:
      'Transform your business with cutting-edge AI solutions. We deliver specialized intelligence that drives innovation, efficiency, and growth across all industries.',
    creator: '@unitzero',
    site: '@unitzero',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      <script src="//code.tidio.co/nfyyb1bm0hrktj1gh8rhmcyklpvz1t1a.js" async></script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
      >
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
