'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Factory, 
  ShieldCheck, 
  Truck, 
  Award, 
  Users,
  ArrowRight 
} from 'lucide-react';
import SectionContainer from '@/components/common/SectionContainer';

const services = [
  {
    id: 'sourcing',
    title: 'Product Sourcing',
    description: 'End-to-end sourcing solutions from vendor identification to final delivery',
    icon: Search,
    features: ['Vendor identification', 'Price negotiation', 'Quality control', 'Sample development'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Support',
    description: 'Complete manufacturing coordination and quality assurance',
    icon: Factory,
    features: ['Production planning', 'Quality monitoring', 'Timeline management', 'Cost optimization'],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'quality',
    title: 'Quality Assurance',
    description: 'Comprehensive quality control and testing services',
    icon: ShieldCheck,
    features: ['Pre-production inspection', 'In-process quality control', 'Final inspection', 'Lab testing'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'logistics',
    title: 'Logistics & Shipping',
    description: 'Efficient logistics solutions and international shipping',
    icon: Truck,
    features: ['Freight forwarding', 'Customs clearance', 'Documentation', 'Tracking systems'],
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'compliance',
    title: 'Compliance & Certification',
    description: 'Ensuring all products meet international standards',
    icon: Award,
    features: ['Social compliance', 'Environmental standards', 'Safety certifications', 'Audit support'],
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'consulting',
    title: 'Sourcing Consulting',
    description: 'Strategic consulting for optimal sourcing decisions',
    icon: Users,
    features: ['Market analysis', 'Supplier evaluation', 'Cost optimization', 'Risk assessment'],
    color: 'from-indigo-500 to-indigo-600'
  }
];

export default function OurServices() {
  return (
    <SectionContainer id="services">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="secondary" className="mb-4">Our Services</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Comprehensive Sourcing Solutions
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We provide end-to-end sourcing services to help you find the best manufacturers, 
          ensure quality, and deliver on time and within budget.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Section */}
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
              Ready to Start Your Sourcing Journey?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Get in touch with our team to discuss your requirements and receive a 
              customized sourcing solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionContainer>
  );
} 