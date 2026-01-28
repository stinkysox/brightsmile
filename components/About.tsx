import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Zap, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0077b6] to-[#90e0ef] rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-video">
              <img 
                src="/reception.png" 
                alt="Clinic Reception" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-[#0077b6] font-bold tracking-[0.2em] uppercase text-xs mb-4">The BrightSmile Ethos</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Crafting Smiles with <br/> <span className="text-gradient">Integrity & Innovation</span>
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
              BrightSmile Dental was founded on a simple principle: high-quality dental care should be accessible, transparent, and absolutely comfortable. We combine the warmth of traditional Indian hospitality with the precision of global dental technology.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: Target, title: "Precision", text: "Global standard equipment for accurate results." },
                { icon: Heart, title: "Compassion", text: "Treating you like family, not just a patient." },
                { icon: Zap, title: "Speed", text: "Optimized workflows for faster treatments." },
                { icon: Coffee, title: "Comfort", text: "A relaxing, spa-like clinic environment." }
              ].map((feature) => (
                <div key={feature.title} className="group cursor-default">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#0077b6] group-hover:bg-[#0077b6] group-hover:text-white transition-all">
                      <feature.icon size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 group-hover:text-[#0077b6] transition-colors">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;