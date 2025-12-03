# 🌓 Theme System - TailwindCSS Dark Mode

## Overview

The theme system now supports **three modes** following TailwindCSS best practices:
- ☀️ **Light Mode** - Force light theme
- 🌙 **Dark Mode** - Force dark theme  
- 💻 **System Mode** - Follow OS preference (default)

---

## How It Works

### TailwindCSS Configuration

TailwindCSS uses the **`class` strategy** for dark mode. The system adds/removes the `dark` class on the `<html>` element:

```html
<!-- Light mode -->
<html class="light">

<!-- Dark mode -->
<html class="dark">
```

### Theme Context (`context/ThemeContext.js`)

#### State Management
- Stores theme preference: `'light'`, `'dark'`, or `'system'`
- Persists to `localStorage`
- Default: `'system'`

#### System Preference Detection
When `theme === 'system'`:
```javascript
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
  ? 'dark' 
  : 'light';
```

#### Auto-Updates
Listens for OS theme changes:
```javascript
mediaQuery.addEventListener('change', handleChange);
```

---

## Theme Switcher (Navbar)

### Three Buttons
Each button sets a specific mode:

```javascript
setThemeMode('light')   // ☀️ Always light
setThemeMode('dark')    // 🌙 Always dark
setThemeMode('system')  // 💻 Follow OS
```

### Visual Indicators
- Active mode: Green background with white icon
- Inactive modes: Transparent with hover effect
- Icons:
  - ☀️ Sun icon for Light
  - 🌙 Moon icon for Dark
  - 💻 Monitor icon for System

---

## Usage in Components

### Dark Mode Classes
Use TailwindCSS `dark:` prefix:

```jsx
<div className="bg-white dark:bg-[#1A1D1A]">
  <h1 className="text-black dark:text-white">Hello</h1>
</div>
```

### Access Theme State
```javascript
import { useTheme } from '@/context/ThemeContext';

function MyComponent() {
  const { theme, setThemeMode } = useTheme();
  
  return (
    <div>
      Current: {theme} {/* 'light', 'dark', or 'system' */}
      <button onClick={() => setThemeMode('dark')}>Dark</button>
    </div>
  );
}
```

---

## User Experience Flow

### Default Behavior (System Mode)
1. User loads site for first time
2. Theme defaults to `'system'`
3. System checks OS preference
4. Applies light or dark automatically
5. Updates if user changes OS theme

### Manual Selection
1. User clicks Light/Dark button
2. Theme locks to selected mode
3. Ignores OS changes
4. Persists across sessions

### Return to System
1. User clicks System button
2. Removes manual override
3. Returns to OS preference
4. Resumes auto-updates

---

## Technical Details

### Class Management
```javascript
// Remove previous classes
root.classList.remove('light', 'dark');

// Add appropriate class
if (theme === 'system') {
  const systemTheme = matchMedia.matches ? 'dark' : 'light';
  root.classList.add(systemTheme);
} else {
  root.classList.add(theme);
}
```

### LocalStorage
```javascript
// Save preference
localStorage.setItem('theme', 'system');

// Load preference
const saved = localStorage.getItem('theme') || 'system';
```

### System Listener
```javascript
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

mediaQuery.addEventListener('change', (e) => {
  if (theme === 'system') {
    root.classList.remove('light', 'dark');
    root.classList.add(e.matches ? 'dark' : 'light');
  }
});
```

---

## Color System

### Light Mode Variables
```css
:root {
  --primary: #2D6A4F;
  --secondary: #CAD2C5;
  --accent: #FFB703;
  --background: #F0F5F1;
  --foreground: #1A1D1A;
}
```

### Dark Mode Variables
```css
.dark {
  --background: #1A1D1A;
  --foreground: #E5E7EB;
}
```

### Usage
```css
body {
  background: var(--background);
  color: var(--foreground);
}
```

---

## Benefits

✅ **User Control** - Choose preferred mode  
✅ **Respect OS** - Auto-follow system preference  
✅ **Persistent** - Remembers user choice  
✅ **Responsive** - Updates on OS changes  
✅ **Accessible** - Clear visual indicators  
✅ **Standard** - Follows TailwindCSS best practices  

---

## Testing

### Test Light Mode
1. Click ☀️ Sun button
2. Verify light theme applied
3. Reload page
4. Should remain light

### Test Dark Mode
1. Click 🌙 Moon button
2. Verify dark theme applied
3. Reload page
4. Should remain dark

### Test System Mode
1. Click 💻 Monitor button
2. Should match OS theme
3. Change OS theme
4. Website should update automatically
5. Reload page
6. Should still follow OS

---

## Migration Notes

### What Changed
- ❌ Removed: `toggleTheme()` function
- ✅ Added: `setThemeMode(mode)` function
- ✅ Added: System mode support
- ✅ Added: Three-button switcher in navbar

### Breaking Changes
None for end users - theme preferences will migrate automatically.

---

**Theme system is now fully compliant with TailwindCSS dark mode documentation!** 🎉
