'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Service } from '../types';
import { Sparkles, Activity, Smile, HeartPulse, ArrowRight, Zap, Bone, Baby, ShieldCheck, Siren } from 'lucide-react';

const services: (Service & { longDescription: string })[] = [
  {
    id: 'general',
    title: 'General Dentistry',
    description: 'Routine cleanings, comprehensive exams, and fillings to maintain optimal oral hygiene.',
    longDescription: 'Our general dentistry services include scaling and polishing, cavity detection with digital X-rays, and tooth-colored composite fillings. We focus on preventive care to avoid future complications.',
    icon: Activity
  },
  {
    id: 'rct',
    title: 'Root Canal (RCT)',
    description: 'Pain-free root canal treatments using advanced rotary endodontic technology.',
    longDescription: 'We specialize in single-sitting Root Canal Treatments (RCT) that are virtually painless. Using digital apex locators and rotary systems, we ensure high success rates and patient comfort.',
    icon: Siren
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent solutions for missing teeth with high-quality biocompatible titanium implants.',
    longDescription: 'Our dental implants provide a natural-looking and permanent solution for missing teeth. We use world-class implant systems and follow strictly sterile protocols for the best results.',
    icon: Bone
  },
  {
    id: 'ortho',
    title: 'Orthodontics',
    description: 'Invisible aligners and traditional braces for a perfectly aligned smile.',
    longDescription: 'Transform your smile with Invisalign clear aligners or traditional metal and ceramic braces. We offer customized treatment plans for children, teens, and adults.',
    icon: Smile
  },
  {
    id: 'cosmetic',
    title: 'Teeth Whitening',
    description: 'Professional teeth whitening for a dazzlingly bright smile in just one hour.',
    longDescription: 'Get a Hollywood smile with our professional bleaching services. We use safe, laser-activated whitening agents that remove deep stains without damaging your enamel.',
    icon: Sparkles
  },
  {
    id: 'kids',
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly, fear-free environment.',
    longDescription: 'We make dental visits fun for kids! Our pediatric specialists focus on preventive care, fluoride applications, and pit \u0026 fissure sealants to keep young smiles healthy.',
    icon: Baby
  },
  {
    id: 'surgery',
    title: 'Oral Surgery',
    description: 'Expert Wisdom tooth extractions and minor oral surgical procedures.',
    longDescription: 'From painless extractions to frenectomies, our surgical team ensures minimal discomfort and fast recovery using the latest techniques.',
    icon: Zap
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    description: 'Same-day appointments for toothaches and dental urgencies.',
    longDescription: 'Dental pain can\u0027t wait. We provide priority emergency services for trauma, acute infection, or sudden tooth loss, ensuring immediate relief.',
    icon: HeartPulse
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#90e0ef]/10 rounded-full blur-3xl -mr-20 -mt-20 opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#0077b6]/5 rounded-full blur-3xl -ml-20 -mb-20 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="bg-[#90e0ef]/30 text-[#0077b6] px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4 inline-block">
            Our Specialties
          </span>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Specialized Care for Your <span className="text-gradient">Unique Smile</span>
          </h3>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
            We offer a comprehensive range of dental treatments in India, combining cutting-edge international technology with affordable, compassionate care.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className="group flex flex-col items-start p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#90e0ef] hover:shadow-[0_20px_50px_rgba(144,224,239,0.3)] hover:-translate-y-3 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0077b6] group-hover:shadow-lg group-hover:shadow-[#0077b6]/30 transition-all duration-500">
                <service.icon className="text-[#0077b6] group-hover:text-white transition-colors duration-500" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-[#0077b6] transition-colors">{service.title}</h4>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                {service.description}
              </p>
              <div className="mt-auto pt-4 border-t border-slate-50 w-full">
                <Link href="/contact" className="inline-flex items-center text-[#0077b6] font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all">
                  Book Case Study <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;