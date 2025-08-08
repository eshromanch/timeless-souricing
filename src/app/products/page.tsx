'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { products } from '@/data/productsData';
import { categories as productCategories } from '@/data/productCategoriesData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  const filteredProducts = selectedCategory
    ? products.filter(p => p.categoryId === selectedCategory)
    : products;

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <Badge variant="secondary" className="mb-4">Our Collection</Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Products</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our range of high-quality garments, filter by category to find what you need.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <Button
          variant={selectedCategory === null ? 'default' : 'outline'}
          onClick={() => setSelectedCategory(null)}
        >
          All Categories
        </Button>
        {productCategories.map(cat => (
          <Button
            key={cat.id}
            variant={selectedCategory === cat.id ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.name}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <Card
            key={product.id}
            className="group card-hover transition-shadow hover:shadow-lg cursor-pointer"
            onClick={() => router.push(`/products/${product.id}`)}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                router.push(`/products/${product.id}`);
              }
            }}
            role="button"
            aria-label={`View details for ${product.name}`}
          >
            <CardContent className="p-6 text-center">
              <div className="w-full h-40 bg-muted rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                />
              </div>
              <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h2>
              <Badge variant="outline" className="mb-2 text-xs">
                {productCategories.find(c => c.id === product.categoryId)?.name}
              </Badge>
              <p className="text-muted-foreground text-sm mt-2">{product.description}</p>
            </CardContent>
          </Card>
        ))}
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground">No products found.</div>
        )}
      </div>
    </section>
  );
}