import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '../types';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Michael R.',
    rating: 5,
    comment: 'I used to be terrified of the dentist, but the team here made me feel so comfortable. The best cleaning I have ever had! The technology they use is truly impressive.',
    date: '2 weeks ago'
  },
  {
    id: '2',
    name: 'Jennifer L.',
    rating: 5,
    comment: 'Brought my two kids here for their first checkup. The staff was incredibly patient and fun. Highly recommend for families looking for pediatric care.',
    date: '1 month ago'
  },
  {
    id: '3',
    name: 'David K.',
    rating: 5,
    comment: 'Professional, clean, and on time. Dr. Verma explained everything clearly and didn\'t push unnecessary treatments. The single-sitting RCT was a lifesaver!',
    date: '3 months ago'
  },
  {
    id: '4',
    name: 'Anjali P.',
    rating: 5,
    comment: 'The invisible aligners treatment was seamless. Great attention to detail and very supportive staff. My smile has never looked better!',
    date: '5 months ago'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#0077b6] font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block"
          >
            Kind Words
          </motion.span>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900">What Our <span className="text-[#0077b6]">Patients Say</span></h3>
        </div>

        <div className="relative max-w-4xl mx-auto h-[400px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative border border-slate-100 italic">
                <Quote className="absolute top-10 right-10 text-[#90e0ef] opacity-30" size={80} />
                
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={24} 
                      className={`${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} 
                    />
                  ))}
                </div>

                <p className="text-2xl md:text-3xl text-slate-800 leading-relaxed mb-10 font-serif">
                  "{testimonials[currentIndex].comment}"
                </p>

                <div className="flex items-center gap-5 non-italic">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0077b6] to-[#90e0ef] text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-slate-900 text-lg uppercase tracking-wider">{testimonials[currentIndex].name}</p>
                    <p className="text-[#0077b6] text-sm font-bold">{testimonials[currentIndex].date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-6">
            <button
              onClick={() => paginate(-1)}
              className="w-14 h-14 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#0077b6] hover:scale-110 active:scale-95 transition-all"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-14 h-14 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#0077b6] hover:scale-110 active:scale-95 transition-all"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;