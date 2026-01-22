import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "../component/ui/Navbar";
import Footer from "../component/ui/Footer";
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
    default: "Easy Invoice",
    template: "%s | Easy Invoice"
  },
  description: "Create and download professional invoices in seconds with Easy Invoice. A simple, fast, and free invoice generator designed for freelancers and small businesses.",
  keywords: ["invoice generator", "free invoicing", "PDF invoice maker", "freelance tools"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://easyinvoice.com",
    siteName: "Easy Invoice",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Preview of Easy Invoice App',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="colored"
          draggable
        />
        <div className="container flex-1 mx-auto min-h-dvh ">
          {children}

        </div>
        <Footer />
      </body>
    </html>
  );
}
