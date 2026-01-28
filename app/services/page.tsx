import React from 'react';
import type { Metadata } from 'next';
import Services from '../../components/Services';
import FAQ from '../../components/FAQ';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our dental services: General Dentistry, Cosmetic, Orthodontics, and Emergency Care.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <Services />
      <FAQ />
    </div>
  );
}
