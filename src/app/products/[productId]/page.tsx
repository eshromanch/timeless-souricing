import { products } from '@/data/productsData';
import { categories as productCategories } from '@/data/productCategoriesData';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Static params for SSG
export function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}

export default async function ProductDetailsPage({ 
  params 
}: { 
  params: Promise<{ productId: string }> 
}) {
  const { productId } = await params;
  const product = products.find((p) => p.id === productId);
  
  if (!product) return notFound();
  
  const category = productCategories.find((c) => c.id === product.categoryId);

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <Card>
        <CardContent className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Left: Product Image */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Right: Product Info */}
            <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {category?.name}
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  {product.name}
                </h1>
                <p className="mb-4 text-muted-foreground">
                  {product.description}
                </p>
                <ul className="mb-6 list-disc list-inside text-sm">
                  {product.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/contact">Get Quotation</Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href="/products">&larr; Back to Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}