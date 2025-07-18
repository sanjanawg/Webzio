import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex-shrink-0">
            <Logo size="sm" />
          </NavLink>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-foreground hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `text-foreground hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-foreground hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-foreground hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`
              }
            >
              Contact
            </NavLink>
          </div>
          
          <NavLink to="/contact">
            <Button variant="default" className="shadow-elegant">
              Get Started
            </Button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;