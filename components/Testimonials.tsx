import React from 'react';
import { Testimonial } from '../types';
import { Star, Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Michael R.',
    rating: 5,
    comment: 'I used to be terrified of the dentist, but the team here made me feel so comfortable. The best cleaning I have ever had!',
    date: '2 weeks ago'
  },
  {
    id: '2',
    name: 'Jennifer L.',
    rating: 5,
    comment: 'Brought my two kids here for their first checkup. The staff was incredibly patient and fun. Highly recommend for families.',
    date: '1 month ago'
  },
  {
    id: '3',
    name: 'David K.',
    rating: 5,
    comment: 'Professional, clean, and on time. Dr. Smith explained everything clearly and didn\'t push unnecessary treatments.',
    date: '3 months ago'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#0077b6] font-semibold tracking-wide uppercase text-sm mb-2">Patient Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">What Our Patients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 text-[#90e0ef] opacity-50" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={`${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} 
                  />
                ))}
              </div>

              <p className="text-slate-700 italic mb-6 leading-relaxed">"{t.comment}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0077b6] text-white flex items-center justify-center font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;