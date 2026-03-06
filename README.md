# seafood-by-tortuga

# Seafood by Tortuga - Next.js Frontend

A modern, production-ready e-commerce frontend for Seafood by Tortuga, built with Next.js 14, Tailwind CSS, and TypeScript.

## Features

- **Fast Loading**: Optimized with Next.js Image component, lazy loading, and code splitting
- **Mobile-First**: Fully responsive design with mobile hamburger menu
- **Accessible**: WCAG compliant with semantic HTML, ARIA labels, and keyboard navigation
- **SEO Optimized**: Proper meta tags and structure
- **Clean Architecture**: Reusable components organized by feature

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- React 18

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Setup

The project is ready to run. Make sure you have:

1. Node.js installed (https://nodejs.org/)
2. Run `npm install` to install all dependencies
3. Run `npm run dev` to start the development server
4. Open http://localhost:3000 in your browser

## Project Structure

```
seafood-by-tortuga/
├── app/
│   ├── globals.css       # Global styles and Tailwind
│   ├── layout.tsx        # Root layout with Navbar/Footer
│   └── page.tsx          # Home page
├── components/
│   ├── home/             # Home page sections
│   │   ├── HeroSection.tsx
│   │   ├── CategoryGrid.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── DeliveryInfo.tsx
│   │   └── Testimonials.tsx
│   ├── layout/           # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── product/          # Product components
│   │   └── ProductCard.tsx
│   └── ui/               # Reusable UI components
│       └── Skeleton.tsx
├── public/
│   └── images/           # Static images (add your images here)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Adding Images

Place your product and hero images in the `public/images/` folder:

- `hero-seafood.jpg` - Hero section background
- `logo.png` - Site logo
- `category-fish.jpg` - Fish category
- `category-prawns.jpg` - Prawns category
- `category-shellfish.jpg` - Shellfish category
- `category-imported.jpg` - Imported seafood category
- `product-salmon.jpg` - Salmon product
- `product-prawns.jpg` - Prawns product
- (add more product images as needed)

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

- Primary: Ocean Blue `#0A4D68`
- Secondary: Deep Navy `#052F42`
- Accent: Coral Orange `#FF6B35`

### Adding Products

Edit `components/home/FeaturedProducts.tsx` to add or modify products.

## License

Private - All rights reserved

