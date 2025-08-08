'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Navigation from './Navigation';
import { Drawer, DrawerContent, DrawerHeader, DrawerClose } from '@/components/ui/drawer';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+880 2 9876 5432</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@timelesssourcing.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Mon-Fri: 9AM-6PM (GMT+6)</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className={`transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Timeless Sourcing</h1>
                <p className="text-xs text-muted-foreground">Your Trusted Partner</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Navigation />
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Get Quote
              </Button>
              <Button size="sm">
                Contact Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen} direction="right">
        <DrawerContent className="w-80 max-w-full ml-auto rounded-l-lg shadow-lg">
          <DrawerHeader className="flex justify-between items-center border-b pb-2 mb-4">
            <span className="font-bold text-lg">Menu</span>
            <DrawerClose asChild>
              <button aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </DrawerClose>
          </DrawerHeader>
          <nav className="px-4">
            <Navigation vertical />
          </nav>
          <div className="flex flex-col space-y-2 mt-6 px-4">
            <Button variant="outline" size="sm" className="w-full">
              Get Quote
            </Button>
            <Button size="sm" className="w-full">
              Contact Us
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
}