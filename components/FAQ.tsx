import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "Do you accept dental insurance?",
    answer: "Yes! We accept most major PPO dental insurance plans. Our team will happily verify your benefits before your appointment to ensure you understand your coverage."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "If you are experiencing severe pain or have a broken tooth, call us immediately. We offer same-day emergency appointments to get you out of pain as quickly as possible."
  },
  {
    question: "How often should I visit the dentist?",
    answer: "The American Dental Association recommends visiting your dentist every six months for a routine checkup and cleaning to maintain optimal oral health."
  },
  {
    question: "Do you treat children?",
    answer: "Absolutely! We love seeing kids and helping them build healthy dental habits. We recommend bringing your child in for their first visit by their first birthday."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we understand dental care is an investment. We offer flexible payment plans and work with financing partners like CareCredit."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-[#f8fafc]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#0077b6] font-semibold tracking-wide uppercase text-sm mb-2">Common Questions</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#0077b6]" size={20} />
                ) : (
                  <ChevronDown className="text-slate-400" size={20} />
                )}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;