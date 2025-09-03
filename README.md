# Solaris Innovations - Solar Panel Installation Website

A professional, responsive website for a solar panel installation company operating in Telangana, India.

## 🌟 Features

- **Multi-page Website**: Home, Services, About, Calculator, Contact
- **Responsive Design**: Mobile-first approach, works on all devices
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Cost Calculator**: Solar installation cost calculator with PM Solar Scheme subsidies
- **WhatsApp Integration**: Floating WhatsApp button for instant contact
- **Modern UI/UX**: Professional design with smooth animations
- **Contact Forms**: Lead generation forms with validation
- **Service Areas**: Coverage in 15 major cities of Telangana

## 🚀 Tech Stack

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 📱 Service Areas

- Hyderabad
- Karimnagar
- Warangal
- Nizamabad
- Khammam
- Ramagundam
- Mahabubnagar
- Adilabad
- Nalgonda
- Medak
- Rangareddy
- Suryapet
- Miryalaguda
- Siddipet
- Jagtial

## 🏗️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd solar-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer component
│   └── WhatsAppButton.tsx # Floating WhatsApp button
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── Services.tsx    # Services page
│   ├── About.tsx       # About company
│   ├── Calculator.tsx  # Cost calculator
│   └── Contact.tsx     # Contact page
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── App.tsx             # Main app component
└── index.tsx           # Entry point
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary: Solar yellow (#eab308)
- Secondary: Blue (#1e40af)
- Accent: Green (#059669)

### Content
Update the following files to customize content:
- Company information: `src/components/Footer.tsx`
- Contact details: `src/pages/Contact.tsx`
- Service areas: Update city arrays in multiple components
- Phone number: Search and replace `+918019355353` throughout

## 📊 SEO Features

- Meta tags for all pages
- Open Graph tags for social media
- Twitter Card support
- Schema.org structured data
- Location-based meta tags
- Business information markup

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface
- Optimized for all screen sizes

## 🚀 Deployment

### Traditional Hosting
1. Run `npm run build`
2. Upload `build` folder contents to your web server
3. Configure server for SPA routing

### Build for Production
```bash
npm run build
```
The build folder will contain all production-ready files.

## 📞 Contact Information

- **Phone**: +91 80193 55353
- **Email**: info@solarisinovations.in
- **Service Areas**: Hyderabad, Karimnagar, Warangal, Nizamabad, Khammam

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
REACT_APP_COMPANY_NAME=Solaris Innovations
REACT_APP_PHONE_NUMBER=+918019355353
REACT_APP_EMAIL=info@solarisinovations.in
```

### Tailwind Configuration
Customize colors, fonts, and animations in `tailwind.config.js`

## 📈 Performance Optimization

- Lazy loading for images
- Optimized bundle size
- CSS purging with Tailwind
- Responsive images
- Minified production build

## 🔒 Security

- HTTPS enforcement
- XSS protection
- CSRF protection
- Secure form handling
- Input validation

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

For contributions and collaboration, please contact us directly:
- Phone: +91 80193 55353
- Email: info@solarisinovations.in

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Phone: +91 80193 55353
- WhatsApp: +91 80193 55353

---

**Solaris Innovations** - Powering the future with solar energy! ☀️
