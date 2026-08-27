import React, { useState, useEffect } from 'react';
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
import MalegaonSEOSection from './components/MalegaonSEOSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import ProductDetailPage from './components/ProductDetailPage';
import SoftwareCompanyMalegaon from './components/SoftwareCompanyMalegaon';
import SoftwareCompanyNashik from './components/SoftwareCompanyNashik';
import WebDevMalegaon from './components/WebDevMalegaon';
import MobileAppMalegaon from './components/MobileAppMalegaon';
import CustomSoftwareMalegaon from './components/CustomSoftwareMalegaon';
import DigitalMarketingMalegaon from './components/DigitalMarketingMalegaon';
import MalegaonLocationPage from './components/MalegaonLocationPage';
import NashikLocationPage from './components/NashikLocationPage';
import DhuleLocationPage from './components/DhuleLocationPage';
import ManmadLocationPage from './components/ManmadLocationPage';
import NandgaonLocationPage from './components/NandgaonLocationPage';
import YeolaLocationPage from './components/YeolaLocationPage';

import LocationSection from './components/LocationSection';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  // Route Handler
  const renderRoute = () => {
    const cleanPath = currentPath.endsWith('/') && currentPath.length > 1 ? currentPath.slice(0, -1) : currentPath;

    switch (cleanPath) {
      case '/software-company-in-malegaon':
        return <SoftwareCompanyMalegaon onOpenContact={handleOpenContact} onNavigate={navigateTo} />;
      case '/software-company-in-nashik':
        return <SoftwareCompanyNashik onOpenContact={handleOpenContact} onNavigate={navigateTo} />;
      case '/web-development-company-in-malegaon':
        return <WebDevMalegaon onOpenContact={handleOpenContact} onNavigate={navigateTo} />;
      case '/mobile-app-development-in-malegaon':
        return <MobileAppMalegaon onOpenContact={handleOpenContact} onNavigate={navigateTo} />;
      case '/custom-software-development-in-malegaon':
        return <CustomSoftwareMalegaon onOpenContact={handleOpenContact} onNavigate={navigateTo} />;
      case '/digital-marketing-company-in-malegaon':
        return <DigitalMarketingMalegaon onOpenContact={handleOpenContact} onNavigate={navigateTo} />;
      case '/locations/malegaon':
        return <MalegaonLocationPage onOpenContact={handleOpenContact} onNavigate={navigateTo} />;
      case '/locations/nashik':
        return <NashikLocationPage onOpenContact={handleOpenContact} onNavigate={navigateTo} />;
      case '/locations/dhule':
        return <DhuleLocationPage onOpenContact={handleOpenContact} onNavigate={navigateTo} />;
      case '/locations/manmad':
        return <ManmadLocationPage onOpenContact={handleOpenContact} onNavigate={navigateTo} />;
      case '/locations/nandgaon':
        return <NandgaonLocationPage onOpenContact={handleOpenContact} onNavigate={navigateTo} />;
      case '/locations/yeola':
        return <YeolaLocationPage onOpenContact={handleOpenContact} onNavigate={navigateTo} />;
      case '/projects/skillverse':
        return <ProductDetailPage product="skillverse" onClose={() => navigateTo('/')} onOpenContact={handleOpenContact} onNavigate={navigateTo} />;
      case '/projects/ib':
        return <ProductDetailPage product="ib" onClose={() => navigateTo('/')} onOpenContact={handleOpenContact} onNavigate={navigateTo} />;
      case '/projects/police-city-management':
        return <ProductDetailPage product="police" onClose={() => navigateTo('/')} onOpenContact={handleOpenContact} onNavigate={navigateTo} />;
      default:
        return (
          <main>
            {/* Haptiq Blue Hero Section */}
            <Hero onOpenContact={() => handleOpenContact()} />

            {/* Regional Footprint Location Section */}
            <LocationSection />

            {/* Industry Capabilities Ticker */}
            <TrustSection />

            {/* Services Showcase (Meta/Google Ads & Web/Mobile App Dev) */}
            <ServicesSection onOpenContact={(svc) => handleOpenContact(svc)} />

            {/* Featured Case Studies & Client Projects */}
            <ProjectsShowcase onOpenContact={(proj) => handleOpenContact(proj)} />

            {/* Clockwise Rotating Orbital Ecosystem */}
            <OrbitalEcosystem onOpenContact={(node) => handleOpenContact(node)} />

            {/* Integrated Platform Section */}
            <FeaturedSolutions onOpenContact={(sol) => handleOpenContact(sol)} />

            {/* How We Work Banner */}
            <HowWeWork onOpenContact={() => handleOpenContact()} />

            {/* Impact Cards Grid */}
            <ImpactSection onOpenContact={() => handleOpenContact()} />

            {/* Who We Help Section */}
            <UseCaseSection onOpenContact={(sec) => handleOpenContact(sec)} />

            {/* Regional Presence Hub (Malegaon & Nashik) */}
            <MalegaonSEOSection onOpenContact={(sec) => handleOpenContact(sec)} onNavigate={navigateTo} />

            {/* Insights & Strategy Cards */}
            <InsightsSection onOpenContact={(art) => handleOpenContact(art)} />

            {/* Final CTA Section */}
            <FinalCTA onOpenContact={() => handleOpenContact()} />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0A2540] text-slate-900 font-sans selection:bg-blue-500/30 selection:text-blue-900 overflow-x-hidden relative cursor-auto">
      {/* Sticky Fixed Navigation */}
      <Navbar
        onOpenContact={(svc) => handleOpenContact(svc)}
        onSelectProduct={(prodId) => handleSelectProduct(prodId)}
        onNavigate={navigateTo}
      />

      {/* Main Render Switch */}
      {renderRoute()}

      {/* Deep Navy Haptiq Footer */}
      <Footer onOpenContact={(svc) => handleOpenContact(svc)} onNavigate={navigateTo} />

      {/* Full-Page Contact Experience */}
      <ContactPage
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        initialService={selectedService}
      />

      {/* Full Product Detail Experience View */}
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
