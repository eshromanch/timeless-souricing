'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SectionContainer from '@/components/common/SectionContainer';
import { services } from '@/data/ourServicesData';
import Link from 'next/link';
import Image from 'next/image';

interface OurServicesProps {
  isHome?: boolean;
}

export default function OurServices({ isHome = false }: OurServicesProps) {
  // Determine grid classes based on isHome
  const gridClasses = isHome 
    ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-5' 
    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2';

  return (
    <SectionContainer id="services" className="text-center">
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

      <div className={`grid ${gridClasses} gap-6`}>
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
                  {isHome ? (
                    <div className={`w-full h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  ) : (
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image 
                        src={`/images/services/${service.id}.jpg`} 
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  {!isHome && (
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  )}
                </CardHeader>
                {!isHome && (
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {/* <Link href={`/services#${service.id}`}>
                      <Button variant="outline" size="sm" className="w-full group">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link> */}
                  </CardContent>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Section */}
      {isHome ? (
        <Link href="/services">
          <Button variant="default" className="mt-8">
            View All Services
          </Button>
        </Link>
      ) : (
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
      )}
    </SectionContainer>
  );
}