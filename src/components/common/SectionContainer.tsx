import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'primary' | 'secondary';
}

export default function SectionContainer({ 
  children, 
  className, 
  id,
  background = 'white' 
}: SectionContainerProps) {
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-green-600 text-white',
  };

  return (
    <section 
      id={id}
      className={cn(
        'section-padding',
        backgroundClasses[background],
        className
      )}
    >
      <div className="container mx-auto container-padding">
        {children}
      </div>
    </section>
  );
} 