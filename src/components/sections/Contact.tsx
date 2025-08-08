'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Building2,
  Globe
} from 'lucide-react';
import SectionContainer from '@/components/common/SectionContainer';
import { offices } from '@/data/contactData';

export default function Contact() {
  return (
    <SectionContainer id="contact" background="light">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="secondary" className="mb-4">Contact Us</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Ready to start your sourcing journey? Contact our team for a free consultation 
          and customized quote tailored to your needs.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Send us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div>
                  <Label htmlFor="product">Product Interest</Label>
                  <Input id="product" placeholder="e.g., Men's Shirts, Women's Dresses" />
                </div>
                
                <div>
                  <Label htmlFor="quantity">Estimated Quantity</Label>
                  <Input id="quantity" placeholder="e.g., 1000 pieces" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements, timeline, and any specific needs..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Headquarters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Headquarters</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-muted-foreground">
                    House #123, Road #12, Banani, Dhaka 1213, Bangladesh
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+880 2 9876 5432</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">info@timelesssourcing.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM (GMT+6)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Office Locations */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Offices</h3>
            <div className="grid gap-4">
              {offices.map((office, index) => {
                const Icon = office.icon;
                return (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Icon className="w-5 h-5 text-primary mt-1" />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{office.location}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{office.address}</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-xs">
                              {office.phone}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {office.email}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Our team is available 24/7 to answer your questions and provide 
              immediate support for urgent inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionContainer>
  );
}