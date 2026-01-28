import React from 'react';
import type { Metadata } from 'next';
import FAQ from '../../components/FAQ';
import Contact from '../../components/Contact';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Find answers to common questions about appointments, insurance, and dental procedures.',
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQPage() {
  return (
    <div className="pt-16">
      <FAQ />
      <Contact />
    </div>
  );
}
