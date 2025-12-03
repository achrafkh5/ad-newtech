# 🚀 Quick Start Guide - Services Page

## Run the Project

```bash
npm run dev
```

Then open: **http://localhost:3000/services**

---

## 📍 Navigation

### From Homepage:
1. **Navbar** → Click "Services"
2. **Hero Section** → Click "Our Work" button

### Direct Access:
- `/services` route

---

## 🌐 Language Switching

Click language buttons in navbar:
- **EN** - English (default)
- **FR** - French
- **AR** - Arabic (auto RTL)

---

## 🌙 Theme Toggle

Click moon/sun icon in navbar:
- **☀️** Light Mode (default)
- **🌙** Dark Mode

---

## 📱 Test Responsive Design

### Chrome DevTools:
1. Press `F12`
2. Click device toggle (Ctrl+Shift+M)
3. Test: Mobile, Tablet, Desktop

---

## 🎨 Key Features

✅ 6 Service Cards  
✅ 4 Detailed Service Sections  
✅ 6 Technology Categories (30+ badges)  
✅ Multilanguage (EN/FR/AR)  
✅ RTL Support for Arabic  
✅ Dark/Light Mode  
✅ Fully Responsive  
✅ Smooth Animations  

---

## 📂 File Locations

### Main Page:
`app/services/page.js`

### Components:
- `components/services/ServiceCard.js`
- `components/services/ServiceDetail.js`
- `components/services/TechBadge.js`
- `components/services/SectionHeader.js`

### Translations:
- `locales/en.json`
- `locales/fr.json`
- `locales/ar.json`

### Shared:
- `components/Navbar.js`
- `components/Footer.js`

---

## 🎯 Translation Keys

Access any text via:
```javascript
t('servicesPage.header.title')
t('servicesPage.serviceCards.website.title')
t('servicesPage.details.mobile.features')
```

---

## 🛠️ Customization

### Add a Service:
1. Update all 3 locale files
2. Add to `serviceCards` array in `app/services/page.js`

### Change Colors:
Edit Tailwind classes or `app/globals.css`

### Add Technology:
Update `technologies` object in `app/services/page.js`

---

## ✅ All Requirements Met

✅ Multilanguage support  
✅ Arabic RTL auto-switch  
✅ Same i18n system as homepage  
✅ Same navbar and footer  
✅ Language switcher  
✅ Dark/Light mode toggle  
✅ Soft Natural Tech design  
✅ Color palette matching  
✅ Rounded, organic UI  
✅ Soft shadows  
✅ Clean fonts  
✅ 6 services in grid  
✅ 4 detailed sections  
✅ Technologies grid  
✅ CTA section  
✅ Responsive design  
✅ Clean, reusable code  

---

**Ready to go! 🎉**
