import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/sections/Footer";
import WhatsAppFloatButton from "@/components/common/WhatsAppFloatingButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timeless Sourcing - Your Trusted Garments Sourcing Partner",
  description: "Leading garments sourcing and supplier company connecting international buyers with premium manufacturers across Asia. End-to-end sourcing solutions with quality assurance and competitive pricing.",
  keywords: "garments sourcing, clothing manufacturer, apparel supplier, fashion sourcing, Bangladesh sourcing, quality assurance, logistics, compliance",
  authors: [{ name: "Timeless Sourcing" }],
  creator: "Timeless Sourcing",
  publisher: "Timeless Sourcing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://timelesssourcing.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Timeless Sourcing - Your Trusted Garments Sourcing Partner",
    description: "Leading garments sourcing and supplier company connecting international buyers with premium manufacturers across Asia.",
    url: 'https://timelesssourcing.com',
    siteName: 'Timeless Sourcing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Timeless Sourcing - Your Trusted Garments Sourcing Partner",
    description: "Leading garments sourcing and supplier company connecting international buyers with premium manufacturers across Asia.",
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
      <body className={inter.className}>
        <Header />
        <main className="pt-32">
          {children}
          <WhatsAppFloatButton
  phoneNumber="1234567890" 
  message="Hello, I need help with..."
  position="right"
  bottomMargin="40px"
  rightMargin="40px"
  showText={true}
  text="WhatsApp Us"
  buttonSize="lg"
  animation="bounce"
  zIndex={100}
/>
        </main>
         <Footer />
      </body>
    </html>
  );
}
