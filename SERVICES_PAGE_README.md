# AD-Newtech Services Page - Documentation

## ✨ Overview

A comprehensive, multilingual services page built with Next.js and TailwindCSS, following the "Soft Natural Tech" design language. Features full RTL support for Arabic, dark/light mode, and smooth animations.

## 🎨 Design Philosophy

The Services page maintains the same soft, natural aesthetic as the homepage:
- **Organic shapes**: Rounded corners, curved backgrounds
- **Calming colors**: Natural greens, soft sage, warm amber
- **Smooth transitions**: All interactions have gentle animations
- **Clean typography**: Inter font for modern readability

## 📋 Page Structure

### 1. **Header Section**
- Large title with organic background shapes
- Compelling subtitle about company value proposition
- Gradient background with blur effects
- Fully responsive layout

### 2. **Services Grid (6 Cards)**
- Website Development
- Mobile App Development
- Desktop Software
- AI Agents & Automation
- Custom Business Tools
- System Integrations

**Features:**
- Rounded cards with soft shadows
- Hover effects (scale + shadow)
- Staggered animation delays
- Icon illustrations for each service

### 3. **Service Detail Sections (4 Detailed Services)**
Each service has an alternating layout section:
- Illustration on one side, content on other
- Title, description, and feature list
- Checkmark bullets for features
- Alternates left/right for visual variety

**Detailed Services:**
- Website Development (6 features)
- Mobile App Development (6 features)
- Desktop Software (6 features)
- AI & Automation (6 features)

### 4. **Technologies Section**
Organized by category with pill-shaped badges:
- **Frontend**: React, Next.js, Vue.js, TailwindCSS, TypeScript
- **Backend**: Node.js, Python, Django, FastAPI, Express
- **Mobile**: Flutter, React Native, Swift, Kotlin
- **AI & ML**: TensorFlow, PyTorch, OpenAI, LangChain, Hugging Face
- **Database**: PostgreSQL, MongoDB, Redis, MySQL
- **Cloud**: AWS, Azure, Google Cloud, Docker, Kubernetes

### 5. **CTA Section**
- Eye-catching gradient background
- Large call-to-action button
- Organic shapes for depth
- "Let's Build Your Project" message

## 🌐 Multilanguage Support

All content is fully translated in three languages:

### English (EN)
- Primary language
- LTR layout
- Professional tone

### French (FR)
- Complete translations
- LTR layout
- Maintains professional tone

### Arabic (AR)
- Native Arabic translations
- **Automatic RTL layout**
- Right-aligned text
- Proper Arabic typography

## 🎯 Components Created

### Reusable Components (`/components/services/`)

#### 1. **ServiceCard.js**
```javascript
// Props: icon, title, description, delay
// Features: Hover animation, gradient backgrounds, responsive
```

#### 2. **ServiceDetail.js**
```javascript
// Props: title, description, features, imagePosition, index
// Features: Alternating layouts, feature lists, illustrations
```

#### 3. **TechBadge.js**
```javascript
// Props: name, category
// Features: Pill-shaped, gradient, hover effects, animated dot
```

#### 4. **SectionHeader.js**
```javascript
// Props: title, subtitle
// Features: Centered, large typography, optional subtitle
```

## 🔄 Navigation Integration

### Updated Components:
1. **Navbar** - Added navigation links:
   - Home link
   - Services link
   - Mobile responsive

2. **Hero** - Added services page link:
   - "Our Work" button now links to `/services`
   - Smooth transition

## 🎨 Color System

### Light Mode
```css
Primary: #2D6A4F (Deep green)
Secondary: #CAD2C5 (Soft sage)
Accent: #FFB703 (Warm amber)
Background: #F0F5F1 (Soft white-green)
Text: #1A1D1A (Dark)
```

