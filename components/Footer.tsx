import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#0077b6] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="font-bold text-xl text-white">BrightSmile</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Providing quality dental care with a gentle touch. Your smile is our top priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[#90e0ef] transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-[#90e0ef] transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-[#90e0ef] transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#90e0ef] transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-[#90e0ef] transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4">Treatments</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-[#90e0ef] transition-colors">Root Canal Treatment</Link></li>
              <li><Link to="/services" className="hover:text-[#90e0ef] transition-colors">Dental Implants</Link></li>
              <li><Link to="/services" className="hover:text-[#90e0ef] transition-colors">Invisible Aligners</Link></li>
              <li><Link to="/services" className="hover:text-[#90e0ef] transition-colors">Pediatric Dentistry</Link></li>
              <li><Link to="/services" className="hover:text-[#90e0ef] transition-colors">Full Mouth Rehab</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4">Visit Us</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col">
                <span className="text-white font-semibold mb-1">Clinic Address</span>
                <span className="text-slate-400">123, Medical Hub, Phase II, <br/>New Delhi, Delhi 110001</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-semibold mb-1">Office Hours</span>
                <span className="text-slate-400">Mon - Sat: 10:00 AM - 8:00 PM <br/>Sunday: Emergency Only</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;