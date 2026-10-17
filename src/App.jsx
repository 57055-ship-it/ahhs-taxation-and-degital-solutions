import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuoteCalculator from './components/QuoteCalculator';
import ServicesSection from './components/ServicesSection';
import ComplianceRoadmap from './components/ComplianceRoadmap';
import WhyUsSection from './components/WhyUsSection';
import IndustriesSection from './components/IndustriesSection';
import LeadershipSection from './components/LeadershipSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import ConsultationModal from './components/ConsultationModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('ahhs_theme') || 'light';
    }
    return 'light';
  });

  const [activeDivision, setActiveDivision] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationPreselectedService, setConsultationPreselectedService] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('ahhs_theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleOpenConsultation = (service = null) => {
    setConsultationPreselectedService(service);
    setIsConsultationModalOpen(true);
  };

  const handleSelectDivisionFromHero = (division) => {
    setActiveDivision(division);
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Header with Navigation & Theme Toggle */}
      <Navbar 
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenConsultation={() => handleOpenConsultation(null)} 
      />

      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <Hero 
          onOpenConsultation={() => handleOpenConsultation(null)} 
          onSelectDivision={handleSelectDivisionFromHero}
        />

        {/* Interactive Quote & Compliance Estimator */}
        <QuoteCalculator onOpenConsultation={() => handleOpenConsultation(null)} />

        {/* Dual Services Matrix */}
        <ServicesSection 
          activeDivision={activeDivision}
          onChangeDivision={setActiveDivision}
          onSelectService={setSelectedService}
        />

        {/* FBR & Corporate Compliance Roadmap */}
        <ComplianceRoadmap onOpenConsultation={() => handleOpenConsultation(null)} />

        {/* The AHHS Advantage (Comparative Matrix) */}
        <WhyUsSection onOpenConsultation={() => handleOpenConsultation(null)} />

        {/* Industry Verticals */}
        <IndustriesSection onOpenConsultation={() => handleOpenConsultation(null)} />

        {/* Leadership & Executive Advisory */}
        <LeadershipSection onOpenConsultation={() => handleOpenConsultation(null)} />

        {/* Verified Client Success Stories */}
        <TestimonialsSection onOpenConsultation={() => handleOpenConsultation(null)} />

        {/* Frequently Asked Questions */}
        <FaqSection onOpenConsultation={() => handleOpenConsultation(null)} />

        {/* Case Consultation & Office Location */}
        <ContactSection />

        {/* Newsletter & Regulatory Alerts */}
        <NewsletterSection />
      </main>

      {/* Comprehensive Corporate Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation(null)} />

      {/* In-Depth Service Specification Modal */}
      {selectedService && (
        <ServiceModal 
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBookConsultation={(srv) => handleOpenConsultation(srv)}
        />
      )}

      {/* Global Case Booking Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        preselectedService={consultationPreselectedService}
      />

      {/* Floating 1-Click WhatsApp Concierge */}
      <FloatingWhatsApp />
    </div>
  );
}
