import React from 'react';
import { Doctor } from '../types';

const doctors: Doctor[] = [
  {
    id: 'dr-smith',
    name: 'Dr. Emily Smith',
    role: 'Lead Dentist',
    bio: 'With over 15 years of experience, Dr. Smith specializes in restorative dentistry and is passionate about patient education.',
    imageUrl: 'https://picsum.photos/id/338/400/500' // Use a generic person-like image
  },
  {
    id: 'sarah-jones',
    name: 'Sarah Jones',
    role: 'Senior Hygienist',
    bio: 'Sarah is dedicated to making your cleaning visits comfortable and thorough, focusing on preventative care.',
    imageUrl: 'https://picsum.photos/id/65/400/500' // Use a generic person-like image
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <h2 className="text-[#0077b6] font-semibold tracking-wide uppercase text-sm mb-2">Our Team</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Meet Your Dental Professionals</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              At BrightSmile, we believe that a trustworthy relationship with your dentist is key to lifelong oral health. Our team is hand-picked not just for their technical skills, but for their empathy and gentleness.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We continuously train in the latest dental technologies to ensure your visits are shorter, painless, and more effective.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={doctor.imageUrl} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900">{doctor.name}</h4>
                  <p className="text-[#0077b6] font-medium text-sm mb-3">{doctor.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {doctor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;