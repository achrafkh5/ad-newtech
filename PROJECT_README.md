# AD-Newtech Homepage

A modern, multilingual Next.js website with TailwindCSS featuring a "Soft Natural Tech" design aesthetic.

## ✨ Features

- 🌍 **Multilanguage Support**: English, French, and Arabic
- 🔄 **RTL Support**: Automatic right-to-left layout for Arabic
- 🌓 **Dark/Light Mode**: Smooth theme switching
- 🎨 **Soft Natural Tech Design**: Calming green color palette with organic shapes
- 📱 **Fully Responsive**: Mobile, tablet, and desktop optimized
- ⚡ **Built with Next.js 16**: Latest features and performance
- 🎭 **TailwindCSS**: Utility-first styling

## 🎨 Color Palette

### Light Mode
- **Primary**: `#2D6A4F` (Deep natural green)
- **Secondary**: `#CAD2C5` (Soft sage)
- **Accent**: `#FFB703` (Warm amber)
- **Background**: `#F0F5F1` (Soft white-green)

### Dark Mode
- **Background**: `#1A1D1A` (Very dark earthy green)
- **Text**: Soft greys
- **Accent colors remain the same**

## 🏗️ Project Structure

```
newtech/
├── app/
│   ├── globals.css          # Global styles with custom theme
│   ├── layout.js            # Root layout with providers
│   └── page.js              # Homepage
├── components/
│   ├── Navbar.js            # Navigation with language/theme switchers
│   ├── Hero.js              # Hero section with CTA
│   ├── Services.js          # Services cards
│   ├── Portfolio.js         # Projects showcase
│   ├── HowWeWork.js         # Process steps
│   └── Footer.js            # Footer with contact info
├── context/
│   ├── LanguageContext.js   # i18n state management
│   └── ThemeContext.js      # Dark mode state management
├── locales/
│   ├── en.json              # English translations
│   ├── fr.json              # French translations
│   └── ar.json              # Arabic translations
└── package.json
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Language System

The website uses a custom Context API-based i18n system. To use translations in any component:

```javascript
import { useLanguage } from '@/context/LanguageContext';

function MyComponent() {
  const { t, language, changeLanguage } = useLanguage();
  
  return <h1>{t('hero.headline')}</h1>;
}
```

### Available Languages
- `en` - English (default)
- `fr` - French
- `ar` - Arabic (RTL)

## 🎭 Theme System

Dark mode is implemented using TailwindCSS's dark mode with Context API:

```javascript
import { useTheme } from '@/context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
}
```

## 📱 Sections

1. **Navbar**: Sticky navigation with language switcher (EN/FR/AR) and dark mode toggle
2. **Hero**: Eye-catching hero section with headline and CTAs
3. **Services**: Four service cards with hover animations
4. **Portfolio**: Recent projects showcase
5. **How We Work**: Four-step process visualization
6. **Footer**: Contact information and social links

## 🛠️ Technologies

- **Next.js 16** - React framework
- **React 19** - UI library
- **TailwindCSS 4** - Utility-first CSS
- **Context API** - State management for theme and language

## 📝 Customization

### Adding a New Language

1. Create a new JSON file in `locales/` (e.g., `de.json`)
2. Copy the structure from `en.json` and translate the values
3. Update `LanguageContext.js` to include the new language:
   ```javascript
   import de from '@/locales/de.json';
   const translations = { en, fr, ar, de };
   ```
4. Add a button in `Navbar.js` for the new language

### Modifying Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: #2D6A4F;
  --secondary: #CAD2C5;
  --accent: #FFB703;
  --light-bg: #F0F5F1;
}
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎯 Design Philosophy

The "Soft Natural Tech" design emphasizes:
- **Organic shapes** over sharp edges
- **Calming colors** inspired by nature
- **Smooth transitions** for a fluid experience
- **Minimalistic approach** for clarity
- **Accessibility** with proper contrast and RTL support

## 📄 License

© 2025 AD-Newtech. All rights reserved.

## 🤝 Contact

- **Email**: contact@ad-newtech.com
- **Phone**: +1 234 567 890
- **WhatsApp**: Available via footer link
