'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award, CheckCircle } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Rajesh Verma",
    role: "Chief Dental Surgeon & Implantologist",
    specialization: "MDS - Oral & Maxillofacial Surgery",
    experience: "18+ Years Experience",
    image: "/doctor.png",
    bio: "Dr. Verma is a pioneer in digital guided implant surgery in India, having successfully performed over 5000+ implant procedures."
  }
];

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#90e0ef]/20 rounded-full blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
              <img 
                src={doctors[0].image} 
                alt={doctors[0].name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-white border border-slate-100 p-6 rounded-3xl shadow-2xl flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-[#0077b6] rounded-2xl flex items-center justify-center text-white">
                <Award size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 leading-none">18+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Years Expert</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-[#0077b6] font-bold tracking-[0.3em] uppercase text-xs mb-4 inline-block">Meet Our Expert</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Leading the Way in <br/>Digital Dentistry
            </h2>
            <div className="mb-8">
              <h3 className="text-2xl font-extrabold text-[#0077b6] mb-1">{doctors[0].name}</h3>
              <p className="text-slate-500 font-bold mb-4">{doctors[0].role}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-bold border border-slate-100 italic">
                  {doctors[0].specialization}
                </span>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {doctors[0].bio}
              </p>
            </div>

            <div className="space-y-4 mb-10">
              {["Member of American Academy of Dentistry", "Author of 12+ International Journals", "Expert in Robotic Dental Implants"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#90e0ef]/30 flex items-center justify-center">
                    <CheckCircle className="text-[#0077b6]" size={14} />
                  </div>
                  <p className="text-slate-700 font-semibold">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button className="px-8 py-4 bg-[#0077b6] text-white rounded-2xl font-bold shadow-lg shadow-[#0077b6]/30 hover:-translate-y-1 transition-all">
                Know More About Dr. Verma
              </button>
              <div className="flex items-center gap-3">
                <a href="#" className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#0077b6] hover:bg-slate-50 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#0077b6] hover:bg-slate-50 transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
