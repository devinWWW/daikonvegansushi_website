# Daikon Vegan Sushi Website

A modern, responsive website for Daikon Vegan Sushi & More, built with
React, TypeScript, and Tailwind CSS v4.

## 🌱 About

This website showcases Daikon Vegan Sushi's 100% plant-based Japanese and
Thai cuisine. Built with a "Nature Distilled" aesthetic, the site
emphasizes the restaurant's mission of "Peace on a Plate" and features
their award-winning Yellow Magic Roll, recognized by PETA as one of the
Top 10 Vegan Sushi Rolls in the nation.

## ✨ Features

- **TypeScript**: Full type safety with strict mode enabled
- **Fully Responsive Design**: Mobile-first approach with breakpoints at
768px (tablet) and 1024px (desktop)
- **Modern UI/UX**: Clean, elegant design with smooth animations and transitions
- **Interactive Menu**: Real-time search and category filtering
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Optimized for Core Web Vitals
- **Code Quality**: ESLint configured with TypeScript support, zero errors/warnings

## 🎨 Design System

### Color Palette ("Nature Distilled" Theme)

- **Primary Green**: `#2D5016` - Forest green for headings and accents
- **Secondary Coral**: `#E07856` - Warm coral for CTAs and highlights
- **Accent Gold**: `#D4AF37` - Gold accents for special elements
- **Neutral Cream**: `#FEF7ED` - Background color
- **Dark Green**: `#1A3409` - Body text

### Typography

- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

## 📁 Project Structure

```text
daikon_landing/
├── src/
│   ├── components/                # Reusable React components
│   │   ├── Hero.tsx
│   │   ├── Story.tsx
│   │   ├── MenuHighlights.tsx
│   │   ├── Locations.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── pages/                     # Page components
│   │   ├── Home.tsx
│   │   ├── Menu.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── data/                      # Data files
│   │   └── menuData.ts
│   ├── App.tsx                    # Main app component
│   ├── main.tsx                   # App entry point
│   └── index.css                  # Global styles
├── index.html                     # HTML template 
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS with Tailwind v4
├── eslint.config.js               # ESLint with TypeScript
└── package.json                   # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:

```bash
npm install
```

1. Start the development server:

```bash
npm run dev
```

1. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📄 Pages

### Home Page (`/`)

- **Hero Section**: Full-screen hero with "Peace on a Plate" headline and CTA
- **Story Section**: Chef Mindy Lim's journey with scroll-triggered animations
- **Menu Highlights**: Featured dishes including the Yellow Magic Roll
- **Locations**: Interactive maps and contact information for both locations

### Menu Page (`/menu`)

- Real-time search functionality
- Category filtering (Appetizers, Vegan Sushi Rolls, Vegan Nigiri, Vegan Thai Dishes)
- Card-based layout with dish images, descriptions, and prices
- Fully responsive grid layout

### About Page (`/about`)

- Detailed restaurant story and mission
- Chef Mindy Lim's vision
- Award recognition
- Core values presentation

### Contact Page (`/contact`)

- Two location details with embedded Google Maps
- Contact information (phone, email, address)
- Business hours
- "Get Directions" CTA buttons

## 🏢 Business Information

### Daikon Vegan Sushi & More

- **Address**: 7210 W Lake Mead Blvd, Las Vegas, NV 89128
- **Phone**: (702) 749-3283
- **Email**: <daikonvegan01@gmail.com>

### Basil Vegan Thai & Sushi (Sister Restaurant)

- **Address**: 500 E Windmill Ln #145, Las Vegas, NV 89123
- **Phone**: (702) 357-3837
- **Email**: <basilveganthai01@gmail.com>

## 🏆 Award

**PETA's Top 10 Vegan Sushi Roll** - Yellow Magic Roll

## 🛠️ Technologies Used

- **React 18**: UI framework
- **TypeScript 5**: Type-safe JavaScript
- **Vite 7**: Next-generation build tool and dev server
- **Tailwind CSS v4**: Latest version via @tailwindcss/postcss
- **React Router DOM**: Client-side routing
- **ESLint 9**: Linting with TypeScript support
- **Google Fonts**: Playfair Display & Inter

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (two column layout)
- **Desktop**: > 1024px (multi-column layout)

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- Keyboard navigation support
- Descriptive alt text for images
- Sufficient color contrast
- Touch-friendly interactive elements (44x44px minimum)

## 📊 Performance Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## 📝 License

All rights reserved © 2025 Daikon Vegan Sushi & More