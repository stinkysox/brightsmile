import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "Is Root Canal Treatment (RCT) painful?",
    answer: "Not at all! With modern local anesthesia and rotary technology, a root canal is as comfortable as getting a filling. Most patients feel immediate relief from their toothache after the first session."
  },
  {
    question: "How much does a Dental Implant cost?",
    answer: "Dental implant costs vary based on the brand and complexity of the case. We offer transparent pricing starting from competitive rates, and we use world-renowned implant systems with lifetime warranties."
  },
  {
    question: "Can I get my treatment done in a single visit?",
    answer: "Yes, for many procedures like Root Canals and Crowns, we offer 'Single-Sitting' treatments using advanced technology, saving you multiple visits and time."
  },
  {
    question: "Do you have digital X-ray facilities?",
    answer: "Absolutely. We use RVG (Digital Radiography) which reduces radiation exposure by up to 90% compared to traditional X-rays and provides instant, high-resolution results."
  },
  {
    question: "What sterilization standards do you follow?",
    answer: "Your safety is our priority. We follow a strict 4-step sterilization protocol including ultrasonic cleaning and B-Class autoclaving, meeting international ISO standards."
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