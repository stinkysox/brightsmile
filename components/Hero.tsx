import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';
import { ShieldCheck, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-0 text-center lg:text-left z-10 relative"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#90e0ef]/20 text-[#0077b6] text-sm font-semibold mb-6"
            >
              <Star size={14} fill="#0077b6" />
              <span>Rated #1 Dental Clinic in the City</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              Excellence in <br/>
              <span className="text-gradient">Oral Health</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience modern, compassionate dentistry for the whole family. 
              From routine checkups to cosmetic makeovers, we ensure your smile stays healthy and bright.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button className="w-full sm:w-auto shadow-xl shadow-[#0077b6]/20 transform hover:scale-105 transition-transform bg-[#0077b6] text-white py-4 px-8">
                  Book Appointment
                </Button>
              </Link>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all flex items-center justify-center gap-2 border-2 border-slate-200 py-4 px-8 font-bold">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                  WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-[#0077b6]" size={20} />
                <span>Insurance Accepted</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-[#0077b6]" size={20} />
                <span>Latest Technology</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#90e0ef]/30 rounded-full blur-3xl opacity-50 animate-pulse" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
              <img 
                src="/hero.png" 
                alt="Happy patient smiling" 
                className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-100 max-w-[200px]"
              >
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-xs text-slate-500 italic">"Best dental experience I've ever had!"</p>
                <p className="text-xs font-bold text-slate-900 mt-1">- Sarah J.</p>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;