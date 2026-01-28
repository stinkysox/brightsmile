import React from 'react';
import type { Metadata } from 'next';
import About from '../../components/About';
import Gallery from '../../components/Gallery';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our experienced team and modern dental facility dedicated to your comfort and health.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <About />
      <Gallery />
    </div>
  );
}
