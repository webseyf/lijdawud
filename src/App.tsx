import { useState } from 'react';
import type { Language } from './types';
import { SiteHeader } from './components/SiteHeader';
import { MobileNavigation } from './components/MobileNavigation';
import { HeroSection } from './components/HeroSection';
import { QuickMetrics } from './components/QuickMetrics';
import { TikTokPortfolio } from './components/TikTokPortfolio';
import { PackageSection } from './components/PackageSection';
import { CollaborationProcess } from './components/CollaborationProcess';
import { CreatorAbout } from './components/CreatorAbout';
import { BookingForm } from './components/BookingForm';
import { ContactSection } from './components/ContactSection';
import { SiteFooter } from './components/SiteFooter';
import { Toast } from './components/Toast';
import './App.css';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('lij_dawud_lang');
    return saved === 'am' ? 'am' : 'en';
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('brand-integration');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('lij_dawud_lang', lang);
    showToast(lang === 'en' ? 'Language switched to English' : 'ቋንቋ ወደ አማርኛ ተቀይሯል');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackageId(packageId);
    scrollToSection('contact');
    showToast(
      currentLang === 'en'
        ? 'Package selected! Complete your inquiry below.'
        : 'ፓኬጁ ተመርጧል! ቅጹን ከዚህ በታች ይሙሉ'
    );
  };

  return (
    <div className={`app-root lang-${currentLang}`}>
      {/* 1. Sticky Navigation Header */}
      <SiteHeader
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
        onBookClick={() => scrollToSection('contact')}
      />

      {/* 2. Accessible Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onClose={() => setMobileMenuOpen(false)}
        onBookClick={() => {
          setMobileMenuOpen(false);
          scrollToSection('contact');
        }}
      />

      <main id="main-content">
        {/* 3. Hero Section with Real Lij Dawud Photo */}
        <HeroSection
          currentLang={currentLang}
          onWorkWithLijClick={() => scrollToSection('contact')}
          onExploreWorkClick={() => scrollToSection('work')}
        />

        {/* 4. Short & Smart Metrics (Replacing Factual Content Matrix) */}
        <QuickMetrics currentLang={currentLang} />

        {/* 5. Selected Work: 6 Playable TikTok Videos directly */}
        <TikTokPortfolio currentLang={currentLang} />

        {/* 6. Collaboration Packages */}
        <PackageSection
          currentLang={currentLang}
          onSelectPackage={handleSelectPackage}
        />

        {/* 7. Collaboration Process */}
        <CollaborationProcess currentLang={currentLang} />

        {/* 8. Creator About */}
        <CreatorAbout
          currentLang={currentLang}
          onSendBriefClick={() => scrollToSection('contact')}
        />

        {/* 9. Booking & Business Inquiry Form */}
        <BookingForm
          currentLang={currentLang}
          selectedPackageId={selectedPackageId}
          onClearSelectedPackage={() => setSelectedPackageId('brand-integration')}
          onShowToast={showToast}
        />

        {/* 10. Direct Contact Callout Strip */}
        <ContactSection
          currentLang={currentLang}
          onOpenBooking={() => scrollToSection('contact')}
        />
      </main>

      {/* 11. Site Footer */}
      <SiteFooter
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      {/* 12. Accessible Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
