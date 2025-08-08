export interface Company {
  name: string;
  tagline: string;
  description: string;
  founded: string;
  employees: string;
  experience: string;
  headquarters: string;
  certifications: string[];
  socialMedia: {
    linkedin: string;
    facebook: string;
    instagram: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Services {
  services: Service[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories: string[];
  minimumOrder: string;
}

export interface Products {
  categories: ProductCategory[];
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  country: string;
  rating: number;
  text: string;
  image: string;
}

export interface Testimonials {
  testimonials: Testimonial[];
}

export interface Client {
  name: string;
  logo: string;
  category: string;
}

export interface Partner {
  name: string;
  logo: string;
  type: string;
}

export interface ClientsPartners {
  clients: Client[];
  partners: Partner[];
}

export interface Office {
  location: string;
  address: string;
  phone: string;
  email: string;
}

export interface Contact {
  headquarters: {
    address: string;
    phone: string;
    email: string;
    workingHours: string;
  };
  offices: Office[];
}

export interface Statistic {
  value: string;
  label: string;
  icon?: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
  statistics: Statistic[];
}

export interface AboutData {
  title: string;
  subtitle: string;
  description: string;
  story: string;
  mission: string;
  vision: string;
  values: string[];
  achievements: Statistic[];
}

export interface WhyChooseUsData {
  title: string;
  subtitle: string;
  benefits: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
  processes: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
} 