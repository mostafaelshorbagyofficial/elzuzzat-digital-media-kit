import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import type { Language } from '../data/presentationData';
import { presentationData } from '../data/presentationData';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenContact }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('promedia');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = lang === 'ar';

  const navItems = [
    { id: 'promedia', num: '01', labelEn: 'ProMedia', labelAr: 'بروميديا' },
    { id: 'overview', num: '02', labelEn: 'Meet ElZuzzat', labelAr: 'عن الزوزات' },
    { id: 'meet', num: '03', labelEn: 'Creator Story', labelAr: 'قصة الثنائي' },
    { id: 'social', num: '04', labelEn: 'Social Presence', labelAr: 'الحضور الرقمي' },
    { id: 'retail', num: '05', labelEn: 'Retail', labelAr: 'التجزئة' },
    { id: 'tourism', num: '06', labelEn: 'Tourism', labelAr: 'السياحة' },
    { id: 'restaurants', num: '07', labelEn: 'Restaurants', labelAr: 'المطاعم' },
    { id: 'opportunities', num: '08', labelEn: 'Opportunities', labelAr: 'فرص الإعلان' },
    { id: 'packages', num: '09', labelEn: 'Packages', labelAr: 'الباقات' },
    { id: 'contact', num: '10', labelEn: 'Contact', labelAr: 'تواصل معنا' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);

      const sectionElements = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm transition-all duration-300">
      {/* Top Presentation Progress Indicator */}
      <div className="w-full h-[3px] bg-slate-100 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#E24A4A] via-[#FF5E5E] to-[#D4AF37] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(226,74,74,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Identity / Co-Branding */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a 
            href="#promedia" 
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => { e.preventDefault(); scrollToSection('promedia'); }}
          >
            {/* ProMedia Official Logo */}
            <div className="h-10 sm:h-11 flex items-center">
              <img 
                src={presentationData.meta.agencyLogo} 
                alt="ProMedia" 
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>

            {/* Subtle Divider */}
            <div className="h-6 w-[1px] bg-slate-200" />

            {/* Creator Duo Tag */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 group-hover:text-[#E24A4A] transition-colors flex items-center gap-1">
                ELZUZZAT
                <span className="text-[10px] text-slate-500 font-normal">الزوزات</span>
              </span>
              <span className="text-[10px] text-[#E24A4A] uppercase tracking-wider font-semibold">
                Official Presentation
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 lg:gap-1.5 text-xs font-medium text-slate-600">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  isActive 
                    ? 'bg-slate-100 text-slate-950 font-bold border border-slate-200/80 shadow-xs' 
                    : 'hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span className={`text-[10px] ${isActive ? 'text-[#E24A4A]' : 'text-slate-400'}`}>
                  {item.num}
                </span>
                <span>{isAr ? item.labelAr : item.labelEn}</span>
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-950 flex items-center gap-1.5 transition-all min-h-[40px] touch-manipulation"
            title={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-[#E24A4A]" />
            <span>{isAr ? 'English' : 'العربية'}</span>
          </button>

          {/* Quick Rate Card CTA */}
          <button
            onClick={onOpenContact}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#E24A4A] to-[#C93B3B] hover:from-[#FF5E5E] hover:to-[#E24A4A] text-white text-xs font-bold shadow-md shadow-[#E24A4A]/25 transition-all min-h-[40px] touch-manipulation hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? 'طلب بطاقة الأسعار' : 'Request Rate Card'}</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          className="xl:hidden bg-white border-b border-slate-200 px-4 py-5 shadow-xl max-h-[80vh] overflow-y-auto animate-fadeIn"
          dir={isAr ? 'rtl' : 'ltr'}
        >
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full px-4 py-3 rounded-xl text-start text-sm flex items-center justify-between transition-colors min-h-[44px] touch-manipulation ${
                    isActive 
                      ? 'bg-[#E24A4A]/10 text-[#E24A4A] font-bold border border-[#E24A4A]/20' 
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-xs text-[#E24A4A] font-mono">{item.num}</span>
                    <span>{isAr ? item.labelAr : item.labelEn}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#E24A4A] to-[#C93B3B] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#E24A4A]/25 min-h-[48px] touch-manipulation"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isAr ? 'طلب بطاقة الأسعار وحجز الحملة' : 'Request Rate Card & Partnerships'}</span>
            </button>

            <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-500">
              <a 
                href={presentationData.meta.socialLinks.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 hover:text-[#E24A4A] py-1"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <span className="text-slate-300">•</span>
              <a 
                href={presentationData.meta.socialLinks.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 hover:text-[#1877F2] py-1"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
