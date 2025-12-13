# Hotel Parismo - React Website

## 📋 Project Overview
Hotel Parismo is an elegant hotel booking website built with React. The project features a luxurious design with multiple pages, responsive layout, and interactive forms for room booking and newsletter subscription.

## 🎨 Design & Inspiration
**Figma Design:** [Hotel Parismo Community Design](https://www.figma.com/design/694MtxYwO8WjHsYGUlFlMD/Hotel-Parismo--Community-?node-id=0-1&p=f&t=CQDurtt9T13TVlOF-0)

The Figma design served as the primary foundation for the project, providing the visual structure, color schemes, and layout inspiration. While the implementation follows the design closely, some adaptations were made for better React functionality and user experience.

## 🚀 Features

### 📄 Pages
- **Home Page**: Hero section, hotel description, image gallery, room showcase
- **Rooms Page**: Detailed room listings with descriptions and booking options
- **Booking Page**: Complete booking form with validation and confirmation
- **Contact Page**: Contact form with hotel information and location

### 🎯 Key Features
- **Responsive Design**: Fully optimized for all device sizes including iPhone 14 Pro Max (430px width)
- **Interactive Forms**: 
  - Booking form with real-time validation
  - Newsletter subscription in footer
  - Contact form with success messages
- **Navigation**: Smooth routing between pages using React Router
- **Custom Styling**: Consistent design system with specific color palette

## 🎨 Design System

### Colors
- Primary Purple: `#575074`
- Dark Purple: `#24203A`
- Gold Accent: `#FFD700`
- Orange Accent: `#F9A322`
- Background: `#f9f5f0`

### Fonts
- **Qwigley**: Hotel logo and main titles
- **Forum**: Section titles and headings
- **Georgia**: Body text and content

## 📱 Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **iPhone 14 Pro Max**: Special optimization for 430px width
- **Small Mobile**: Below 360px

## 🛠️ Technical Implementation

### File Structure
```
src/
├── components/
│   ├── Header.js
│   └── Header.css
├── pages/
│   ├── HomePage.js
│   ├── HomePage.css
│   ├── RoomsPage.js
│   ├── RoomsPage.css
│   ├── BookPage.js
│   ├── BookPage.css
│   ├── ContactPage.js
│   └── ContactPage.css
├── App.js
├── App.css
└── index.js
```

### Dependencies
- React 18.2.0
- React Router DOM 6.0.0+
- @ant-design/icons (for social media icons)

## 🔧 Key CSS Features in HomePage.css

### 1. **Mobile-First Approach**
- Special optimization for iPhone 14 Pro Max (430px)
- Flexible layouts with flexbox and grid
- Font size adjustments for readability

### 2. **Form Optimization**
- Fixed newsletter form overflow on mobile
- iOS-specific styles with `-webkit-appearance: none`
- Touch-friendly padding for mobile inputs

### 3. **Performance Optimizations**
- Image optimization with `object-fit: cover`
- CSS animations for smooth transitions
- Efficient media queries

## 🚦 Getting Started

### Installation
```bash
npm install
npm start
```

### Build for Production
```bash
npm run build
```

## 📝 Development Notes

### Image Requirements
Place images in `public/images/` with the following structure:
- `Home/` - Home page images
- `Rooms/` - Room photos
- Booking and contact images

### Form Handling
- All forms include validation
- Success messages with auto-dismissal
- Loading states during submission
- Error handling with user feedback

## 🔍 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## 📄 License
This project was created for educational/portfolio purposes.

## 👤 Author
Developed as part of a React learning project.

---
*This implementation was inspired by and based on the Figma design linked above, with adaptations made for React functionality and enhanced user experience.*
