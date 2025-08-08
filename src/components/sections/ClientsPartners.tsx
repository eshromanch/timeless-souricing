'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Handshake } from 'lucide-react';
import SectionContainer from '@/components/common/SectionContainer';

const clients = [
  { name: 'Fashion Forward Inc.', logo: '/images/clients/fashion-forward.png', category: 'Fashion Brand' },
  { name: 'Urban Style Co.', logo: '/images/clients/urban-style.png', category: 'Retailer' },
  { name: 'Eco Fashion Ltd.', logo: '/images/clients/eco-fashion.png', category: 'Sustainable Brand' },
  { name: 'Sportswear Plus', logo: '/images/clients/sportswear-plus.png', category: 'Athletic Wear' },
  { name: 'Boutique Collections', logo: '/images/clients/boutique-collections.png', category: 'Luxury Retailer' },
  { name: 'Corporate Wear Solutions', logo: '/images/clients/corporate-wear.png', category: 'Corporate Uniforms' },
  { name: 'Global Fashion Group', logo: '/images/clients/global-fashion.png', category: 'International Brand' },
  { name: 'Trendy Apparel', logo: '/images/clients/trendy-apparel.png', category: 'Fast Fashion' }
];

const partners = [
  { name: 'Premium Textiles Ltd.', logo: '/images/partners/premium-textiles.png', type: 'Fabric Manufacturer' },
  { name: 'Quality Garments Co.', logo: '/images/partners/quality-garments.png', type: 'Manufacturer' },
  { name: 'Eco Dye Solutions', logo: '/images/partners/eco-dye.png', type: 'Dyeing & Finishing' },
  { name: 'Smart Logistics', logo: '/images/partners/smart-logistics.png', type: 'Logistics Partner' },
  { name: 'Certified Testing Lab', logo: '/images/partners/testing-lab.png', type: 'Quality Testing' },
  { name: 'Sustainable Materials Co.', logo: '/images/partners/sustainable-materials.png', type: 'Material Supplier' }
];

export default function ClientsPartners() {
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

      {/* Clients Section */}
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover group">
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
          ))}
        </div>
      </motion.div>

      {/* Partners Section */}
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover group">
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
          ))}
        </div>
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