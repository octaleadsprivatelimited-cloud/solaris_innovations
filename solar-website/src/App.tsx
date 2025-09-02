import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Alternative for Vercel deployment issues: import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <Router>
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
            {/* Catch all route for 404 errors - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
