import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Team', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path;
  };

  const isSticky = isScrolled || location.pathname !== '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isSticky ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl transition-all duration-500 border border-transparent ${isSticky ? 'glass px-8 py-4 shadow-2xl !border-white/20' : 'px-0 py-2'}`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 bg-[#0077b6] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-800">
                Bright<span className="text-[#0077b6]">Smile</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-semibold text-sm tracking-wide transition-all relative group ${isActive(item.href) ? 'text-[#0077b6]' : 'text-slate-600 hover:text-[#0077b6]'}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0077b6] transition-all duration-300 group-hover:w-full ${isActive(item.href) ? 'w-full' : ''}`} />
                </Link>
              ))}
              <div className="flex items-center gap-6">
                <a href="tel:+919999999999" className="flex items-center gap-2 text-slate-600 hover:text-[#0077b6] group transition-colors">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#90e0ef]/20 transition-colors">
                    <Phone size={16} />
                  </div>
                  <span className="text-sm font-bold">+91 99999 99999</span>
                </a>
                <Link to="/contact">
                  <Button size="sm" variant="primary" className="shadow-lg shadow-[#0077b6]/20">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-600 hover:text-[#0077b6] transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full px-4 pt-2"
          >
            <div className="glass rounded-2xl overflow-hidden shadow-2xl p-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all ${isActive(item.href) ? 'text-[#0077b6] bg-[#90e0ef]/10' : 'text-slate-600 hover:text-[#0077b6] hover:bg-slate-50'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-slate-100">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button fullWidth className="shadow-lg shadow-[#0077b6]/20">Book Appointment</Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;