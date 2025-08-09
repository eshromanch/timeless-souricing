'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Handshake } from 'lucide-react';
import SectionContainer from '@/components/common/SectionContainer';
import { clients, partners } from '@/data/clientsPartnersData';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export default function ClientsPartners() {
  // const plugin = useRef(
  //   Autoplay({ delay: 3000, stopOnInteraction: false })
  // );

  return (
    <SectionContainer id="clients" background="light">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="secondary" className="mb-4">Our Network</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted by Leading Brands
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We work with prestigious clients and maintain strong partnerships with 
          reliable manufacturers and suppliers.
        </p>
      </motion.div>

      {/* Clients Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building2 className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Our Clients</h3>
          </div>
          <p className="text-muted-foreground">
            Leading fashion brands and retailers trust us for their sourcing needs
          </p>
        </div>

        <Carousel
                plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem key={client.name} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-hover group h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {client.name}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {client.category}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </motion.div>

      {/* Partners Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Handshake className="w-6 h-6 text-secondary" />
            <h3 className="text-2xl font-bold">Our Partners</h3>
          </div>
          <p className="text-muted-foreground">
            Strategic partnerships with reliable manufacturers and suppliers
          </p>
        </div>

        <Carousel
                plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={partner.name} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-hover group h-full">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <Handshake className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1 group-hover:text-secondary transition-colors">
                        {partner.name}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {partner.type}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Network
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Whether you&apos;re a brand looking for sourcing solutions or a manufacturer 
              seeking partnerships, we&apos;d love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="secondary" className="justify-center py-2 text-primary">
                Become a Client
              </Badge>
              <Badge variant="secondary" className="justify-center py-2 text-primary">
                Partner with Us
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionContainer>
  );
}