# Seafood by Tortuga - Frontend Specification

## Project Overview
- **Project Name**: Seafood by Tortuga
- **Type**: E-commerce Website (Next.js 14 App Router)
- **Core Functionality**: Premium seafood online store with product catalog, shopping cart, and checkout flow
- **Target Users**: Customers seeking fresh imported and regional seafood

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- React 18

## Color Palette
- **Primary**: Ocean Blue `#0A4D68`
- **Secondary**: Deep Navy `#052F42`
- **Accent**: Coral Orange `#FF6B35`
- **Background**: White `#FFFFFF`
- **Surface**: Light Gray `#F8FAFC`
- **Text Primary**: Dark Slate `#1E293B`
- **Text Secondary**: Slate `#64748B`

## Typography
- **Font Family**: "Plus Jakarta Sans" (headings), "Inter" (body)
- **Headings**: Bold, high contrast
- **Body**: Regular weight, good readability

## Layout Structure

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Page Sections

#### 1. Navigation Bar
- Sticky position
- Dark background (#052F42)
- White text for high contrast
- Logo on left
- Menu items: Home, Shop, About, FAQ, Account, Cart
- Mobile hamburger menu
- Cart icon with item count badge
- Search bar (desktop)

#### 2. Hero Section
- Full-width background image
- Large headline: "Fresh Seafood Delivered To Your Doorstep"
- Subtext: "Premium Imported & Regional Seafood"
- Two CTA buttons: "Shop Now" (primary), "Browse Products" (outline)
- Overlay gradient for text readability

#### 3. Category Grid
- 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Categories: Fish, Prawns, Shellfish, Imported Seafood
- Each card: image, title, hover effect, link
- Hover: scale up, shadow increase

#### 4. Featured Products
- Section title with subtitle
- Product grid: 4 columns (desktop), 2 columns (tablet/mobile)
- Product card: image, name, price, weight, add to cart button
- Lazy loading with skeleton placeholders

#### 5. Why Choose Us
- 4 feature cards in row
- Icons: Fresh Quality, Fast Delivery, Best Prices, Customer Support
- Each with title and description

#### 6. Delivery Information
- Delivery zones and timing
- Contact information
- Background color section

#### 7. Testimonials
- Customer reviews carousel/grid
- Star ratings
- Customer name and location

#### 8. Footer
- 4-column layout
- Company info, Quick Links, Contact, Newsletter
- Social media links
- Copyright

## Components

### UI Components
1. **Button**: Primary, Secondary, Outline variants
2. **Badge**: Status badges for products
3. **Skeleton**: Loading placeholder for products
4. **ProductCard**: Product display with image, info, cart button
5. **ProductGallery**: Image gallery for product page

### Layout Components
1. **Navbar**: Main navigation with mobile menu
2. **Footer**: Site footer
3. **Container**: Max-width wrapper

### Feature Components
1. **HeroSection**: Homepage hero
2. **CategoryGrid**: Category cards
3. **FeaturedProducts**: Product grid
4. **WhyChooseUs**: Features section
5. **DeliveryInfo**: Delivery information
6. **Testimonials**: Customer reviews

## Image Optimization
- Use Next.js `<Image>` component
- Lazy loading by default
- Blur placeholders
- Responsive sizes
- Priority loading for above-fold images

## Accessibility Requirements
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Minimum 4.5:1 color contrast ratio
- Keyboard navigable
- Focus visible states
- Alt text for all images

## Performance Requirements
- Code splitting per route
- Lazy loading components
- Image optimization
- Static generation where possible
- Fast initial page load

## File Structure
```
app/
├── page.tsx (Home page)
├── layout.tsx (Root layout)
├── globals.css
├── shop/
│   └── page.tsx
└── product/
    └── [slug]/
        └── page.tsx

components/
├── layout/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Container.tsx
├── home/
│   ├── HeroSection.tsx
│   ├── CategoryGrid.tsx
│   ├── FeaturedProducts.tsx
│   ├── WhyChooseUs.tsx
│   ├── DeliveryInfo.tsx
│   └── Testimonials.tsx
├── product/
│   ├── ProductCard.tsx
│   └── ProductGallery.tsx
└── ui/
    ├── Button.tsx
    ├── Badge.tsx
    └── Skeleton.tsx
```

## Functionality

### Navigation
- Sticky navbar with smooth scroll
- Mobile menu toggle
- Active state for current page
- Cart icon shows item count

### Products
- Display product information
- Add to cart functionality
- Quantity selection
- Product filtering (shop page)

### Cart
- Cart drawer (optional)
- Add/remove items
- Quantity adjustment
- Total calculation

### Loading States
- Skeleton loaders for products
- Suspense boundaries
- Error boundaries

