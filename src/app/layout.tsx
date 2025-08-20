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
    default: 'Unitzero',
    template: '%s | Unitzero',
  },
  description:
    'Transform your business with cutting-edge AI solutions. We deliver specialized intelligence that drives innovation, efficiency, and growth across all industries.',
  openGraph: {
    title: 'Unitzero',
    siteName: 'Unitzero',
    description:
      'Transform your business with cutting-edge AI solutions. We deliver specialized intelligence that drives innovation, efficiency, and growth across all industries.',
    url: 'https://unitzero.tech',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unitzero',
    description:
      'Transform your business with cutting-edge AI solutions. We deliver specialized intelligence that drives innovation, efficiency, and growth across all industries.',
  },
  alternates: {
    canonical: '/',
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
