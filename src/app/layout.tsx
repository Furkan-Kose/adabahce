import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ada Bahçe - Topraksız Tarım Teknolojileri",
    template: "%s | Ada Bahçe - Topraksız Tarım",
  },
  description:
    "Ada Bahçe ile topraksız tarım teknolojileri ile doğal, taze ve organik ürünler yetiştirin. Hidroponik ve aquaponik sistemler.",
  keywords:
    "topraksız tarım, hidroponik, aquaponik, organik ürünler, tarım teknolojisi, sera tarımı",
  authors: [{ name: "Ada Bahçe" }],
  creator: "Ada Bahçe",
  publisher: "Ada Bahçe",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://adabahce.com"),
  alternates: {
    canonical: "https://adabahce.com",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://adabahce.com",
    siteName: "Ada Bahçe - Topraksız Tarım Teknolojileri",
    title: "Ada Bahçe - Topraksız Tarım Teknolojileri",
    description:
      "Ada Bahçe ile topraksız tarım teknolojileri ile doğal, taze ve organik ürünler yetiştirin.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ada Bahçe - Topraksız Tarım",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ada Bahçe - Topraksız Tarım Teknolojileri",
    description:
      "Ada Bahçe ile topraksız tarım teknolojileri ile doğal, taze ve organik ürünler yetiştirin.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ada Bahçe",
    url: "https://adabahce.com",
    logo: "https://adabahce.com/logo.png",
    description:
      "Topraksız tarım teknolojileri ile doğal, taze ve organik ürünler yetiştiriyoruz.",
    sameAs: [
      "https://www.facebook.com/adabahce",
      "https://www.instagram.com/adabahce",
      "https://www.linkedin.com/company/adabahce",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-XXX-XXX-XXXX",
      contactType: "Customer Support",
    },
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
