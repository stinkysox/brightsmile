import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'BrightSmile Dental | Excellence in Oral Health',
    template: '%s | BrightSmile Dental',
  },
  description: 'Premium dental care in India. Experienced MDS specialists providing Root Canal, Implants, Braces, and Pain-Free Dentistry.',
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BrightSmile Dental | Premium Dental Care',
    description: 'Experienced MDS specialists providing Root Canal, Implants, and Braces. Best dental clinic for the whole family.',
    url: '/',
    siteName: 'BrightSmile Dental',
    images: [
      {
        url: 'https://i.pinimg.com/736x/2a/87/87/2a87873c57c152a6c78e1e32d2926e0a.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrightSmile Dental | Premium Dental Care',
    description: 'Experienced MDS specialists providing Root Canal, Implants, and Braces.',
    images: ['https://i.pinimg.com/736x/2a/87/87/2a87873c57c152a6c78e1e32d2926e0a.jpg'],
  },
  icons: {
    icon: 'https://i.pinimg.com/1200x/11/cf/4b/11cf4bc113d9c17dbff06ba6a508fb31.jpg',
    apple: 'https://i.pinimg.com/1200x/11/cf/4b/11cf4bc113d9c17dbff06ba6a508fb31.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-[#1A1A1A] dark:bg-[#050505] dark:text-[#F5F5F5] min-h-screen flex flex-col`}>
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