### Dark Mode
```css
Background: #1A1D1A (Earthy dark)
Card Background: #1A1D1A (Same dark)
Primary: #2D6A4F (Consistent)
Accent: #FFB703 (Consistent)
Text: #FFFFFF (White)
Secondary Text: #E5E7EB (Light grey)
```

## 📱 Responsive Design

### Breakpoints:
- **Mobile**: < 768px
  - Single column layout
  - Stacked cards
  - Full-width sections

- **Tablet**: 768px - 1024px
  - 2-column grid for service cards
  - Alternating detail layouts

- **Desktop**: > 1024px
  - 3-column grid for service cards
  - Full alternating layouts
  - Maximum 7xl container width

## 🌙 Dark Mode

Automatically switches based on user preference:
- Context API manages state
- LocalStorage persists choice
- Smooth transitions (300ms)
- All components support dark variants

## 🔄 RTL Support (Arabic)

Automatic direction switching:
- `dir="rtl"` applied to `<html>` when Arabic selected
- All layouts automatically flip
- Text alignment adjusted
- Icons and badges remain consistent

## 📂 File Structure

```
app/
  services/
    page.js                    # Main services page

components/
  services/
    ServiceCard.js             # Individual service card
    ServiceDetail.js           # Detailed service section
    TechBadge.js              # Technology badge
    SectionHeader.js          # Section title component
  Navbar.js                   # Updated with navigation
  Hero.js                     # Updated with services link
  Footer.js                   # Reused from homepage

locales/
  en.json                     # English translations
  fr.json                     # French translations
  ar.json                     # Arabic translations
```

## 🚀 Translation Keys

### Services Page Keys:
```javascript
servicesPage.header.title
servicesPage.header.subtitle
servicesPage.serviceCards.[service].title
servicesPage.serviceCards.[service].description
servicesPage.details.[service].title
servicesPage.details.[service].description
servicesPage.details.[service].features[]
servicesPage.technologies.title
servicesPage.technologies.subtitle
servicesPage.technologies.[category]
servicesPage.cta.title
servicesPage.cta.subtitle
servicesPage.cta.button
```

## 🎭 Animations & Transitions

### Hover Effects:
- **Cards**: Scale + shadow enhancement
- **Badges**: Scale + pulse animation
- **Buttons**: Scale + shadow

### Stagger Animations:
- Service cards animate with delays (100ms increments)
- Creates smooth entrance effect

### Background Shapes:
- Organic blur effects
- Absolute positioning
- Layered for depth

## ✅ Features Checklist

- ✅ Multilingual (EN/FR/AR)
- ✅ RTL support for Arabic
- ✅ Dark/Light mode
- ✅ 6 service cards
- ✅ 4 detailed service sections
- ✅ Technologies section (6 categories)
- ✅ CTA section
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Navigation integration
- ✅ SEO-friendly structure
- ✅ Accessible markup

## 🎯 Usage

### Access the page:
```
http://localhost:3000/services
```

### Navigate from homepage:
1. Click "Services" in navbar
2. Click "Our Work" button in hero section

### Switch languages:
Use the EN/FR/AR buttons in the navbar

### Toggle dark mode:
Click the moon/sun icon in the navbar

## 🔧 Customization

### Add a new service:
1. Add translation to all three locale files
2. Add to `serviceCards` array in `page.js`
3. Create icon SVG
4. Optionally add to `serviceDetails` array

### Modify colors:
Edit the color values in component className props or add to `globals.css`

### Add technologies:
Update the `technologies` object in `app/services/page.js`

## 📊 Performance

- **Code splitting**: Each page loads independently
- **Lazy loading**: Images and icons load on demand
- **Optimized CSS**: TailwindCSS purges unused styles
- **Smooth animations**: GPU-accelerated transforms

## 🌟 Best Practices

1. All text comes from translation files
2. Components are reusable
3. Consistent design system
4. Semantic HTML
5. Accessible ARIA labels
6. Mobile-first approach

---

**Built with** ❤️ **using Next.js 16 + TailwindCSS 4**
