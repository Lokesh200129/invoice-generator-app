import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "../component/ui/Navbar";
import Footer from "../component/ui/Footer";
import { Montserrat } from 'next/font/google'


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "400",
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ezzyinvoice-generator-app.vercel.app/"),
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
    url: "https://ezzyinvoice-generator-app.vercel.app/",
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
      <body className={`${montserrat.variable} ${geistMono.variable} antialiased `}>
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="colored"
          draggable
        />
        <div className="container flex-1 mx-auto min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
