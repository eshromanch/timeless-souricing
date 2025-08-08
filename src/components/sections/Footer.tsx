'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Linkedin,
  Facebook,
  Instagram
} from 'lucide-react';

const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Our Services', href: '#services' },
  { name: 'Product Categories', href: '#products' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Our Clients', href: '#clients' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact Us', href: '#contact' },
];

const services = [
  'Product Sourcing',
  'Manufacturing Support',
  'Quality Assurance',
  'Logistics & Shipping',
  'Compliance & Certification',
  'Sourcing Consulting',
];

const productCategories = [
  "Men's Wear",
  "Women's Wear",
  "Kids' Wear",
  'Activewear & Sportswear',
  'Underwear & Lingerie',
  'Fashion Accessories',
];

const socialMedia = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/timeless-sourcing' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/timelesssourcing' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/timelesssourcing' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Timeless Sourcing</h3>
                <p className="text-sm text-gray-400">Your Trusted Partner</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              Leading garments sourcing and supplier company connecting international 
              buyers with premium manufacturers across Asia.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">
                  Dhaka, Bangladesh
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">
                  +880 2 9876 5432
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">
                  info@timelesssourcing.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">
                  Mon-Fri: 9AM-6PM (GMT+6)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category}>
                  <span className="text-gray-300 text-sm">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6"
          >
            <p className="text-sm text-gray-400">
              © 2024 Timeless Sourcing. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <span className="text-sm text-gray-400">Follow us:</span>
            <div className="flex space-x-3">
              {socialMedia.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-700"
        >
          <div className="text-center">
            <h5 className="text-sm font-medium mb-4 text-gray-300">Certifications</h5>
            <div className="flex flex-wrap justify-center gap-3">
              {['ISO 9001', 'WRAP', 'BSCI', 'OEKO-TEX', 'GOTS'].map((cert) => (
                <Badge key={cert} variant="outline" className="text-xs border-gray-600 text-gray-300">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 