'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import SectionContainer from '@/components/common/SectionContainer';

import { certifications } from '@/data/certifications';
import { benefits,processes } from '@/data/whyChooseUsData';

export default function WhyChooseUs() {
  return (
    <SectionContainer id="why-choose-us">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your Trusted Sourcing Partner
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We differentiate ourselves through quality, reliability, and exceptional 
          customer service. Here&apos;s why leading brands choose us.
        </p>
      </motion.div>

      {/* Benefits Grid */}
{/* Benefits Grid - Fixed icon container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Our Proven Process
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We follow a systematic approach to ensure quality, efficiency, and customer satisfaction.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processes.map((process, index) => {
          const Icon = process.icon;
          return (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-full h-12 rounded-lg bg-gradient-to-r flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{process.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications */}
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
              Industry Certifications
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              We maintain the highest standards of quality and compliance with international certifications.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="secondary" className="justify-center py-2 text-primary">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionContainer>
  );
} 