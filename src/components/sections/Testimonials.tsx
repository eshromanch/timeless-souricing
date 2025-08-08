'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import SectionContainer from '@/components/common/SectionContainer';
import { testimonials } from '@/data/testimonialsData';


const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <SectionContainer id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="secondary" className="mb-4">Testimonials</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say 
          about their experience working with us.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover h-full relative">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {testimonial.country}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

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
              Client Satisfaction
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-sm text-primary-foreground/80">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <div className="text-sm text-primary-foreground/80">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm text-primary-foreground/80">Repeat Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm text-primary-foreground/80">Happy Clients</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionContainer>
  );
} 