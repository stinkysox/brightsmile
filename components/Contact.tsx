import React, { useState } from 'react';
import Button from './Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'general',
    date: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Request received for ${formData.name}! We will call ${formData.phone} to confirm.`);
  };

  return (
    <section id="contact" className="py-20 bg-[#0077b6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Form Side */}
          <div className="p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Book Your Visit</h3>
            <p className="text-slate-600 mb-8">Ready to smile? Fill out the form below and we'll get back to you shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 outline-none transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 outline-none transition-all"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 outline-none transition-all text-slate-600"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Service Required</label>
                <select
                  name="service"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 outline-none transition-all bg-white"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="general">General Checkup & Cleaning</option>
                  <option value="cosmetic">Cosmetic Consultation</option>
                  <option value="ortho">Orthodontics / Braces</option>
                  <option value="emergency">Emergency Pain Relief</option>
                </select>
              </div>

              <Button type="submit" fullWidth className="mt-4">
                Request Appointment
              </Button>
            </form>
          </div>

          {/* Info Side */}
          <div className="bg-slate-50 p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-slate-100 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#e0f7fa] flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#0077b6]" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Visit Us</p>
                    <p className="text-slate-600 text-sm">123, Medical Hub, Phase II,<br/>New Delhi, Delhi 110001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#e0f7fa] flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#0077b6]" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Call Us</p>
                    <p className="text-slate-600 text-sm">+91 99999 99999<br/>+91 11 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#e0f7fa] flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#0077b6]" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email Us</p>
                    <p className="text-slate-600 text-sm">contact@brightsmile.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#e0f7fa] flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#0077b6]" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Opening Hours</p>
                    <p className="text-slate-600 text-sm">Mon - Sat: 10:00 AM - 8:00 PM</p>
                    <p className="text-slate-600 text-sm">Sun: Emergency Appointments Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 rounded-xl overflow-hidden h-48 bg-slate-200 relative group">
              <img 
                src="https://picsum.photos/id/406/600/300" 
                alt="Map location" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="secondary" className="bg-white/90 backdrop-blur-sm hover:bg-white text-xs">
                  View on Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;