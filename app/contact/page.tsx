import React from 'react';
import type { Metadata } from 'next';
import Contact from '../../components/Contact';
import FAQ from '../../components/FAQ';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Book an appointment today. Find our location, phone number, and office hours.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <Contact />
      <FAQ />
    </div>
  );
}
