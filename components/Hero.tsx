import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { ShieldCheck, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Content */}
          <div className="mb-12 lg:mb-0 text-center lg:text-left z-10 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#90e0ef]/20 text-[#0077b6] text-sm font-semibold mb-6">
              <Star size={14} fill="#0077b6" />
              <span>Rated #1 Dental Clinic in the City</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              Excellence in <br/>
              <span className="text-[#0077b6]">Oral Health</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience modern, compassionate dentistry for the whole family. 
              From routine checkups to cosmetic makeovers, we ensure your smile stays healthy and bright.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button className="w-full sm:w-auto shadow-xl shadow-[#0077b6]/20">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="w-full sm:w-auto">
                  View Services
                </Button>
              </Link>
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
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#90e0ef]/30 rounded-full blur-3xl opacity-50 animate-pulse" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://picsum.photos/id/64/800/800" 
                alt="Happy patient smiling" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 max-w-[200px]">
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-xs text-slate-500">"Best dental experience I've ever had!"</p>
                <p className="text-xs font-bold text-slate-900 mt-1">- Sarah J.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;