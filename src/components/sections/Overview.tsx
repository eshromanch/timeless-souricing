'use client';
import { Badge } from '@/components/ui/badge';
import { certifications } from '@/data/certifications';
import Link from 'next/link';
import { Button } from '../ui/button';
import SectionContainer from '../common/SectionContainer';
import { achievements } from '@/data/aboutData';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

function Overview() {
  return (
    <SectionContainer className="text-center" background="light">
      <div className="text-center mb-10">
        <Badge variant="secondary" className="mb-4">
          Overview
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Timeless Sourcing at a Glance
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We connect you with premium garment manufacturers for end-to-end sourcing solutions. 
          Our expertise ensures quality, reliability, and timely delivery for your apparel needs.
        </p>
      </div>

      {/* Reusing the achievements grid from AboutUs with animations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12"
      >
        {achievements.slice(0, 3).map((achievement, index) => {
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
      </motion.div>

      {/* Certifications section - similar to AboutUs but simplified */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <h3 className="text-xl font-semibold mb-4 text-primary">Certifications</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
          {certifications.map((cert, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="justify-center py-2 whitespace-normal"
            >
              {cert}
            </Badge>
          ))}
        </div>
      </motion.div> */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link href="/about-us">
          <Button variant="default" className="mt-8">
            Learn More
          </Button>
        </Link>
      </motion.div>
    </SectionContainer>
  );
}

export default Overview;