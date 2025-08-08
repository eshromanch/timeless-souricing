'use client';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Clients', href: '#clients' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul className="flex items-center space-x-6">
      {navItems.map((item) => (
        <li key={item.name}>
          <button
            onClick={() => scrollToSection(item.href)}
            className="text-sm font-medium transition-colors duration-200 hover:text-primary text-foreground"
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
} 