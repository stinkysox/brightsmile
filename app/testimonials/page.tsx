import React from 'react';
import type { Metadata } from 'next';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read real stories from our satisfied patients about their dental transformations.',
  alternates: {
    canonical: '/testimonials',
  },
};

export default function TestimonialsPage() {
  return (
    <div className="pt-16">
      <Testimonials />
      <Contact />
    </div>
  );
}
