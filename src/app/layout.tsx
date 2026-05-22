import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://malaysialoancalculator.com"),
  title: "Loan Calculator Malaysia | Car, Home & Personal Loan Calculator",
  description:
    "Free Malaysia loan calculator to estimate monthly repayment, total interest and total payment for car loans, home loans, personal loans in Malaysia.",
  keywords:
    "Malaysia loan calculator, car loan calculator Malaysia, home loan calculator Malaysia, personal loan calculator, DSR calculator Malaysia",
  authors: [{ name: "LoanCalc Malaysia" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Loan Calculator Malaysia | Car, Home & Personal Loan Calculator",
    description:
      "Free Malaysia loan calculator to estimate monthly repayment, total interest and total payment for car loans, home loans, personal loans in Malaysia.",
    siteName: "LoanCalc Malaysia",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Calculator Malaysia | Car, Home & Personal Loan Calculator",
    description:
      "Free Malaysia loan calculator to estimate monthly repayment, total interest and total payment for car loans, home loans, personal loans in Malaysia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5952834143682557"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
