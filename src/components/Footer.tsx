import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex flex-col items-start gap-2">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="font-bold text-white text-xl">W</span>
              </div>
              <span className="font-bold text-background text-xl">Webzio</span>
            </div>
            <p className="text-background/80 text-sm">
              Smart software that just works. We help businesses grow with custom websites, 
              AI automation, and billing solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background">Services</h4>
            <div className="space-y-2">
              <NavLink to="/services" className="block text-background/80 hover:text-background text-sm transition-colors">
                Web Development
              </NavLink>
              <NavLink to="/services" className="block text-background/80 hover:text-background text-sm transition-colors">
                AI Automation
              </NavLink>
              <NavLink to="/services" className="block text-background/80 hover:text-background text-sm transition-colors">
                Billing Software
              </NavLink>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background">Company</h4>
            <div className="space-y-2">
              <NavLink to="/about" className="block text-background/80 hover:text-background text-sm transition-colors">
                About Us
              </NavLink>
              <NavLink to="/contact" className="block text-background/80 hover:text-background text-sm transition-colors">
                Contact
              </NavLink>
              <a href="#" className="block text-background/80 hover:text-background text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-background/80 hover:text-background text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-background/80" />
                <span className="text-background/80 text-sm">hello@webzio.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-background/80" />
                <span className="text-background/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-background/80" />
                <span className="text-background/80 text-sm">Remote-First</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 text-sm">
            © {currentYear} Webzio. All rights reserved.
          </p>
          <p className="text-background/60 text-xs mt-2 md:mt-0">
            Code. Automate. Bill. Repeat.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;