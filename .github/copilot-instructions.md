# Sedna Coffee Website - Development Guide

This is a professional coffee shop website built with Next.js, TypeScript, Tailwind CSS, and modern web technologies.

## Project Overview

Sedna Coffee is a responsive, SEO-optimized website featuring:
- Premium coffee shop branding with custom color palette
- Responsive design for all devices
- Interactive components and smooth navigation
- Professional layout and typography
- Contact form and location information
- Menu showcase with pricing

## Key Technologies

- **Frontend Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS 3.4 with custom coffee-themed colors
- **Build Tool**: Node.js with npm
- **Development**: Modern ES2020+ JavaScript

## Development Workflow

### Starting Development

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Open http://localhost:3000 in browser

### Building for Production

1. Build: `npm run build`
2. Test build: `npm start`
3. Deploy to hosting platform

## Project Structure

- `/src/app/` - Next.js App Router pages and layouts
- `/src/components/` - React components (Header, Hero, Menu, etc.)
- `/src/app/globals.css` - Global styles and Tailwind directives
- `/tailwind.config.ts` - Tailwind CSS customization
- `/public/` - Static assets

## Customization Guide

### Updating Coffee Menu

Edit `src/components/Menu.tsx`:
- Add/remove coffee items
- Update prices and descriptions
- Modify styling as needed

### Changing Colors

Edit `tailwind.config.ts` colors section to customize:
- Primary coffee browns
- Text colors
- Background colors

### Updating Contact Info

Edit `src/components/Contact.tsx`:
- Address and phone number
- Business hours
- Email address
- Social media links

### Adding Images

Place images in `/public/images/` and reference using Next.js Image component for optimization.

## Deployment

The website can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS
- Any Node.js hosting platform

## Performance Considerations

- Images use Next.js Image Optimization
- CSS is minified by Tailwind
- Pages are statically generated when possible
- Responsive design reduces bandwidth needs

## Browser Compatibility

Tested and optimized for:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Common Tasks

### Run Linter

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

### View Production Build

```bash
npm run build && npm run start
```

## Color Palette Reference

- Primary Coffee Brown: #8b4513
- Dark Brown: #3d1c08
- Light Cream: #faf5f0
- Accent: #c4885f

All colors are defined in `tailwind.config.ts` and can be easily customized.

## Notes for Maintenance

- Keep Next.js and dependencies updated
- Test on multiple devices before deploying
- Use environment variables for sensitive data
- Optimize images before adding to project
- Monitor Core Web Vitals for performance

---

For more information about Next.js: https://nextjs.org/docs
For Tailwind CSS docs: https://tailwindcss.com/docs
