import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Alternative for Vercel deployment issues: import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import News from './pages/News';
import Article from './pages/Article';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/calculator" element={<Navigate to="/solar-calculator" replace />} />
            <Route path="/solar-calculator" element={<Calculator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Article />} />
            <Route path="/news" element={<News />} />
            {/* Catch all route for 404 errors - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
        <SpeedInsights />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
