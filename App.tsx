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
import SEO from './components/SEO';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import BeforeAfter from './components/BeforeAfter';
import Technology from './components/Technology';

// Page Components (Composed)
const HomePage = () => (
  <>
    <SEO 
      title="Home" 
      description="Welcome to BrightSmile Dental. Comprehensive dental care including general, cosmetic, and emergency dentistry." 
      canonical="https://brightsmile-dental.com/"
    />
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

const ServicesPage = () => (
  <div className="pt-16">
    <SEO 
      title="Services" 
      description="Explore our dental services: General Dentistry, Cosmetic, Orthodontics, and Emergency Care." 
      canonical="https://brightsmile-dental.com/services"
    />
    <Services />
    <FAQ />
  </div>
);

const AboutPage = () => (
  <div className="pt-16">
    <SEO 
      title="About Us" 
      description="Learn about our experienced team and modern dental facility dedicated to your comfort and health." 
      canonical="https://brightsmile-dental.com/about"
    />
    <About />
    <Gallery />
  </div>
);

const TestimonialsPage = () => (
  <div className="pt-16">
    <SEO 
      title="Testimonials" 
      description="Read real stories from our satisfied patients about their dental transformations." 
      canonical="https://brightsmile-dental.com/testimonials"
    />
    <Testimonials />
    <Contact />
  </div>
);

const FAQPage = () => (
  <div className="pt-16">
    <SEO 
      title="FAQ" 
      description="Find answers to common questions about appointments, insurance, and dental procedures." 
      canonical="https://brightsmile-dental.com/faq"
    />
    <FAQ />
    <Contact />
  </div>
);

const ContactPage = () => (
  <div className="pt-16">
    <SEO 
      title="Contact Us" 
      description="Book an appointment today. Find our location, phone number, and office hours." 
      canonical="https://brightsmile-dental.com/contact"
    />
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