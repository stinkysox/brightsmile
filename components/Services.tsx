import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';
import { Sparkles, Activity, Smile, HeartPulse, ArrowRight } from 'lucide-react';

const services: Service[] = [
  {
    id: 'general',
    title: 'General Dentistry',
    description: 'Routine cleanings, comprehensive exams, and fillings to maintain optimal oral hygiene for your family.',
    icon: Activity
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with whitening, veneers, and bonding tailored to your aesthetic goals.',
    icon: Sparkles
  },
  {
    id: 'ortho',
    title: 'Orthodontics',
    description: 'Modern teeth straightening solutions including clear aligners and traditional braces for all ages.',
    icon: Smile
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    description: 'Same-day appointments for toothaches, chipped teeth, and other dental urgencies.',
    icon: HeartPulse
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#0077b6] font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Dental Care</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We use state-of-the-art technology to provide a full range of dental services in a comfortable environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#90e0ef]/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0077b6] transition-colors duration-300">
                <service.icon className="text-[#0077b6] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link to="/contact" className="inline-flex items-center text-[#0077b6] font-semibold text-sm hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;