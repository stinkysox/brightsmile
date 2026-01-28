'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Microscope, Activity, Monitor } from 'lucide-react';

const techs = [
  {
    icon: Cpu,
    title: "Digital Guided Surgery",
    description: "Robotic precision for dental implants with 0% margin of error.",
    image: "/scanner.png"
  },
  {
    icon: Monitor,
    title: "Intraoral 3D Scanning",
    description: "No more messy impressions. We capture your teeth in 3D in seconds.",
    image: "/xray.png"
  },
  {
    icon: Activity,
    title: "Laser Dentistry",
    description: "Painless gum treatments and cavity prep without drills.",
    image: "https://picsum.photos/id/180/800/600"
  }
];

const Technology: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#0077b6] font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block"
          >
            Clinical Excellence
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our <span className="text-gradient">Advanced Technology</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            We invest in the world's best dental technology to make your treatments faster, safer, and 100% painless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {techs.map((t, index) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 aspect-video border-4 border-white group-hover:scale-105 transition-transform duration-500">
                <img src={t.image} alt={t.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
                   <p className="text-sm font-bold opacity-80 uppercase tracking-widest mb-1">Modern Equipment</p>
                   <h4 className="text-xl font-black">{t.title}</h4>
                </div>
              </div>
              <div className="flex items-start gap-4 px-2">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#0077b6] shrink-0 border border-slate-100">
                  <t.icon size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0077b6] transition-colors">{t.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{t.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
