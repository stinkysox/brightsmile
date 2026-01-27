import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800', // Dental chair
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800', // Hospital hallway
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800', // Tools
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800'  // Waiting room
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#0077b6] font-semibold tracking-wide uppercase text-sm mb-2">Our Facility</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Tour Our Modern Clinic</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((src, index) => (
            <div key={index} className={`rounded-2xl overflow-hidden shadow-lg group ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
              <img 
                src={src} 
                alt={`Clinic view ${index + 1}`} 
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${index === 0 ? 'h-64 md:h-[500px]' : 'h-64'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;