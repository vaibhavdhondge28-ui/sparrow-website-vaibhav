import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import ServicesSection from './components/ServicesSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import OrbitalEcosystem from './components/OrbitalEcosystem';
import FeaturedSolutions from './components/FeaturedSolutions';
import HowWeWork from './components/HowWeWork';
import ImpactSection from './components/ImpactSection';
import UseCaseSection from './components/UseCaseSection';
import InsightsSection from './components/InsightsSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import ProductDetailPage from './components/ProductDetailPage';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenContact = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleSelectProduct = (productId) => {
    setSelectedProduct(productId);
  };

  const handleCloseProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#0A2540] text-slate-900 font-sans selection:bg-blue-500/30 selection:text-blue-900 overflow-x-hidden relative cursor-auto">
      {/* Sticky Fixed Navigation */}
      <Navbar
        onOpenContact={(svc) => handleOpenContact(svc)}
        onSelectProduct={(prodId) => handleSelectProduct(prodId)}
      />

      {/* Main Page Content */}
      <main>
        {/* Haptiq Blue Hero Section */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* Industry Capabilities Ticker */}
        <TrustSection />

        {/* Services Showcase (Meta/Google Ads & Web/Mobile App Dev) */}
        <ServicesSection onOpenContact={(svc) => handleOpenContact(svc)} />

        {/* Featured Case Studies & Client Projects (SkillVerse, IB Boutique, Police City Management) */}
        <ProjectsShowcase onOpenContact={(proj) => handleOpenContact(proj)} />

        {/* Clockwise Rotating Orbital Ecosystem (Matching Haptiq Screenshot) */}
        <OrbitalEcosystem onOpenContact={(node) => handleOpenContact(node)} />

        {/* Integrated Platform Section */}
        <FeaturedSolutions onOpenContact={(sol) => handleOpenContact(sol)} />

        {/* How We Work Vibrant Blue Banner */}
        <HowWeWork onOpenContact={() => handleOpenContact()} />

        {/* Impact Cards Grid */}
        <ImpactSection onOpenContact={() => handleOpenContact()} />

        {/* Who We Help Section */}
        <UseCaseSection onOpenContact={(sec) => handleOpenContact(sec)} />

        {/* Insights & Strategy Cards */}
        <InsightsSection onOpenContact={(art) => handleOpenContact(art)} />

        {/* Final CTA Section */}
        <FinalCTA onOpenContact={() => handleOpenContact()} />
      </main>

      {/* Deep Navy Haptiq Footer */}
      <Footer onOpenContact={(svc) => handleOpenContact(svc)} />

      {/* Full-Page Contact Experience */}
      <ContactPage
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        initialService={selectedService}
      />

      {/* Full Product Detail Experience View (Matching haptiq.com/products/orion EXACTLY) */}
      {selectedProduct && (
        <ProductDetailPage
          product={selectedProduct}
          onClose={handleCloseProductDetail}
          onOpenContact={(svc) => {
            handleCloseProductDetail();
            handleOpenContact(svc);
          }}
        />
      )}
    </div>
  );
}
