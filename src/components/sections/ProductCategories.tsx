'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package } from 'lucide-react';
import SectionContainer from '@/components/common/SectionContainer';
import { categories } from '@/data/productCategoriesData';

export default function ProductCategories() {
  return (
    <SectionContainer id="products" background="light">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="secondary" className="mb-4">Product Categories</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Comprehensive Product Range
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We source and supply a wide range of garments and accessories to meet 
          all your fashion and apparel needs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover group overflow-hidden">
              {/* Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <Package className="w-16 h-16 text-white/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    Min Order: {category.minimumOrder}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-medium text-primary">Subcategories:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.slice(0, 3).map((subcategory, subIndex) => (
                      <Badge key={subIndex} variant="outline" className="text-xs">
                        {subcategory}
                      </Badge>
                    ))}
                    {category.subcategories.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{category.subcategories.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full group">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
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
              Need Custom Products?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              We can source custom garments and accessories according to your specific 
              requirements and design specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary">
                Request Custom Quote
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Catalog
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionContainer>
  );
}