import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page Components (Composed)
const HomePage = () => (
  <>
    <Hero />
    <Process />
    <Gallery />
    <Contact />
  </>
);

const ServicesPage = () => (
  <div className="pt-16">
    <Services />
    <FAQ />
  </div>
);

const AboutPage = () => (
  <div className="pt-16">
    <About />
    <Gallery />
  </div>
);

const TestimonialsPage = () => (
  <div className="pt-16">
    <Testimonials />
    <Contact />
  </div>
);

const FAQPage = () => (
  <div className="pt-16">
    <FAQ />
    <Contact />
  </div>
);

const ContactPage = () => (
  <div className="pt-16">
    <Contact />
    <FAQ />
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#90e0ef] selection:text-[#0077b6] flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;