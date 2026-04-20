import React, { useEffect } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import VideoSection from './components/VideoSection';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Team from './components/Team';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import RedBanner from './components/RedBanner';
import Blog from './components/Blog';
import Logos from './components/Logos';
import Footer from './components/Footer';

function App() {
  // Global Reveal on scroll effect
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(r => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <VideoSection />
      <Portfolio />
      <CaseStudies />
      <CTA />
      <Testimonials />
      <Stats />
      <Team />
      <Pricing />
      <FAQ />
      <RedBanner />
      <Blog />
      <Logos />
      <Footer />
    </div>
  );
}

export default App;
