import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, ThumbsUp, HeartPulse, Clock, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Sterilization Protocols',
    description: 'We follow international gold standards for sterilization, ensuring 100% safety for every patient.'
  },
  {
    icon: Award,
    title: 'Experienced Specialists',
    description: 'Our team consists of MDS specialists with over 15+ years of clinical experience in complex dental procedures.'
  },
  {
    icon: ThumbsUp,
    title: 'Patient-Centric Care',
    description: 'We believe in transparent pricing and customized treatment plans tailored to your needs and budget.'
  },
  {
    icon: HeartPulse,
    title: 'Pain-Free Dentistry',
    description: 'Using the latest sedation and laser technology, we make sure your dental experience is virtually painless.'
  },
  {
    icon: Clock,
    title: 'Modern Equipment',
    description: 'Equipped with digital X-rays, rotary endodontics, and intraoral cameras for precise diagnosis.'
  },
  {
    icon: Sparkles,
    title: 'Post-Op Support',
    description: 'Our care doesn’t end with the treatment. We provide 24/7 post-operative guidance and follow-ups.'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0077b6]/30 rounded-full blur-[120px] opacity-30" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#90e0ef]/20 rounded-full blur-[120px] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#90e0ef] font-bold tracking-[0.2em] uppercase text-xs"
          >
            The BrightSmile Edge
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mt-4 mb-6"
          >
            Why Patients <span className="text-[#90e0ef]">Trust Us</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Setting the benchmark for dental excellence in India with a perfect blend of technology and human touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#90e0ef]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="text-[#90e0ef]" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
