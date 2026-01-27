import React from 'react';
import { CalendarCheck, ClipboardList, Stethoscope, SmilePlus } from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck,
    title: 'Easy Scheduling',
    description: 'Book online or call us. We offer flexible hours to fit your busy lifestyle.'
  },
  {
    icon: ClipboardList,
    title: 'Welcome & Exam',
    description: 'We listen to your concerns and perform a thorough checkup with digital X-rays.'
  },
  {
    icon: Stethoscope,
    title: 'Custom Plan',
    description: 'We design a personalized treatment plan that respects your budget and goals.'
  },
  {
    icon: SmilePlus,
    title: 'Smile Care',
    description: 'Walk out with a brighter smile and a plan for long-term oral health.'
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-[#f0f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#0077b6] font-semibold tracking-wide uppercase text-sm mb-2">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Your Path to a Healthy Smile</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 border-4 border-[#e0f7fa] text-[#0077b6]">
                <step.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              
              {/* Connector Line for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;