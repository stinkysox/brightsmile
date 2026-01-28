import React from 'react';
import Hero from '../components/Hero';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Technology from '../components/Technology';
import BeforeAfter from '../components/BeforeAfter';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <WhyChooseUs />
      <Team />
      <Technology />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
