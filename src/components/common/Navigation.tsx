'use client';

import Link from "next/link";

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  // { name: 'Why Choose Us', href: '#why-choose-us' },
  // { name: 'Clients', href: '#clients' },
  { name: 'Contact', href: '/contact' },
];

type NavigationProps = {
  vertical?: boolean;
};

export default function Navigation({ vertical = false }: NavigationProps) {
  return (
    <ul
      className={
        vertical
          ? "flex flex-col space-y-2"
          : "flex items-center space-x-6"
      }
    >
      {navItems.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className="block text-sm font-medium transition-colors duration-200 hover:text-primary text-foreground px-3 py-2 rounded hover:bg-muted"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}