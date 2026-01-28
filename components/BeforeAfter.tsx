import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const transformations = [
  {
    id: 1,
    title: 'Professional Whitening',
    description: 'Transform your yellowing teeth into a bright, confident smile in just 60 minutes.',
    before: '/before_whitening.png',
    after: '/after_whitening.png',
    category: 'Cosmetic'
  },
  {
    id: 2,
    title: 'Orthodontic Alignment',
    description: 'Corrected severe overcrowding with clear aligners over 12 months.',
    before: '/before_braces.png',
    after: 'https://picsum.photos/id/64/800/800', // Fallback for the failed image
    category: 'Orthodontics'
  }
];

const BeforeAfter: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + transformations.length) % transformations.length);
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#90e0ef]/20 text-[#0077b6] text-sm font-bold mb-4"
          >
            <Sparkles size={16} />
            <span>Smile Makeovers</span>
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Real Results, <span className="text-gradient">Real Smiles</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Explore our clinical transformations and see how we help our patients regain their confidence.
          </p>
        </div>

        <div className="relative h-[500px] md:h-[600px] w-full max-w-5xl mx-auto flex items-center justify-center">
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
              className="absolute w-full h-full flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Image Container */}
              <div className="w-full md:w-2/3 h-full relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="grid grid-cols-2 h-full w-full">
                  <div className="relative h-full overflow-hidden border-r-2 border-white">
                    <img src={transformations[currentIndex].before} className="w-full h-full object-cover" alt="Before" />
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">BEFORE</div>
                  </div>
                  <div className="relative h-full overflow-hidden">
                    <img src={transformations[currentIndex].after} className="w-full h-full object-cover" alt="After" />
                    <div className="absolute top-4 right-4 bg-[#0077b6]/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">AFTER</div>
                  </div>
                </div>
              </div>

              {/* Info Area */}
              <div className="w-full md:w-1/3 text-center md:text-left">
                <span className="text-[#0077b6] text-sm font-bold uppercase tracking-widest">{transformations[currentIndex].category}</span>
                <h3 className="text-3xl font-black text-slate-900 mt-2 mb-4">{transformations[currentIndex].title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-8">
                  {transformations[currentIndex].description}
                </p>
                <button className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-[#0077b6] transition-colors shadow-lg shadow-slate-900/10">
                  Book This Treatment
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-12 md:bottom-auto md:-left-8 md:top-1/2 md:-translate-y-1/2 flex md:flex-col gap-4">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#0077b6] hover:scale-110 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute -bottom-12 md:bottom-auto md:-right-8 md:top-1/2 md:-translate-y-1/2 flex md:flex-col gap-4">
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#0077b6] hover:scale-110 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
