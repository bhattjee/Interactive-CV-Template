# Creative CV Portfolio Website

A modern, animated portfolio website built with Next.js 15, featuring smooth animations and a clean design aesthetic. This project is a clone of a creative CV template, showcasing a professional portfolio for a Creative Director.

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: Radix UI (shadcn/ui)
- **Icons**: Lucide React, Heroicons
- **Other Libraries**:
  - React 19
  - next-themes (theme support)
  - embla-carousel (carousel components)
  - recharts (charts)
  - react-hook-form (forms)
  - zod (validation)
  - better-auth (authentication)
  - drizzle-orm (database ORM)
  - stripe (payments)

## 📁 Project Structure

```
creative-cv-framer-clone/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   └── favicon.ico        # Site favicon
│   ├── components/
│   │   ├── sections/          # Page sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── work-experience-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── software-section.tsx
│   │   │   ├── education-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   └── footer-section.tsx
│   │   ├── ui/                # shadcn/ui components
│   │   └── ErrorReporter.tsx  # Error boundary component
│   ├── lib/
│   │   ├── utils.ts           # Utility functions (cn helper)
│   │   └── hooks/             # Custom React hooks
│   └── visual-edits/          # Visual editing components
├── public/                     # Static assets
├── components.json            # shadcn/ui configuration
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Framer Motion powered animations for engaging user experience
- **Modern UI**: Clean, minimal design with shadcn/ui components
- **Section-based Architecture**: Modular sections for easy customization
- **Logo Marquee**: Animated logo showcase in hero section
- **Project Gallery**: Grid-based project showcase with hover effects
- **Contact Section**: Professional contact information display

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd creative-cv-framer-clone
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Customization

### Personal Information

Update the following files with your own information:

- **Hero Section** (`src/components/sections/hero-section.tsx`):
  - Name and title
  - Profile image
  - Contact email and phone
  - Bio description
  - Logo marquee images

- **About Section** (`src/components/sections/about-section.tsx`):
  - Personal bio
  - Career history

- **Projects Section** (`src/components/sections/projects-section.tsx`):
  - Project titles and descriptions
  - Project images
  - Project links

- **Contact Section** (`src/components/sections/contact-section.tsx`):
  - Email and phone
  - Social media links

### Metadata

Update site metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Creative Director",
  description: "Your portfolio description",
};
```

## 🔒 Security Notes

### ⚠️ Sensitive Data Found

The following sensitive data was identified in the codebase:

1. **Hardcoded Supabase Storage URLs**:
   - Location: Multiple component files
   - Files affected:
     - `src/app/layout.tsx` (line 22)
     - `src/components/sections/hero-section.tsx` (lines 7-11, 69, 82, 114)
     - `src/components/sections/projects-section.tsx` (lines 11, 17, 23, 29)
     - `src/components/sections/software-section.tsx` (lines 25, 31)
   
   **Recommendation**: Move these URLs to environment variables:
   ```typescript
   // .env.local
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   
   // In components
   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
   ```

2. **Personal Contact Information**:
   - Email: becky@smith.com
   - Phone: +1 415 829 8298
   - These are placeholder values and should be updated with your actual information

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Storage URL (if using Supabase for assets)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url

# Add other environment variables as needed
```

**Important**: Never commit `.env.local` to version control. The `.gitignore` file already excludes `.env*` files.

## 📦 Dependencies

Key dependencies include:
- Next.js 15.3.5
- React 19
- Framer Motion 12.23.24
- Tailwind CSS 4
- Radix UI components
- Lucide React icons

See `package.json` for the complete list of dependencies.

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

This project can be deployed to any platform that supports Next.js:
- Netlify
- AWS
- Digital Ocean
- Railway

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and intended for personal/portfolio use.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
