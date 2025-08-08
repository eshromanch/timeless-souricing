'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Target, Users, Award } from 'lucide-react';
import SectionContainer from '@/components/common/SectionContainer';

const achievements = [
  { value: '14+', label: 'Years Experience', icon: Award },
  { value: '500+', label: 'Happy Clients', icon: Users },
  { value: '25+', label: 'Countries Served', icon: Target },
  { value: '50+', label: 'Team Members', icon: CheckCircle },
];

const values = [
  'Quality Excellence',
  'Customer Focus',
  'Innovation',
  'Sustainability',
  'Transparency',
  'Reliability'
];

export default function AboutUs() {
  return (
    <SectionContainer id="about" background="light">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leading Garments Sourcing Since 2010
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We are a trusted partner connecting international buyers with premium manufacturers 
              across Asia, specializing in end-to-end sourcing solutions.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Our Story</h3>
              <p className="text-muted-foreground">
                Founded in 2010, Timeless Sourcing has grown from a small startup to a leading 
                garments sourcing company. We&apos;ve built our reputation on quality, reliability, 
                and exceptional customer service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide our clients with the highest quality garments at competitive prices 
                while maintaining the highest standards of ethical manufacturing and sustainability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the most trusted and preferred sourcing partner for international 
                fashion brands and retailers worldwide.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Achievements */}
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-2xl font-bold text-primary mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Values */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Our Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {values.map((value, index) => (
                <Badge key={index} variant="outline" className="justify-center py-2">
                  {value}
                </Badge>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['ISO 9001', 'WRAP', 'BSCI', 'OEKO-TEX', 'GOTS'].map((cert, index) => (
                <Badge key={index} variant="secondary" className="justify-center py-2">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
} 