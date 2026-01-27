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
            <h5 className="text-white font-bold mb-4">Services</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-[#90e0ef] transition-colors">General Dentistry</Link></li>
              <li><Link to="/services" className="hover:text-[#90e0ef] transition-colors">Cosmetic Whitening</Link></li>
              <li><Link to="/services" className="hover:text-[#90e0ef] transition-colors">Orthodontics</Link></li>
              <li><Link to="/services" className="hover:text-[#90e0ef] transition-colors">Dental Implants</Link></li>
              <li><Link to="/contact" className="hover:text-[#90e0ef] transition-colors">Emergency Care</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#90e0ef] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#90e0ef] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#90e0ef] transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-[#90e0ef] transition-colors">Accessibility</a></li>
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