# Timeless Sourcing - Garments Sourcing Website

A professional static website for a garments sourcing and supplier business (buying house) built with Next.js 14+, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Professional Design**: Modern, responsive design suitable for B2B clients
- **Static Export**: Optimized for static hosting with `output: 'export'`
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Performance**: Fast loading times with optimized images and animations
- **Mobile Responsive**: Touch-friendly navigation and responsive layouts
- **Accessibility**: WCAG compliant design with proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Static export (`output: 'export'`)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom CSS variables
│   ├── layout.tsx           # Root layout with Header
│   └── page.tsx             # Homepage with all sections
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── sections/            # Main page sections
│   │   ├── Hero.tsx
│   │   ├── AboutUs.tsx
│   │   ├── OurServices.tsx
│   │   ├── ProductCategories.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ClientsPartners.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── common/              # Reusable components
│       ├── Header.tsx
│       ├── Navigation.tsx
│       └── SectionContainer.tsx
├── data/                    # JSON data files
│   ├── company.json
│   ├── services.json
│   ├── products.json
│   ├── testimonials.json
│   ├── clients.json
│   └── contact.json
├── types/                   # TypeScript interfaces
│   └── index.ts
└── lib/                     # Utility functions
    └── utils.ts
```

## 🎨 Design System

### Color Palette
- **Primary**: Professional Blue (hsl(220 70% 50%))
- **Secondary**: Trust Green (hsl(160 60% 45%))
- **Accent**: Warm Orange (hsl(25 95% 55%))
- **Neutral**: Light, Medium, and Dark grays

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: Regular, Medium, Semibold, Bold
- **Responsive**: Fluid typography scaling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd timeless-sourcing-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

1. **Build the static site**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run start
   ```

3. **Export static files**
   ```bash
   npm run export
   ```

The static files will be generated in the `out/` directory, ready for deployment to any static hosting service.

## 📝 Content Management

### Updating Content

The website content is managed through JSON files in the `src/data/` directory:

- **`company.json`**: Company information and social media links
- **`services.json`**: Services offered with features and descriptions
- **`products.json`**: Product categories and specifications
- **`testimonials.json`**: Client testimonials and reviews
- **`clients.json`**: Client and partner information
- **`contact.json`**: Contact details and office locations

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation in `src/components/common/Navigation.tsx`

## 🎯 SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Business information for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Colors
Update the color scheme in `src/app/globals.css`:
```css
:root {
  --primary: 220 70% 50%;        /* Professional Blue */
  --secondary: 160 60% 45%;      /* Trust Green */
  --accent: 25 95% 55%;          /* Warm Orange */
  /* ... */
}
```

### Animations
Customize animations in `tailwind.config.ts`:
```typescript
keyframes: {
  "fade-in": {
    "0%": { opacity: "0", transform: "translateY(20px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  // ...
}
```

## 🚀 Deployment

### Static Hosting
The website is optimized for static hosting services:

- **Vercel**: Automatic deployment from Git
- **Netlify**: Drag and drop deployment
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3**: Scalable cloud hosting

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Static export
npm run export
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Development

### Code Quality
- **TypeScript**: Type safety throughout the application
- **ESLint**: Code linting and formatting
- **Prettier**: Consistent code formatting

### Component Structure
Each section component follows a consistent pattern:
```typescript
'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/components/common/SectionContainer';

export default function SectionName() {
  return (
    <SectionContainer id="section-id" background="light">
      {/* Content */}
    </SectionContainer>
  );
}
```

## 📞 Support

For questions or support, please contact:
- **Email**: info@timelesssourcing.com
- **Phone**: +880 2 9876 5432

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Timeless Sourcing** - Your Trusted Garments Sourcing Partner
